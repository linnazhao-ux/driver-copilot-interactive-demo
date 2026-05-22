/* =========================================
   Page 0 — Order List
   ========================================= */

let ORDER_LIST_DATA = null;

async function loadOrderListData() {
  if (ORDER_LIST_DATA) return ORDER_LIST_DATA;
  try {
    const res = await fetch('data/order_list.json');
    const json = await res.json();
    ORDER_LIST_DATA = json;
    return json;
  } catch (e) {
    console.error('Failed to load order_list.json', e);
    ORDER_LIST_DATA = { cases: [] };
    return ORDER_LIST_DATA;
  }
}

function buildActionTagHtml(tag) {
  const cls = tag.style === 'filled_red' ? 'ol-action-tag ol-action-tag-red' : 'ol-action-tag ol-action-tag-outline';
  return `<span class="${cls}">${tag.text}</span>`;
}

function buildBuyerCardHtml(caseItem) {
  const remarkHtml = caseItem.remark
    ? `<div class="ol-card-remark">${caseItem.remark}</div>`
    : '';

  const actionTagsHtml = caseItem.actionTags && caseItem.actionTags.length
    ? `<div class="ol-card-action-row">${caseItem.actionTags.map(buildActionTagHtml).join('')}</div>`
    : '';

  return `
    <div class="ol-buyer-group" data-case-id="${caseItem.id}">
      <div class="ol-group-header">${caseItem.buyerName}</div>
      <div class="ol-card" data-case-id="${caseItem.id}" role="button" tabindex="0">
        <div class="ol-card-main">
          <div class="ol-card-left">
            <div class="ol-card-addr-row">
              <svg class="ol-pin-icon" viewBox="0 0 24 24" width="16" height="16" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#666"/>
              </svg>
              <span class="ol-card-addr">${caseItem.address}</span>
            </div>
            <div class="ol-card-order-count">${caseItem.orderCount} Orders</div>
          </div>
          <div class="ol-card-btns">
            <button class="ol-icon-btn" title="Call" onclick="event.stopPropagation()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
              </svg>
            </button>
            <button class="ol-icon-btn" title="Message" onclick="event.stopPropagation()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </button>
          </div>
        </div>
        ${remarkHtml}
        ${actionTagsHtml}
      </div>
    </div>`;
}

function renderPage0(data) {
  const cases = (data && data.cases) || [];
  const todoBadge = (data && data.todoBadgeCount) || 0;

  const listHtml = cases.length
    ? cases.map(buildBuyerCardHtml).join('')
    : '<div class="ol-empty">No orders available</div>';

  return `
    <div class="ol-root">

      <!-- App Bar -->
      <div class="ol-app-bar">
        <button class="ol-hamburger" title="Menu">
          <span class="ol-hamburger-dot"></span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
        <div class="ol-biz-selector">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="3" width="15" height="13" rx="1"/>
            <path d="M16 8l4 4-4 4"/>
          </svg>
          <span>Delivery</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div class="ol-bar-spacer"></div>
        <div class="ol-bar-icons">
          <button class="ol-bar-icon-btn" title="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button class="ol-bar-icon-btn" title="Call">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
            </svg>
          </button>
          <button class="ol-bar-icon-btn" title="More">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Tab Bar -->
      <div class="ol-tabs">
        <div class="ol-tab ol-tab-active">To-do <span class="ol-tab-badge">${todoBadge}</span></div>
        <div class="ol-tab">Handover</div>
        <div class="ol-tab">Delivered</div>
        <div class="ol-tab">On-Hold</div>
      </div>

      <!-- Sort Controls -->
      <div class="ol-sort-row">
        <button class="ol-sort-btn">Prioritise</button>
        <button class="ol-sort-btn ol-sort-btn-right">
          Default Sort
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
        </button>
      </div>

      <!-- Display in Map -->
      <div class="ol-map-btn" role="button">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
          <line x1="8" y1="2" x2="8" y2="18"/>
          <line x1="16" y1="6" x2="16" y2="22"/>
        </svg>
        <span>Display in Map</span>
      </div>

      <!-- Order List -->
      <div class="ol-list">
        ${listHtml}
      </div>

    </div>`;
}

function bindPage0Events() {
  /* Card clicks → navigate to Task Detail */
  document.querySelectorAll('.ol-card[data-case-id]').forEach(card => {
    card.addEventListener('click', () => {
      router.navigate('page1', { caseKey: card.dataset.caseId });
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  /* Tab interaction (demo: only To-do has data) */
  document.querySelectorAll('.ol-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ol-tab').forEach(t => t.classList.remove('ol-tab-active'));
      tab.classList.add('ol-tab-active');
    });
  });
}

async function initPage0() {
  const data = await loadOrderListData();

  /* If data was already cached the render in router._render used it correctly; otherwise re-render */
  const app = document.getElementById('app');
  if (app && router.currentPage === 'page0') {
    app.innerHTML = renderPage0(data);
    app.scrollTop = 0;
    const root = app.firstElementChild;
    if (root) root.classList.add('page-enter');
  }

  bindPage0Events();
}
