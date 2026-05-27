/* =========================================
   Page 3 — Improve Navigation
   ========================================= */

function renderPage3(params = {}) {
  return `
    <div class="improve-page">

      <!-- App Bar -->
      <div class="app-bar">
        <div class="app-bar-back" id="p3-back">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </div>
        <div class="app-bar-title">Improve Navigation</div>
        <div style="width:44px;flex-shrink:0;"></div>
      </div>

      <!-- Improve Suggestion Form -->
      <div class="feedback-form">
        <div class="feedback-form-title">Improve Suggestion</div>

        <!-- Photo upload -->
        <div class="form-field">
          <div class="field-label-row">
            <span class="field-label">Photo (Max 3)</span>
            <span class="field-count" id="photo-count-label">0/3</span>
          </div>
          <div class="photo-upload-area">
            <div class="photo-row" id="photo-row">
              <div class="photo-slot" id="add-photo-slot">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="photo-hint">Photos help most—show the building entrance or nearby landmark.</div>
        </div>

        <div class="form-divider"></div>

        <!-- Description -->
        <div class="form-field">
          <div class="field-label-row">
            <span class="field-label">Description</span>
            <span class="field-count" id="desc-count-label">0/100</span>
          </div>
          <textarea
            class="desc-textarea"
            id="desc-input"
            maxlength="100"
            placeholder='e.g., "Tip: Go through the blue gate and turn left..."'
          ></textarea>
        </div>
      </div>

      <!-- Submit -->
      <div class="submit-btn-wrap">
        <button class="btn-submit" id="submit-btn">Submit</button>
      </div>

    </div>`;
}

function initPage3() {
  /* Back button */
  document.getElementById('p3-back')?.addEventListener('click', () => router.goBack());

  /* Description character counter */
  const descInput = document.getElementById('desc-input');
  const descLabel = document.getElementById('desc-count-label');
  descInput?.addEventListener('input', () => {
    const len = descInput.value.length;
    descLabel.textContent = `${len}/100`;
    descLabel.classList.toggle('warn', len > 80);
  });

  /* Photo upload */
  const photoRow   = document.getElementById('photo-row');
  const countLabel = document.getElementById('photo-count-label');
  const MAX_PHOTOS = 3;
  let photos = []; // array of data-URL strings

  /* Hidden file input */
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);

  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (!file || photos.length >= MAX_PHOTOS) return;
    const reader = new FileReader();
    reader.onload = e => {
      photos.push(e.target.result);
      renderPhotos();
    };
    reader.readAsDataURL(file);
    fileInput.value = '';
  });

  function renderPhotos() {
    countLabel.textContent = `${photos.length}/3`;

    const thumbsHtml = photos.map((url, i) => `
      <div class="photo-thumb">
        <img src="${url}" alt="photo ${i + 1}" />
        <div class="photo-remove-btn" data-idx="${i}">✕</div>
      </div>`).join('');

    const addSlotHtml = photos.length < MAX_PHOTOS ? `
      <div class="photo-slot" id="add-photo-slot">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      </div>` : '';

    photoRow.innerHTML = thumbsHtml + addSlotHtml;
    bindPhotoEvents();
  }

  function bindPhotoEvents() {
    document.getElementById('add-photo-slot')?.addEventListener('click', () => {
      if (photos.length >= MAX_PHOTOS) return;
      fileInput.click();
    });

    photoRow.querySelectorAll('.photo-remove-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.idx, 10);
        photos.splice(idx, 1);
        renderPhotos();
      });
    });
  }

  bindPhotoEvents();

  /* Submit */
  const submitBtn = document.getElementById('submit-btn');
  submitBtn?.addEventListener('click', () => {
    submitBtn.textContent = '✓ Submitted!';
    submitBtn.classList.add('success');
    submitBtn.disabled = true;
    setTimeout(() => router.navigate('page2'), 1600);
  });
}
