/* =========================================
   Page 2 — Navigation Help
   ========================================= */

const GMAPS_KEY_P2 = 'AIzaSyCHYO3vKxz--j0rxiXPyROLJekx0LPHAkY';

/* ── Module-level state (reset on each page init) ── */
let p2Map = null;
let p2DirService = null;
let p2DirRenderer = null;
let p2KeyPointData = null;
let p2KpLat = null;
let p2KpLng = null;
let p2TurningInfoWindow = null;
let p2TurningMarkers = [];
let p2KpHeading = 0;
let p2DisplayData = null;

/* ── Simulation state ── */
let p2SimActive = false;
let p2SimMarker = null;
let p2SimHeadingLine = null;
let p2SimTargetLine = null;
let p2SimDeviationWedge = null;
let p2SimTrackCoords = null;
let p2SimLat = null;
let p2SimLng = null;
let p2SimHeading = 0;
let p2SimWalkTimer = null;
let p2SimWalkPolyline = null;
let p2SimPickingLoc = false;
let p2SimPickListener = null;

/* ── Ride state ── */
let p2SimRideMode = true;
let p2SimRideTimer = null;
let p2SimRideRoute = null;
let p2SimRidePolyline = null;
let p2SimRideIdx = 0;
/* After ride completes, skip deviation until user starts Walk */
let p2SimSuppressPostRideDeviation = false;

const P2_SIM_WALK_SPEED_DEFAULT = 1.2;
const P2_SIM_WALK_DEST_PROXIMITY_M = 5;
let p2SimArrivedNearWalkDest = false;

/* ── Google Maps ready helper ── */
function waitForGoogleMaps(fn) {
  if (window._gMapsReady) { fn(); }
  else {
    window._gMapsReadyQueue = window._gMapsReadyQueue || [];
    window._gMapsReadyQueue.push(fn);
  }
}

/* ── HTML ── */
function renderPage2() {
  return `
    <div class="nav-help-page">

      <!-- App Bar -->
      <div class="app-bar">
        <div class="app-bar-back" id="p2-back">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </div>
        <div class="app-bar-title">Navigation Help</div>
        <div class="app-bar-actions">
          <div class="app-bar-icon-btn" id="improve-nav-btn" title="Improve Navigation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="map-section">
        <div class="map-section-title">Reference</div>
        <div class="p2-map-wrap" id="p2-map-wrap">
          <div id="delivery-map">
            <div class="p2-map-loading" id="p2-map-loading">
              <div class="p2-spinner"></div>
            </div>
          </div>
          <button class="p2-map-expand-btn" id="p2-map-expand-btn" onclick="p2OpenMapOverlay()" title="Expand map">
            <svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
          </button>
          <div class="p2-map-tap-hint" id="p2-map-tap-hint">
            📍 Tap on the map to set your current location
          </div>
          <div class="p2-sim-toast is-hidden" id="p2-sim-toast">
            <div class="p2-sim-toast-icon" id="p2-sim-toast-icon"></div>
            <div class="p2-sim-toast-body">
              <div class="p2-sim-toast-title" id="p2-sim-toast-title"></div>
              <div class="p2-sim-toast-sub" id="p2-sim-toast-sub"></div>
            </div>
            <button class="p2-sim-toast-close" id="p2-sim-toast-close" onclick="p2SimCloseToast()" title="Close">✕</button>
          </div>
        </div>
        <!-- Map toolbar: map type + in-app walking nav -->
        <div class="p2-map-toolbar">
          <div class="p2-map-toolbar-types">
            <button type="button" class="p2-map-type-btn active" id="p2-btn-roadmap" onclick="p2SetMapType('roadmap')">🗺 Street</button>
            <button type="button" class="p2-map-type-btn" id="p2-btn-hybrid" onclick="p2SetMapType('hybrid')">🛰 Satellite</button>
          </div>
          <button type="button" class="p2-walking-nav-btn" id="p2-walking-nav-btn" disabled onclick="p2OnWalkingNavigationClick()">Walking navigation</button>
          <button type="button" class="p2-walking-stop-btn" id="p2-walking-stop-btn" style="display:none" onclick="p2SimStopWalk()">STOP</button>
        </div>
      </div>

      <!-- Location Reference Image Section -->
      <div class="loc-ref-section">
        <div class="loc-ref-header">
          <div class="loc-ref-title">Location Reference</div>
        </div>
        <div class="loc-ref-body" id="loc-ref-body">
          <div class="p2-list-loading">
            <div class="p2-spinner p2-spinner-dark"></div>
            <span>Loading images…</span>
          </div>
        </div>
      </div>

      <!-- Map fullscreen overlay -->
      <div class="p2-map-overlay" id="p2-map-overlay">
        <div class="p2-map-overlay-header">
          <button class="p2-map-overlay-back" onclick="p2CloseMapOverlay()" title="Back">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          </button>
          <div class="p2-map-overlay-title">Route Reference</div>
        </div>
        <div class="p2-map-overlay-body" id="p2-map-overlay-body"></div>
        <!-- Bottom card: Key Point Street View (shown near key point during ride) -->
        <div class="p2-overlay-card is-hidden" id="p2-overlay-kp-card">
          <div class="p2-overlay-card-header">
            <span class="p2-overlay-card-title">📍 Key Point Street View</span>
            <button class="p2-overlay-card-close" onclick="p2CloseOverlayCard('p2-overlay-kp-card')">✕</button>
          </div>
          <div class="p2-overlay-card-hint">Go in this direction</div>
          <div class="p2-overlay-card-img" id="p2-overlay-kp-img"></div>
        </div>
        <!-- Bottom card: Buyer photos (shown near destination during walk) -->
        <div class="p2-overlay-card is-hidden" id="p2-overlay-buyer-card">
          <div class="p2-overlay-card-header">
            <span class="p2-overlay-card-title">📷 Photos of Past Buyer Homes</span>
            <button class="p2-overlay-card-close" onclick="p2CloseOverlayCard('p2-overlay-buyer-card')">✕</button>
          </div>
          <div class="p2-overlay-card-imgs" id="p2-overlay-buyer-imgs"></div>
        </div>
      </div>

    </div>`;
}

/* ── Data loading ── */
async function loadPage2Data(dataUrl, displayDataUrl) {
  let keyPointData = null;
  let displayData = null;

  if (dataUrl) {
    try {
      const resp = await fetch(dataUrl);
      if (resp.ok) {
        const json = await resp.json();
        if (json.retcode === 0 && json.data) keyPointData = json.data;
      }
    } catch (e) {
      console.warn('[Page2] Failed to load data:', e);
    }
  }

  if (displayDataUrl) {
    try {
      const resp = await fetch(displayDataUrl);
      if (resp.ok) {
        const json = await resp.json();
        if (json.retcode === 0 && json.data) displayData = json.data;
      }
    } catch (e) {
      console.warn('[Page2] Failed to load display_data:', e);
    }
  }

  return { keyPointData, displayData };
}

/* ── Init ── */
function initPage2() {
  /* Reset module state */
  p2TurningInfoWindow?.close();
  p2TurningInfoWindow = null;
  p2Map = null;
  p2DirService = null;
  p2DirRenderer = null;
  p2KeyPointData = null;
  p2KpLat = null;
  p2KpLng = null;
  p2KpHeading = 0;
  p2DisplayData = null;
  p2MapOverlayOpen = false;

  /* Reset simulation */
  p2SimCleanupMap();
  p2SimActive = false;
  p2SimLat = null;
  p2SimLng = null;
  p2SimHeading = 0;
  p2SimTrackCoords = null;
  p2SimPickingLoc = false;
  p2SimRideMode = true;
  if (p2SimPickListener) { p2SimPickListener.remove(); p2SimPickListener = null; }
  if (p2SimWalkTimer) { clearInterval(p2SimWalkTimer); p2SimWalkTimer = null; }
  if (p2SimRideTimer) { clearInterval(p2SimRideTimer); p2SimRideTimer = null; }
  if (p2SimRidePolyline) { p2SimRidePolyline.setMap(null); p2SimRidePolyline = null; }
  p2SimRideRoute = null;
  p2SimRideIdx = 0;
  p2SimSuppressPostRideDeviation = false;
  p2SimArrivedNearWalkDest = false;
  p2ResetBuyerPhotosPromotion();
  const simPanel = document.getElementById('sim-panel');
  if (simPanel) { simPanel.style.display = 'none'; simPanel.scrollTop = 0; }
  const p2WalkNavBtn = document.getElementById('p2-walking-nav-btn');
  if (p2WalkNavBtn) p2WalkNavBtn.disabled = true;

  document.getElementById('p2-back')?.addEventListener('click', () => router.goBack());
  document.getElementById('improve-nav-btn')?.addEventListener('click', () =>
    router.navigate('page3', { waypointIndex: 0 })
  );

  /* Create body-level image modal (position:fixed avoids scroll/transform issues) */
  if (!document.getElementById('p2-img-modal')) {
    const modal = document.createElement('div');
    modal.id = 'p2-img-modal';
    modal.className = 'p2-img-modal';
    modal.innerHTML = `
      <div id="p2-img-modal-bd" class="p2-img-modal-bd"></div>
      <div class="p2-img-modal-inner">
        <button id="p2-img-modal-close" class="p2-img-modal-close">✕</button>
        <button id="p2-img-modal-prev" class="p2-img-modal-arrow p2-img-modal-arrow-prev" style="display:none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <img id="p2-img-modal-img" src="" alt="">
        <button id="p2-img-modal-next" class="p2-img-modal-arrow p2-img-modal-arrow-next" style="display:none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 6 15 12 9 18"/></svg>
        </button>
        <div id="p2-img-modal-label" class="p2-img-modal-label"></div>
      </div>`;
    document.body.appendChild(modal);
    document.getElementById('p2-img-modal-bd').addEventListener('click', closeP2ImgModal);
    document.getElementById('p2-img-modal-close').addEventListener('click', closeP2ImgModal);
    document.getElementById('p2-img-modal-prev').addEventListener('click', () => p2ModalGo(-1));
    document.getElementById('p2-img-modal-next').addEventListener('click', () => p2ModalGo(1));
  }

  /* Resolve data URLs: prefer caseKey from router params, then URL ?case= param, then legacy query params */
  const caseKey = (router.params && router.params.caseKey) || getUrlParam('case');
  let dataUrl, displayDataUrl;
  if (caseKey) {
    dataUrl = `data/get_key_point_${caseKey}.json`;
    displayDataUrl = `data/display_info_${caseKey}.json`;
  } else {
    dataUrl = getUrlParam('data');
    displayDataUrl = getUrlParam('display_data');
  }

  if (dataUrl || displayDataUrl) {
    loadPage2Data(dataUrl, displayDataUrl).then(({ keyPointData, displayData }) => {
      p2KeyPointData = keyPointData;
      waitForGoogleMaps(() =>
        requestAnimationFrame(() => setTimeout(() => initDeliveryMap(keyPointData, displayData), 50))
      );
    });
  } else {
    waitForGoogleMaps(() =>
      requestAnimationFrame(() => setTimeout(() => initDeliveryMap(null, null), 50))
    );
  }
}

/* ── Map type toggle ── */
function p2SetMapType(type) {
  if (!p2Map) return;
  p2Map.setMapTypeId(type);
  p2Map.setTilt(type === 'hybrid' ? 45 : 0);
  document.getElementById('p2-btn-roadmap')?.classList.toggle('active', type === 'roadmap');
  document.getElementById('p2-btn-hybrid')?.classList.toggle('active', type === 'hybrid' || type === 'satellite');
}

/* ── Map init ── */
function p2ResolveTurningMarkerHeading(wkp) {
  const h = parseFloat(wkp.heading);
  const hNext = parseFloat(wkp.heading_to_next_point);
  if (Number.isFinite(h)) return h;
  if (Number.isFinite(hNext)) return hNext;
  return 0;
}

function initDeliveryMap(keyPointData, displayData) {
  const container = document.getElementById('delivery-map');
  if (!container || typeof google === 'undefined') return;

  p2TurningInfoWindow?.close();
  p2TurningInfoWindow = null;

  document.getElementById('p2-map-loading')?.remove();

  /* Resolve track coords, key point, destination */
  let trackCoords, keyPoint, destination, kpHeading;

  if (keyPointData?.key_point && keyPointData?.track_from_key_point_to_target?.length) {
    const track = keyPointData.track_from_key_point_to_target;
    const kpLat = parseFloat(keyPointData.key_point.lat);
    const kpLng = parseFloat(keyPointData.key_point.lng);
    const last  = track[track.length - 1];

    keyPoint    = { lat: kpLat, lng: kpLng };
    destination = { lat: parseFloat(last.lat), lng: parseFloat(last.lng) };
    trackCoords = track.map(pt => ({ lat: parseFloat(pt.lat), lng: parseFloat(pt.lng) }));
    kpHeading   = parseFloat(keyPointData.key_point.heading_to_next_point || 0);
  } else {
    const m = APP_DATA.map;
    keyPoint    = { lat: m.keyPoint.lat, lng: m.keyPoint.lng };
    destination = { lat: m.destination.lat, lng: m.destination.lng };
    trackCoords = m.historyRoute.map(([lat, lng]) => ({ lat, lng }));
    kpHeading   = 0;
  }

  /* Store key point coords and data for overlay cards */
  p2KpLat = keyPoint.lat;
  p2KpLng = keyPoint.lng;
  p2KpHeading = kpHeading;
  p2DisplayData = displayData;

  p2Map = new google.maps.Map(container, {
    center: keyPoint,
    zoom: 15,
    mapTypeId: 'roadmap',
    tilt: 0,
    gestureHandling: 'greedy',
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_BOTTOM },
    cameraControl: false,
  });
  window._mapInstance = p2Map;

  p2Map.addListener('click', () => {
    p2TurningInfoWindow?.close();
  });

  /* Directions service */
  p2DirService = new google.maps.DirectionsService();
  p2DirRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    polylineOptions: { strokeColor: '#FF6F00', strokeWeight: 5, strokeOpacity: 0.85 },
  });
  p2DirRenderer.setMap(p2Map);

  /* Track polyline */
  new google.maps.Polyline({
    path: trackCoords,
    strokeColor: '#FF6B00',
    strokeWeight: 5,
    strokeOpacity: 0.95,
    map: p2Map,
  });

  /* Auto-fit to show full track */
  const bounds = new google.maps.LatLngBounds();
  trackCoords.forEach(pt => bounds.extend(pt));
  p2Map.fitBounds(bounds, { top: 36, right: 20, bottom: 48, left: 20 });

  /* Origin dot (first track point) */
  new google.maps.Marker({
    position: trackCoords[0],
    map: p2Map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 7,
      fillColor: '#FF6B00',
      fillOpacity: 1,
      strokeColor: '#fff',
      strokeWeight: 2,
    },
    zIndex: 5,
  });

  /* KeyPoint label marker */
  const kpSvg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="36">` +
    `<rect x="1" y="1" width="78" height="26" rx="6" fill="white" stroke="#1A73E8" stroke-width="2"/>` +
    `<text x="40" y="18" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1A73E8">Key Point</text>` +
    `<polygon points="36,27 40,35 44,27" fill="#1A73E8"/>` +
    `</svg>`
  );
  new google.maps.Marker({
    position: keyPoint,
    map: p2Map,
    icon: {
      url: `data:image/svg+xml;utf8,${kpSvg}`,
      scaledSize: new google.maps.Size(80, 36),
      anchor: new google.maps.Point(40, 36),
    },
    zIndex: 10,
  });

  /* Destination marker */
  const destSvg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="58" height="56">` +
    `<circle cx="29" cy="20" r="17" fill="#1A73E8" stroke="white" stroke-width="3"/>` +
    `<text x="29" y="25" text-anchor="middle" font-family="sans-serif" font-size="15" fill="white" font-weight="bold">D</text>` +
    `<polygon points="23,35 29,45 35,35" fill="#1A73E8"/>` +
    `<rect x="3" y="44" width="52" height="12" rx="4" fill="white" stroke="#1A73E8" stroke-width="1"/>` +
    `<text x="29" y="53" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1A73E8">Destination</text>` +
    `</svg>`
  );
  new google.maps.Marker({
    position: destination,
    map: p2Map,
    icon: {
      url: `data:image/svg+xml;utf8,${destSvg}`,
      scaledSize: new google.maps.Size(58, 56),
      anchor: new google.maps.Point(29, 46),
    },
    zIndex: 10,
  });

  /* Turning-point markers (key_point_in_walk, type === 'turning' only) */
  p2TurningMarkers = [];
  const walkKps = keyPointData?.key_point_in_walk || [];
  const turningIwHtml = '<div class="p2-turning-infowindow">Turning point</div>';
  walkKps.filter(wkp => wkp.type === 'turning').forEach(wkp => {
    const rotation = p2ResolveTurningMarkerHeading(wkp);
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(wkp.lat), lng: parseFloat(wkp.lng) },
      map: p2Map,
      title: 'Turning point',
      icon: {
        path: 'M -2,6 L -2,-2 L -6,-2 L 0,-8 L 6,-2 L 2,-2 L 2,6 Z',
        fillColor: '#FF9800',
        fillOpacity: 0.92,
        strokeColor: '#fff',
        strokeWeight: 1.5,
        scale: 1.15,
        rotation,
      },
      zIndex: 8,
    });
    marker.addListener('click', () => {
      if (!p2TurningInfoWindow) {
        p2TurningInfoWindow = new google.maps.InfoWindow({
          content: turningIwHtml,
          ariaLabel: 'Turning point',
        });
      } else {
        p2TurningInfoWindow.setContent(turningIwHtml);
      }
      p2TurningInfoWindow.open({ map: p2Map, anchor: marker, shouldFocus: false });
    });
    p2TurningMarkers.push(marker);
  });

  /* Init simulation */
  p2InitSimulation();

  /* Render image section */
  renderImageSection(keyPointData, displayData, kpHeading);
}

/* ── Image section ── */
function p2SvUrl(lat, lng, heading, w, h) {
  heading = ((heading % 360) + 360) % 360;
  return `https://maps.googleapis.com/maps/api/streetview?location=${lat},${lng}&heading=${heading}&pitch=5&fov=90&size=${w}x${h}&key=${GMAPS_KEY_P2}`;
}

let p2ModalSlides = null;
let p2ModalIdx = 0;

function openP2ImgModal(src, label, slides, idx) {
  const modal = document.getElementById('p2-img-modal');
  const img   = document.getElementById('p2-img-modal-img');
  const lbl   = document.getElementById('p2-img-modal-label');
  if (!modal || !img) return;
  img.src = src;
  if (lbl) lbl.textContent = label || '';

  p2ModalSlides = (slides && slides.length > 1) ? slides : null;
  p2ModalIdx = idx || 0;
  p2UpdateModalArrows();
  modal.classList.add('open');
}

function closeP2ImgModal() {
  document.getElementById('p2-img-modal')?.classList.remove('open');
  p2ModalSlides = null;
}

function p2ModalGo(delta) {
  if (!p2ModalSlides) return;
  const newIdx = p2ModalIdx + delta;
  if (newIdx < 0 || newIdx >= p2ModalSlides.length) return;
  p2ModalIdx = newIdx;
  const s = p2ModalSlides[p2ModalIdx];
  const img = document.getElementById('p2-img-modal-img');
  const lbl = document.getElementById('p2-img-modal-label');
  if (img) img.src = s.full;
  if (lbl) lbl.textContent = s.label || '';
  p2UpdateModalArrows();
}

function p2UpdateModalArrows() {
  const prev = document.getElementById('p2-img-modal-prev');
  const next = document.getElementById('p2-img-modal-next');
  if (!prev || !next) return;
  if (!p2ModalSlides || p2ModalSlides.length <= 1) {
    prev.style.display = 'none';
    next.style.display = 'none';
    return;
  }
  prev.style.display = p2ModalIdx > 0 ? '' : 'none';
  next.style.display = p2ModalIdx < p2ModalSlides.length - 1 ? '' : 'none';
}

/* Build a swipeable carousel. Counter is top-right overlay inside image. */
function buildCarouselHtml(trackId, slides) {
  const slideHtml = slides.map((s, i) => `
    <div class="car-slide">
      <div class="car-img-wrap" data-full="${s.full || s.src}" data-label="${s.label || ''}">
        <div class="car-img-loader"><div class="p2-spinner"></div></div>
        <img class="car-img" src="${s.src}" alt="${s.label || ''}">
        ${slides.length > 1 ? `<span class="car-counter-overlay">${i + 1} / ${slides.length}</span>` : ''}
        ${s.extra ? `<span class="car-extra-badge">${s.extra}</span>` : ''}
        <span class="car-label">${s.label || ''}</span>
      </div>
    </div>`).join('');

  const arrowsHtml = slides.length > 1 ? `
    <button class="car-arrow car-arrow-prev" data-track="${trackId}" aria-label="Previous">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button class="car-arrow car-arrow-next" data-track="${trackId}" aria-label="Next">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 6 15 12 9 18"/></svg>
    </button>` : '';

  const dotsHtml = slides.length > 1
    ? `<div class="car-dots">${slides.map((_, i) =>
        `<div class="car-dot${i === 0 ? ' active' : ''}" data-i="${i}"></div>`
      ).join('')}</div>`
    : '';

  return `
    <div class="car-wrapper">
      <div class="car-track" id="${trackId}">${slideHtml}</div>
      ${arrowsHtml}
    </div>
    ${dotsHtml}`;
}

/* Attach scroll-sync and click handlers to a rendered carousel */
function initCarousel(trackId) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const category = track.closest('.img-category');
  const wrapper = track.closest('.car-wrapper');
  const dots = category.querySelectorAll('.car-dot');
  const prevBtn = wrapper.querySelector('.car-arrow-prev');
  const nextBtn = wrapper.querySelector('.car-arrow-next');
  let currentIdx = 0;

  /* Image load / error */
  track.querySelectorAll('.car-img').forEach(img => {
    const loader = img.previousElementSibling;
    img.addEventListener('load', () => loader?.classList.add('hidden'));
    img.addEventListener('error', () => {
      if (loader) loader.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
    });
  });

  /* Collect all slide data for modal navigation */
  const slideData = [];
  track.querySelectorAll('.car-img-wrap').forEach(wrap => {
    slideData.push({ full: wrap.dataset.full, label: wrap.dataset.label || '' });
  });

  /* Click to open full-size modal */
  track.querySelectorAll('.car-img-wrap').forEach((wrap, i) => {
    wrap.addEventListener('click', () => {
      if (swipeJustEnded) return;
      if (wrap.dataset.full) openP2ImgModal(wrap.dataset.full, wrap.dataset.label, slideData, i);
    });
  });

  const slides = track.querySelectorAll('.car-slide');
  const total = slides.length;

  function updateArrows() {
    if (prevBtn) prevBtn.classList.toggle('hidden', currentIdx === 0);
    if (nextBtn) nextBtn.classList.toggle('hidden', currentIdx >= total - 1);
  }

  function goToSlide(idx) {
    currentIdx = Math.max(0, Math.min(idx, total - 1));
    const slideW = track.parentElement.clientWidth;
    track.scrollTo({ left: currentIdx * slideW, behavior: 'smooth' });
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIdx));
    updateArrows();
  }

  /* Arrow buttons */
  prevBtn?.addEventListener('click', e => { e.stopPropagation(); goToSlide(currentIdx - 1); });
  nextBtn?.addEventListener('click', e => { e.stopPropagation(); goToSlide(currentIdx + 1); });

  /* Dot click */
  dots.forEach((d, i) => d.addEventListener('click', () => goToSlide(i)));

  /* Scroll → update dots + arrows */
  track.addEventListener('scroll', () => {
    const slideW = track.clientWidth || 1;
    const idx = Math.round(track.scrollLeft / slideW);
    if (idx !== currentIdx) {
      currentIdx = idx;
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      updateArrows();
    }
  }, { passive: true });

  /* Touch swipe (handles overflow:hidden on wrapper) */
  let touchStartX = 0;
  let touchStartScrollLeft = 0;
  let isSwiping = false;
  let swipeJustEnded = false;

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartScrollLeft = track.scrollLeft;
    isSwiping = false;
    swipeJustEnded = false;
  }, { passive: true });

  track.addEventListener('touchmove', e => {
    const dx = touchStartX - e.touches[0].clientX;
    if (Math.abs(dx) > 5) {
      isSwiping = true;
      track.scrollLeft = touchStartScrollLeft + dx;
    }
  }, { passive: true });

  track.addEventListener('touchend', e => {
    if (isSwiping) {
      swipeJustEnded = true;
      setTimeout(() => { swipeJustEnded = false; }, 300);
      const dx = touchStartX - e.changedTouches[0].clientX;
      const slideW = track.parentElement.clientWidth;
      if (Math.abs(dx) > slideW * 0.2) {
        goToSlide(dx > 0 ? currentIdx + 1 : currentIdx - 1);
      } else {
        goToSlide(currentIdx);
      }
    }
    isSwiping = false;
  }, { passive: true });

  updateArrows();
}

/* Build one category block and append to parent */
function appendCategory(parent, iconTitle, trackId, slides) {
  if (!slides.length) return;
  const div = document.createElement('div');
  div.className = 'img-category';
  div.innerHTML = `
    <div class="img-cat-header">
      <span class="img-cat-title">${iconTitle}</span>
    </div>
    ${buildCarouselHtml(trackId, slides)}`;
  parent.appendChild(div);
  initCarousel(trackId);
}

async function renderImageSection(keyPointData, displayData, kpHeading) {
  const body = document.getElementById('loc-ref-body');
  if (!body) return;
  body.innerHTML = '';

  const kpLat = keyPointData?.key_point
    ? parseFloat(keyPointData.key_point.lat) : APP_DATA.map.keyPoint.lat;
  const kpLng = keyPointData?.key_point
    ? parseFloat(keyPointData.key_point.lng) : APP_DATA.map.keyPoint.lng;
  const heading = kpHeading || 0;

  /* ── 1. Key Point Street View (main heading only) ── */
  const svSlides = [{
    src:   p2SvUrl(kpLat, kpLng, heading, 400, 200),
    full:  p2SvUrl(kpLat, kpLng, heading, 800, 400),
    label: 'Key Point View',
  }];
  appendCategory(body, '📍 Key Point Street View', 'car-sv', svSlides);

  /* ── 2. Past Order Reference Photos ── */
  const photos = displayData?.building_photos || [];
  if (photos.length) {
    const photoSlides = photos.map((photo, i) => {
      const market = photo.order_id ? photo.order_id.substring(0, 2) : '';
      const url = getRecipientImageFullUrl(photo.url, market);
      if (!url) return null;
      return {
        src:   url,
        full:  url,
        label: [photo.order_id, photo.grass_date].filter(Boolean).join(' · ') || `Photo #${i + 1}`,
      };
    }).filter(Boolean);
    // appendCategory(body, '📷 Past Order Reference Photos', 'car-ref', photoSlides);
    appendCategory(body, '📷 Photos of Past Buyer Homes', 'car-ref', photoSlides);
  }

  /* ── 3. Others Driver Suggestion Photos ── */
  const suggDiv = document.createElement('div');
  suggDiv.className = 'img-category';
  suggDiv.id = 'nearby-category';
  suggDiv.innerHTML = `
    <div class="img-cat-header">
      <span class="img-cat-title">📸 Others Driver Suggestion Photos</span>
    </div>
    <div class="p2-empty-state">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <line x1="8" y1="6" x2="16" y2="6"/>
        <line x1="8" y1="10" x2="16" y2="10"/>
        <line x1="8" y1="14" x2="12" y2="14"/>
      </svg>
      <span>Driver Upload On <b>Improve Navigation</b>, Demo not show</span>
    </div>`;
  body.appendChild(suggDiv);
}

/* Haversine distance in metres */
function p2HaversineDist(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/* =========================================
   Simulation — External Walk Simulator
   ========================================= */

function p2NormalizeAngle(a) {
  return ((a % 360) + 360) % 360;
}

function p2AngleDiff(from, to) {
  let d = p2NormalizeAngle(to - from);
  if (d > 180) d -= 360;
  return d;
}

function p2HeadingToCompass(h) {
  h = p2NormalizeAngle(h);
  const dirs = ['N','NE','E','SE','S','SW','W','NW'];
  return dirs[Math.round(h / 45) % 8];
}

function p2HeadingToArrow(h) {
  h = p2NormalizeAngle(h);
  const arrows = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'];
  return arrows[Math.round(h / 45) % 8];
}

function p2OffsetPoint(lat, lng, heading, distMeters) {
  const R = 6371000;
  const d = distMeters / R;
  const brng = heading * Math.PI / 180;
  const lat1 = lat * Math.PI / 180;
  const lng1 = lng * Math.PI / 180;
  const lat2 = Math.asin(Math.sin(lat1) * Math.cos(d) + Math.cos(lat1) * Math.sin(d) * Math.cos(brng));
  const lng2 = lng1 + Math.atan2(Math.sin(brng) * Math.sin(d) * Math.cos(lat1), Math.cos(d) - Math.sin(lat1) * Math.sin(lat2));
  return { lat: lat2 * 180 / Math.PI, lng: lng2 * 180 / Math.PI };
}

function p2BuildWedgePath(lat, lng, fromAngle, toAngle, radiusM) {
  const center = { lat, lng };
  const pts = [center];
  let a1 = p2NormalizeAngle(fromAngle);
  let diff = p2AngleDiff(a1, p2NormalizeAngle(toAngle));
  const steps = Math.max(2, Math.ceil(Math.abs(diff) / 10));
  for (let i = 0; i <= steps; i++) {
    pts.push(p2OffsetPoint(lat, lng, a1 + (diff * i / steps), radiusM));
  }
  pts.push(center);
  return pts;
}

function p2SimCleanupMap() {
  if (p2SimMarker) { p2SimMarker.setMap(null); p2SimMarker = null; }
  if (p2SimHeadingLine) { p2SimHeadingLine.setMap(null); p2SimHeadingLine = null; }
  if (p2SimTargetLine) { p2SimTargetLine.setMap(null); p2SimTargetLine = null; }
  if (p2SimDeviationWedge) { p2SimDeviationWedge.setMap(null); p2SimDeviationWedge = null; }
  if (p2SimWalkPolyline) { p2SimWalkPolyline.setMap(null); p2SimWalkPolyline = null; }
  if (p2SimWalkTimer) { clearInterval(p2SimWalkTimer); p2SimWalkTimer = null; }
  if (p2SimRideTimer) { clearInterval(p2SimRideTimer); p2SimRideTimer = null; }
  if (p2SimRidePolyline) { p2SimRidePolyline.setMap(null); p2SimRidePolyline = null; }
  if (p2DirRenderer) p2DirRenderer.setDirections({ routes: [] });
  p2SimRideRoute = null;
  p2SimRideIdx = 0;
  const toast = document.getElementById('p2-sim-toast');
  if (toast) { toast.className = 'p2-sim-toast is-hidden'; }
}

function p2SimMountIdleToast() {
  const el = document.getElementById('p2-sim-toast');
  if (el) el.className = 'p2-sim-toast is-hidden';
}

function p2InitSimulation() {
  if (!p2KeyPointData?.track_from_key_point_to_target?.length) return;

  p2SimTrackCoords = p2KeyPointData.track_from_key_point_to_target.map(pt => ({
    lat: parseFloat(pt.lat), lng: parseFloat(pt.lng)
  }));

  p2SimActive = true;
  const panel = document.getElementById('sim-panel');
  if (panel) panel.style.display = '';

  p2SimInitCompass();
  p2SimBindControls();

  p2SimMountIdleToast();
}

/* ── Compass Wheel ── */
function p2SimInitCompass() {
  const compass = document.getElementById('sim-compass');
  const needle = document.getElementById('sim-compass-needle');
  const knob = document.getElementById('sim-compass-knob');
  const valEl = document.getElementById('sim-heading-val');
  if (!compass) return;

  let dragging = false;

  function angleFromCenter(e) {
    const rect = compass.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    let deg = Math.atan2(clientX - cx, -(clientY - cy)) * 180 / Math.PI;
    return p2NormalizeAngle(deg);
  }

  function updateHeading(deg) {
    p2SimHeading = Math.round(deg);
    if (needle) needle.style.transform = `rotate(${p2SimHeading}deg)`;
    if (knob) knob.style.transform = `rotate(${p2SimHeading}deg) translateY(-64px)`;
    if (valEl) valEl.textContent = p2SimHeading;
    if (p2SimLat !== null && !p2SimWalkTimer && !p2SimRideMode) p2SimUpdateMapOverlays();
  }

  function onStart(e) {
    dragging = true;
    updateHeading(angleFromCenter(e));
    e.preventDefault();
  }
  function onMove(e) {
    if (!dragging) return;
    updateHeading(angleFromCenter(e));
    e.preventDefault();
  }
  function onEnd() { dragging = false; }

  compass.addEventListener('mousedown', onStart);
  compass.addEventListener('touchstart', onStart, { passive: false });
  document.addEventListener('mousemove', onMove);
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('mouseup', onEnd);
  document.addEventListener('touchend', onEnd);
}

function p2SimReadRidePointsPerTick() {
  const el = document.getElementById('sim-ride-speed');
  const v = parseInt(el?.value, 10);
  return Number.isFinite(v) ? Math.max(1, Math.min(8, v)) : 1;
}

function p2SimReadWalkSpeedMs() {
  const el = document.getElementById('sim-walk-speed');
  const v = parseFloat(el?.value);
  return Number.isFinite(v) ? Math.max(0.3, Math.min(5, v)) : P2_SIM_WALK_SPEED_DEFAULT;
}

function p2SimResetWalkSpeedToDefault() {
  const el = document.getElementById('sim-walk-speed');
  if (el) el.value = String(P2_SIM_WALK_SPEED_DEFAULT);
  p2SimRefreshSpeedLabels();
}

function p2SimRefreshSpeedLabels() {
  const rideVal = document.getElementById('sim-ride-speed-val');
  const walkVal = document.getElementById('sim-walk-speed-val');
  if (rideVal) rideVal.textContent = `×${p2SimReadRidePointsPerTick()}`;
  if (walkVal) walkVal.textContent = `${p2SimReadWalkSpeedMs().toFixed(1)} m/s`;
}

/* ── Bind panel controls (static DOM — bind only once) ── */
let p2SimControlsBound = false;

function p2SimBindControls() {
  p2SimRefreshSpeedLabels();
  if (p2SimControlsBound) return;
  p2SimControlsBound = true;

  const pickBtn = document.getElementById('sim-pick-loc-btn');
  const rideBtn = document.getElementById('sim-ride-btn');
  const rideStopBtn = document.getElementById('sim-ride-stop-btn');
  const walkBtn = document.getElementById('sim-walk-btn');
  const stopBtn = document.getElementById('sim-stop-btn');
  const resetBtn = document.getElementById('sim-reset-btn');

  document.getElementById('sim-ride-speed')?.addEventListener('input', p2SimRefreshSpeedLabels);
  document.getElementById('sim-walk-speed')?.addEventListener('input', p2SimRefreshSpeedLabels);
  document.getElementById('sim-show-ontrack-toast')?.addEventListener('change', () => {
    if (p2SimLat !== null) p2SimUpdateMapOverlays();
  });
  document.getElementById('sim-toast-compact')?.addEventListener('change', () => {
    p2ApplyToastCompact();
  });

  pickBtn?.addEventListener('click', () => {
    if (p2SimPickingLoc) {
      p2SimStopPicking();
    } else {
      p2SimStartPicking();
    }
  });

  rideBtn?.addEventListener('click', () => p2SimStartRide());
  rideStopBtn?.addEventListener('click', () => p2SimStopRide());
  walkBtn?.addEventListener('click', () => p2SimStartWalk());
  stopBtn?.addEventListener('click', () => p2SimStopWalk());
  resetBtn?.addEventListener('click', () => p2SimReset());
}

function p2SimStartPicking() {
  /* Stop any running ride / walk and clear overlays */
  if (p2SimRideTimer) { clearInterval(p2SimRideTimer); p2SimRideTimer = null; }
  if (p2SimWalkTimer) { clearInterval(p2SimWalkTimer); p2SimWalkTimer = null; }
  p2SimCleanupMap();
  p2SetTurningMarkersVisible(false);
  p2SimLat = null;
  p2SimLng = null;
  p2SimHeading = 0;
  p2SimRideMode = true;
  p2SimSuppressPostRideDeviation = false;
  p2SimArrivedNearWalkDest = false;
  p2SimRideRoute = null;
  p2SimRideIdx = 0;
  p2SimWalkPath = [];

  /* Reset UI controls */
  const rideBtn = document.getElementById('sim-ride-btn');
  const rideStopBtn = document.getElementById('sim-ride-stop-btn');
  if (rideBtn) { rideBtn.disabled = true; rideBtn.style.display = ''; }
  if (rideStopBtn) rideStopBtn.style.display = 'none';
  const rideInfo = document.getElementById('sim-ride-info');
  if (rideInfo) rideInfo.textContent = '';
  const walkBtn = document.getElementById('sim-walk-btn');
  const stopBtn = document.getElementById('sim-stop-btn');
  if (walkBtn) { walkBtn.disabled = true; walkBtn.style.display = ''; }
  if (stopBtn) stopBtn.style.display = 'none';
  const walkInfo = document.getElementById('sim-walk-info');
  if (walkInfo) walkInfo.textContent = '';
  const walkSection = document.getElementById('sim-walk-section');
  if (walkSection) walkSection.style.display = '';
  const coordsEl = document.getElementById('sim-coords');
  if (coordsEl) coordsEl.textContent = 'No position set';
  const p2WalkNavBtn = document.getElementById('p2-walking-nav-btn');
  if (p2WalkNavBtn) { p2WalkNavBtn.disabled = true; p2WalkNavBtn.style.display = ''; }
  const p2WalkStopPick = document.getElementById('p2-walking-stop-btn');
  if (p2WalkStopPick) p2WalkStopPick.style.display = 'none';
  const distEl = document.getElementById('sim-dist-val');
  const devEl = document.getElementById('sim-dev-val');
  const segEl = document.getElementById('sim-seg-val');
  if (distEl) { distEl.textContent = '—'; distEl.className = 'sim-status-val'; }
  if (devEl) { devEl.textContent = '—'; devEl.className = 'sim-status-val'; }
  if (segEl) segEl.textContent = '—';

  p2OverlayKpCardDismissed = false;
  p2OverlayBuyerCardDismissed = false;

  p2SimPickingLoc = true;
  const btn = document.getElementById('sim-pick-loc-btn');
  if (btn) { btn.textContent = 'Cancel'; btn.classList.add('picking'); }
  const tapHint = document.getElementById('p2-map-tap-hint');
  if (tapHint) { tapHint.textContent = '📍 Tap on the map to set your start location'; tapHint.classList.add('visible'); }
  p2SimPickListener = p2Map.addListener('click', e => {
    p2SimSetLocation(e.latLng.lat(), e.latLng.lng());
    p2SimStopPicking();
  });
}

function p2SimStopPicking() {
  p2SimPickingLoc = false;
  const btn = document.getElementById('sim-pick-loc-btn');
  if (btn) {
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> Pick on Map`;
    btn.classList.remove('picking');
  }
  document.getElementById('p2-map-tap-hint')?.classList.remove('visible');
  if (p2SimPickListener) { p2SimPickListener.remove(); p2SimPickListener = null; }
}

function p2SimSetLocation(lat, lng) {
  p2SimLat = lat;
  p2SimLng = lng;
  p2SimRideMode = true;
  p2SimArrivedNearWalkDest = false;

  const coordsEl = document.getElementById('sim-coords');
  if (coordsEl) coordsEl.textContent = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;

  /* Enable ride button */
  const rideBtn = document.getElementById('sim-ride-btn');
  if (rideBtn) rideBtn.disabled = false;

  /* Enable walk button */
  const walkBtn = document.getElementById('sim-walk-btn');
  if (walkBtn) walkBtn.disabled = false;
  const p2WalkNavBtnPick = document.getElementById('p2-walking-nav-btn');
  if (p2WalkNavBtnPick) p2WalkNavBtnPick.disabled = false;

  /* Place a simple circle marker (no heading arrow in ride mode) */
  const pos = { lat, lng };
  if (p2SimMarker) {
    p2SimMarker.setPosition(pos);
    p2SimMarker.setIcon({
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8, fillColor: '#1A73E8', fillOpacity: 1,
      strokeColor: '#fff', strokeWeight: 2,
    });
  } else {
    p2SimMarker = new google.maps.Marker({
      position: pos, map: p2Map, zIndex: 30,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8, fillColor: '#1A73E8', fillOpacity: 1,
        strokeColor: '#fff', strokeWeight: 2,
      },
    });
  }

  /* Request directions from picked location to Key Point */
  p2SimCalcRideRoute(lat, lng);
}

/* ── Ride Route ── */
function p2SimCalcRideRoute(fromLat, fromLng) {
  if (!p2DirService || !p2KpLat) return;
  const infoEl = document.getElementById('sim-ride-info');
  if (infoEl) infoEl.textContent = 'Calculating route...';

  p2DirService.route({
    origin: { lat: fromLat, lng: fromLng },
    destination: { lat: p2KpLat, lng: p2KpLng },
    travelMode: google.maps.TravelMode.TWO_WHEELER || google.maps.TravelMode.DRIVING,
  }, (result, status) => {
    if (status === 'OK') {
      p2DirRenderer.setDirections(result);
      const leg = result.routes[0]?.legs[0];
      p2SimRideRoute = [];
      if (leg?.steps) {
        leg.steps.forEach(step => {
          step.path.forEach(pt => p2SimRideRoute.push({ lat: pt.lat(), lng: pt.lng() }));
        });
      }
      if (infoEl) {
        const dist = leg?.distance?.text || '';
        const dur = leg?.duration?.text || '';
        infoEl.textContent = dist && dur ? `${dist} · ${dur}` : 'Route ready';
      }
    } else {
      if (infoEl) infoEl.textContent = 'Route not available';
      p2SimRideRoute = null;
    }
  });
}

const P2_SIM_RIDE_KP_PROXIMITY_M = 2;

function p2SimUpdateRideKeyPointProximityToast(lat, lng) {
  const toastEl = document.getElementById('p2-sim-toast');
  const iconEl = document.getElementById('p2-sim-toast-icon');
  const titleEl = document.getElementById('p2-sim-toast-title');
  const subEl = document.getElementById('p2-sim-toast-sub');
  if (!toastEl || !iconEl || !titleEl || !subEl || p2KpLat == null || p2KpLng == null) return;

  const d = p2HaversineDist(lat, lng, p2KpLat, p2KpLng);
  if (d <= P2_SIM_RIDE_KP_PROXIMITY_M) {
    toastEl.className = 'p2-sim-toast toast-ok';
    iconEl.innerHTML = '🧭';
    titleEl.textContent = 'Near the key point';
    subEl.textContent = 'Proceed in the direction shown by the Key Point Street View image.';
    toastEl.classList.remove('is-hidden');
    p2ShowOverlayKpCard();
  } else {
    toastEl.classList.add('is-hidden');
  }
  p2ApplyToastCompact();
}

function p2SimStartRide() {
  if (!p2SimRideRoute?.length || p2SimRideTimer) return;

  document.getElementById('p2-sim-toast')?.classList.add('is-hidden');

  const rideBtn = document.getElementById('sim-ride-btn');
  const rideStopBtn = document.getElementById('sim-ride-stop-btn');
  if (rideBtn) rideBtn.style.display = 'none';
  if (rideStopBtn) rideStopBtn.style.display = '';
  const infoEl = document.getElementById('sim-ride-info');

  /* Pre-compute cumulative distances along the route for uniform-speed travel */
  const cumDist = [0];
  for (let i = 1; i < p2SimRideRoute.length; i++) {
    const prev = p2SimRideRoute[i - 1];
    const cur = p2SimRideRoute[i];
    cumDist.push(cumDist[i - 1] + p2HaversineDist(prev.lat, prev.lng, cur.lat, cur.lng));
  }
  const totalDist = cumDist[cumDist.length - 1];

  p2SimRideIdx = 0;
  let p2SimRideTravelledDist = 0;
  const TICK_MS = 300;
  const BASE_SPEED_M_PER_TICK = 30;

  p2SimRideTimer = setInterval(() => {
    const speedMultiplier = p2SimReadRidePointsPerTick();
    p2SimRideTravelledDist += BASE_SPEED_M_PER_TICK * speedMultiplier;
    if (p2SimRideTravelledDist >= totalDist) {
      p2SimRideTravelledDist = totalDist;
    }

    /* Find the segment and interpolate position along route */
    while (p2SimRideIdx < p2SimRideRoute.length - 2 && cumDist[p2SimRideIdx + 1] < p2SimRideTravelledDist) {
      p2SimRideIdx++;
    }

    let pt;
    if (p2SimRideIdx >= p2SimRideRoute.length - 1) {
      pt = p2SimRideRoute[p2SimRideRoute.length - 1];
    } else {
      const segStart = cumDist[p2SimRideIdx];
      const segEnd = cumDist[p2SimRideIdx + 1];
      const segLen = segEnd - segStart;
      const t = segLen > 0 ? (p2SimRideTravelledDist - segStart) / segLen : 0;
      const a = p2SimRideRoute[p2SimRideIdx];
      const b = p2SimRideRoute[p2SimRideIdx + 1];
      pt = { lat: a.lat + (b.lat - a.lat) * t, lng: a.lng + (b.lng - a.lng) * t };
    }

    p2SimLat = pt.lat;
    p2SimLng = pt.lng;

    if (p2SimMarker) {
      p2SimMarker.setPosition(pt);
    }

    const coordsEl = document.getElementById('sim-coords');
    if (coordsEl) coordsEl.textContent = `${pt.lat.toFixed(6)}, ${pt.lng.toFixed(6)}`;

    const progress = Math.round((p2SimRideTravelledDist / totalDist) * 100);
    if (infoEl) infoEl.textContent = `Riding... ${progress}%`;

    p2Map.panTo(pt);

    p2SimUpdateRideKeyPointProximityToast(pt.lat, pt.lng);

    if (p2SimRideTravelledDist >= totalDist) {
      p2SimStopRide();
      if (infoEl) infoEl.textContent = 'Arrived at Key Point — switch to Walk mode';
      p2SimSwitchToWalkMode();
    }
  }, TICK_MS);
}

function p2SimStopRide() {
  if (!p2SimRideTimer) return;
  clearInterval(p2SimRideTimer);
  p2SimRideTimer = null;

  document.getElementById('p2-sim-toast')?.classList.remove('is-hidden');

  const rideBtn = document.getElementById('sim-ride-btn');
  const rideStopBtn = document.getElementById('sim-ride-stop-btn');
  if (rideStopBtn) rideStopBtn.style.display = 'none';
  if (rideBtn) rideBtn.style.display = '';
}

function p2SetTurningMarkersVisible(visible) {
  p2TurningMarkers.forEach(m => m.setMap(visible ? p2Map : null));
  if (!visible) p2TurningInfoWindow?.close();
}

function p2SimSwitchToWalkMode() {
  p2SimSuppressPostRideDeviation = true;
  p2SimRideMode = false;

  /* Clear ride route display */
  if (p2DirRenderer) p2DirRenderer.setDirections({ routes: [] });

  /* Show turning markers now that we're in walk mode */
  p2SetTurningMarkersVisible(true);

  /* Show walk section */
  const walkSection = document.getElementById('sim-walk-section');
  if (walkSection) walkSection.style.display = '';

  /* Show direction marker */
  p2SimUpdateMapOverlays();
}

/* In-app toolbar: ride → walk, then same as sim Walk */
function p2OnWalkingNavigationClick() {
  if (!p2Map || p2SimLat === null || !p2SimActive) return;
  if (p2SimWalkTimer) return;

  p2HideAllOverlayCards();
  if (p2SimRideTimer) p2SimStopRide();

  if (p2SimRideMode) {
    p2SimSuppressPostRideDeviation = true;
    p2SimRideMode = false;
    if (p2DirRenderer) p2DirRenderer.setDirections({ routes: [] });
    p2SetTurningMarkersVisible(true);
    const walkSection = document.getElementById('sim-walk-section');
    if (walkSection) walkSection.style.display = '';
    p2SimUpdateMapOverlays();
  }

  p2SimStartWalk();
}

/* ── Walk ── */
let p2SimWalkPath = [];
let p2SimWalkStartTime = 0;

function p2SimStartWalk() {
  if (p2SimLat === null || !p2Map) return;
  if (p2SimWalkTimer) return;

  p2CloseOverlayCard('p2-overlay-kp-card');

  p2SimSuppressPostRideDeviation = false;
  p2SimArrivedNearWalkDest = false;

  const walkBtn = document.getElementById('sim-walk-btn');
  const stopBtn = document.getElementById('sim-stop-btn');
  if (walkBtn) walkBtn.style.display = 'none';
  if (stopBtn) stopBtn.style.display = '';
  const p2WalkNavStart = document.getElementById('p2-walking-nav-btn');
  if (p2WalkNavStart) p2WalkNavStart.style.display = 'none';
  const p2WalkStopStart = document.getElementById('p2-walking-stop-btn');
  if (p2WalkStopStart) p2WalkStopStart.style.display = '';
  const infoEl = document.getElementById('sim-walk-info');

  const TICK_MS = 300;
  p2SimWalkPath = [{ lat: p2SimLat, lng: p2SimLng }];
  p2SimWalkStartTime = Date.now();

  if (!p2SimWalkPolyline) {
    p2SimWalkPolyline = new google.maps.Polyline({
      path: p2SimWalkPath,
      strokeColor: '#E84436',
      strokeWeight: 4,
      strokeOpacity: 0.85,
      map: p2Map,
      zIndex: 15,
    });
  }

  p2SimWalkTimer = setInterval(() => {
    const stepDist = p2SimReadWalkSpeedMs() * (TICK_MS / 1000);
    const newPt = p2OffsetPoint(p2SimLat, p2SimLng, p2SimHeading, stepDist);
    p2SimLat = newPt.lat;
    p2SimLng = newPt.lng;

    p2SimWalkPath.push(newPt);
    p2SimWalkPolyline.setPath(p2SimWalkPath);

    const endPt = p2SimTrackCoords[p2SimTrackCoords.length - 1];
    const distToEnd = p2HaversineDist(p2SimLat, p2SimLng, endPt.lat, endPt.lng);
    if (distToEnd <= P2_SIM_WALK_DEST_PROXIMITY_M) {
      p2SimResetWalkSpeedToDefault();
      p2SimArrivedNearWalkDest = true;
      p2SimStopWalk({ nearDestination: true });
      p2PromoteBuyerPhotos();
      p2ShowOverlayBuyerCard();
      return;
    }

    const elapsed = ((Date.now() - p2SimWalkStartTime) / 1000).toFixed(1);
    if (infoEl) infoEl.textContent = `Walking... ${elapsed}s`;

    const coordsEl = document.getElementById('sim-coords');
    if (coordsEl) coordsEl.textContent = `${p2SimLat.toFixed(6)}, ${p2SimLng.toFixed(6)}`;

    p2SimUpdateMapOverlays();
  }, TICK_MS);
}

function p2SimStopWalk(opts = {}) {
  if (!p2SimWalkTimer) return;
  clearInterval(p2SimWalkTimer);
  p2SimWalkTimer = null;

  if (!opts.nearDestination) p2SimArrivedNearWalkDest = false;

  p2SimCloseToast();

  const walkBtn = document.getElementById('sim-walk-btn');
  const stopBtn = document.getElementById('sim-stop-btn');
  const infoEl = document.getElementById('sim-walk-info');
  if (stopBtn) stopBtn.style.display = 'none';
  if (walkBtn) walkBtn.style.display = '';
  const p2WalkNavStop = document.getElementById('p2-walking-nav-btn');
  if (p2WalkNavStop) { p2WalkNavStop.style.display = ''; p2WalkNavStop.disabled = false; }
  const p2WalkStopStop = document.getElementById('p2-walking-stop-btn');
  if (p2WalkStopStop) p2WalkStopStop.style.display = 'none';

  let totalM = 0;
  for (let i = 1; i < p2SimWalkPath.length; i++) {
    const a = p2SimWalkPath[i - 1];
    const b = p2SimWalkPath[i];
    totalM += p2HaversineDist(a.lat, a.lng, b.lat, b.lng);
  }
  const totalDist = p2SimWalkPath.length > 1 ? totalM.toFixed(1) : '0';
  const elapsed = ((Date.now() - p2SimWalkStartTime) / 1000).toFixed(1);
  if (infoEl) {
    infoEl.textContent = opts.nearDestination
      ? `Near destination (within ${P2_SIM_WALK_DEST_PROXIMITY_M}m) — walk stopped. Walk speed reset to ${P2_SIM_WALK_SPEED_DEFAULT} m/s. Walked ${totalDist}m in ${elapsed}s.`
      : `Walked ${totalDist}m in ${elapsed}s`;
  }

  if (p2SimLat !== null) p2SimUpdateMapOverlays();
}

/* ── Update map overlays based on current sim pos + heading ── */
function p2SimUpdateMapOverlays() {
  if (p2SimLat === null || !p2Map || !p2SimTrackCoords) return;
  const pos = { lat: p2SimLat, lng: p2SimLng };

  /* User marker (direction cone) */
  const coneIcon = {
    path: 'M 0,-12 L -7,4 L 0,0 L 7,4 Z',
    fillColor: '#1A73E8',
    fillOpacity: 0.95,
    strokeColor: '#fff',
    strokeWeight: 2,
    scale: 1.5,
    rotation: p2SimHeading,
    anchor: { x: 0, y: 0 },
  };
  if (p2SimMarker) {
    p2SimMarker.setPosition(pos);
    p2SimMarker.setIcon(coneIcon);
  } else {
    p2SimMarker = new google.maps.Marker({ position: pos, map: p2Map, icon: coneIcon, zIndex: 30 });
  }

  const skipDeviation =
    p2SimRideTimer != null
    || p2SimRideMode
    || p2SimSuppressPostRideDeviation;

  if (skipDeviation) {
    if (p2SimTargetLine) {
      p2SimTargetLine.setMap(null);
      p2SimTargetLine = null;
    }
    if (p2SimDeviationWedge) {
      p2SimDeviationWedge.setMap(null);
      p2SimDeviationWedge = null;
    }
    const headEnd = p2OffsetPoint(p2SimLat, p2SimLng, p2SimHeading, 15);
    if (p2SimHeadingLine) {
      p2SimHeadingLine.setPath([pos, headEnd]);
    } else {
      p2SimHeadingLine = new google.maps.Polyline({
        path: [pos, headEnd], strokeColor: '#2196F3', strokeWeight: 3,
        strokeOpacity: 0.9, map: p2Map, zIndex: 25,
      });
    }
    const distEl = document.getElementById('sim-dist-val');
    const devEl = document.getElementById('sim-dev-val');
    const segEl = document.getElementById('sim-seg-val');
    if (distEl) {
      distEl.textContent = '—';
      distEl.className = 'sim-status-val';
    }
    if (devEl) {
      devEl.textContent = '—';
      devEl.className = 'sim-status-val';
    }
    if (segEl) segEl.textContent = '—';
    document.getElementById('p2-sim-toast')?.classList.add('is-hidden');
    return;
  }

  /* Find nearest point on the expected route */
  const nearest = p2SimFindNearestSegment(p2SimLat, p2SimLng, p2SimTrackCoords);
  const distToRoute = nearest.dist;
  const expectedHeading = nearest.heading;

  /* Heading line (blue — phone actual direction) */
  const headEnd = p2OffsetPoint(p2SimLat, p2SimLng, p2SimHeading, 15);
  if (p2SimHeadingLine) {
    p2SimHeadingLine.setPath([pos, headEnd]);
  } else {
    p2SimHeadingLine = new google.maps.Polyline({
      path: [pos, headEnd], strokeColor: '#2196F3', strokeWeight: 3,
      strokeOpacity: 0.9, map: p2Map, zIndex: 25,
    });
  }

  /* Target line (green dashed — route direction) */
  const targetEnd = p2OffsetPoint(p2SimLat, p2SimLng, expectedHeading, 15);
  if (p2SimTargetLine) {
    p2SimTargetLine.setPath([pos, targetEnd]);
  } else {
    p2SimTargetLine = new google.maps.Polyline({
      path: [pos, targetEnd], strokeColor: '#4CAF50', strokeWeight: 3, strokeOpacity: 0.8,
      icons: [{ icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 3 }, offset: '0', repeat: '12px' }],
      map: p2Map, zIndex: 24,
    });
  }

  /* Deviation wedge */
  const deviation = p2AngleDiff(p2SimHeading, expectedHeading);
  const absDev = Math.abs(deviation);
  let fillColor;
  if (absDev <= 30) fillColor = '#4CAF50';
  else if (absDev <= 90) fillColor = '#FF9800';
  else fillColor = '#F44336';

  const wedgePath = p2BuildWedgePath(p2SimLat, p2SimLng, p2SimHeading, expectedHeading, 12);
  if (p2SimDeviationWedge) {
    p2SimDeviationWedge.setPath(wedgePath);
    p2SimDeviationWedge.setOptions({ fillColor, fillOpacity: 0.25 });
  } else {
    p2SimDeviationWedge = new google.maps.Polygon({
      path: wedgePath, fillColor, fillOpacity: 0.25, strokeWeight: 0, map: p2Map, zIndex: 22,
    });
  }

  /* Update status panel */
  const distEl = document.getElementById('sim-dist-val');
  const devEl = document.getElementById('sim-dev-val');
  const segEl = document.getElementById('sim-seg-val');
  if (distEl) {
    distEl.textContent = `${distToRoute.toFixed(1)} m`;
    distEl.className = 'sim-status-val' + (distToRoute > 10 ? ' val-danger' : distToRoute > 5 ? ' val-warn' : ' val-ok');
  }
  if (devEl) {
    devEl.textContent = `${Math.round(absDev)}°`;
    devEl.className = 'sim-status-val' + (absDev > 90 ? ' val-danger' : absDev > 30 ? ' val-warn' : ' val-ok');
  }
  if (segEl) segEl.textContent = `${nearest.segIdx + 1} / ${p2SimTrackCoords.length - 1}`;

  /* Update in-map toast */
  p2SimUpdateToast(deviation, absDev, distToRoute, expectedHeading);
}

function p2SimFindNearestSegment(lat, lng, track) {
  let minDist = Infinity;
  let bestHeading = 0;
  let bestSegIdx = 0;

  for (let i = 0; i < track.length - 1; i++) {
    const a = track[i];
    const b = track[i + 1];
    const d = p2PointToSegmentDist(lat, lng, a.lat, a.lng, b.lat, b.lng);
    if (d < minDist) {
      minDist = d;
      bestSegIdx = i;
      bestHeading = p2Bearing(a.lat, a.lng, b.lat, b.lng);
    }
  }
  /* Also check distance to last point */
  const last = track[track.length - 1];
  const dLast = p2HaversineDist(lat, lng, last.lat, last.lng);
  if (dLast < minDist) {
    minDist = dLast;
    bestSegIdx = track.length - 2;
    if (track.length >= 2) {
      const prev = track[track.length - 2];
      bestHeading = p2Bearing(prev.lat, prev.lng, last.lat, last.lng);
    }
  }
  return { dist: minDist, heading: bestHeading, segIdx: bestSegIdx };
}

function p2Bearing(lat1, lng1, lat2, lng2) {
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const y = Math.sin(dLng) * Math.cos(lat2 * Math.PI / 180);
  const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180)
    - Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(dLng);
  return p2NormalizeAngle(Math.atan2(y, x) * 180 / Math.PI);
}

function p2PointToSegmentDist(pLat, pLng, aLat, aLng, bLat, bLng) {
  const dAB = p2HaversineDist(aLat, aLng, bLat, bLng);
  if (dAB === 0) return p2HaversineDist(pLat, pLng, aLat, aLng);
  const dAP = p2HaversineDist(aLat, aLng, pLat, pLng);
  const dBP = p2HaversineDist(bLat, bLng, pLat, pLng);
  const brgAB = p2Bearing(aLat, aLng, bLat, bLng) * Math.PI / 180;
  const brgAP = p2Bearing(aLat, aLng, pLat, pLng) * Math.PI / 180;
  const crossTrack = Math.abs(Math.asin(Math.sin(dAP / 6371000) * Math.sin(brgAP - brgAB)) * 6371000);
  const alongTrack = Math.acos(Math.cos(dAP / 6371000) / Math.cos(crossTrack / 6371000)) * 6371000;
  if (alongTrack < 0 || alongTrack > dAB) return Math.min(dAP, dBP);
  return crossTrack;
}

function p2SimUpdateToast(deviation, absDev, distToRoute, expectedHeading) {
  const iconEl = document.getElementById('p2-sim-toast-icon');
  const titleEl = document.getElementById('p2-sim-toast-title');
  const subEl = document.getElementById('p2-sim-toast-sub');
  const toastEl = document.getElementById('p2-sim-toast');
  if (!iconEl || !titleEl || !subEl || !toastEl) return;

  if (p2SimArrivedNearWalkDest && p2SimTrackCoords?.length && p2SimLat !== null && p2SimLng !== null) {
    const end = p2SimTrackCoords[p2SimTrackCoords.length - 1];
    const distToEnd = p2HaversineDist(p2SimLat, p2SimLng, end.lat, end.lng);
    if (distToEnd <= P2_SIM_WALK_DEST_PROXIMITY_M) {
      toastEl.className = 'p2-sim-toast toast-ok';
      toastEl.classList.remove('is-hidden');
      iconEl.innerHTML = '🎯';
      titleEl.textContent = 'Near the destination';
      subEl.textContent = 'You are within 5m of the route end point.';
      p2ApplyToastCompact();
      return;
    }
    p2SimArrivedNearWalkDest = false;
  }

  toastEl.className = 'p2-sim-toast';

  if (distToRoute > 10) {
    toastEl.classList.remove('is-hidden');
    toastEl.classList.add('toast-danger');
    iconEl.innerHTML = '🚨';
    titleEl.textContent = 'Off route';
    subEl.textContent = `${distToRoute.toFixed(0)}m from route — head ${p2HeadingToCompass(expectedHeading)} to return`;
  } else if (absDev <= 30) {
    toastEl.classList.add('toast-ok');
    iconEl.innerHTML = p2HeadingToArrow(p2SimHeading);
    titleEl.textContent = 'On track';
    subEl.textContent = `Heading ${p2HeadingToCompass(p2SimHeading)} — direction aligned`;
    const showOnTrackToast = document.getElementById('sim-show-ontrack-toast')?.checked;
    if (showOnTrackToast) toastEl.classList.remove('is-hidden');
    else toastEl.classList.add('is-hidden');
  } else if (absDev <= 90) {
    toastEl.classList.remove('is-hidden');
    toastEl.classList.add('toast-warn');
    const dir = deviation > 0 ? 'right' : 'left';
    iconEl.innerHTML = p2HeadingToArrow(expectedHeading);
    titleEl.textContent = `Adjust to the ${dir}`;
    subEl.textContent = `${Math.round(absDev)}° off — should head ${p2HeadingToCompass(expectedHeading)}`;
  } else if (absDev <= 150) {
    toastEl.classList.remove('is-hidden');
    toastEl.classList.add('toast-danger');
    const dir = deviation > 0 ? 'right' : 'left';
    iconEl.innerHTML = p2HeadingToArrow(expectedHeading);
    titleEl.textContent = `Wrong direction — turn ${dir}`;
    subEl.textContent = `${Math.round(absDev)}° off course, target: ${p2HeadingToCompass(expectedHeading)}`;
  } else {
    toastEl.classList.remove('is-hidden');
    toastEl.classList.add('toast-danger');
    iconEl.innerHTML = '🔄';
    titleEl.textContent = 'Turn around';
    subEl.textContent = `${Math.round(absDev)}° off — heading opposite direction`;
  }
  p2ApplyToastCompact();
}

/* ── Toast close button ── */
function p2SimCloseToast() {
  const toast = document.getElementById('p2-sim-toast');
  if (toast) toast.classList.add('is-hidden');
}

/* ── Toast compact mode ── */
function p2ApplyToastCompact() {
  const toast = document.getElementById('p2-sim-toast');
  if (!toast) return;
  const compact = document.getElementById('sim-toast-compact')?.checked;
  if (compact) toast.classList.add('toast-compact');
  else toast.classList.remove('toast-compact');
}

/* ── Map fullscreen overlay (reparent the same map instance) ── */
let p2MapOverlayOpen = false;

function p2OpenMapOverlay() {
  const overlay = document.getElementById('p2-map-overlay');
  const body = document.getElementById('p2-map-overlay-body');
  const mapWrap = document.getElementById('p2-map-wrap');
  const toolbar = document.querySelector('.map-section .p2-map-toolbar');
  const appContainer = document.getElementById('app');
  if (!overlay || !body || !mapWrap || !p2Map) return;

  /* Scroll to top and lock scroll so overlay fills the visible viewport */
  if (appContainer) {
    appContainer.scrollTop = 0;
    appContainer.style.overflow = 'hidden';
  }

  const page = document.querySelector('.nav-help-page');
  if (page) page.classList.add('overlay-active');

  body.insertBefore(mapWrap, body.firstChild);
  if (toolbar) body.appendChild(toolbar);
  mapWrap.classList.add('overlay-expanded');
  overlay.classList.add('open');
  p2MapOverlayOpen = true;

  setTimeout(() => google.maps.event.trigger(p2Map, 'resize'), 50);
}

function p2CloseMapOverlay() {
  const overlay = document.getElementById('p2-map-overlay');
  const mapWrap = document.getElementById('p2-map-wrap');
  const toolbar = overlay?.querySelector('.p2-map-toolbar');
  const mapSection = document.querySelector('.map-section');
  if (!overlay || !mapWrap || !mapSection) return;

  p2HideAllOverlayCards();
  mapSection.appendChild(mapWrap);
  if (toolbar) mapSection.appendChild(toolbar);
  mapWrap.classList.remove('overlay-expanded');
  overlay.classList.remove('open');
  p2MapOverlayOpen = false;

  /* Restore scroll */
  const appContainer = document.getElementById('app');
  if (appContainer) appContainer.style.overflow = '';
  const page = document.querySelector('.nav-help-page');
  if (page) page.classList.remove('overlay-active');

  setTimeout(() => google.maps.event.trigger(p2Map, 'resize'), 50);
}

/* ── Overlay bottom cards ── */
let p2OverlayKpCardDismissed = false;
let p2OverlayBuyerCardDismissed = false;

function p2CloseOverlayCard(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('is-hidden');
  if (id === 'p2-overlay-kp-card') p2OverlayKpCardDismissed = true;
  if (id === 'p2-overlay-buyer-card') p2OverlayBuyerCardDismissed = true;
}

function p2HideAllOverlayCards() {
  document.getElementById('p2-overlay-kp-card')?.classList.add('is-hidden');
  document.getElementById('p2-overlay-buyer-card')?.classList.add('is-hidden');
}

function p2ShowOverlayKpCard() {
  if (!p2MapOverlayOpen || p2OverlayKpCardDismissed) return;
  const card = document.getElementById('p2-overlay-kp-card');
  const imgContainer = document.getElementById('p2-overlay-kp-img');
  if (!card || !imgContainer) return;

  const heading = p2KpHeading || 0;
  const svUrl = p2SvUrl(p2KpLat, p2KpLng, heading, 600, 200);
  const fullUrl = p2SvUrl(p2KpLat, p2KpLng, heading, 800, 400);
  imgContainer.innerHTML = `<img src="${svUrl}" alt="Key Point Street View">`;
  imgContainer.querySelector('img')?.addEventListener('click', () => {
    openP2ImgModal(fullUrl, 'Key Point Street View');
  });
  card.classList.remove('is-hidden');
}

function p2ShowOverlayBuyerCard() {
  if (!p2MapOverlayOpen || p2OverlayBuyerCardDismissed) return;
  const card = document.getElementById('p2-overlay-buyer-card');
  const container = document.getElementById('p2-overlay-buyer-imgs');
  if (!card || !container) return;

  const photos = p2DisplayData?.building_photos || [];
  if (!photos.length) return;

  const slideData = [];
  container.innerHTML = photos.map(photo => {
    const market = photo.order_id ? photo.order_id.substring(0, 2) : '';
    const url = getRecipientImageFullUrl(photo.url, market);
    if (!url) return '';
    const label = [photo.order_id, photo.grass_date].filter(Boolean).join(' · ') || 'Buyer photo';
    slideData.push({ full: url, label });
    return `<img src="${url}" alt="${label}">`;
  }).filter(Boolean).join('');
  container.querySelectorAll('img').forEach((img, i) => {
    img.addEventListener('click', () => {
      openP2ImgModal(slideData[i].full, slideData[i].label, slideData, i);
    });
  });
  card.classList.remove('is-hidden');
}

/* ── Promote "Photos of Past Buyer Homes" to top of image list ── */
let p2PhotosPromoted = false;

function p2PromoteBuyerPhotos() {
  if (p2PhotosPromoted) return;
  const body = document.getElementById('loc-ref-body');
  if (!body) return;
  const carRef = document.getElementById('car-ref');
  if (!carRef) return;
  const category = carRef.closest('.img-category');
  if (!category || category === body.firstElementChild) return;

  p2PhotosPromoted = true;
  category.classList.add('img-category-promote');
  body.insertBefore(category, body.firstElementChild);
  requestAnimationFrame(() => category.classList.add('img-category-promoted'));
}

function p2ResetBuyerPhotosPromotion() {
  p2PhotosPromoted = false;
}

function p2SimReset() {
  p2SimCleanupMap();
  p2SetTurningMarkersVisible(false);
  p2ResetBuyerPhotosPromotion();
  p2HideAllOverlayCards();
  p2OverlayKpCardDismissed = false;
  p2OverlayBuyerCardDismissed = false;
  p2SimLat = null;
  p2SimLng = null;
  p2SimHeading = 0;
  p2SimRideMode = true;
  p2SimSuppressPostRideDeviation = false;
  p2SimArrivedNearWalkDest = false;
  p2SimPickingLoc = false;
  if (p2SimPickListener) { p2SimPickListener.remove(); p2SimPickListener = null; }

  /* Reset panel UI */
  const coordsEl = document.getElementById('sim-coords');
  if (coordsEl) coordsEl.textContent = 'No position set';

  /* Ride controls */
  const rideBtn = document.getElementById('sim-ride-btn');
  const rideStopBtn = document.getElementById('sim-ride-stop-btn');
  if (rideBtn) { rideBtn.disabled = true; rideBtn.style.display = ''; }
  if (rideStopBtn) rideStopBtn.style.display = 'none';
  const rideInfo = document.getElementById('sim-ride-info');
  if (rideInfo) rideInfo.textContent = '';

  /* Walk controls */
  const walkBtn = document.getElementById('sim-walk-btn');
  const stopBtn = document.getElementById('sim-stop-btn');
  if (walkBtn) { walkBtn.disabled = true; walkBtn.style.display = ''; }
  if (stopBtn) stopBtn.style.display = 'none';
  const p2WalkNavReset = document.getElementById('p2-walking-nav-btn');
  if (p2WalkNavReset) { p2WalkNavReset.disabled = true; p2WalkNavReset.style.display = ''; }
  const p2WalkStopReset = document.getElementById('p2-walking-stop-btn');
  if (p2WalkStopReset) p2WalkStopReset.style.display = 'none';
  p2SimWalkPath = [];
  const walkInfo = document.getElementById('sim-walk-info');
  if (walkInfo) walkInfo.textContent = '';

  /* Walk section visible — let user choose walk or ride */
  const walkSection = document.getElementById('sim-walk-section');
  if (walkSection) walkSection.style.display = '';

  /* Status */
  const distEl = document.getElementById('sim-dist-val');
  const devEl = document.getElementById('sim-dev-val');
  const segEl = document.getElementById('sim-seg-val');
  if (distEl) distEl.textContent = '—';
  if (devEl) devEl.textContent = '—';
  if (segEl) segEl.textContent = '—';
  const headVal = document.getElementById('sim-heading-val');
  if (headVal) headVal.textContent = '0';

  const needle = document.getElementById('sim-compass-needle');
  const knob = document.getElementById('sim-compass-knob');
  if (needle) needle.style.transform = 'rotate(0deg)';
  if (knob) knob.style.transform = 'rotate(0deg) translateY(-64px)';

  p2SimMountIdleToast();
}

/* ========================================= */

// function loadNearbyBuildings(lat, lng, categoryEl) {
//   — Google Places API nearby search removed;
//   — replaced by static "Others Driver Suggestion Photos" placeholder.
// }
