/* =========================================
   Page 1 — PT Task Detail
   ========================================= */

function buildTagHtml(tag) {
  let cls = 'tag ';
  switch (tag.style) {
    case 'filled_red':     cls += 'tag-filled-red'; break;
    case 'outline_warning': cls += 'tag-outline-warning'; break;
    default:               cls += 'tag-outline';
  }
  const icon = tag.icon === 'timer' ? '<span>⊙</span>' : '';
  return `<span class="${cls}">${icon}${tag.text}</span>`;
}

function renderPage1(params = {}) {
  const caseKey = params.caseKey || 'nongchang';
  const cases = (ORDER_LIST_DATA && ORDER_LIST_DATA.cases) || [];
  const caseData = cases.find(c => c.id === caseKey) || cases[0] || APP_DATA;

  const receiver = caseData.receiver;
  const payment  = caseData.payment;
  const orders   = caseData.orders || [];
  const orderCount = caseData.orderCount || orders.length;

  const orderRowsHtml = orders.map(order => {
    const tagsHtml = order.tags.map(buildTagHtml).join('');
    return `
      <div class="order-item">
        <div class="order-item-top">
          <span class="order-id">${order.id}</span>
          ${order.amount
            ? `<span class="order-amount">${order.amount} ${order.currency}</span>`
            : ''}
        </div>
        ${tagsHtml ? `<div class="order-tags">${tagsHtml}</div>` : ''}
      </div>`;
  }).join('');

  const paymentDetailsHtml = payment.details
    .map(d => `<span class="payment-detail-value">${d.type} ${d.amount} ${payment.currency}</span>`)
    .join('');

  return `
    <div class="page1-root">

      <!-- Back Button + Title -->
      <div class="p1-back-bar">
        <div class="p1-back-btn" id="p1-back">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </div>
        <span class="p1-back-title">Task Detail</span>
      </div>

      <!-- Address Header -->
      <div class="address-header">
        <div class="address-header-left">
          <div class="address-name">${receiver.name}</div>
          <div class="address-text">${receiver.address}</div>
        </div>
        <div class="nav-icon-btn" title="Navigate">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
          </svg>
        </div>
      </div>

      <!-- Hard to Find Banner -->
      <div class="hard-to-find-banner" id="htf-banner" role="button">
        <i class="htf-icon">i</i>
        <span class="htf-grey">Hard to find this location?&nbsp;</span>
        <span class="htf-blue">View Navigation Help</span>
        <span class="htf-chevron">›</span>
      </div>

      <div class="section-divider"></div>

      <!-- Payment Amount -->
      <div class="payment-section section-card">
        <div class="payment-header">
          <span class="payment-title">Payment Amount</span>
          <div class="payment-total-row" id="payment-toggle" role="button">
            <span class="payment-amount">${payment.total}</span>
            <span class="payment-currency">${payment.currency}</span>
            <span class="payment-caret up" id="payment-caret">▲</span>
          </div>
        </div>
        <div class="payment-detail-area open" id="payment-detail-area">
          <div class="payment-detail-inner">
            <span class="payment-detail-label">Detail</span>
            <div class="payment-detail-values">${paymentDetailsHtml}</div>
          </div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Receiver Information -->
      <div class="receiver-section section-card">
        <div class="receiver-title">Receiver Information</div>

        <div class="contact-block">
          <div class="contact-top-row">
            <span class="contact-name">${receiver.name}</span>
            <div class="contact-btns">
              <div class="icon-btn" title="Call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="icon-btn" title="Message">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="contact-phone">${receiver.phone}</div>
        </div>

        <div>
          <div class="alt-label">Alternative Phone</div>
          <div class="contact-top-row" style="margin-top:4px;">
            <span class="contact-phone" style="color:var(--text-secondary);">${receiver.alternativePhone}</span>
            <div class="contact-btns">
              <div class="icon-btn dim" title="Call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="icon-btn dim" title="Message">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Order List -->
      <div class="order-section section-card">
        <div class="order-title">Order List (${orderCount})</div>
        ${orderRowsHtml}
      </div>

      <!-- Sticky Bottom Action -->
      <div class="bottom-action">
        <button class="btn-primary">Update Order Status</button>
      </div>

    </div>`;
}

function initPage1(params = {}) {
  const caseKey = (params && params.caseKey) || 'nongchang';

  /* Back button */
  document.getElementById('p1-back')?.addEventListener('click', () => router.goBack());

  /* Hard to Find banner → navigate to page 2, passing caseKey */
  document.getElementById('htf-banner')?.addEventListener('click', () => {
    router.navigate('page2', { caseKey });
  });

  /* Payment amount expand / collapse */
  const toggle = document.getElementById('payment-toggle');
  const area   = document.getElementById('payment-detail-area');
  const caret  = document.getElementById('payment-caret');
  let expanded = true;

  toggle?.addEventListener('click', () => {
    expanded = !expanded;
    area.classList.toggle('open', expanded);
    caret.classList.toggle('up', expanded);
    caret.classList.toggle('down', !expanded);
    caret.textContent = expanded ? '▲' : '▼';
  });
}
