const orders = [
  {
    id: "TH240052019881",
    displayId: "PH005314767368",
    buyer: "Nick Chan",
    phone: "6287772563080",
    address: "Jl. Letnan Jenderal S. Parman, Gradogol, 114370 Jakarta Cakung Satu",
    count: 1,
    category: "special",
    specialTypes: ["highFail", "expedited"],
    tags: ["Co-check", "COD", "ASF"],
    failRate: "56%",
    eta: "10:25",
    sla: "05/01/2021 12:00",
    note: "Call receiver before entering the guard house. Previous attempts failed after lobby access was denied.",
    receiverRemark: "Phone call during office hour.",
    alternativePhone: "6287772563123",
    risk: "High fail delivery rate",
    payment: "3,100 PHP",
    cod: "3,000 PHP",
    asf: "100 PHP",
    hub: "KRAMAT JATI2",
    itemCount: 40,
    packageType: "Shops&Services"
  },
  {
    id: "TH240052019915",
    displayId: "PH005314767421",
    buyer: "Nick Chan",
    phone: "6287772563080",
    address: "No. 18 Jalan Setia, shop lot behind loading bay",
    count: 1,
    category: "special",
    specialTypes: ["expedited"],
    tags: ["Urgent", "Shops&Services", "COD", "ASF"],
    failRate: "18%",
    eta: "10:42",
    sla: "05/01/2021 12:00",
    note: "Expedite parcel. Receiver is available before 11:00 only.",
    receiverRemark: "Leave parcel at receptionist if receiver is not reachable.",
    alternativePhone: "6287772563123",
    risk: "Expedited order",
    payment: "3,100 PHP",
    cod: "3,000 PHP",
    asf: "100 PHP",
    hub: "KRAMAT JATI2",
    itemCount: 12,
    packageType: "Shops&Services"
  },
  {
    id: "TH240052019942",
    displayId: "PH005314767588",
    buyer: "Nur H.",
    phone: "6287772563081",
    address: "Kampung Baru, Road 3, blue gate near mini mart",
    count: 1,
    category: "special",
    specialTypes: ["specialFlow"],
    tags: ["COD"],
    failRate: "9%",
    eta: "11:10",
    sla: "05/01/2021 12:00",
    note: "Redelivery after fake on-hold review. Keep parcel in delivering status.",
    receiverRemark: "Call before delivery.",
    alternativePhone: "6287772563123",
    risk: "Special delivery flow",
    payment: "2,400 PHP",
    cod: "2,300 PHP",
    asf: "100 PHP",
    hub: "KRAMAT JATI2",
    itemCount: 8,
    packageType: "Home"
  },
  {
    id: "TH240052019977",
    displayId: "PH005314767602",
    buyer: "Lim W.",
    phone: "6287772563082",
    address: "Factory Gate 2, South Entrance, security counter",
    count: 1,
    category: "special",
    specialTypes: ["specialFlow"],
    tags: ["Hard- find Address", "NSS", "COD"],
    failRate: "6%",
    eta: "11:28",
    sla: "05/01/2021 12:00",
    note: "Leave parcel at security counter after receiver confirmation.",
    receiverRemark: "Receiver will pick up at security counter.",
    alternativePhone: "6287772563123",
    risk: "Normal",
    payment: "1,800 PHP",
    cod: "1,700 PHP",
    asf: "100 PHP",
    hub: "KRAMAT JATI2",
    itemCount: 5,
    packageType: "NSS"
  },
  {
    id: "TH240052020031",
    displayId: "PH005314767699",
    buyer: "Rina A.",
    phone: "6287772563083",
    address: "Jl. Melati Raya No. 22, Tower B lobby, Jakarta Timur",
    count: 1,
    category: "normal",
    specialTypes: [],
    tags: ["Home", "COD"],
    failRate: "5%",
    eta: "11:45",
    sla: "05/01/2021 12:00",
    note: "Deliver to Tower B lobby after receiver confirmation.",
    receiverRemark: "Receiver is available before lunch.",
    alternativePhone: "6287772563124",
    risk: "Normal",
    payment: "1,600 PHP",
    cod: "1,500 PHP",
    asf: "100 PHP",
    hub: "KRAMAT JATI2",
    itemCount: 3,
    packageType: "Home"
  }
];

const drivers = [
  { name: "Jim", zone: "2.1 km away, 7 open tasks", score: "Can reach SLA in 18 min" },
  { name: "Ravi", zone: "3.4 km away, 4 open tasks", score: "Best capacity match" },
  { name: "Mei", zone: "4.0 km away, 5 open tasks", score: "Same hub, familiar route" }
];

const exceptionOrders = [
  {
    id: "EX240052020101",
    displayId: "PH005314768101",
    buyer: "Aditya R.",
    phone: "6287772563091",
    address: "Ruko Sentra Niaga Blok C12, Jakarta Timur",
    count: 1,
    category: "exception",
    specialTypes: [],
    tags: ["RTS", "COD"],
    failRate: "0%",
    eta: "12:10",
    sla: "05/01/2021 12:00",
    note: "Return to sender request confirmed by backend review.",
    receiverRemark: "Do not attempt delivery. Bring parcel back to hub.",
    alternativePhone: "6287772563191",
    risk: "Return to sender",
    payment: "2,100 PHP",
    cod: "2,000 PHP",
    asf: "100 PHP",
    hub: "KRAMAT JATI2",
    itemCount: 1,
    packageType: "Home",
    exceptionReason: "RTS",
    exceptionBanner: "This order don't need delivery, please bring back to hub"
  },
  {
    id: "EX240052020118",
    displayId: "PH005314768118",
    buyer: "Dewi S.",
    phone: "6287772563092",
    address: "Cluster Anggrek 8, Guard Post North Gate",
    count: 1,
    category: "exception",
    specialTypes: [],
    tags: ["reschedule", "Home"],
    failRate: "0%",
    eta: "12:25",
    sla: "05/02/2021 12:00",
    note: "Buyer rescheduled delivery to tomorrow after driver pickup.",
    receiverRemark: "Do not deliver today. Return parcel to hub custody.",
    alternativePhone: "6287772563192",
    risk: "Rescheduled by buyer",
    payment: "0 PHP",
    cod: "0 PHP",
    asf: "0 PHP",
    hub: "KRAMAT JATI2",
    itemCount: 1,
    packageType: "Home",
    exceptionReason: "reschedule",
    exceptionBanner: "This order don't need delivery today, please bring back to hub"
  },
  {
    id: "EX240052020126",
    displayId: "PH005314768126",
    buyer: "Maya P.",
    phone: "6287772563093",
    address: "Jl. Kenanga Baru No. 7, warehouse reception",
    count: 1,
    category: "exception",
    specialTypes: [],
    tags: ["Relabel", "NSS"],
    failRate: "0%",
    eta: "12:40",
    sla: "05/01/2021 12:00",
    note: "Label damaged during sorting. Parcel must be relabeled before next attempt.",
    receiverRemark: "Bring back to hub for relabeling.",
    alternativePhone: "6287772563193",
    risk: "Relabel required",
    payment: "0 PHP",
    cod: "0 PHP",
    asf: "0 PHP",
    hub: "KRAMAT JATI2",
    itemCount: 1,
    packageType: "NSS",
    exceptionReason: "Relabel",
    exceptionBanner: "This order don't need delivery before relabeling, please bring back to hub"
  }
];

const state = {
  screen: "home",
  activeScenario: "home",
  selectedOrderId: orders[0].id,
  selectedStop: 0,
  selectedDriver: 0,
  showTransfer: false,
  submittedTransfer: false,
  showDrawer: false,
  showComingSoon: false,
  comingSoonTop: 360,
  toastText: "Coming soon",
  deliveryTab: "To-do",
  briefBackScreen: "todo",
  transferMode: "single",
  paymentExpanded: true,
  itemExpanded: true,
  selectedContactPhone: orders[0].phone,
  navMapType: "street",
  navZoom: 1,
  navMapExpanded: false,
  lightbox: null,
  walkingActive: false,
  navSubmitted: false,
  improvePhotos: [],
  improveDescription: "",
  chatbotScenario: "welcome",
  chatbotFeedback: null,
  chatbotBackScreen: "home",
  selectedNotificationId: "redelivery",
  scanBackScreen: "home"
};

let comingSoonTimer = null;

const icons = {
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
  home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
  clipboard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6l1 2h3v16H5V5h3z"/><path d="M9 9h6"/><path d="M9 13h6"/><path d="M9 17h4"/></svg>',
  settings: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.7 1.7 0 00.34 1.88l.04.04a2 2 0 01-2.83 2.83l-.04-.04A1.7 1.7 0 0015 19.4a1.7 1.7 0 00-1 .6 1.7 1.7 0 00-.4 1.08V21a2 2 0 01-4 0v-.08A1.7 1.7 0 008.6 19.4a1.7 1.7 0 00-1.88.34l-.04.04a2 2 0 01-2.83-2.83l.04-.04A1.7 1.7 0 004.6 15a1.7 1.7 0 00-.6-1 1.7 1.7 0 00-1.08-.4H3a2 2 0 010-4h.08A1.7 1.7 0 004.6 8.6a1.7 1.7 0 00-.34-1.88l-.04-.04a2 2 0 012.83-2.83l.04.04A1.7 1.7 0 009 4.6c.35 0 .7-.1 1-.3a1.7 1.7 0 00.6-1.22V3a2 2 0 014 0v.08c0 .48.2.92.6 1.22.3.2.65.3 1 .3a1.7 1.7 0 001.88-.34l.04-.04a2 2 0 012.83 2.83l-.04.04A1.7 1.7 0 0019.4 9c0 .35.1.7.3 1 .3.4.74.6 1.22.6H21a2 2 0 010 4h-.08a1.7 1.7 0 00-1.52.4z"/></svg>',
  ticket: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h6"/><path d="M9 15h4"/></svg>',
  qr: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm11-2h2v2h-2v-2zm3 0h2v3h-2v-3zm-5 4h2v3h-2v-3zm3 1h4v2h-4v-2z"/></svg>',
  scan: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 3H4a1 1 0 00-1 1v3"/><path d="M17 3h3a1 1 0 011 1v3"/><path d="M7 21H4a1 1 0 01-1-1v-3"/><path d="M17 21h3a1 1 0 001-1v-3"/><path d="M7 12h10"/></svg>',
  pickup: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 7h12l-1 14H7L6 7z"/><path d="M9 7a3 3 0 016 0"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>',
  user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',
  bot: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="8" width="14" height="10" rx="3"/><path d="M12 4v4"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M9 18v2h6v-2"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  bell: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',
  box: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>',
  msg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
  back: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>',
  more: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>',
  nav: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>'
};

function appBar(title = "Delivery", withBack = false) {
  if (withBack) {
    return `
      <div class="back-bar">
        <button class="icon-btn" data-action="back">${icons.back}</button>
        <span class="app-title">${title}</span>
      </div>`;
  }

  const chipIcon = title === "Home" ? icons.home : title === "Chatbot" ? icons.bot : title === "Profile" ? icons.user : icons.box;
  return `
    <div class="app-bar app-bar-left-chip">
      <div class="biz-chip">${chipIcon} <span>${title}</span>${title === "Delivery" ? ' <span class="chip-caret">▾</span>' : ""}</div>
      <div class="spacer"></div>
      <button class="app-icon-btn">${icons.search}</button>
      <button class="app-icon-btn" data-action="message-center">${icons.bell}</button>
    </div>`;
}

function bottomNavActive() {
  if (state.screen === "home") return "home";
  if (state.screen === "chatbot") return "chatbot";
  if (state.screen === "profile") return "profile";
  return "todo";
}

function shouldShowBottomNav() {
  return ["home", "todo", "delay", "profile"].includes(state.screen);
}

function chatbotAppBar() {
  return `
    <div class="app-bar app-bar-left-chip chatbot-app-bar">
      <button class="app-icon-btn chatbot-back-btn" data-action="back" aria-label="Back">${icons.back}</button>
      <div class="biz-chip">${icons.bot} <span>Chatbot</span></div>
      <div class="spacer"></div>
      <button class="app-icon-btn">${icons.search}</button>
      <button class="app-icon-btn" data-action="message-center">${icons.bell}</button>
    </div>`;
}

function renderBottomNav() {
  const active = bottomNavActive();
  const items = [
    { key: "home", label: "Homepage", icon: icons.home, action: "bottom-home" },
    { key: "todo", label: "To do", icon: icons.box, action: "bottom-todo" },
    { key: "chatbot", label: "Chatbot", icon: icons.bot, action: "bottom-chatbot" },
    { key: "profile", label: "Profile", icon: icons.user, action: "bottom-profile" }
  ];
  return items.map(item => `
    <button class="bottom-tab ${item.primary ? "primary" : ""} ${active === item.key ? "active" : ""}" data-action="${item.action}">
      <span class="bottom-tab-icon">${item.icon}</span>
      <span class="bottom-tab-label">${item.label}</span>
    </button>`).join("");
}

function tabs(active = "To-do", counts = { todo: orders.length, delivered: 15, onHold: 2 }) {
  const items = [
    { label: "To-do", count: counts.todo },
    { label: "Delivered", count: counts.delivered },
    { label: "On-Hold", count: counts.onHold }
  ];
  return `
    <div class="tabs">
      ${items.map(item => `<button class="tab ${item.label === active ? "active" : ""}" data-action="select-delivery-tab" data-tab="${item.label}">${item.label} <span>(${item.count})</span></button>`).join("")}
    </div>`;
}

function sortRow() {
  return `
    <div class="sort-row">
      <button>District ▾</button>
      <button>Urgent SLA</button>
      <button>Grouping</button>
      <button>Default ▾</button>
    </div>`;
}

function tagHtml(tag) {
  const cls = tag.includes("Urgent") ? "red" : tag.includes("EDD") || tag.includes("RTS") || tag.includes("reschedule") || tag.includes("Relabel") ? "warn" : tag.includes("Special") || tag.includes("Redelivery") || tag.includes("Hard") ? "blue" : "";
  const icon = tag.includes("Urgent") ? '<span class="tag-bolt">⚡</span>' : "";
  return `<span class="tag ${cls}">${icon}${tag}</span>`;
}

function briefStats() {
  const normal = orders.filter(order => order.category === "normal").length;
  const highFail = orders.filter(order => order.specialTypes.includes("highFail")).length;
  const expedited = orders.filter(order => order.specialTypes.includes("expedited")).length;
  const specialFlow = orders.filter(order => order.specialTypes.includes("specialFlow")).length;
  const special = orders.length - normal;
  return { total: orders.length, normal, special, highFail, expedited, specialFlow };
}

function phoneVerifiedDot(order) {
  return order.displayId === "PH005314767368" ? '<span class="ok-dot">✓</span>' : "";
}

function failRateBadge(order, extraClass = "") {
  if (order.displayId !== "PH005314767368") return "";
  return `<div class="fail-rate-corner ${extraClass}"><strong>${order.failRate}</strong><span>Fail rate</span></div>`;
}

function allOrders() {
  return [...orders, ...exceptionOrders];
}

function deliveredOrders() {
  return orders.filter(order => order.displayId === "PH005314767699");
}

function orderCard(order, options = {}) {
  const transferButton = options.transfer
    ? `<button class="transfer-btn" data-action="open-transfer"><span>Transfer</span><span class="transfer-arrow">›</span></button>`
    : "";
  const guidance = order.tags.includes("Hard- find Address")
    ? `<button class="guidance-btn" data-action="open-hard-guidance" data-order="${order.id}"><span>Address Guidance</span><span class="guidance-arrow">›</span></button>`
    : "";
  const tags = `${order.tags.map(tagHtml).join("")}${guidance}`;
  const phoneDot = phoneVerifiedDot(order);
  const failRate = failRateBadge(order, "list-fail-rate");
  return `
    <section class="order-card" data-order="${order.id}" role="button" tabindex="0">
      <div class="order-id-row">
        <div class="order-id-left">
          <span>${order.displayId}</span>
          <span class="copy-icon">□</span>
        </div>
        ${transferButton}
      </div>
      <div class="order-top">
        <div class="order-main">
          <div class="address"><span class="pin-dot">${icons.pin}</span>${order.address}</div>
          <div class="receiver-label">Receiver</div>
          <div class="receiver-name">${order.buyer}</div>
        </div>
        <div class="order-card-side">
          ${failRate}
          <div class="actions vertical-actions">
            <button class="round-action" data-action="contact">${icons.phone}${phoneDot}</button>
            <button class="round-action" data-action="contact">${icons.msg}</button>
          </div>
        </div>
      </div>
      ${tags ? `<div class="tag-row">${tags}</div>` : ""}
    </section>`;
}

function deliveredOrderCard(order) {
  return `
    <section class="delivered-list-card" data-order="${order.id}" role="button" tabindex="0">
      <div class="delivered-list-id-row">
        <span>${order.displayId}</span>
        <span class="copy-icon">□</span>
      </div>
      <div class="delivered-list-body">
        <h3><span class="pin-dot">${icons.pin}</span>${order.address}</h3>
        <div class="delivered-buyer">${order.buyer}</div>
        <div class="delivered-time-row"><span>✓</span>Delivered time : 12/08/2021 23:00</div>
      </div>
    </section>`;
}

function briefCard({ compact = false } = {}) {
  const stats = briefStats();
  return `
    <section class="progress-report-card task-brief-report-card" data-action="brief-detail" role="button" tabindex="0">
      <div class="progress-head">
        <div>
          <strong>Task Brief</strong>
          <span>Today · ${stats.total} to-do orders</span>
        </div>
        <span class="brief-today-tag">Today</span>
      </div>
      <div class="progress-grid brief-two-metrics">
        <div><strong>${stats.normal}</strong><span>Normal</span></div>
        <div><strong>${stats.special}</strong><span>Special</span></div>
      </div>
    </section>`;
}

function renderHomePage() {
  const stats = briefStats();
  const hardFindOrder = orders.find(order => order.tags.includes("Hard- find Address")) || orders[3];
  return `
    <div class="home-page">
      <section class="home-dashboard-head">
        <div class="home-search-row">
          <span class="home-weather">20°C</span>
          <button class="home-search-pill">${icons.search}<span>Search order by order number or phone number</span></button>
          <button class="home-head-icon" data-action="message-center" aria-label="Message center">${icons.bell}</button>
          <button class="home-head-icon home-scan-btn" data-action="bottom-scan" aria-label="Scan parcel">${icons.scan}</button>
        </div>
        <div class="home-dashboard-card today-summary">
          <button class="summary-main summary-assigned" data-action="home-tab-jump" data-tab="To-do"><strong>${stats.total}</strong><span>Assigned Today</span></button>
          <div class="summary-stack">
            <button data-action="home-tab-jump" data-tab="Delivered"><strong>0</strong><span>Delivered</span></button>
            <button data-action="home-tab-jump" data-tab="To-do"><strong>5</strong><span>Pending</span><em>1 Urgent</em></button>
          </div>
          <button class="summary-main summary-income"><strong>0 PHP</strong><span>Incoming</span></button>
        </div>
      </section>

      <section class="home-notice-card" data-action="notification-detail" data-notification="redelivery" role="button" tabindex="0">
        <span class="notice-icon">${icons.bell}</span>
        <span>One order need redelivery</span>
        <em>1h ago</em>
        <b>›</b>
      </section>

      <section class="home-tool-grid">
        <button data-action="brief-detail"><span class="tool-icon red">${icons.clipboard}</span><strong>Today Task</strong></button>
        <button data-action="exception-orders"><span class="tool-icon gold">${icons.ticket}</span><strong>Exception Order</strong></button>
        <button data-action="coming-soon"><span class="tool-icon green">${icons.clipboard}</span><strong>Monthly Report</strong></button>
        <button data-action="coming-soon"><span class="tool-icon more">•••</span><strong>More</strong></button>
      </section>

      <section class="home-banner-carousel">
        <div class="home-banner-viewport">
          <div class="home-banner-track">
            <div class="home-banner-card reward" data-action="invite-rewards" role="button" tabindex="0">
              <div>
                <strong>Invite Rewards</strong>
                <span>Invite couriers and earn extra bonuses</span>
              </div>
              <button>View</button>
            </div>
            <div class="home-banner-card learning" data-action="learning-center" role="button" tabindex="0">
              <div>
                <strong>Learning Center</strong>
                <span>Quick SOP tips for delivery exceptions</span>
              </div>
              <button>Start</button>
            </div>
            <div class="home-banner-card reward" data-action="invite-rewards" role="button" tabindex="0" aria-hidden="true">
              <div>
                <strong>Invite Rewards</strong>
                <span>Invite couriers and earn extra bonuses</span>
              </div>
              <button>View</button>
            </div>
          </div>
        </div>
        <div class="home-banner-dots"><span></span><span></span></div>
      </section>
    </div>`;
}

function renderTodo() {
  const activeTab = state.deliveryTab || "To-do";
  const counts = { todo: 5, delivered: 0, onHold: 0 };
  if (activeTab === "Delivered") {
    return `
      ${appBar()}
      ${tabs(activeTab, counts)}
      <div class="content delivered-list-page">
        <div class="empty-tab-state">No delivered order</div>
      </div>`;
  }
  if (activeTab === "On-Hold") {
    return `
      ${appBar()}
      ${tabs(activeTab, counts)}
      <div class="content delivered-list-page">
        <div class="empty-tab-state">No on-hold orders</div>
      </div>`;
  }
  return `
    ${appBar()}
    ${tabs(activeTab, counts)}
    ${sortRow()}
    <div class="content">
      ${briefCard()}
      <div class="group-header">To-do orders</div>
      ${orders.map(order => orderCard(order)).join("")}
    </div>`;
}

function renderExceptionOrders() {
  return `
    ${appBar("Exception Order", true)}
    <div class="content exception-order-page">
      <section class="exception-list-banner">${exceptionOrders.length} order don't need delivery, please bring back to hub</section>
      <div class="group-header">Bring back to hub</div>
      ${exceptionOrders.map(order => orderCard(order)).join("")}
    </div>`;
}

function briefOrderCard(order) {
  const phoneDot = phoneVerifiedDot(order);
  return `
    <section class="order-card special-order-card ${order.specialTypes.includes("highFail") ? "has-fail-rate" : ""}" data-order="${order.id}" role="button" tabindex="0">
      <div class="order-id-row">
        <span>${order.displayId}</span>
        <span class="copy-icon">□</span>
      </div>
      <div class="special-main">
        <div class="address"><span class="pin-dot">${icons.pin}</span>${order.address}</div>
        <div class="special-meta-row">
          <div class="order-count">${order.risk}</div>
          <div class="special-side">
            ${order.specialTypes.includes("highFail") ? `<div class="fail-rate-corner"><strong>${order.failRate}</strong><span>Fail rate</span></div>` : ""}
            <div class="actions vertical-actions">
              <button class="round-action" data-action="contact">${icons.phone}${phoneDot}</button>
              <button class="round-action" data-action="contact">${icons.msg}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="tag-row">${order.tags.map(tagHtml).join("")}</div>
    </section>`;
}

function briefOrderGroup(title, items) {
  if (!items.length) return "";
  return `
    <div class="special-list-title">${title} <span>${items.length}</span></div>
    ${items.map(briefOrderCard).join("")}`;
}

function renderBriefDetail() {
  const stats = briefStats();
  const highFailOrders = orders.filter(order => order.specialTypes.includes("highFail"));
  const expeditedOrders = orders.filter(order => order.specialTypes.includes("expedited") && !order.specialTypes.includes("highFail"));
  const specialFlowOrders = orders.filter(order => order.specialTypes.includes("specialFlow") && !order.specialTypes.includes("highFail") && !order.specialTypes.includes("expedited"));
  const normalOrders = orders.filter(order => order.category === "normal");
  return `
    ${appBar("Task Brief", true)}
    <div class="detail-header brief-detail-head">
      <div class="detail-title-row">
        <div>
          <h2>Task Brief</h2>
          <div class="muted">Today · ${stats.total} to-do orders</div>
        </div>
      </div>
      <div class="brief-sop-list">
        <div class="brief-sop-row high">
          <span class="sop-dot"></span>
          <p><span><strong>${stats.highFail} orders</strong> have high fail delivery risk</span><em>Suggest: Contact buyer in advance</em></p>
        </div>
        <div class="brief-sop-row expedited">
          <span class="sop-dot"></span>
          <p><span><strong>1 orders</strong> is urgent</span><em>Suggest: Prioritize delivery</em></p>
        </div>
        <div class="brief-sop-row flow">
          <span class="sop-dot"></span>
          <p><span><strong>${stats.specialFlow} orders</strong> have special delivery flow</span><em>Suggest: Allow sufficient delivery time</em></p>
        </div>
        <div class="brief-sop-row normal">
          <span class="sop-dot"></span>
          <p><span><strong>${stats.normal} orders</strong> are normal</span><em>Suggest: Follow normal sequence</em></p>
        </div>
      </div>
    </div>
    ${briefOrderGroup("High Fail Delivery Risk", highFailOrders)}
    ${briefOrderGroup("Expedited Order", expeditedOrders)}
    ${briefOrderGroup("Special Delivery Flow", specialFlowOrders)}
    ${briefOrderGroup("Normal Order", normalOrders)}`;
}

function renderOrderDetail() {
  const order = allOrders().find(item => item.id === state.selectedOrderId) || orders[0];
  if (state.deliveryTab === "Delivered" && order.displayId === "PH005314767699") {
    return renderDeliveredOrderDetail(order);
  }
  const phoneDot = phoneVerifiedDot(order);
  const detailTags = order.displayId === "PH005314767588"
    ? [...new Set(["Redelivery", ...order.tags])]
    : order.tags;
  const exceptionBanner = order.category === "exception"
    ? `<div class="exception-detail-banner">${order.exceptionBanner}</div>`
    : "";
  const paymentSection = order.tags.includes("COD")
    ? `<section class="detail-card">
        <div class="payment-head collapsible-head" data-action="toggle-payment" role="button" tabindex="0">
          <div class="section-title">Payment Amount</div>
          <strong>${order.payment}</strong>
          <span class="collapse-icon ${state.paymentExpanded ? "expanded" : ""}" aria-hidden="true"></span>
        </div>
        <div class="payment-detail ${state.paymentExpanded ? "" : "collapsed"}">
          <span>Detail</span>
          <div>
            <strong>COD ${order.cod}</strong>
            <strong>ASF ${order.asf}</strong>
          </div>
        </div>
      </section>`
    : "";
  return `
    ${appBar("Order Info", true)}
    <div class="order-detail-page">
      ${exceptionBanner}
      <div class="sla-row">SLA Target Time : ${order.sla}</div>
      <section class="detail-card detail-address-card">
        <div class="order-id-row">
          <span>${order.displayId}</span>
          <span class="copy-icon">□</span>
        </div>
        <div class="detail-address-row">
          <div>
            <h2>${order.address}</h2>
          </div>
          <div class="detail-address-side">
            ${failRateBadge(order, "detail-fail-rate")}
            <button class="nav-round">${icons.nav}</button>
          </div>
        </div>
        <div class="tag-row">${detailTags.map(tagHtml).join("")}</div>
      </section>

      ${order.displayId === "PH005314767602" ? `
        <div class="hard-find-entry" data-action="nav-help" role="button" tabindex="0">
          <span class="info-dot">i</span>
          <span>Hard to find this address?</span>
          <strong>View Navigation Help</strong>
          <span class="spacer"></span>
          <span class="htf-chevron">›</span>
        </div>
      ` : ""}

      ${paymentSection}

      <section class="detail-card">
        <div class="section-title section-bordered">Buyer Information</div>
        <div class="detail-contact-row">
          <div>
            <div class="receiver-name detail-name">${order.buyer}</div>
            <div class="muted">${order.phone}</div>
          </div>
          <div class="actions">
            <button class="round-action" data-action="dial" data-phone="${order.phone}">${icons.phone}${phoneDot}</button>
            <button class="round-action" data-action="sms" data-phone="${order.phone}">${icons.msg}</button>
          </div>
        </div>
        <div class="detail-contact-row alt-phone-row">
          <div>
            <div class="receiver-label">Alternative Phone</div>
            <div class="muted">${order.alternativePhone}</div>
          </div>
          <div class="actions">
            <button class="round-action" data-action="dial" data-phone="${order.alternativePhone}">${icons.phone}${phoneDot}</button>
            <button class="round-action" data-action="sms" data-phone="${order.alternativePhone}">${icons.msg}</button>
          </div>
        </div>
        <p class="detail-note">Delivery Instruction : ${order.note}</p>
        <p class="detail-note">Receiver Remark : ${order.receiverRemark}</p>
        <button class="add-remark"><span>+</span> Add Receiver Remark</button>
      </section>

      <section class="detail-card info-row-card">
        <div class="section-title">Assigned Hub</div>
        <strong>${order.hub}</strong>
      </section>

      <section class="detail-card item-card">
        <div class="info-row-card item-head collapsible-head" data-action="toggle-item" role="button" tabindex="0">
          <div class="section-title">Item</div>
          <strong>${order.itemCount}</strong>
          <span class="collapse-icon ${state.itemExpanded ? "expanded" : ""}" aria-hidden="true"></span>
        </div>
        <div class="sku-list ${state.itemExpanded ? "" : "collapsed"}">
          <span>SKU Name 1</span>
          <span>SKU Name 2</span>
          <span>SKU Name 3</span>
          <span>SKU Name 4</span>
          <span>SKU Name 5</span>
        </div>
      </section>
      <div class="bottom-action">
        <button class="btn-primary" data-action="update-delivery-status">Update Delivery Status</button>
      </div>
    </div>`;
}

function deliveredInfoBlock(title, content) {
  return `
    <section class="delivered-info-block">
      <div class="delivered-info-title">${title}</div>
      <div class="delivered-info-content">${content}</div>
    </section>`;
}

function renderDeliveredOrderDetail(order) {
  const deliveredTags = order.tags.filter(tag => tag === "COD");
  return `
    ${appBar("Order Info", true)}
    <div class="delivered-detail-page">
      <section class="delivered-status-strip">
        <span class="delivered-status-check">✓</span>
        <strong>Delivered</strong>
        <button>POD Uploading <span>›</span></button>
      </section>

      <section class="delivered-hero-card">
        <div class="delivered-detail-id"><strong>${order.displayId}</strong></div>
        <div class="delivered-detail-address">
          <h2>${order.address}</h2>
          <button aria-label="Location">${icons.pin}</button>
        </div>
        <div class="tag-row delivered-detail-tags">${deliveredTags.map(tagHtml).join("")}</div>
      </section>

      ${deliveredInfoBlock("Buyer Information", `
        <div class="delivered-contact-row">
          <div>
            <strong>${order.buyer}</strong>
            <span>Tel : ${order.phone}</span>
          </div>
          <div class="delivered-contact-actions">
            <button data-action="sms" data-phone="${order.phone}" aria-label="Message">${icons.msg}</button>
            <button data-action="dial" data-phone="${order.phone}" aria-label="Call">${icons.phone}</button>
          </div>
        </div>
      `)}

      ${deliveredInfoBlock("Delivery Instruction", `<p>${order.note}</p>`)}
      ${deliveredInfoBlock("Delivered Time", `<p>12/08/2021 23:00</p>`)}
      ${deliveredInfoBlock("SLA Target Time", `<p>${order.sla}</p>`)}
      ${deliveredInfoBlock("Price", `<p>Payment Pending</p><strong>${order.payment}</strong>`)}
    </div>`;
}

function renderScanPage() {
  return `
    <section class="scan-page">
      <div class="scan-photo">
        <img src="assets/scan-camera.svg" alt="" />
      </div>
      <div class="scan-topbar">
        <button class="scan-top-btn" data-action="back">${icons.back}</button>
        <strong>Scan</strong>
        <button class="scan-edit-btn" aria-label="Edit scan area">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.8 4.4l3.8 3.8M4 20h4.4L20 8.4 15.6 4 4 15.6V20z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.8 20h7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div class="scan-line"></div>
      <div class="scan-light-tip">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2h6v4l-2 3v2h-2V9L9 6V2zm2 11h2v8h-2v-8zm-2 8h6v1H9v-1z" fill="currentColor"/></svg>
        <span>Tap to turn light on</span>
      </div>
      <div class="scan-copy">Scan parcel before operation.</div>
    </section>`;
}

const chatbotFlows = {
  welcome: {
    chips: [
      { label: "How do I upload POD?", scenario: "pod" },
      { label: "Where is my COD payment?", scenario: "payment" },
      { label: "I cannot login", scenario: "login" },
      { label: "I have two issues", scenario: "multi" }
    ]
  },
  pod: {
    user: "How do I upload POD?",
    intent: "Delivery SOP",
    tag: "pod_upload",
    confidence: "92%",
    status: "Personalized answer",
    hideMeta: true,
    reply: [
      "You can upload POD after selecting the target delivery order.",
      "Make sure the proof photo clearly shows the parcel and delivery location before submitting.",
      "If the buyer is unreachable, use the on-hold SOP instead of uploading POD."
    ],
    path: ["To do", "Open target order", "Update Delivery Status", "Scan parcel", "Upload POD photo", "Submit"],
    next: "Need more help? I can create a support ticket for this order.",
    chips: [
      { label: "Create support ticket", scenario: "human" },
      { label: "Ask about COD payment", scenario: "payment" },
      { label: "Start new question", scenario: "welcome" }
    ]
  },
  payment: {
    user: "Where is my COD payment?",
    intent: "Payment",
    tag: "cod_reconciliation",
    confidence: "88%",
    status: "FMS data retrieved",
    reply: [
      "Your current COD collection for today's route is 0 PHP.",
      "No pending COD settlement is detected for this device session.",
      "If the amount looks wrong after route completion, create a payment support ticket."
    ],
    next: "This answer uses available FMS data. If data is delayed, I can help with general payment SOP instead.",
    chips: [
      { label: "Create payment ticket", scenario: "human" },
      { label: "Ask delivery SOP", scenario: "pod" },
      { label: "Start new question", scenario: "welcome" }
    ]
  },
  login: {
    user: "I cannot login",
    intent: "Account",
    tag: "login_issue",
    confidence: "57%",
    status: "Low confidence",
    reply: [
      "I need one more detail to route this correctly.",
      "Are you unable to receive OTP, seeing an account error, or using a new device?"
    ],
    clarification: [
      { label: "OTP issue", scenario: "loginOtp" },
      { label: "Account suspended", scenario: "suspended" },
      { label: "New device login", scenario: "loginDevice" }
    ]
  },
  loginOtp: {
    user: "OTP issue",
    intent: "Account",
    tag: "login_otp_issue",
    confidence: "91%",
    status: "Clarified tag",
    reply: [
      "Check that your registered phone number is active and has network signal.",
      "Wait 60 seconds before requesting a new OTP.",
      "If OTP still does not arrive, I can create an account support ticket."
    ],
    chips: [
      { label: "Create account ticket", scenario: "human" },
      { label: "Start new question", scenario: "welcome" }
    ]
  },
  loginDevice: {
    user: "New device login",
    intent: "Account",
    tag: "device_change",
    confidence: "86%",
    status: "Clarified tag",
    reply: [
      "Use your registered phone number and complete OTP verification on the new device.",
      "If the app says device verification failed, contact hub support or create an account ticket here."
    ],
    chips: [
      { label: "Create account ticket", scenario: "human" },
      { label: "Start new question", scenario: "welcome" }
    ]
  },
  suspended: {
    user: "Account suspended",
    intent: "Account",
    tag: "driver_suspended",
    confidence: "94%",
    status: "Access restricted",
    reply: [
      "Your account status may require manual review.",
      "The chatbot cannot change suspension status directly.",
      "I can create a support case so the operations team can check your account."
    ],
    chips: [
      { label: "Create account case", scenario: "human" },
      { label: "Start new question", scenario: "welcome" }
    ]
  },
  multi: {
    user: "I cannot login and I need to know COD payment",
    intent: "Multiple intents",
    tag: "login_issue + cod_reconciliation",
    confidence: "2 tags detected",
    status: "Choose one topic",
    reply: [
      "I detected more than one issue.",
      "Which one should I help with first?"
    ],
    clarification: [
      { label: "Login issue", scenario: "login" },
      { label: "COD payment", scenario: "payment" }
    ]
  },
  human: {
    user: "Create support ticket",
    intent: "Human Support",
    tag: "case_creation",
    confidence: "Message limit or driver request",
    status: "Case template ready",
    reply: [
      "I'll create a support ticket so our team can help you further.",
      "Please confirm the topic and add a short description before submitting."
    ],
    caseCard: true,
    chips: [
      { label: "Back to chatbot", scenario: "welcome" }
    ]
  }
};

function chatbotMetaCard(flow) {
  if (!flow.intent || flow.hideMeta) return "";
  return `
    <div class="chatbot-meta-card">
      <div><span>Intent</span><strong>${flow.intent}</strong></div>
      <div><span>Tag</span><strong>${flow.tag}</strong></div>
      <div><span>Confidence</span><strong>${flow.confidence}</strong></div>
    </div>`;
}

function chatbotPathCard(flow) {
  if (!flow.path) return "";
  return `
    <div class="chatbot-path-card">
      <strong>Guided path</strong>
      <div>
        ${flow.path.map((step, index) => `<span>${index + 1}. ${step}</span>`).join("")}
      </div>
    </div>`;
}

function chatbotFeedbackRow() {
  const upActive = state.chatbotFeedback === "up" ? "active" : "";
  const downActive = state.chatbotFeedback === "down" ? "active" : "";
  const note = state.chatbotFeedback === "down"
    ? `<div class="chatbot-feedback-note">Thanks. This response will be flagged for improvement review.</div>`
    : state.chatbotFeedback === "up"
      ? `<div class="chatbot-feedback-note">Thanks for the feedback.</div>`
      : "";
  return `
    <div class="chatbot-feedback-row">
      <span>Was this helpful?</span>
      <button class="${upActive}" data-action="chatbot-feedback" data-feedback="up">Useful</button>
      <button class="${downActive}" data-action="chatbot-feedback" data-feedback="down">Not useful</button>
    </div>
    ${note}`;
}

function chatbotConversation(flow) {
  if (!flow.user) {
    return `
      <div class="chat-bubble system">Hello, I'm SPX Driver Support Assistant. I can help with delivery SOP, payment, account, pickup and registration questions.</div>
      <div class="chatbot-capability-grid">
        <span>Delivery SOP</span>
        <span>Payment</span>
        <span>Account</span>
        <span>Human support</span>
      </div>`;
  }

  const reply = `
    <div class="chat-bubble system">
      ${flow.status ? `<div class="chatbot-status-pill">${flow.status}</div>` : ""}
      ${flow.reply.map(line => `<p>${line}</p>`).join("")}
      ${flow.next ? `<em>${flow.next}</em>` : ""}
    </div>`;
  const pathCard = chatbotPathCard(flow);
  const clarification = flow.clarification
    ? `<div class="chatbot-clarify-options">${flow.clarification.map(item => `<button data-action="chatbot-scenario" data-scenario="${item.scenario}">${item.label}</button>`).join("")}</div>`
    : "";
  const caseCard = flow.caseCard
    ? `<section class="chatbot-case-card">
        <div class="case-label">Support case</div>
        <strong>Ticket draft</strong>
        <p>Topic: Driver support inquiry</p>
        <textarea readonly>Describe the issue briefly. Attach order ID or screenshot if available.</textarea>
        <button data-action="chatbot-case-submit">Submit ticket</button>
      </section>`
    : "";
  return `
    <div class="chat-bubble user">${flow.user}</div>
    ${chatbotMetaCard(flow)}
    ${reply}
    ${pathCard}
    ${clarification}
    ${flow.intent && !flow.clarification && !flow.caseCard ? chatbotFeedbackRow() : ""}
    ${caseCard}`;
}

function chatbotQuickActions(flow) {
  const chips = flow.chips || chatbotFlows.welcome.chips;
  return `
    <div class="chatbot-chip-row">
      ${chips.map(item => `<button data-action="chatbot-scenario" data-scenario="${item.scenario}">${item.label}</button>`).join("")}
    </div>`;
}

function renderChatbotPage() {
  const flow = chatbotFlows[state.chatbotScenario] || chatbotFlows.welcome;
  return `
    ${chatbotAppBar()}
    <div class="content chatbot-page">
      <section class="chatbot-hero-card">
        <div>
          <span>SPX Virtual Assistant</span>
          <strong>Driver Support Chatbot</strong>
          <p>Instant answers, tag detection and case handoff in one place.</p>
        </div>
      </section>

      <section class="chatbot-session-card">
        <div class="chatbot-thread">
          ${chatbotConversation(flow)}
        </div>
      </section>

      ${chatbotQuickActions(flow)}
    </div>
    <div class="chatbot-input-bar">
      <span>Type a question about delivery, payment or account</span>
      <button data-action="chatbot-scenario" data-scenario="pod">Send</button>
    </div>`;
}

const notifications = [
  {
    id: "redelivery",
    title: "One order need redelivery",
    preview: "Order PH005314767588 was moved back to To-do for redelivery.",
    category: "Work, Delivery",
    tab: "Work",
    time: "17:30",
    date: "2026-05-22 09:41",
    unread: true,
    body: "Order PH005314767588 was put on-hold during delivery. System rejected the proof and moved it back to To-do for redelivery.",
    detailIntro: "Order to review",
    tasks: [
      { name: "Kampung Baru", id: "PH005314767588", address: "Kampung Baru, Road 3, blue gate near mini mart", orderId: orders[2].id, scenario: "home" }
    ]
  },
  {
    id: "pickup-disabled",
    title: "Pickup Task Disabled (10)",
    preview: "You have 10 pickup tasks were assigned to another driver.",
    category: "Work, Pickup",
    tab: "Work",
    time: "16:32",
    date: "2020-11-30 16:32",
    unread: true,
    body: "Your have 10 pickup tasks were assigned to another driver.",
    detailIntro: "The following is the detailed task list",
    tasks: [
      {
        name: "TAMAN SARI",
        id: "PT 202105242Y080",
        address: "Kontrakan H.yono Kp. Cijantra girang RT 05/03 desa.jatake kec.pagedangan..."
      },
      {
        name: "PUP Name Test",
        id: "PT 202105242Y081",
        address: "Kontrakan H.yono Kp. Cijantra girang RT 05/03 desa.jatake"
      },
      {
        name: "PUP Name Test",
        id: "PT 202105242Y081",
        address: "Kontrakan H.yono Kp. Cijantra girang RT"
      }
    ]
  },
  {
    id: "basic-pay",
    title: "Basic pay adjustment approved!",
    preview: "Congrats! Your basic pay adjustment 18,000 PHP has been approved.",
    category: "Compensation",
    tab: "Compensation",
    time: "11-21",
    date: "2020-11-21 09:10",
    unread: true,
    body: "Congrats! Your basic pay adjustment has been approved.",
    detailIntro: "Payment details",
    tasks: [
      { name: "Basic pay adjustment", id: "18,000 PHP", address: "The approved amount will be included in the next settlement cycle." }
    ]
  },
  {
    id: "heavy-rain",
    title: "Important! Red alert for heavy rain! Please pay attention to safety",
    preview: "This afternoon to tomorrow day, Bangkok area may have heavy rain.",
    category: "Safety",
    tab: "Announcement",
    time: "19-11-21",
    important: true,
    date: "2020-11-19 14:20",
    body: "Heavy rain is expected this afternoon through tomorrow. Please pay attention to road safety and follow hub guidance.",
    detailIntro: "Safety reminder",
    tasks: [
      { name: "Driver safety", id: "Weather alert", address: "Avoid risky roads, keep packages dry, and contact hub support if route conditions are unsafe." }
    ]
  },
  {
    id: "new-activity",
    title: "New activitie to win money!",
    preview: "We are going to start a new activity from December. Join to earn rewards.",
    category: "Incentive",
    tab: "Announcement",
    time: "19-11-19",
    important: true,
    date: "2020-11-19 09:00",
    body: "A new incentive activity will start from December. Complete eligible tasks to win rewards.",
    detailIntro: "Activity details",
    tasks: [
      { name: "Invite Rewards", id: "Campaign", address: "Invite qualified couriers and complete the required first delivery to earn extra bonuses." }
    ]
  }
];

function notificationTaskCard(task) {
  const actionAttrs = task.orderId ? ` data-action="open-order-detail" data-order="${task.orderId}" data-scenario="${task.scenario || "home"}" role="button" tabindex="0"` : "";
  return `
    <section class="notification-task-card"${actionAttrs}>
      <strong>${task.name}</strong>
      <span>${task.id}</span>
      <p>${task.address}</p>
    </section>`;
}

function renderMessageCenterPage() {
  return `
    ${appBar("My Notification", true)}
    <div class="content notification-page">
      <div class="notification-tabs">
        <button class="active">All</button>
        <button>Work</button>
        <button>Compensation</button>
        <button>Announcement</button>
      </div>
      <div class="notification-list">
        ${notifications.map(item => `
          <section class="notification-list-item" data-action="notification-detail" data-notification="${item.id}" role="button" tabindex="0">
            <div>
              <div class="notification-title-row">
                <strong>${item.title}</strong>
                ${item.important ? `<span>Important</span>` : ""}
              </div>
              <p>${item.preview}</p>
              <small>${item.category}</small>
            </div>
            <em>${item.time}</em>
            ${item.unread ? `<i></i>` : ""}
          </section>`).join("")}
      </div>
    </div>`;
}

function renderNotificationDetailPage() {
  const notification = notifications.find(item => item.id === state.selectedNotificationId) || notifications[0];
  return `
    ${appBar("Notification Detail", true)}
    <div class="content notification-detail-page">
      <section class="notification-detail-head">
        <h2>${notification.title}</h2>
        <time>${notification.date}</time>
        <p>${notification.body}</p>
        <span>${notification.detailIntro}</span>
      </section>
      <div class="notification-task-list">
        ${notification.tasks.map(notificationTaskCard).join("")}
      </div>
    </div>`;
}

function renderInviteRewardsPage() {
  return `
    ${appBar("Invite Rewards", true)}
    <div class="poster-page poster-image-page">
      <div class="poster-image-frame">
        <img class="spx-recruit-poster-image" src="assets/invite-rewards-poster.png" alt="" onerror="this.closest('.poster-image-frame').classList.add('is-missing'); this.remove();" />
        <div class="poster-missing-note">Poster image is not available.</div>
      </div>
    </div>`;
}

function renderLearningCenterPage() {
  const lessons = [
    {
      title: "Redelivery SOP",
      label: "Required",
      meta: "3 min",
      desc: "How to handle fake on-hold review and move the parcel back to To-do for redelivery.",
      action: "Review"
    },
    {
      title: "Hard-to-find Address",
      label: "New",
      meta: "4 min",
      desc: "Use navigation references, confirm gate access, and add useful address evidence after delivery.",
      action: "Start"
    },
    {
      title: "Exception Order Handling",
      label: "Hub return",
      meta: "2 min",
      desc: "Identify RTS, reschedule, and relabel parcels that should be brought back to hub.",
      action: "Learn"
    }
  ];
  return `
    ${appBar("Learning Center", true)}
    <div class="content learning-center-page">
      <section class="learning-list">
        ${lessons.map(item => `
          <article class="learning-lesson-card">
            <div class="lesson-icon">${icons.clipboard}</div>
            <div>
              <div class="lesson-title-row">
                <strong>${item.title}</strong>
                <em>${item.meta}</em>
              </div>
              <span>${item.desc}</span>
              <div class="lesson-footer">
                <b>${item.label}</b>
                <button data-action="coming-soon">${item.action}</button>
              </div>
            </div>
          </article>`).join("")}
      </section>
    </div>`;
}

function renderProfilePage() {
  return `
    ${appBar("Profile")}
    <div class="content tab-page">
      <section class="profile-summary-card">
        <div class="home-avatar">K</div>
        <div>
          <strong>Kevin Jakarta</strong>
          <span>13433331330 · KRAMAT JATI2</span>
        </div>
        <button class="home-qr-btn">${icons.qr}</button>
      </section>
      <section class="profile-menu-card">
        <button>${icons.check}<span>Check In</span><b>›</b></button>
        <button>${icons.clipboard}<span>Order Statistics</span><b>›</b></button>
        <button>${icons.ticket}<span>Ticket Center</span><b>›</b></button>
        <button>${icons.settings}<span>Setting</span><b>›</b></button>
      </section>
    </div>`;
}

function renderDialer() {
  const phone = state.selectedContactPhone;
  return `
    ${appBar("Phone", true)}
    <section class="dialer-page">
      <div class="dialer-number">${phone}</div>
      <div class="dialer-subtitle">Receiver phone</div>
      <div class="dialer-keypad">
        ${["1","2 ABC","3 DEF","4 GHI","5 JKL","6 MNO","7 PQRS","8 TUV","9 WXYZ","*","0 +","#"].map(key => {
          const [num, letters = ""] = key.split(" ");
          return `<button><strong>${num}</strong><span>${letters}</span></button>`;
        }).join("")}
      </div>
      <button class="dial-call-btn">${icons.phone}</button>
    </section>`;
}

function renderSms() {
  const order = orders.find(item => item.id === state.selectedOrderId) || orders[0];
  const phone = state.selectedContactPhone;
  return `
    ${appBar("Message", true)}
    <section class="sms-page">
      <div class="sms-recipient">
        <span>To</span>
        <strong>${phone}</strong>
      </div>
      <div class="sms-thread">
        <div class="sms-bubble incoming">Hi, this is Shopee delivery for order ${order.displayId}.</div>
        <div class="sms-bubble outgoing">I am on the way. Please keep your phone available.</div>
      </div>
      <div class="sms-compose">
        <span>Message</span>
        <button>Send</button>
      </div>
    </section>`;
}

function renderNavigationHelp() {
  return `
    <iframe
      class="hard-find-original-frame"
      title="Hard to Find Navigation Help"
      src="hard-to-find-original/embedded.html?page=page2&case=nongchang"
    ></iframe>`;
}

function renderMapOverlay() {
  if (!state.navMapExpanded) return "";
  const mapImg = state.navMapType === "satellite"
    ? "assets/hard-to-find/key-point-map.png"
    : "assets/hard-to-find/nav-start.png";
  const zoomPct = Math.round(state.navZoom * 100);
  return `
    <div class="map-fullscreen">
      <div class="map-fullscreen-head">
        <button data-action="close-map">‹</button>
        <strong>Route Reference</strong>
      </div>
      <div class="nav-map-viewport fullscreen" data-drag-map>
        <div class="nav-map-content" style="width:${zoomPct}%;height:${zoomPct}%">
          <img src="${mapImg}" alt="Expanded navigation map" />
        </div>
        <div class="nav-route-chip">Key Point → Destination</div>
        <div class="nav-zoom-controls">
          <button data-action="zoom-in">+</button>
          <button data-action="zoom-out">−</button>
        </div>
      </div>
    </div>`;
}

function renderLightbox() {
  if (state.lightbox === null) return "";
  const images = [
    { title: "Key Point Street View", src: "assets/hard-to-find/key-point-map.png" },
    { title: "Photos of Past Buyer Homes", src: "assets/hard-to-find/nav-helper-case.png" },
    { title: "Driver Upload Reference", src: "assets/hard-to-find/upload-reference.png" }
  ];
  const image = images[state.lightbox] || images[0];
  return `
    <div class="lightbox-modal">
      <button class="lightbox-close" data-action="close-lightbox">×</button>
      <button class="lightbox-arrow left" data-action="lightbox-prev">‹</button>
      <img src="${image.src}" alt="${image.title}" />
      <button class="lightbox-arrow right" data-action="lightbox-next">›</button>
      <div class="lightbox-label">${image.title} · ${state.lightbox + 1} / ${images.length}</div>
    </div>`;
}

function renderImproveNavigation() {
  const photoSlots = state.improvePhotos.map((src, index) => `
    <div class="photo-thumb">
      <img src="${src}" alt="Uploaded reference ${index + 1}" />
      <button data-action="remove-nav-photo" data-photo-index="${index}">×</button>
    </div>`).join("");
  const addSlot = state.improvePhotos.length < 3 ? `
    <button class="photo-add-slot" data-action="add-nav-photo">
      <span>＋</span>
      <small>Add photo</small>
    </button>` : "";
  return `
    ${appBar("Improve Navigation", true)}
    <section class="improve-nav-page">
      <div class="improve-form-card">
        <div class="section-title">Improve Suggestion</div>
        <div class="field-label-row">
          <span>Photo (Max 3)</span>
          <strong>${state.improvePhotos.length}/3</strong>
        </div>
        <div class="photo-upload-row">
          ${photoSlots}
          ${addSlot}
        </div>
        <input id="nav-photo-input" class="nav-photo-input" type="file" accept="image/*" />
        <div class="photo-hint">Photos help most: show the building entrance or nearby landmark.</div>

        <div class="form-divider"></div>
        <div class="field-label-row">
          <span>Description</span>
          <strong class="desc-count ${state.improveDescription.length > 80 ? "warn" : ""}">${state.improveDescription.length}/100</strong>
        </div>
        <textarea class="improve-textarea" maxlength="100" data-action="nav-desc" placeholder="e.g., Go through the blue gate and turn left.">${state.improveDescription}</textarea>
      </div>
      <div class="submit-btn-wrap">
        <button class="btn-primary" data-action="submit-nav-improvement">${state.navSubmitted ? "Submitted" : "Submit"}</button>
      </div>
    </section>`;
}

function renderSequence(origin = "brief") {
  const selected = orders[state.selectedStop] || orders[0];
  return `
    ${appBar("Suggested Sequence", true)}
    <div class="sequence-map">
      <div class="map-canvas">
        <div class="route-line"></div>
        ${orders.map((_, index) => `<button class="stop-pin stop-${index + 1} ${state.selectedStop === index ? "active" : ""}" data-stop="${index}"><span>${index + 1}</span></button>`).join("")}
        <div class="map-note">
          <strong>${selected.eta} · Stop ${state.selectedStop + 1} · ${selected.id}</strong>
          <p>${selected.note}</p>
        </div>
      </div>
    </div>
    <div class="special-list-title">Recommended route order</div>
    ${orders.map((order, index) => `
      <section class="order-card">
        <div class="order-top">
          <div>
            <div class="address">${index + 1}. ${order.address}</div>
            <div class="order-count">${order.risk}</div>
          </div>
          <span class="tag ${index === state.selectedStop ? "red" : ""}">${order.eta}</span>
        </div>
      </section>`).join("")}
    <button hidden data-origin="${origin}"></button>`;
}

function renderExceptions() {
  return `
    ${appBar("Exception Definition", true)}
    <div class="config-title">
      <h2>Exception Definition</h2>
      <div class="muted" style="margin-top:6px">Operation guidance rules are configured before alerts appear in the driver app.</div>
    </div>
    <div class="config-section-title">Risk detection</div>
    ${rule("High delivery failed success rate", "Flag order when recent failed delivery ratio is above 35%.", "Threshold 35%", "Lookback 30 days")}
    ${rule("Expedite order", "Highlight paid expedite and promised delivery windows.", "SLA window", "Before 11:00")}
    ${rule("Delay alert", "Trigger when route ETA cannot meet parcel SLA.", "ETA > SLA", "Alert driver")}
    <div class="config-section-title">Automation</div>
    ${rule("Auto parcel transfer reminder", "Expose transfer when recommended sequence still misses SLA.", "Transfer eligible", "Hub leader approval")}
    ${rule("Fake on-hold redelivery", "Reopen fake on-hold parcels and return them to To-do.", "AI proof check", "Redelivery tag")}
    <section class="card">
      <button class="btn-primary" style="width:100%" data-action="delay">Preview operation guidance</button>
    </section>`;
}

function rule(title, desc, left, right) {
  return `
    <section class="card">
      <div class="rule-row">
        <div class="rule-copy">
          <strong>${title}</strong>
          <span>${desc}</span>
        </div>
        <div class="toggle"></div>
      </div>
      <div class="input-line">
        <div class="input-chip">${left}</div>
        <div class="input-chip">${right}</div>
      </div>
    </section>`;
}

function renderDelay() {
  const activeTab = state.deliveryTab || "To-do";
  const counts = { todo: 3, delivered: 1, onHold: 1 };
  const progress = {
    delivered: 1,
    onHold: 1,
    pending: 3,
    urgentSlaToday: 1
  };
  progress.total = orders.length;
  progress.percent = Math.round((progress.delivered / progress.total) * 100);
  const hiddenInOperationGuidance = new Set(["PH005314767602", "PH005314767699"]);
  const guidanceOrders = orders.filter(order => !hiddenInOperationGuidance.has(order.displayId)).map(order => {
    if (order.displayId === "PH005314767588") {
      return {
        ...order,
        tags: [...new Set(["Redelivery", ...order.tags])],
        risk: "Fake on-hold rejected · Redelivery required"
      };
    }
    return order;
  });
  if (activeTab === "Delivered") {
    return `
      ${appBar()}
      ${tabs(activeTab, counts)}
      <div class="content delivered-list-page">
        ${deliveredOrders().map(deliveredOrderCard).join("")}
      </div>`;
  }
  return `
    ${appBar()}
    ${tabs(activeTab, counts)}
    ${sortRow()}
    <div class="content">
      <section class="progress-report-card" data-action="pending-delivery-detail" role="button" tabindex="0">
        <div class="progress-head">
          <div>
            <strong>Progress Report</strong>
            <span>After 16:00 · system checks delivery progress</span>
          </div>
        </div>
        <div class="delivery-progress">
          <div class="progress-label-row">
            <span>Delivery progress</span>
            <strong>${progress.delivered}/${progress.total}</strong>
          </div>
          <div class="progress-track">
            <span style="width:${progress.percent}%"></span>
          </div>
        </div>
        <div class="progress-grid">
          <div><strong>${progress.delivered}</strong><span>Delivered</span></div>
          <div><strong>${progress.onHold}</strong><span>On-hold</span></div>
          <div class="pending-delivery-cell">
            <strong>${progress.pending}</strong>
            <span>Pending delivery</span>
            <em>${progress.urgentSlaToday} Urgent SLA Today</em>
          </div>
        </div>
        <div class="transfer-check-row">
          <span>Need one-click transfer for urgent SLA today?</span>
          ${progress.urgentSlaToday > 0
            ? `<button class="transfer-yes-link" data-action="open-bulk-transfer">Yes</button>`
            : `<strong>No</strong>`}
        </div>
      </section>
      <section class="redelivery-guidance-card">
        <div class="redelivery-status">Redelivery guidance</div>
        <strong>Fake on-hold detected</strong>
        <p>Order <button class="inline-order-link" data-action="open-order-detail" data-order="${orders[2].id}">${orders[2].displayId}</button> was put on-hold during delivery. System rejected the proof and moved it back to To-do for redelivery.</p>
      </section>
      <div class="group-header">To-do orders</div>
      ${guidanceOrders.map(order => orderCard(order, { transfer: true })).join("")}
    </div>`;
}

function renderPendingDeliveryDetail() {
  const sortedOrders = [...orders].sort((a, b) => {
    const aEddToday = a.category === "special" ? 0 : 1;
    const bEddToday = b.category === "special" ? 0 : 1;
    return aEddToday - bEddToday;
  }).map(order => {
    if (order.category !== "special") return order;
    return {
      ...order,
      tags: [...new Set(["EDD today", ...order.tags])]
    };
  });
  return `
    ${appBar("Pending Delivery", true)}
    <div class="content">
      <div class="group-header">Pending delivery · EDD today first</div>
      ${sortedOrders.map(order => orderCard(order, { transfer: true })).join("")}
    </div>`;
}

function renderTransferSuccessDialog() {
  return `
    <div class="modal-shade alert-shade">
      <section class="alert-dialog">
        <div class="alert-message">
          <strong>Transfer request submitted</strong>
          <span>Please wait for approval</span>
        </div>
        <button data-action="close-transfer-success">OK</button>
      </section>
    </div>`;
}

function renderComingSoonDialog() {
  return `<div class="coming-soon-toast" style="top:${state.comingSoonTop}px">${state.toastText || "Coming soon"}</div>`;
}

function renderTransferSheet() {
  const isBulkTransfer = state.transferMode === "bulk";
  const pendingCount = 3;
  const urgentSlaTodayCount = 1;
  return `
    <div class="modal-shade">
      <section class="sheet">
        <div class="sheet-head">
          <div>
            <strong>${isBulkTransfer ? "Transfer all in-progress orders" : "Recommended drivers"}</strong>
            ${isBulkTransfer ? `<span>${pendingCount} orders · ${urgentSlaTodayCount} Urgent SLA Today</span>` : ""}
          </div>
          <button class="icon-btn" data-action="close-transfer">×</button>
        </div>
        ${drivers.map((driver, index) => `
          <div class="driver-row ${state.selectedDriver === index ? "active" : ""}" data-driver="${index}">
            <div class="avatar">${driver.name.slice(0, 1)}</div>
            <div class="driver-info">
              <strong>${driver.name}</strong>
              <span>${driver.zone}</span>
              <span>${driver.score}</span>
            </div>
          </div>`).join("")}
        <div class="sheet-footer">
          <button class="btn-secondary" data-action="close-transfer">Cancel</button>
          <button class="btn-primary" data-action="confirm-transfer">Confirm</button>
        </div>
      </section>
    </div>`;
}

function renderDrawer() {
  return `
    <div class="drawer-shade">
      <button class="drawer-scrim" data-action="close-menu" aria-label="Close menu"></button>
      <aside class="driver-drawer">
        <div class="drawer-profile">
          <div class="drawer-photo">K</div>
          <div>
            <strong>Kevin Jakarta</strong>
            <span>1343333130</span>
          </div>
          <button>${icons.qr}</button>
        </div>
        <button class="drawer-pickup">${icons.pickup}<span>Pickup</span></button>
        <nav class="drawer-nav">
          <button data-action="go-home">${icons.home}<span>Homepage</span></button>
          <button>${icons.check}<span>Check In</span></button>
          <button>${icons.clipboard}<span>Order Statistics</span></button>
          <button>${icons.settings}<span>Setting</span></button>
        </nav>
        <button class="drawer-ticket">${icons.ticket}<span>Ticket Center</span></button>
      </aside>
    </div>`;
}

function renderActiveModal() {
  if (state.showDrawer) return renderDrawer();
  if (state.showComingSoon) return renderComingSoonDialog();
  if (state.submittedTransfer) return renderTransferSuccessDialog();
  if (state.showTransfer) return renderTransferSheet();
  return "";
}

function renderRedelivery() {
  return `
    ${appBar()}
    ${tabs()}
    ${sortRow()}
    <div class="content">
      <div class="toast">
        <strong>On-hold proof rejected</strong>
        <p>System identified fake on-hold evidence. The order is moved back to Delivering and returned to To-do.</p>
      </div>
      <div class="group-header">To-do · Redelivery</div>
      ${orderCard({
        ...orders[2],
        tags: [...new Set(["Redelivery", ...orders[2].tags])],
        risk: "Fake on-hold rejected · Redelivery required"
      })}
      <section class="card">
        <button class="btn-primary" style="width:100%" data-action="guidance">Open driver guidance</button>
      </section>
    </div>`;
}

function renderGuidance() {
  return `
    ${appBar("Task Detail", true)}
    <div class="detail-header">
      <div class="detail-title-row">
        <div>
          <h2>Alpine Apartment</h2>
          <div class="muted">Block B, Level 19, Unit 19-08</div>
        </div>
        <button class="btn-primary">${icons.nav}</button>
      </div>
    </div>
    <div class="guidance-banner" data-action="nav-help">
      <span class="info-dot">i</span>
      <span class="muted">Hard to find this location?&nbsp;</span>
      <strong style="color:var(--link);font-size:13px">View Navigation Help</strong>
      <span class="spacer"></span>
      <span style="color:var(--link)">›</span>
    </div>
    <div class="guidance-map">
      <img src="../demo_pic/APP截图-刚进入导航.png" alt="Navigation help map" />
      <div class="guidance-overlay">
        <strong>Navigation Helper</strong>
        <p>Use saved route photos and key-point guidance from the hard-to-find demo. Tap below to add route feedback after delivery.</p>
      </div>
    </div>
    <section class="card">
      <div class="rule-copy">
        <strong>Key point: Building B lobby</strong>
        <span>Enter from the side gate, then walk 60m to the lift lobby. Avoid the basement route.</span>
      </div>
      <button class="btn-secondary" style="width:100%;margin-top:12px">Improve Navigation</button>
    </section>`;
}

function render(options = {}) {
  const app = document.getElementById("app");
  const modalRoot = document.getElementById("modal-root");
  const bottomNav = document.getElementById("bottom-nav");
  const previousScrollTop = app.scrollTop;
  const screens = {
    home: renderHomePage,
    todo: renderTodo,
    "exception-orders": renderExceptionOrders,
    brief: renderBriefDetail,
    "order-detail": renderOrderDetail,
    scan: renderScanPage,
    chatbot: renderChatbotPage,
    "message-center": renderMessageCenterPage,
    "notification-detail": renderNotificationDetailPage,
    "invite-rewards": renderInviteRewardsPage,
    "learning-center": renderLearningCenterPage,
    profile: renderProfilePage,
    dialer: renderDialer,
    sms: renderSms,
    "nav-help": renderNavigationHelp,
    "improve-nav": renderImproveNavigation,
    sequence: () => renderSequence("brief"),
    exceptions: renderExceptions,
    delay: renderDelay,
    "pending-delivery": renderPendingDeliveryDetail,
    "sequence-delay": () => renderSequence("delay"),
    redelivery: renderRedelivery,
    guidance: renderGuidance
  };
  app.innerHTML = (screens[state.screen] || renderTodo)() + renderMapOverlay() + renderLightbox();
  const modalMarkup = renderActiveModal();
  if (modalRoot) modalRoot.innerHTML = modalMarkup;
  const showBottomNav = shouldShowBottomNav();
  if (bottomNav) {
    bottomNav.innerHTML = showBottomNav ? renderBottomNav() : "";
    bottomNav.classList.toggle("is-visible", showBottomNav);
  }
  app.classList.toggle("with-bottom-nav", showBottomNav);
  app.classList.toggle("chatbot-screen", state.screen === "chatbot");
  app.classList.toggle("modal-open", Boolean(modalMarkup) && !state.showComingSoon);
  app.scrollTop = options.preserveScroll ? previousScrollTop : 0;
  syncNav();
  bindMapDrag();
}

function syncNav() {
  const navMap = {
    home: "home",
    todo: "todo",
    "exception-orders": "home",
    brief: "todo",
    "order-detail": "todo",
    scan: state.activeScenario,
    "message-center": "home",
    "notification-detail": "home",
    "invite-rewards": "home",
    "learning-center": "home",
    dialer: "todo",
    sms: "todo",
    "nav-help": "todo",
    "improve-nav": "todo",
    sequence: "todo",
    exceptions: "exceptions",
    delay: "delay",
    "pending-delivery": "delay",
    "sequence-delay": "delay",
    redelivery: "delay",
    guidance: "guidance"
  };
  const activeScreen = state.screen === "order-detail" ? state.activeScenario : navMap[state.screen];
  document.querySelectorAll(".scenario-item").forEach(item => {
    item.classList.toggle("active", item.dataset.screen === activeScreen);
  });
}

function go(screen) {
  state.screen = screen;
  render();
}

function bindMapDrag() {
  document.querySelectorAll("[data-drag-map]").forEach(map => {
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    map.addEventListener("pointerdown", event => {
      if (event.target.closest("button")) return;
      dragging = true;
      startX = event.clientX;
      startY = event.clientY;
      startLeft = map.scrollLeft;
      startTop = map.scrollTop;
      map.setPointerCapture?.(event.pointerId);
      map.classList.add("dragging");
    });

    map.addEventListener("pointermove", event => {
      if (!dragging) return;
      map.scrollLeft = startLeft - (event.clientX - startX);
      map.scrollTop = startTop - (event.clientY - startY);
    });

    function stopDrag(event) {
      if (!dragging) return;
      dragging = false;
      map.releasePointerCapture?.(event.pointerId);
      map.classList.remove("dragging");
    }

    map.addEventListener("pointerup", stopDrag);
    map.addEventListener("pointercancel", stopDrag);
    map.addEventListener("pointerleave", stopDrag);
  });
}

document.getElementById("scenario-nav").addEventListener("click", event => {
  const item = event.target.closest("[data-screen]");
  if (!item) return;
  state.showTransfer = false;
  state.showDrawer = false;
  state.showComingSoon = false;
  state.submittedTransfer = false;
  state.transferMode = "single";
  state.activeScenario = item.dataset.screen;
  state.deliveryTab = "To-do";
  if (item.dataset.screen === "guidance") {
    const hardToFindOrder = orders.find(order => order.displayId === "PH005314767602") || orders[3];
    state.selectedOrderId = hardToFindOrder.id;
    state.paymentExpanded = true;
    state.itemExpanded = true;
    go("order-detail");
    return;
  }
  go(item.dataset.screen);
});

document.querySelector(".phone-screen-wrapper").addEventListener("click", event => {
  const stop = event.target.closest("[data-stop]");
  if (stop) {
    state.selectedStop = Number(stop.dataset.stop);
    render();
    return;
  }

  const driver = event.target.closest("[data-driver]");
  if (driver) {
    state.selectedDriver = Number(driver.dataset.driver);
    render();
    return;
  }

  const actionEl = event.target.closest("[data-action]");
  if (actionEl) {
    const action = actionEl.dataset.action;
    if (action === "back") {
      if (state.screen === "brief") {
        go(state.briefBackScreen || "todo");
        return;
      }
      if (state.screen === "chatbot") {
        go(state.chatbotBackScreen || "home");
        return;
      }
	      if (state.screen === "message-center") {
	        go("home");
	        return;
	      }
	      if (state.screen === "notification-detail") {
	        go("message-center");
	        return;
	      }
      if (state.screen === "invite-rewards" || state.screen === "learning-center") {
        go("home");
        return;
      }
      if (state.screen === "order-detail" && state.activeScenario === "exception-orders") {
        go("exception-orders");
        return;
      }
      if (state.screen === "order-detail" && state.activeScenario === "home") {
        go("home");
        return;
      }
      if (state.screen === "order-detail" && state.activeScenario === "delay") {
        go("delay");
        return;
      }
	      const backTo = state.screen === "scan" ? (state.scanBackScreen || "home") : state.screen === "dialer" || state.screen === "sms" || state.screen === "nav-help" ? "order-detail" : state.screen === "improve-nav" ? "nav-help" : state.screen === "exception-orders" ? "home" : state.screen === "brief" || state.screen === "guidance" || state.screen === "order-detail" ? "todo" : state.screen === "sequence-delay" || state.screen === "pending-delivery" ? "delay" : "brief";
      go(backTo);
      return;
    }
    if (action === "open-menu") {
      state.showTransfer = false;
      state.submittedTransfer = false;
      state.showComingSoon = false;
      state.showDrawer = true;
      render({ preserveScroll: true });
      return;
    }
    if (action === "close-menu") {
      state.showDrawer = false;
      render({ preserveScroll: true });
      return;
    }
    if (action === "go-home") {
      state.showDrawer = false;
      state.activeScenario = "home";
      go("home");
      return;
    }
    if (action === "bottom-home") {
      state.showDrawer = false;
      state.showComingSoon = false;
      state.activeScenario = "home";
      go("home");
      return;
    }
    if (action === "bottom-todo" || action === "bottom-delivery") {
      state.showDrawer = false;
      state.showComingSoon = false;
      state.activeScenario = "todo";
      state.deliveryTab = "To-do";
      go("todo");
      return;
    }
	    if (action === "bottom-scan") {
	      state.showDrawer = false;
	      state.showComingSoon = false;
	      state.scanBackScreen = state.screen || "home";
	      go("scan");
	      return;
	    }
    if (action === "bottom-chatbot") {
      state.showDrawer = false;
      state.showComingSoon = false;
      state.chatbotBackScreen = state.screen && state.screen !== "chatbot" ? state.screen : "home";
      go("chatbot");
      return;
    }
    if (action === "bottom-profile") {
      state.showDrawer = false;
      state.showComingSoon = false;
      go("profile");
      return;
    }
	    if (action === "message-center") {
	      state.showComingSoon = false;
	      go("message-center");
	      return;
	    }
	    if (action === "notification-detail") {
	      state.selectedNotificationId = actionEl.dataset.notification || notifications[0].id;
	      go("notification-detail");
	      return;
	    }
    if (action === "home-tab-jump") {
      state.showComingSoon = false;
      state.activeScenario = "todo";
      state.deliveryTab = actionEl.dataset.tab || "To-do";
      go("todo");
      return;
    }
    if (action === "select-delivery-tab") {
      state.deliveryTab = actionEl.dataset.tab || "To-do";
      render();
      return;
    }
    if (action === "chatbot-scenario") {
      state.chatbotScenario = actionEl.dataset.scenario || "welcome";
      state.chatbotFeedback = null;
      render({ preserveScroll: true });
      return;
    }
    if (action === "chatbot-feedback") {
      state.chatbotFeedback = actionEl.dataset.feedback || null;
      render({ preserveScroll: true });
      return;
    }
    if (action === "chatbot-case-submit") {
      state.chatbotFeedback = "case";
      state.toastText = "Support ticket submitted";
      state.showComingSoon = true;
      const modalRoot = document.getElementById("modal-root");
      const rootRect = modalRoot?.getBoundingClientRect();
      state.comingSoonTop = rootRect ? Math.round(rootRect.height * 0.52) : 360;
      render({ preserveScroll: true });
      window.clearTimeout(comingSoonTimer);
      comingSoonTimer = window.setTimeout(() => {
        state.showComingSoon = false;
        render({ preserveScroll: true });
      }, 2000);
      return;
    }
    if (action === "invite-rewards") {
      state.showComingSoon = false;
      go("invite-rewards");
      return;
    }
    if (action === "learning-center") {
      state.showComingSoon = false;
      go("learning-center");
      return;
    }
    if (action === "coming-soon") {
      state.toastText = "Coming soon";
      const modalRoot = document.getElementById("modal-root");
      const rootRect = modalRoot?.getBoundingClientRect();
      const actionRect = actionEl.getBoundingClientRect();
      if (rootRect) {
        const top = actionRect.top + actionRect.height / 2 - rootRect.top;
        state.comingSoonTop = Math.max(72, Math.min(rootRect.height - 72, Math.round(top)));
      }
      state.showComingSoon = true;
      render({ preserveScroll: true });
      window.clearTimeout(comingSoonTimer);
      comingSoonTimer = window.setTimeout(() => {
        state.showComingSoon = false;
        render({ preserveScroll: true });
      }, 2000);
      return;
    }
    if (action === "close-coming-soon") {
      state.showComingSoon = false;
      render({ preserveScroll: true });
      return;
    }
    if (action === "nav-help") {
      state.navMapExpanded = false;
      state.lightbox = null;
      go("nav-help");
      return;
    }
    if (action === "open-hard-guidance") {
      state.selectedOrderId = actionEl.dataset.order || state.selectedOrderId;
      state.navMapExpanded = false;
      state.lightbox = null;
      go("nav-help");
      return;
    }
    if (action === "improve-nav") { go("improve-nav"); return; }
    if (action === "map-street") { state.navMapType = "street"; render({ preserveScroll: true }); return; }
    if (action === "map-satellite") { state.navMapType = "satellite"; render({ preserveScroll: true }); return; }
    if (action === "zoom-in") {
      state.navZoom = Math.min(2.6, Number((state.navZoom + 0.25).toFixed(2)));
      render({ preserveScroll: true });
      return;
    }
    if (action === "zoom-out") {
      state.navZoom = Math.max(1, Number((state.navZoom - 0.25).toFixed(2)));
      render({ preserveScroll: true });
      return;
    }
    if (action === "expand-map") { state.navMapExpanded = true; render({ preserveScroll: true }); return; }
    if (action === "close-map") { state.navMapExpanded = false; render({ preserveScroll: true }); return; }
    if (action === "open-lightbox") {
      state.lightbox = Number(actionEl.dataset.lightboxIndex || 0);
      render({ preserveScroll: true });
      return;
    }
    if (action === "close-lightbox") { state.lightbox = null; render({ preserveScroll: true }); return; }
    if (action === "lightbox-prev") {
      state.lightbox = Math.max(0, (state.lightbox || 0) - 1);
      render({ preserveScroll: true });
      return;
    }
    if (action === "lightbox-next") {
      state.lightbox = Math.min(2, (state.lightbox || 0) + 1);
      render({ preserveScroll: true });
      return;
    }
    if (action === "start-walking") { state.walkingActive = true; render({ preserveScroll: true }); return; }
    if (action === "stop-walking") { state.walkingActive = false; render({ preserveScroll: true }); return; }
    if (action === "add-nav-photo") {
      document.getElementById("nav-photo-input")?.click();
      return;
    }
    if (action === "remove-nav-photo") {
      state.improvePhotos.splice(Number(actionEl.dataset.photoIndex), 1);
      render({ preserveScroll: true });
      return;
    }
    if (action === "submit-nav-improvement") {
      state.navSubmitted = true;
      go("nav-help");
      return;
    }
    if (action === "toggle-payment") {
      state.paymentExpanded = !state.paymentExpanded;
      render({ preserveScroll: true });
      return;
    }
    if (action === "toggle-item") {
      state.itemExpanded = !state.itemExpanded;
      render({ preserveScroll: true });
      return;
    }
	    if (action === "update-delivery-status") {
	      state.scanBackScreen = "order-detail";
	      go("scan");
	      return;
	    }
    if (action === "dial") {
      state.selectedContactPhone = actionEl.dataset.phone || (allOrders().find(item => item.id === state.selectedOrderId) || orders[0]).phone;
      go("dialer");
      return;
    }
    if (action === "sms") {
      state.selectedContactPhone = actionEl.dataset.phone || (allOrders().find(item => item.id === state.selectedOrderId) || orders[0]).phone;
      go("sms");
      return;
    }
    if (action === "open-order-detail") {
      state.selectedOrderId = actionEl.dataset.order;
      state.activeScenario = actionEl.dataset.scenario || "delay";
      state.paymentExpanded = true;
      state.itemExpanded = true;
      go("order-detail");
      return;
    }
    if (action === "brief-detail") {
      state.briefBackScreen = state.screen || "todo";
      state.deliveryTab = "To-do";
      go("brief");
      return;
    }
    if (action === "sequence") { go("sequence"); return; }
    if (action === "sequence-delay") { go("sequence-delay"); return; }
    if (action === "delay") { go("delay"); return; }
    if (action === "pending-delivery-detail") { go("pending-delivery"); return; }
    if (action === "redelivery") { go("redelivery"); return; }
    if (action === "exception-orders") {
      state.activeScenario = "home";
      go("exception-orders");
      return;
    }
    if (action === "open-transfer") {
      state.transferMode = "single";
      state.showTransfer = true;
      render({ preserveScroll: true });
      return;
    }
    if (action === "open-bulk-transfer") {
      state.transferMode = "bulk";
      state.showTransfer = true;
      render({ preserveScroll: true });
      return;
    }
    if (action === "close-transfer") {
      state.showTransfer = false;
      state.transferMode = "single";
      render({ preserveScroll: true });
      return;
    }
    if (action === "confirm-transfer") {
      state.showTransfer = false;
      state.submittedTransfer = true;
      render({ preserveScroll: true });
      return;
    }
    if (action === "close-transfer-success") {
      state.submittedTransfer = false;
      render({ preserveScroll: true });
      return;
    }
    if (action === "guidance" || action === "nav-help") { go("guidance"); return; }
    if (action === "contact") return;
  }

  const orderEl = event.target.closest("[data-order]");
  if (orderEl) {
    state.selectedOrderId = orderEl.dataset.order;
    state.activeScenario = state.screen === "exception-orders" ? "exception-orders" : state.screen === "delay" || state.screen === "pending-delivery" ? "delay" : "todo";
    go("order-detail");
  }
});

document.getElementById("app").addEventListener("input", event => {
  const target = event.target.closest("[data-action='nav-desc']");
  if (!target) return;
  state.improveDescription = target.value.slice(0, 100);
  const counter = document.querySelector(".desc-count");
  if (counter) {
    counter.textContent = `${state.improveDescription.length}/100`;
    counter.classList.toggle("warn", state.improveDescription.length > 80);
  }
});

document.getElementById("app").addEventListener("change", event => {
  if (event.target.id !== "nav-photo-input") return;
  const file = event.target.files && event.target.files[0];
  if (!file || state.improvePhotos.length >= 3) return;
  const reader = new FileReader();
  reader.onload = readerEvent => {
    state.improvePhotos.push(readerEvent.target.result);
    render({ preserveScroll: true });
  };
  reader.readAsDataURL(file);
});

window.addEventListener("message", event => {
  if (event.data && event.data.type === "hard-find-back") {
    go("order-detail");
  }
});

render();
