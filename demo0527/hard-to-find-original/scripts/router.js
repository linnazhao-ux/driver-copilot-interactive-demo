/**
 * Simple SPA router for the demo.
 * Manages page history and renders the correct page into #app.
 */
class Router {
  constructor() {
    this.currentPage = null;
    this.pageHistory = [];
    this.params = {};
  }

  /** Navigate forward to a new page */
  navigate(page, params = {}) {
    if (this.currentPage) {
      this.pageHistory.push({ page: this.currentPage, params: this.params });
    }
    this.currentPage = page;
    this.params = params;
    this._render('forward');
    this._syncStepIndicator(page);
    this._updateUrl(page, params);
  }

  /** Go back to the previous page */
  goBack() {
    if (this.pageHistory.length === 0) return;
    const prev = this.pageHistory.pop();
    this.currentPage = prev.page;
    this.params = prev.params;
    this._render('back');
    this._syncStepIndicator(prev.page);
    this._updateUrl(prev.page, prev.params);
  }

  /** Update the browser URL bar to reflect the current page/case */
  _updateUrl(page, params) {
    try {
      const url = new URL(window.location.href);
      if ((page === 'page1' || page === 'page2') && params.caseKey) {
        url.searchParams.set('case', params.caseKey);
      }
      /* Keep existing ?case= on page0 so deep links like ?case=hangdao work when opening page2 from the sidebar */
      history.replaceState(null, '', url.toString());
    } catch (e) {
      /* ignore if file:// protocol blocks history API */
    }
  }

  _render(direction) {
    const app = document.getElementById('app');

    /* Destroy any existing map instance (Leaflet has .remove(), Google Maps does not) */
    if (window._mapInstance) {
      if (typeof window._mapInstance.remove === 'function') {
        window._mapInstance.remove();
      }
      window._mapInstance = null;
    }
    /* Clean up body-level p2 image modal */
    document.getElementById('p2-img-modal')?.remove();

    /* Hide sim panel when leaving page2 */
    if (this.currentPage !== 'page2') {
      const simPanel = document.getElementById('sim-panel');
      if (simPanel) { simPanel.style.display = 'none'; simPanel.scrollTop = 0; }
    }

    let html = '';
    switch (this.currentPage) {
      case 'page0': html = renderPage0(ORDER_LIST_DATA); break;
      case 'page1': html = renderPage1(this.params); break;
      case 'page2': html = renderPage2(); break;
      case 'page3': html = renderPage3(this.params); break;
      default: html = '<div style="padding:40px;text-align:center">Page not found</div>';
    }

    app.innerHTML = html;
    app.scrollTop = 0;

    /* Trigger enter animation on the root element */
    const root = app.firstElementChild;
    if (root) {
      root.classList.add(direction === 'back' ? 'page-enter-back' : 'page-enter');
    }

    /* Post-render initializers */
    if (this.currentPage === 'page0') initPage0();
    if (this.currentPage === 'page1') initPage1(this.params);
    if (this.currentPage === 'page2') initPage2();
    if (this.currentPage === 'page3') initPage3();
  }

  _syncStepIndicator(page) {
    document.querySelectorAll('.step-item[data-page]').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
  }

  start() {
    /* Bind side-panel step clicks */
    document.querySelectorAll('.step-item[data-page]').forEach(el => {
      el.addEventListener('click', () => {
        this.pageHistory = [];
        this.navigate(el.dataset.page);
      });
    });

    this.navigate('page0');
  }
}

const router = new Router();
document.addEventListener('DOMContentLoaded', () => router.start());
