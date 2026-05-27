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
  todoFilter: "all",
  analysisBackScreen: "home",
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
  chatbotDraft: "",
  chatbotCustomFlow: null,
  chatbotFeedback: null,
  chatbotContext: null,
  chatView: "main",
  chatFilter: "All",
  chatThread: null,
  selectedChatTicketId: "TCK-1024",
  todoMode: "delivery",
  pickupTab: "To-pickup",
  returnTab: "To-return",
  modeSwitcherOpen: false,
  learningFocus: null,
  homeSearchQuery: "",
  homeSearchMessage: "",
  searchQuery: "",
  sequenceDriverType: "new",
  sequenceGroupingActive: false,
  sequenceGroupOpen: false,
  chatbotBackScreen: "home",
  selectedNotificationId: "redelivery",
  selectedTransferOrderId: orders[0].id,
  scanBackScreen: "home",
  botCallOrderIds: []
};

let comingSoonTimer = null;

const icons = {
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
  home: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
  clipboard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6l1 2h3v16H5V5h3z"/><path d="M9 9h6"/><path d="M9 13h6"/><path d="M9 17h4"/></svg>',
  settings: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.7 1.7 0 00.34 1.88l.04.04a2 2 0 01-2.83 2.83l-.04-.04A1.7 1.7 0 0015 19.4a1.7 1.7 0 00-1 .6 1.7 1.7 0 00-.4 1.08V21a2 2 0 01-4 0v-.08A1.7 1.7 0 008.6 19.4a1.7 1.7 0 00-1.88.34l-.04.04a2 2 0 01-2.83-2.83l.04-.04A1.7 1.7 0 004.6 15a1.7 1.7 0 00-.6-1 1.7 1.7 0 00-1.08-.4H3a2 2 0 010-4h.08A1.7 1.7 0 004.6 8.6a1.7 1.7 0 00-.34-1.88l-.04-.04a2 2 0 012.83-2.83l.04.04A1.7 1.7 0 009 4.6c.35 0 .7-.1 1-.3a1.7 1.7 0 00.6-1.22V3a2 2 0 014 0v.08c0 .48.2.92.6 1.22.3.2.65.3 1 .3a1.7 1.7 0 001.88-.34l.04-.04a2 2 0 012.83 2.83l-.04.04A1.7 1.7 0 0019.4 9c0 .35.1.7.3 1 .3.4.74.6 1.22.6H21a2 2 0 010 4h-.08a1.7 1.7 0 00-1.52.4z"/></svg>',
  ticket: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h6"/><path d="M9 15h4"/></svg>',
  transfer: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h11"/><path d="M12 4l3 3-3 3"/><path d="M20 17H9"/><path d="M12 14l-3 3 3 3"/><rect x="4" y="12" width="5" height="5" rx="1"/><rect x="15" y="7" width="5" height="5" rx="1"/></svg>',
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
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>',
  wallet: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7H5a2 2 0 00-2 2v9a2 2 0 002 2h15a1 1 0 001-1V8a1 1 0 00-1-1z"/><path d="M16 12h5v4h-5a2 2 0 010-4z"/><path d="M18 14h.01"/><path d="M5 7V5a2 2 0 012-2h11"/></svg>',
  cash: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7"/><path d="M9.5 9.8h3.2a2.1 2.1 0 010 4.2H11"/><path d="M11 8v8"/><path d="M14.7 9.8H16"/></svg>',
  chart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-8"/><path d="M20 16v-3"/></svg>',
  truck: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h11v11H3z"/><path d="M14 9h4l3 4v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
  calendar: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>',
  education: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><path d="M8 7h8"/><path d="M8 11h7"/></svg>',
  bank: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10l9-6 9 6"/><path d="M5 10h14"/><path d="M6 10v8"/><path d="M10 10v8"/><path d="M14 10v8"/><path d="M18 10v8"/><path d="M4 18h16"/><path d="M3 22h18"/></svg>',
  barcode: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h1.5v14H4V5zm3 0h1v14H7V5zm2.5 0H12v14H9.5V5zm4 0h1v14h-1V5zm2.5 0h1.5v14H16V5zm3 0h1v14h-1V5z"/></svg>',
  headset: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12a8 8 0 0116 0v4a2 2 0 01-2 2h-2v-6h4"/><path d="M4 16v-4h4v6H6a2 2 0 01-2-2z"/><path d="M13 20h3"/></svg>',
  shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-5"/></svg>'
};

icons.returnBox = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7.5l-8-4.5-8 4.5 8 4.5 8-4.5z"/><path d="M4 7.5V16l8 5 8-5V7.5"/><path d="M12 12v9"/><path d="M8 10l-3-3 3-3"/><path d="M5 7h7"/></svg>';

function appBar(title = "Delivery", withBack = false) {
  if (withBack) {
    return `
      <div class="back-bar">
        <button class="icon-btn" data-action="back">${icons.back}</button>
        <span class="app-title">${title}</span>
      </div>`;
  }

  const chipIcon = title === "Home" ? icons.home : title === "Chat" || title === "Chatbot" ? icons.msg : title === "Profile" || title === "Me" ? icons.user : title === "Pickup" ? icons.pickup : icons.box;
  return `
    <div class="app-bar app-bar-left-chip">
      <div class="biz-chip">${chipIcon} <span>${title}</span>${title === "Delivery" || title === "Pickup" ? ' <span class="chip-caret">▾</span>' : ""}</div>
      <div class="spacer"></div>
      <button class="app-icon-btn">${icons.search}</button>
      <button class="app-icon-btn" data-action="message-center">${icons.bell}</button>
    </div>`;
}

function todoModeCounts() {
  const pickupCount = 18;
  const returnCount = exceptionOrders.length;
  return {
    pickupReturn: pickupCount + returnCount,
    pickup: pickupCount,
    lineHaul: 0,
    delivery: orders.length,
    return: returnCount
  };
}

function todoModeIcon(mode) {
  if (mode === "Pickup") return icons.pickup;
  if (mode === "Return") return icons.returnBox;
  return icons.box;
}

function renderTodoModeSwitcher(currentMode = "Delivery") {
  if (!state.modeSwitcherOpen) return "";
  const counts = todoModeCounts();
  const rows = [
    { mode: "pickup", icon: icons.pickup, label: "Pickup", value: counts.pickup, suffix: "To-pickup" },
    { mode: "linehaul", icon: icons.truck, label: "Line Haul", value: counts.lineHaul, suffix: "To-do", disabled: true },
    { mode: "delivery", icon: icons.box, label: "Delivery", value: counts.delivery, suffix: "To-do" },
    { mode: "return", icon: icons.returnBox, label: "Return", value: counts.return, suffix: "To-do" }
  ];
  return `
    <button class="mode-switcher-backdrop" data-action="close-mode-switcher" aria-label="Close mode switcher"></button>
    <section class="mode-switcher-panel" aria-label="Mode switcher">
      <div class="mode-switcher-summary">
        <span>${icons.returnBox} Pickup & Return</span>
        <strong>${counts.pickupReturn} <em>To-do</em></strong>
      </div>
      ${rows.map(row => `
        <button
          class="mode-switcher-row ${row.disabled ? "is-disabled" : ""} ${currentMode.toLowerCase() === row.mode ? "active" : ""}"
          ${row.disabled ? 'aria-disabled="true"' : `data-action="switch-todo-mode" data-mode="${row.mode}"`}
        >
          <span>${row.icon} ${row.label}</span>
          <strong>${row.value} <em>${row.suffix}</em></strong>
        </button>`).join("")}
    </section>`;
}

function todoModeAppBar(mode = "Delivery", options = {}) {
  return `
    <div class="app-bar app-bar-left-chip mode-app-bar">
      <button class="biz-chip mode-chip ${state.modeSwitcherOpen ? "open" : ""}" data-action="toggle-mode-switcher" aria-expanded="${state.modeSwitcherOpen ? "true" : "false"}">
        ${todoModeIcon(mode)} <span>${mode}</span><span class="chip-caret">▾</span>
      </button>
      <div class="spacer"></div>
      <button class="app-icon-btn">${icons.search}</button>
      ${options.scan ? `<button class="app-icon-btn" data-action="bottom-scan">${icons.scan}</button>` : ""}
      <button class="app-icon-btn" data-action="message-center">${icons.bell}</button>
    </div>
    ${renderTodoModeSwitcher(mode)}`;
}

function bottomNavActive() {
  if (state.screen === "home") return "home";
  if (state.screen === "chatbot") return "chatbot";
  if (state.screen === "profile") return "profile";
  return "todo";
}

function shouldShowBottomNav() {
  return ["home", "todo", "delay", "sequence-new", "sequence-experienced", "redelivery-orders", "profile"].includes(state.screen)
    || (state.screen === "chatbot" && state.chatView === "main");
}

function shouldShowFloatingChatbot() {
  const excluded = ["home", "todo", "delay", "sequence-new", "sequence-experienced", "redelivery-orders", "profile", "chatbot", "scan", "dialer", "sms"];
  if (state.screen.startsWith("me-")) return false;
  return !excluded.includes(state.screen);
}

function floatingChatbotButton() {
  if (!shouldShowFloatingChatbot()) return "";
  return `<button class="floating-chatbot-entry" data-action="floating-chatbot" aria-label="Ask assistant">${icons.bot}</button>`;
}

function chatbotAppBar() {
  const showBack = state.chatbotBackScreen && state.chatbotBackScreen !== "home" && state.chatbotBackScreen !== "chatbot";
  return `
    <div class="app-bar app-bar-left-chip chatbot-app-bar">
      ${showBack ? `<button class="app-icon-btn chatbot-back-btn" data-action="back" aria-label="Back">${icons.back}</button>` : ""}
      <div class="biz-chip">${icons.msg} <span>Chat</span></div>
      <div class="spacer"></div>
      <button class="chat-ticket-entry" data-action="chat-ticket-center" aria-label="Ticket Center">${icons.ticket}<span>Ticket Center</span></button>
    </div>`;
}

function renderBottomNav() {
  const active = bottomNavActive();
  const items = [
    { key: "home", label: "Homepage", icon: icons.home, action: "bottom-home" },
    { key: "todo", label: "To do", icon: icons.box, action: "bottom-todo" },
    { key: "chatbot", label: "Chat", icon: icons.msg, action: "bottom-chatbot" },
    { key: "profile", label: "Me", icon: icons.user, action: "bottom-profile" }
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

function sortRow(options = {}) {
  const groupingClass = options.groupingActive ? "active recommend-sort" : "";
  const groupingAttrs = options.groupingAction ? ' data-action="sequence-grouping"' : "";
  return `
    <div class="sort-row">
      <button>District ▾</button>
      <button>Urgent SLA</button>
      <button class="${groupingClass}"${groupingAttrs}>Grouping</button>
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

function redeliveryOrders() {
  return orders
    .filter(order => order.displayId === "PH005314767588")
    .map(order => ({
      ...order,
      tags: [...new Set(["Redelivery", ...order.tags])],
      risk: "Fake on-hold rejected · Redelivery required"
    }));
}

function uncontactedOrders() {
  return orders.filter(order => order.displayId !== "PH005314767368");
}

function urgentOrders() {
  return orders.filter(order => order.tags.includes("Urgent"));
}

function codOrders() {
  return orders.filter(order => order.tags.includes("COD"));
}

function todoFilteredOrders() {
  if (state.todoFilter === "urgent") return urgentOrders();
  if (state.todoFilter === "cod") return codOrders();
  if (state.todoFilter === "redelivery") return redeliveryOrders();
  return orders;
}

function todoFilterLabel() {
  if (state.todoFilter === "urgent") return "To-do · Urgent";
  if (state.todoFilter === "cod") return "To-do · COD";
  if (state.todoFilter === "redelivery") return "To-do · Redelivery";
  return "To-do orders";
}

function showTimedToast(text, anchorEl = null) {
  state.toastText = text;
  const modalRoot = document.getElementById("modal-root");
  const rootRect = modalRoot?.getBoundingClientRect();
  const actionRect = anchorEl?.getBoundingClientRect?.();
  if (rootRect && actionRect) {
    const top = actionRect.top + actionRect.height / 2 - rootRect.top;
    state.comingSoonTop = Math.max(72, Math.min(rootRect.height - 72, Math.round(top)));
  } else {
    state.comingSoonTop = rootRect ? Math.round(rootRect.height * 0.52) : 360;
  }
  state.showComingSoon = true;
  render({ preserveScroll: true });
  window.clearTimeout(comingSoonTimer);
  comingSoonTimer = window.setTimeout(() => {
    state.showComingSoon = false;
    render({ preserveScroll: true });
  }, 2000);
}

function normalizeSearchText(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function canonicalSearchQuery(query) {
  return normalizeSearchText(query).replace(/^id/, "ph");
}

function searchOrders(query) {
  const normalized = normalizeSearchText(query).replace(/^id/, "ph");
  if (!normalized) return [];
  return allOrders().filter(order => {
    const candidates = [
      order.displayId,
      order.id,
      order.phone,
      order.alternativePhone,
      order.buyer,
      order.address
    ].map(normalizeSearchText);
    return candidates.some(value => value.includes(normalized));
  });
}

function highlightMatchText(text, query) {
  const raw = String(text || "");
  const normalized = canonicalSearchQuery(query);
  if (!normalized) return escapeHtml(raw);
  const visibleNeedle = String(query || "").trim().replace(/^id/i, "PH");
  const needle = visibleNeedle || query;
  const parts = raw.split(new RegExp(`(${escapeRegExp(needle)})`, "ig"));
  return parts.map(part => part.toLowerCase() === needle.toLowerCase()
    ? `<mark>${escapeHtml(part)}</mark>`
    : escapeHtml(part)
  ).join("");
}

function submitHomeSearch() {
  const query = state.homeSearchQuery.trim();
  if (!query) {
    state.homeSearchMessage = "";
    render({ preserveScroll: true });
    return;
  }
  state.homeSearchMessage = "";
  state.searchQuery = query;
  state.homeSearchQuery = query;
  go("search-results");
}

function resolveChatbotScenario(query) {
  const text = normalizeSearchText(query);
  if (!text) return null;
  const includesAny = words => words.some(word => text.includes(word));
  if (includesAny(["pod", "proof", "photo", "picture", "upload", "deliveryproof"])) return "pod";
  if (includesAny(["cod", "payment", "pay", "settlement", "money", "income", "php"])) return "payment";
  if (includesAny(["otp", "verificationcode"])) return "loginOtp";
  if (includesAny(["newdevice", "devicechange", "changephone"])) return "loginDevice";
  if (includesAny(["suspend", "suspended", "blocked"])) return "suspended";
  if (includesAny(["login", "account", "password"])) return "login";
  if (includesAny(["human", "support", "ticket", "agent", "case"])) return "human";
  if (includesAny(["twoissue", "twoissues", "multiple", "several"])) return "multi";
  return null;
}

function submitChatbotQuestion() {
  const question = state.chatbotDraft.trim();
  if (!question) return;
  const scenario = resolveChatbotScenario(question);
  state.chatbotFeedback = null;
  state.chatbotDraft = "";
  if (scenario) {
    state.chatbotScenario = scenario;
    state.chatbotCustomFlow = null;
    state.chatThread = chatThreadForScenario(scenario, state.chatbotContext);
  } else {
    state.chatbotScenario = "custom";
    state.chatThread = "ai-faq";
    state.chatbotCustomFlow = {
      user: question,
      status: "No answer available",
      hideMeta: true,
      reply: ["I can't answer your question yet."]
    };
  }
  render({ preserveScroll: true });
}

function chatThreadForScenario(scenario, context = null) {
  if (scenario === "human") return "ops";
  return "ai-faq";
}

function setChatbotEntry({ scenario = "welcome", context = null, backScreen = state.screen || "home", customFlow = null, thread = null } = {}) {
  state.chatbotScenario = scenario;
  state.chatbotCustomFlow = customFlow;
  state.chatbotContext = context;
  state.chatbotDraft = "";
  state.chatbotFeedback = null;
  state.chatbotBackScreen = backScreen;
  state.chatThread = thread || chatThreadForScenario(scenario, context);
  state.chatView = "window";
  go("chatbot");
}

function orderContext(order) {
  const tags = order.displayId === "PH005314767588"
    ? [...new Set(["Redelivery", ...order.tags])]
    : order.tags;
  return {
    title: `${order.displayId} · ${order.buyer}`,
    detail: `Tags: ${tags.join(", ") || "Normal"}`
  };
}

function redeliveryContext() {
  return {
    title: "PH005314767588 · Redelivery required",
    detail: "Triggered by notification: on-hold proof was rejected."
  };
}

function monthlyPodContext() {
  return {
    title: "Monthly Report · POD/POOH pass 85%",
    detail: "Below quality target. Improve proof quality to protect rewards."
  };
}

function genericContext(title, detail) {
  return { title, detail };
}

function enterContextualChatbot() {
  if (state.screen === "order-detail") {
    const order = allOrders().find(item => item.id === state.selectedOrderId) || orders[0];
    setChatbotEntry({ scenario: "orderAssist", context: orderContext(order), backScreen: "order-detail" });
    return;
  }
  if (state.screen === "notification-detail" && state.selectedNotificationId === "redelivery") {
    setChatbotEntry({ scenario: "redeliveryNotification", context: redeliveryContext(), backScreen: "notification-detail" });
    return;
  }
  if (state.screen === "monthly-report") {
    setChatbotEntry({ scenario: "podPoohImprove", context: monthlyPodContext(), backScreen: "monthly-report" });
    return;
  }
  if (state.screen === "nav-help" || state.screen === "improve-nav") {
    const order = allOrders().find(item => item.id === state.selectedOrderId) || orders[3];
    setChatbotEntry({
      scenario: "orderAssist",
      context: genericContext(`${order.displayId} · Address Guidance`, "Hard-to-find address guidance is open for this stop."),
      backScreen: state.screen
    });
    return;
  }
  if (state.screen === "learning-center") {
    setChatbotEntry({
      scenario: state.learningFocus === "pod-pooh" ? "podPoohImprove" : "welcome",
      context: genericContext("Learning Center · SOP guidance", "Use this training list to improve route readiness."),
      backScreen: "learning-center"
    });
    return;
  }
  if (state.screen === "message-center") {
    setChatbotEntry({
      scenario: "welcome",
      context: genericContext("Notification Center", "Ask about driver messages, work notices or next actions."),
      backScreen: "message-center"
    });
    return;
  }
  if (state.screen === "brief") {
    setChatbotEntry({
      scenario: "welcome",
      context: genericContext("Task Brief · Special order review", "Today's route has special orders that need attention."),
      backScreen: "brief"
    });
    return;
  }
  if (state.screen === "pending-delivery") {
    setChatbotEntry({
      scenario: "welcome",
      context: genericContext("Pending Delivery · Urgent SLA", "Review pending orders and transfer risk before SLA is missed."),
      backScreen: "pending-delivery"
    });
    return;
  }
  if (state.screen === "exception-orders") {
    setChatbotEntry({
      scenario: "welcome",
      context: genericContext("Exception Orders · Bring back to hub", "These parcels do not need delivery and should return to hub."),
      backScreen: "exception-orders"
    });
    return;
  }
  if (state.screen === "transfer-center") {
    setChatbotEntry({
      scenario: "welcome",
      context: genericContext("Transfer Center · Parcel handover", "Review incoming and outgoing parcel transfer tasks."),
      backScreen: "transfer-center"
    });
    return;
  }
  if (state.screen === "transfer-detail") {
    const order = allOrders().find(item => item.id === state.selectedTransferOrderId) || orders[0];
    setChatbotEntry({
      scenario: "orderAssist",
      context: genericContext(`${order.displayId} · Parcel transfer`, `Buyer: ${order.buyer}. Check transfer status before scanning.`),
      backScreen: "transfer-detail"
    });
    return;
  }
  if (state.screen === "search-results") {
    setChatbotEntry({
      scenario: "welcome",
      context: genericContext(`Search · ${state.searchQuery || "Order lookup"}`, "Ask for help finding or reviewing an order."),
      backScreen: "search-results"
    });
    return;
  }
  setChatbotEntry({ scenario: "welcome", context: null, backScreen: state.screen || "home" });
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

function botCallButton(order, extraClass = "") {
  const queued = state.botCallOrderIds.includes(order.id);
  return `
    <button class="bot-call-btn ${queued ? "queued" : ""} ${extraClass}" data-action="bot-call-order" data-order="${order.id}">
      ${icons.bot}
      <span>${queued ? "Bot call queued" : "Bot call"}</span>
    </button>`;
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

function searchResultCard(order, query) {
  const tags = order.tags.map(tagHtml).join("");
  return `
    <section class="search-result-card" data-order="${order.id}" role="button" tabindex="0">
      <div class="search-result-id">
        <span>${highlightMatchText(order.displayId, query)}</span>
        <span class="copy-icon">□</span>
      </div>
      <div class="search-result-body">
        <h3><span class="pin-dot">${icons.pin}</span>${escapeHtml(order.address)}</h3>
        <p>Receiver · ${escapeHtml(order.buyer)}</p>
        ${tags ? `<div class="tag-row">${tags}</div>` : ""}
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
  return `
    <div class="home-page">
      <section class="home-dashboard-head">
        <div class="home-search-row">
          <span class="home-weather">20°C</span>
          <label class="home-search-pill">${icons.search}<input class="home-search-input" type="text" value="${escapeHtml(state.homeSearchQuery)}" placeholder="Search order by order number or phone number" /></label>
          <button class="home-head-icon" data-action="message-center" aria-label="Message center">${icons.bell}</button>
          <button class="home-head-icon home-scan-btn" data-action="bottom-scan" aria-label="Scan parcel">${icons.scan}</button>
        </div>
        <div class="home-ops-card">
          <section class="home-ops-panel" data-action="home-task-filter" data-filter="all" role="button" tabindex="0">
            <div class="home-ops-title">
              <div class="home-ops-count"><strong>5</strong><span>Delivery</span></div>
              <em>Today</em>
            </div>
            <div class="home-ops-subgrid">
              <button class="home-ops-mini" data-action="home-task-filter" data-filter="urgent"><span>Urgent</span><strong>1</strong></button>
              <button class="home-ops-mini" data-action="home-task-filter" data-filter="cod"><span>Pending Payment</span><strong>1</strong></button>
            </div>
          </section>
          <section class="home-ops-panel pickup" data-action="home-pickup-list" role="button" tabindex="0">
            <div class="home-ops-title">
              <div class="home-ops-count"><strong>18</strong><span>Pickup</span></div>
              <em>Today</em>
            </div>
            <div class="home-ops-subgrid">
              <button class="home-ops-mini" data-action="home-pickup-list"><span>Urgent</span><strong>0</strong></button>
              <button class="home-ops-mini" data-action="home-pickup-list"><span>Pending Payment</span><strong>1</strong></button>
            </div>
          </section>
        </div>
        <section class="home-ai-tip" data-action="ai-brief-analysis" role="button" tabindex="0">
          <strong>AI Briefing</strong>
          <span>Tap to analyze today's tasks</span>
        </section>
      </section>

      <section class="home-notice-card" data-action="notification-detail" data-notification="redelivery" role="button" tabindex="0">
        <span class="notice-icon">${icons.bell}</span>
        <span>One order need redelivery</span>
        <em>1h ago</em>
        <b>›</b>
      </section>

      <section class="home-exception-card">
        <div class="home-exception-head">
          <strong>Exceptions Analysis</strong>
          <span>Today's focus</span>
        </div>
        <div class="home-exception-grid">
          <button data-action="progress-analysis-detail">
            <span class="exception-tool-icon progress">${icons.chart}<em>2</em></span>
            <strong>Progress analysis</strong>
            <small>Delay & hard-to-find</small>
          </button>
          <button data-action="redelivery-orders">
            <span class="exception-tool-icon redelivery">${icons.ticket}<em>1</em></span>
            <strong>Redelivery</strong>
            <small>POOH review failed</small>
          </button>
        </div>
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

function renderSearchResultsPage() {
  const query = state.searchQuery.trim();
  const results = searchOrders(query);
  return `
    <div class="search-page">
      <div class="search-topbar">
        <button class="search-back-btn" data-action="back" aria-label="Back">${icons.back}</button>
        <label class="search-field">
          <input class="search-page-input" type="text" value="${escapeHtml(state.searchQuery)}" placeholder="Search order" />
        </label>
        <button class="home-head-icon search-head-icon" data-action="message-center" aria-label="Message center">${icons.bell}</button>
        <button class="home-head-icon home-scan-btn search-head-icon" data-action="bottom-scan" aria-label="Scan parcel">${icons.scan}</button>
      </div>
      ${results.length
        ? `<div class="search-result-list">${results.map(order => searchResultCard(order, query)).join("")}</div>`
        : `<div class="search-empty-state">No related orders yet</div>`}
    </div>`;
}

function todoProgressBanner() {
  return `
    <section class="todo-progress-alert" data-action="progress-analysis-detail" role="button" tabindex="0">
      <div>
        <strong>Progress risk · 2 actions</strong>
        <span>Batch transfer delayed orders or open address guidance for hard-to-find stop.</span>
      </div>
      <b>›</b>
    </section>`;
}

const pickupTasks = [
  {
    name: "TAMAN SARI",
    id: "PT 202105242Y080",
    address: "Kontrakan H.yono Kp. Cijiantra girang RT 05/03 desa.jatake kec.pagedangan-tangerang",
    shops: 3,
    orders: 25,
    tone: "muted"
  },
  {
    name: "PUP Name Test",
    id: "PT 202105242Y081",
    address: "Kontrakan H.yono Kp. Cijiantra girang RT 05/03 desa.jatake",
    shops: 1,
    orders: 0,
    tone: "alert"
  },
  {
    name: "SP Kontrakan 01",
    id: "PT 202105242Y082",
    address: "Kontrakan H.yono Kp. Cijiantra girang RT 05/03 pagedangan-tangerang",
    shops: 3,
    orders: 25,
    tone: "muted"
  },
  {
    name: "SP Kontrakan 02",
    id: "PT 202105242Y083",
    address: "Kontrakan H.yono Kp. Cijiantra girang RT 05/03 pagedangan-tangerang",
    shops: 2,
    orders: 18,
    tone: "muted"
  }
];

function pickupAppBar() {
  return todoModeAppBar("Pickup", { scan: true });
}

function pickupTabs(active = "To-pickup") {
  const items = [
    { label: "To-pickup", count: 18 },
    { label: "To-handover", count: 8 },
    { label: "Ended", count: 16 }
  ];
  return `
    <div class="tabs pickup-tabs">
      ${items.map(item => `<button class="tab ${item.label === active ? "active" : ""}" data-action="select-pickup-tab" data-tab="${item.label}">${item.label} <span>(${item.count})</span></button>`).join("")}
    </div>`;
}

function pickupTaskCard(task) {
  return `
    <section class="pickup-task-card">
      <strong>${task.name}</strong>
      <span>${task.id}</span>
      <p>${task.address}</p>
      <div class="pickup-task-meta ${task.tone === "alert" ? "alert" : ""}">
        <span>${icons.pickup} ${task.shops} Shops</span>
        <span>${icons.clipboard} ${task.orders} Orders</span>
      </div>
    </section>`;
}

function renderPickupTodo() {
  const activeTab = state.pickupTab || "To-pickup";
  const emptyText = activeTab === "To-handover" ? "No handover pickup tasks" : "No ended pickup tasks";
  return `
    ${pickupAppBar()}
    ${pickupTabs(activeTab)}
    <div class="pickup-content">
      ${activeTab === "To-pickup"
        ? pickupTasks.map(pickupTaskCard).join("")
        : `<div class="empty-tab-state">${emptyText}</div>`}
    </div>`;
}

function returnTabs(active = "To-return") {
  const items = [
    { label: "To-return", count: exceptionOrders.length },
    { label: "Returned", count: 0 },
    { label: "Ended", count: 0 }
  ];
  return `
    <div class="tabs pickup-tabs return-tabs">
      ${items.map(item => `<button class="tab ${item.label === active ? "active" : ""}" data-action="select-return-tab" data-tab="${item.label}">${item.label} <span>(${item.count})</span></button>`).join("")}
    </div>`;
}

function returnTaskCard(order) {
  return `
    <section class="return-task-card" data-action="open-order-detail" data-order="${order.id}" data-scenario="todo" role="button" tabindex="0">
      <div class="return-task-head">
        <strong>${order.displayId}</strong>
        <span>${order.exceptionReason}</span>
      </div>
      <small>KRAMAT JATI2</small>
      <p>${order.address}</p>
      <div class="return-task-meta">
        ${order.tags.map(tag).join("")}
      </div>
    </section>`;
}

function renderReturnTodo() {
  const activeTab = state.returnTab || "To-return";
  return `
    ${todoModeAppBar("Return")}
    ${returnTabs(activeTab)}
    <div class="pickup-content return-content">
      ${activeTab === "To-return"
        ? exceptionOrders.map(returnTaskCard).join("")
        : `<div class="empty-tab-state">No ${activeTab.toLowerCase()} tasks</div>`}
    </div>`;
}

function renderTodo() {
  if (state.todoMode === "pickup") return renderPickupTodo();
  if (state.todoMode === "return") return renderReturnTodo();
  const activeTab = state.deliveryTab || "To-do";
  const counts = { todo: 5, delivered: 0, onHold: 0 };
  const visibleOrders = todoFilteredOrders();
  if (activeTab === "Delivered") {
    return `
      ${todoModeAppBar("Delivery")}
      ${tabs(activeTab, counts)}
      <div class="content delivered-list-page">
        <div class="empty-tab-state">No delivered order</div>
      </div>`;
  }
  if (activeTab === "On-Hold") {
    return `
      ${todoModeAppBar("Delivery")}
      ${tabs(activeTab, counts)}
      <div class="content delivered-list-page">
        <div class="empty-tab-state">No on-hold orders</div>
      </div>`;
  }
  if (state.sequenceGroupingActive) {
    return `
      ${todoModeAppBar("Delivery")}
      ${tabs(activeTab, counts)}
      ${sortRow({ groupingActive: true, groupingAction: true })}
      ${renderSequenceGroupedList("experienced")}`;
  }
  return `
    ${todoModeAppBar("Delivery")}
    ${tabs(activeTab, counts)}
    ${sortRow({ groupingActive: false, groupingAction: true })}
    <div class="content">
      ${todoProgressBanner()}
      ${briefCard()}
      <div class="group-header">${todoFilterLabel()}</div>
      ${visibleOrders.length ? visibleOrders.map(order => orderCard(order)).join("") : `<div class="empty-tab-state">No matched orders</div>`}
    </div>`;
}

function renderAiBriefAnalysisPage() {
  const highFailOrder = orders.find(order => order.specialTypes.includes("highFail")) || orders[0];
  const urgentOrder = orders.find(order => order.tags.includes("Urgent")) || orders[1];
  const hardFindOrder = orders.find(order => order.tags.includes("Hard- find Address")) || orders[3];
  return `
    ${appBar("AI Briefing", true)}
    <div class="content ai-brief-page">
      <section class="ai-brief-hero">
        <strong>Today task analysis</strong>
        <span>AI separates pickup and delivery risks, then recommends the next action.</span>
      </section>

      <section class="ai-brief-module">
        <div class="ai-brief-module-head">
          <span class="module-dot delivery"></span>
          <div>
            <strong>Delivery</strong>
            <span>5 tasks · 3 need attention</span>
          </div>
        </div>
        <div class="ai-brief-action-card">
          <div>
            <strong>${highFailOrder.displayId} · High delivery fail rate</strong>
            <span>${highFailOrder.failRate} fail rate. Pre-call buyer before arrival to reduce failed delivery.</span>
          </div>
          <div class="ai-brief-actions">
            <button class="btn-secondary" data-action="dial" data-phone="${highFailOrder.phone}">${icons.phone}<span>Call</span></button>
            <button class="btn-primary" data-action="bot-call-order" data-order="${highFailOrder.id}">${icons.bot}<span>Bot pre-call</span></button>
          </div>
        </div>
        <div class="ai-brief-action-card">
          <div>
            <strong>${urgentOrder.displayId} · Urgent SLA</strong>
            <span>Confirm buyer availability early. System can place an automated voice call.</span>
          </div>
          <div class="ai-brief-actions">
            <button class="btn-primary" data-action="bot-call-order" data-order="${urgentOrder.id}">${icons.bot}<span>Auto call</span></button>
          </div>
        </div>
        <div class="ai-brief-action-card">
          <div>
            <strong>${hardFindOrder.displayId} · Hard-to-find address</strong>
            <span>Address has navigation risk. Review saved route references before arriving.</span>
          </div>
          <div class="ai-brief-actions">
            <button class="btn-secondary" data-action="open-hard-guidance" data-order="${hardFindOrder.id}">${icons.nav}<span>Route guidance</span></button>
          </div>
        </div>
        <div class="ai-brief-sequence-card">
          <div>
            <strong>Suggested sequence</strong>
            <span>New drivers see explicit stop order. Experienced drivers see special-first grouping.</span>
          </div>
          <button data-action="open-sequence-suggestion" data-screen="sequence-experienced">View sequence</button>
        </div>
      </section>

      <section class="ai-brief-module pickup">
        <div class="ai-brief-module-head">
          <span class="module-dot pickup"></span>
          <div>
            <strong>Pickup</strong>
            <span>3 tasks · 1 seller may not prepare on time</span>
          </div>
        </div>
        <div class="ai-brief-action-card">
          <div>
            <strong>TAMAN SARI seller · late preparation risk</strong>
            <span>This seller often delays handover. Confirm parcel readiness before going to pickup.</span>
          </div>
          <div class="ai-brief-actions">
            <button class="btn-secondary" data-action="seller-call">${icons.phone}<span>Call seller</span></button>
            <button class="btn-primary" data-action="seller-bot-call">${icons.bot}<span>Bot call</span></button>
          </div>
        </div>
      </section>
    </div>`;
}

function renderProgressAnalysisDetail() {
  const transferOrders = [orders[1], orders[0], orders[2]];
  const hardFindOrder = orders.find(order => order.tags.includes("Hard- find Address")) || orders[3];
  return `
    ${appBar("Progress Analysis", true)}
    <div class="content progress-analysis-page">
      <section class="progress-analysis-hero">
        <div>
          <strong>Route progress delayed</strong>
          <span>0/5 delivered · 5 pending · 1 urgent SLA today</span>
        </div>
        <div class="progress-analysis-bar"><span style="width:0%"></span></div>
      </section>

      <section class="progress-case-card">
        <div class="case-count">1</div>
        <div class="case-body">
          <strong>Batch transfer recommended</strong>
          <span>AI grouped ${transferOrders.length} orders that can be handed over without breaking the route.</span>
          <div class="mini-order-list">
            ${transferOrders.map(order => `<button data-action="open-order-detail" data-order="${order.id}" data-scenario="delay"><b>${order.displayId}</b><span>${order.address}</span></button>`).join("")}
          </div>
          <button class="btn-primary full-width" data-action="open-progress-transfer">Review transfer plan</button>
        </div>
      </section>

      <section class="progress-case-card hard-find">
        <div class="case-count">2</div>
        <div class="case-body">
          <strong>${hardFindOrder.displayId} · Hard-to-find risk</strong>
          <span>Order exceeded SLA and stayed within 50m of buyer address for 20 min without completion.</span>
          <button class="btn-secondary full-width" data-action="open-hard-guidance" data-order="${hardFindOrder.id}">Open address guidance</button>
        </div>
      </section>
    </div>`;
}

function sequenceGroupCard(driverType = state.sequenceDriverType) {
  const specialCount = orders.filter(order => order.category === "special").length;
  const arrow = state.sequenceGroupOpen ? "▾" : "▸";
  return `
    <section class="sequence-group-card" data-action="open-sequence-group" role="button" tabindex="0">
      <div class="sequence-group-main">
        <span class="sequence-folder">${arrow} 📁</span>
        <div>
          <strong>1. KRAMAT JATI2 Delivery Group</strong>
          <small>${orders.length} orders · ${specialCount} special · 1 normal</small>
        </div>
      </div>
      <span class="sequence-group-chip">${driverType === "new" ? "Suggested sequence" : "Special first"}</span>
      <button aria-label="Open group">${icons.more}</button>
    </section>`;
}

function sequenceReason(order) {
  if (order.specialTypes.includes("highFail")) return "Contact buyer in advance";
  if (order.specialTypes.includes("expedited")) return "Prioritize urgent SLA";
  if (order.tags.includes("Hard- find Address")) return "Use address guidance before arrival";
  if (order.displayId === "PH005314767588") return "Redelivery SOP required";
  return "Follow normal delivery flow";
}

function newDriverSequenceOrders() {
  const byId = id => orders.find(order => order.displayId === id);
  return [
    byId("PH005314767421"),
    byId("PH005314767602"),
    byId("PH005314767368"),
    byId("PH005314767588"),
    byId("PH005314767699")
  ].filter(Boolean);
}

function sequenceOrderCard(order, index, options = {}) {
  const isNumbered = options.numbered !== false;
  const guidance = order.tags.includes("Hard- find Address")
    ? `<button class="sequence-guidance-link" data-action="open-hard-guidance" data-order="${order.id}">Address Guidance ›</button>`
    : "";
  const phoneDot = phoneVerifiedDot(order);
  return `
    <section class="sequence-order-card" data-order="${order.id}" role="button" tabindex="0">
      <div class="sequence-order-rank ${isNumbered ? "" : "attention"}">${isNumbered ? index + 1 : "!"}</div>
      <div class="sequence-order-body">
        <div class="sequence-order-id">${order.displayId}<span class="copy-icon">□</span></div>
        <h3><span class="pin-dot">${icons.pin}</span>${order.address}</h3>
        <div class="sequence-order-meta">
          <span>${sequenceReason(order)}</span>
          <em>${order.buyer}</em>
        </div>
        <div class="tag-row">${order.tags.map(tagHtml).join("")}${guidance}</div>
      </div>
      <div class="sequence-order-actions">
        <button class="round-action" data-action="contact">${icons.phone}${phoneDot}</button>
        <button class="round-action" data-action="contact">${icons.msg}</button>
      </div>
    </section>`;
}

function sequenceStopLabel(order) {
  const labels = {
    PH005314767421: "Nick Chan",
    PH005314767602: "Service Point A",
    PH005314767368: "Nick Chan",
    PH005314767588: "Locker A",
    PH005314767699: "Rina A."
  };
  return labels[order.displayId] || order.buyer;
}

function newDriverStopCard(order, index) {
  const tag = order.tags.includes("Hard- find Address")
    ? "Address Guidance"
    : order.tags.includes("NSS")
      ? "NSS"
      : order.tags.includes("Urgent")
        ? "Urgent"
        : order.packageType === "Home"
          ? "Home"
          : "SP";
  const phoneDot = phoneVerifiedDot(order);
  return `
    <section class="new-driver-stop-card" data-order="${order.id}" role="button" tabindex="0">
      <div class="new-driver-stop-head">
        <span class="new-driver-stop-rank">${index + 1}</span>
        <span>${sequenceStopLabel(order)}</span>
        ${index === 0 ? `<em>${order.displayId}</em>` : ""}
      </div>
      <div class="new-driver-stop-body">
        <div>
          <h3><span class="pin-dot">${icons.pin}</span>${order.address}</h3>
          <p>${order.itemCount} Orders/TOs</p>
          <span class="tag">${tag}</span>
        </div>
        <div class="new-driver-stop-actions">
          <button class="round-action" data-action="contact">${icons.phone}${phoneDot}</button>
          <button class="round-action" data-action="contact">${icons.msg}</button>
        </div>
      </div>
    </section>`;
}

function sequenceNumberedOrderCard(order, index) {
  return `
    <div class="sequence-numbered-order">
      <div class="sequence-number-row">
        <span>${index + 1}</span>
        <em>${sequenceStopLabel(order)}</em>
      </div>
      ${orderCard(order)}
    </div>`;
}

function renderSequenceGroupedList(driverType = state.sequenceDriverType) {
  return `
    <div class="content sequence-page">
      <div class="sequence-group-toolbar">
        <span>Grouped result</span>
        <strong>1 route group</strong>
      </div>
      ${sequenceGroupCard(driverType)}
      ${state.sequenceGroupOpen ? renderInlineSequenceOrders(driverType) : ""}
    </div>`;
}

function renderInlineSequenceOrders(driverType = state.sequenceDriverType) {
  return driverType === "new" ? renderNewDriverSequenceDetail() : renderExperiencedSequenceDetail();
}

function renderNewDriverSequenceDetail() {
  const sorted = newDriverSequenceOrders();
  return `
    <div class="special-list-title">Recommended sequence <span>${sorted.length}</span></div>
    ${sorted.map((order, index) => sequenceNumberedOrderCard(order, index)).join("")}`;
}

function renderExperiencedSequenceDetail() {
  const specialOrders = orders.filter(order => order.category === "special");
  const normalOrders = orders.filter(order => order.category === "normal");
  return `
    <div class="special-list-title">Special order <span>${specialOrders.length}</span></div>
    ${specialOrders.map(order => orderCard(order)).join("")}
    <div class="special-list-title">Normal order <span>${normalOrders.length}</span></div>
    ${normalOrders.map(order => orderCard(order)).join("")}`;
}

function renderSequenceCustomization(driverType = state.sequenceDriverType) {
  const activeTab = state.deliveryTab || "To-do";
  const counts = { todo: 5, delivered: 0, onHold: 0 };
  if (activeTab !== "To-do") {
    return `
      ${appBar()}
      ${tabs(activeTab, counts)}
      <div class="content delivered-list-page">
        <div class="empty-tab-state">${activeTab === "Delivered" ? "No delivered order" : "No on-hold orders"}</div>
      </div>`;
  }
  return `
    ${appBar()}
    ${tabs(activeTab, counts)}
    ${sortRow({ groupingActive: state.sequenceGroupingActive, groupingAction: true })}
    ${state.sequenceGroupingActive
      ? renderSequenceGroupedList(driverType)
      : `<div class="content">
          ${briefCard()}
          <div class="group-header">To-do orders</div>
          ${orders.map(order => orderCard(order)).join("")}
        </div>`}`;
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
        ${botCallButton(order, "detail-bot-call")}
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
        <img src="assets/scan-camera.svg?v=20260524-input-interactions" alt="" />
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
  podPoohImprove: {
    user: "How can I improve POD/POOH pass rate?",
    intent: "Service quality",
    tag: "pod_pooh_quality",
    confidence: "85% metric detected",
    status: "Monthly report insight",
    hideMeta: true,
    reply: [
      "Your current POD/POOH pass rate is 85%, which may affect quality bonus and completion score.",
      "Most failures come from unclear parcel photos, missing delivery-location evidence, or using on-hold proof when delivery proof is required.",
      "Review the POD/POOH Quality SOP before the next route and keep both parcel and handover/location evidence clear."
    ],
    path: ["Monthly Report", "Tap POD/POOH pass 85%", "Review advice", "Open Learning Center", "Complete POD/POOH Quality SOP"],
    chips: [
      { label: "Open Learning Center", action: "learning-center", lesson: "pod-pooh" },
      { label: "Review POD upload path", scenario: "pod" },
      { label: "Start new question", scenario: "welcome" }
    ]
  },
  redeliveryNotification: {
    user: "Why was this order moved back to To-do?",
    intent: "Delivery SOP",
    tag: "redelivery_required",
    confidence: "Notification context",
    status: "Redelivery explanation",
    hideMeta: true,
    reply: [
      "Order PH005314767588 was put on-hold during delivery, but the submitted proof did not pass backend review.",
      "The system moved it back to To-do so you can redeliver and upload valid POD/POOH evidence.",
      "Before retrying, contact the buyer and follow the redelivery SOP to avoid another rejected proof."
    ],
    path: ["Open order", "Contact buyer", "Redeliver parcel", "Upload clear POD/POOH", "Update delivery status"],
    chips: [
      { label: "Open order", action: "open-order-detail", order: "TH240052019942", scenarioName: "home" },
      { label: "View Redelivery SOP", action: "learning-center", lesson: "redelivery" },
      { label: "Start new question", scenario: "welcome" }
    ]
  },
  orderAssist: {
    user: "Help me with this order",
    intent: "Order support",
    tag: "contextual_order_assist",
    confidence: "Order context",
    status: "Context-aware support",
    hideMeta: true,
    reply: [
      "I can use the current order ID, buyer and tags to recommend the next action.",
      "Check the order tags first, then follow the matching SOP before updating delivery status.",
      "If this is a hard-to-find or redelivery order, use the guided action before attempting final status update."
    ],
    chips: [
      { label: "How do I upload POD?", scenario: "pod" },
      { label: "Open Learning Center", action: "learning-center" },
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
    <div class="chat-bubble user">${escapeHtml(flow.user)}</div>
    ${chatbotMetaCard(flow)}
    ${reply}
    ${pathCard}
    ${clarification}
    ${flow.intent && !flow.clarification && !flow.caseCard ? chatbotFeedbackRow() : ""}
    ${caseCard}`;
}

function chatbotQuickActions(flow) {
  const chips = flow.chips || chatbotFlows.welcome.chips;
  const attrs = item => {
    if (item.action === "open-order-detail") {
      return `data-action="open-order-detail" data-order="${item.order}" data-scenario="${item.scenarioName || "home"}"`;
    }
    if (item.action === "learning-center") {
      return `data-action="learning-center"${item.lesson ? ` data-lesson="${item.lesson}"` : ""}`;
    }
    return `data-action="chatbot-scenario" data-scenario="${item.scenario || "welcome"}"`;
  };
  return `
    <div class="chatbot-chip-row">
      ${chips.map(item => `<button ${attrs(item)}>${item.label}</button>`).join("")}
    </div>`;
}

function chatThreads() {
  return [
    {
      id: "buyer",
      group: "Direct",
      tone: "buyer",
      icon: icons.user,
      title: "Buyer · PH005314767588",
      subtitle: "Asked for redelivery after 17:00",
      meta: "08:34",
      badge: "Unread"
    },
    {
      id: "seller",
      group: "Direct",
      tone: "seller",
      icon: icons.box,
      title: "Seller · Station JAT12",
      subtitle: "Pickup note updated for fragile parcel",
      meta: "Yesterday",
      badge: "Seller"
    }
  ];
}

function chatTickets() {
  return [
    {
      id: "TCK-1024",
      title: "Rejected POD needs review",
      parcel: "PH005314767588",
      status: "Open",
      priority: "High",
      time: "08:20",
      owner: "Ops Support",
      summary: "Proof photo was rejected. Driver needs clarification before redelivery closeout.",
      nextStep: "Confirm buyer contact and upload clearer parcel/location proof."
    },
    {
      id: "TCK-1018",
      title: "COD settlement mismatch",
      parcel: "COD Batch 12",
      status: "Pending",
      priority: "Normal",
      time: "Yesterday",
      owner: "Finance Ops",
      summary: "Driver reported a mismatch between collected cash and route closeout amount.",
      nextStep: "Ops is checking FMS reconciliation logs."
    },
    {
      id: "TCK-1007",
      title: "Station check-in range issue",
      parcel: "KRAMAT JATI2",
      status: "Resolved",
      priority: "Low",
      time: "Mon",
      owner: "Hub Ops",
      summary: "Check-in failed because GPS range was outside station boundary.",
      nextStep: "Boundary was refreshed. No action needed."
    }
  ];
}

function selectedChatThread() {
  const supportThreads = [
    {
      id: "ai-faq",
      group: "AI",
      tone: "ai",
      icon: icons.bot,
      title: "AI Assistant Bot",
      subtitle: "Delivery SOP, COD, login and account questions",
      meta: "Online",
      badge: "24/7",
      scenario: "welcome"
    },
    {
      id: "ops",
      group: "Support",
      tone: "ops",
      icon: icons.headset,
      title: "Ops Support",
      subtitle: "Manual help when AI cannot resolve the issue",
      meta: "Waiting",
      badge: "Ops",
      scenario: "human"
    }
  ];
  const threads = chatThreads();
  return [...supportThreads, ...threads].find(thread => thread.id === state.chatThread) || null;
}

function chatThreadActionAttrs(thread) {
  return `data-action="chat-thread" data-thread="${thread.id}"${thread.scenario ? ` data-scenario="${thread.scenario}"` : ""}`;
}

function renderChatModeGrid() {
  const modes = [
    { action: "chat-ai-faq", thread: "ai-faq", scenario: "welcome", icon: icons.bot, title: "AI Assistant Bot", text: "Ask SOP or payment questions" },
    { action: "chat-ops-support", thread: "ops", scenario: "human", icon: icons.headset, title: "Ops Support", text: "Realtime chat or Bot first" }
  ];
  return `
    <section class="chat-mode-grid">
      ${modes.map(mode => `
        <button data-action="${mode.action}" data-thread="${mode.thread}" data-scenario="${mode.scenario}">
          <span>${mode.icon}</span>
          <strong>${mode.title}</strong>
          <small>${mode.text}</small>
        </button>`).join("")}
    </section>`;
}

function renderChatThreadList() {
  const visibleThreads = chatThreads();
  return `
    <section class="chat-thread-card">
      <div class="chat-section-head">
        <strong>Recent Chats</strong>
        <span>${visibleThreads.length} conversations</span>
      </div>
      <div class="chat-thread-list">
        ${visibleThreads.map(thread => `
          <button class="chat-thread-row ${thread.tone} ${state.chatThread === thread.id ? "active" : ""}" ${chatThreadActionAttrs(thread)}>
            <span class="chat-thread-icon">${thread.icon}</span>
            <div>
              <strong>${thread.title}</strong>
              <small>${thread.subtitle}</small>
            </div>
            <em>${thread.meta}</em>
          </button>`).join("")}
      </div>
    </section>`;
}

function directChatMessages(threadId) {
  if (threadId === "buyer") {
    return [
      { role: "peer", text: "Can you deliver after 17:00? I am not at home now." },
      { role: "user", text: "Noted. I will retry after the current route block." },
      { role: "peer", text: "Please call before arrival." }
    ];
  }
  return [
    { role: "peer", text: "Pickup note updated: one fragile parcel needs careful scan." },
    { role: "user", text: "Received. I will check the label before loading." }
  ];
}

function renderDirectChatPanel(thread) {
  return `
    <section class="chatbot-session-card direct-chat-card">
      <div class="chatbot-session-head">
        <div>
          <strong>${thread.title}</strong>
          <span>${thread.group === "Direct" ? "Driver direct conversation" : thread.subtitle}</span>
        </div>
        <em>${thread.badge}</em>
      </div>
      <div class="chatbot-thread">
        ${directChatMessages(thread.id).map(message => `<div class="chat-bubble ${message.role}">${escapeHtml(message.text)}</div>`).join("")}
      </div>
      <div class="chatbot-input-bar chat-input-inline">
        <input class="chat-direct-input" type="text" value="" placeholder="Reply to ${thread.id === "buyer" ? "buyer" : "seller"}" />
        <button data-action="coming-soon">Send</button>
      </div>
    </section>`;
}

function renderActiveChatPanel(flow) {
  const thread = selectedChatThread();
  if (!thread) return "";
  if (thread.id === "buyer" || thread.id === "seller") return renderDirectChatPanel(thread);
  return `
    <section class="chatbot-session-card">
      <div class="chatbot-session-head">
        <div>
          <strong>${thread.title}</strong>
          <span>${thread.subtitle}</span>
        </div>
        <em>${thread.badge}</em>
      </div>
      <div class="chatbot-thread">
        ${chatbotConversation(flow)}
      </div>
      ${chatbotQuickActions(flow)}
      <div class="chatbot-input-bar chat-input-inline">
        <input class="chatbot-question-input" type="text" value="${escapeHtml(state.chatbotDraft)}" placeholder="Type a question about delivery, payment or account" />
        <button data-action="chatbot-submit">Send</button>
      </div>
    </section>`;
}

function chatWindowProfile(threadId) {
  const profiles = {
    buyer: {
      title: "Buyer · PH005314767588",
      subtitle: "Read · redelivery coordination",
      avatar: "B",
      avatarClass: "buyer",
      peer: "Buyer",
      peerAvatar: "B",
      messages: [
        { role: "user", text: "Hi, can you receive the parcel after 17:00?" },
        { role: "peer", text: "Yes, please call before arrival." },
        { role: "user", text: "Noted. I will retry after my current route block." },
        { role: "peer", text: "Thanks. The gate code is 1208." }
      ],
      card: {
        title: "Redelivery note",
        text: "PH005314767588 · Buyer available after 17:00. Call before arrival.",
        action: "View order"
      }
    },
    seller: {
      title: "Seller · Station JAT12",
      subtitle: "Pickup note updated",
      avatar: "S",
      avatarClass: "seller",
      peer: "Seller",
      peerAvatar: "S",
      messages: [
        { role: "peer", text: "One fragile parcel needs careful scan before loading." },
        { role: "user", text: "Received. I will check the label and keep it on top." },
        { role: "peer", text: "Please update me if the barcode cannot scan." }
      ],
      card: {
        title: "Pickup update",
        text: "Station JAT12 · Fragile parcel requires manual label check.",
        action: "View pickup"
      }
    },
    ops: {
      title: "Ops Support",
      subtitle: "Realtime chat / Bot handoff examples",
      avatar: "O",
      avatarClass: "ops",
      peer: "Ops",
      peerAvatar: "O",
      messages: [
        { role: "scenario", title: "Ops initiated", text: "Ops proactively contacts the driver. This is a realtime human chat." },
        { role: "peer", text: "Hi Kevin, Ops found one POD proof issue on PH005314767588. Are you still holding the parcel?" },
        { role: "user", text: "Yes, the parcel is still with me. I can redeliver after 17:00." },
        { role: "peer", text: "Good. Please call the buyer before arrival and upload a clearer parcel + location proof." },
        { role: "scenario", title: "Driver initiated", text: "Driver starts support. The conversation goes to AI Bot first, then can transfer to Ops." },
        { role: "bot", text: "I can help collect the issue details before transferring to Ops. Please confirm order ID, issue type and current parcel status." },
        { role: "user", text: "Order PH005314767588. POD was rejected and I need Ops review." },
        { role: "bot", text: "Thanks. I have enough context. I can now transfer this case to Ops Support." }
      ],
      card: {
        title: "Transfer ready",
        text: "For driver-initiated support, Bot collects context first and then transfers the case to Ops.",
        action: "Transfer to Ops",
        actionData: "chat-ops-live"
      }
    },
    "ops-bot": {
      title: "AI Assistant Bot",
      subtitle: "Collecting details before Ops handoff",
      avatar: "AI",
      avatarClass: "ai",
      peer: "Bot",
      peerAvatar: "AI",
      messages: [
        { role: "peer", text: "I can help collect the issue details before transferring to Ops." },
        { role: "user", text: "I need Ops support for a rejected POD." },
        { role: "peer", text: "Please confirm the order ID, latest proof note, and whether the parcel is still with you." }
      ],
      card: {
        title: "Ready to transfer",
        text: "When the Bot has enough context, send the case to Ops for manual support.",
        action: "Transfer to Ops",
        actionData: "chat-ops-live"
      }
    }
  };
  return profiles[threadId] || profiles.buyer;
}

function renderChatNativeHeader(profile, { backAction = "back", title = null, avatar = true, actions = true } = {}) {
  return `
    <div class="chat-native-header ${actions ? "" : "no-actions"}">
      <button class="chat-native-back" data-action="${backAction}" aria-label="Back">${icons.back}</button>
      ${avatar ? `<span class="chat-native-avatar ${profile.avatarClass || ""}">${profile.avatar}</span>` : ""}
      <div class="chat-native-title">
        <strong>${escapeHtml(title || profile.title)}</strong>
        ${profile.subtitle ? `<small>${escapeHtml(profile.subtitle)}</small>` : ""}
      </div>
      ${actions ? `
        <button class="chat-native-icon" data-action="chat-ai-faq" aria-label="AI Assistant Bot">${icons.bot}</button>
        <button class="chat-native-icon" data-action="coming-soon" aria-label="More">${icons.more}</button>
      ` : ""}
    </div>`;
}

function renderChatMessage(message, profile) {
  if (message.role === "scenario") {
    return `
      <div class="chat-scenario-note">
        <strong>${escapeHtml(message.title)}</strong>
        <p>${escapeHtml(message.text)}</p>
      </div>`;
  }
  if (message.role === "bot") {
    return `
      <div class="chat-message-row peer">
        <span class="chat-message-avatar ai">AI</span>
        <div>
          <small>AI Assistant Bot</small>
          <p>${escapeHtml(message.text)}</p>
        </div>
      </div>`;
  }
  const avatar = message.role === "peer"
    ? `<span class="chat-message-avatar ${profile.avatarClass || ""}">${profile.peerAvatar}</span>`
    : `<span class="chat-message-avatar self">K</span>`;
  return `
    <div class="chat-message-row ${message.role}">
      ${message.role === "peer" ? avatar : ""}
      <div>
        ${message.role === "peer" ? `<small>${escapeHtml(profile.peer)}</small>` : `<small>Read</small>`}
        <p>${escapeHtml(message.text)}</p>
      </div>
      ${message.role === "user" ? avatar : ""}
    </div>`;
}

function renderChatWindowPage() {
  const profile = chatWindowProfile(state.chatThread || "buyer");
  return `
    ${renderChatNativeHeader(profile, { avatar: true, actions: true })}
    <div class="chat-window-page">
      <div class="chat-window-feed">
        ${profile.messages.map(message => renderChatMessage(message, profile)).join("")}
        <section class="chat-inline-card">
          <strong>${escapeHtml(profile.card.title)}</strong>
          <p>${escapeHtml(profile.card.text)}</p>
          <button data-action="${profile.card.actionData || "coming-soon"}">${escapeHtml(profile.card.action)}</button>
        </section>
      </div>
      <div class="chat-window-input">
        <button data-action="coming-soon" aria-label="Voice">${icons.phone}</button>
        <input type="text" placeholder="Type a message" />
        <button data-action="coming-soon" aria-label="More">${icons.more}</button>
        <button class="send" data-action="coming-soon" aria-label="Send">${icons.nav}</button>
      </div>
    </div>`;
}

function renderAiFaqPage() {
  const profile = {
    title: "AI Assistant Bot",
    subtitle: "SPX Driver Support Assistant",
    avatar: "AI",
    avatarClass: "ai"
  };
  const categories = [
    { icon: "👤", title: "Account & Fraud" },
    { icon: "🚚", title: "Logistics" },
    { icon: "↩", title: "Return/Refund" }
  ];
  const questions = [
    "How to on hold my order?",
    "How to work for another station?",
    "How to appeal against PNR?"
  ];
  return `
    ${renderChatNativeHeader(profile, { avatar: true, actions: false })}
    <div class="ai-faq-page">
      <section class="ai-faq-tip">
        <strong>💡 📦 Shipment issue?</strong>
        <p>Tips content based on driver SOP, COD and parcel exception rules. <span>Link text</span></p>
      </section>
      <section class="ai-faq-categories">
        ${categories.map(item => `
          <button data-action="coming-soon">
            <span>${item.icon}</span>
            <strong>${item.title}</strong>
          </button>`).join("")}
      </section>
      <section class="ai-faq-greeting">Good day! What may I help you?</section>
      <section class="ai-faq-questions">
        <strong>You may want to ask:</strong>
        ${questions.map(question => `<button data-action="chatbot-scenario" data-scenario="pod">${question}</button>`).join("")}
      </section>
      <div class="ai-faq-bottom-chips">
        <button data-action="coming-soon">SPX Order</button>
        <button data-action="coming-soon">Approval Status</button>
      </div>
      <div class="ai-faq-input">
        <input class="chatbot-question-input" type="text" value="${escapeHtml(state.chatbotDraft)}" placeholder="Type a message" />
        <button data-action="chatbot-submit">${icons.nav}</button>
      </div>
    </div>`;
}

function renderTicketListPage() {
  const profile = {
    title: "Ticket Center",
    subtitle: "Driver support cases",
    avatar: "T",
    avatarClass: "ops"
  };
  return `
    ${renderChatNativeHeader(profile, { avatar: true, actions: false })}
    <div class="ticket-center-page">
      <section class="ticket-summary-strip">
        <div><strong>2</strong><span>Open</span></div>
        <div><strong>1</strong><span>Pending</span></div>
        <div><strong>1</strong><span>Resolved</span></div>
      </section>
      <section class="ticket-list-card">
        ${chatTickets().map(ticket => `
          <button class="ticket-list-row ${ticket.status.toLowerCase()}" data-action="chat-ticket-detail" data-ticket="${ticket.id}">
            <span>${icons.ticket}</span>
            <div>
              <strong>${ticket.title}</strong>
              <small>${ticket.id} · ${ticket.parcel}</small>
              <p>${ticket.summary}</p>
            </div>
            <em>${ticket.status}</em>
          </button>`).join("")}
      </section>
    </div>`;
}

function renderTicketDetailPage() {
  const ticket = chatTickets().find(item => item.id === state.selectedChatTicketId) || chatTickets()[0];
  const profile = {
    title: ticket.id,
    subtitle: ticket.title,
    avatar: "T",
    avatarClass: "ops"
  };
  return `
    ${renderChatNativeHeader(profile, { avatar: true, actions: false })}
    <div class="ticket-detail-page">
      <section class="ticket-detail-card">
        <div class="ticket-detail-status">
          <span>${ticket.status}</span>
          <em>${ticket.priority} priority</em>
        </div>
        <strong>${ticket.title}</strong>
        <p>${ticket.summary}</p>
      </section>
      <section class="ticket-info-grid">
        <div><span>Parcel / Topic</span><strong>${ticket.parcel}</strong></div>
        <div><span>Owner</span><strong>${ticket.owner}</strong></div>
        <div><span>Updated</span><strong>${ticket.time}</strong></div>
      </section>
      <section class="ticket-timeline-card">
        <strong>Next step</strong>
        <p>${ticket.nextStep}</p>
        <div><span></span><p>Ticket created from Driver Chat.</p></div>
        <div><span></span><p>Ops reviewing support details.</p></div>
      </section>
      <button class="ticket-detail-cta" data-action="chat-ops-support">${icons.headset}<span>Contact Ops Support</span></button>
    </div>`;
}

function renderChatMainPage() {
  return `
    ${chatbotAppBar()}
    <div class="content chatbot-page chat-main-page">
      ${renderChatModeGrid()}
      ${renderChatThreadList()}
    </div>`;
}

function renderChatbotPage() {
  if (state.chatView === "main") return renderChatMainPage();
  if (state.chatView === "faq") return renderAiFaqPage();
  if (state.chatView === "ticket-list") return renderTicketListPage();
  if (state.chatView === "ticket-detail") return renderTicketDetailPage();
  return renderChatWindowPage();
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
        ${notification.id === "redelivery" ? `<button class="notification-assistant-cta" data-action="chatbot-from-notification">Ask assistant what happened</button>` : ""}
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
      id: "pod-pooh",
      title: "POD/POOH Quality SOP",
      label: "Priority",
      meta: "5 min",
      desc: "Take clear parcel, handover and location proof to improve POD/POOH pass rate and protect quality bonus.",
      action: "Review"
    },
    {
      id: "redelivery",
      title: "Redelivery SOP",
      label: "Required",
      meta: "3 min",
      desc: "How to handle fake on-hold review and move the parcel back to To-do for redelivery.",
      action: "Review"
    },
    {
      id: "address",
      title: "Hard-to-find Address",
      label: "New",
      meta: "4 min",
      desc: "Use navigation references, confirm gate access, and add useful address evidence after delivery.",
      action: "Start"
    },
    {
      id: "exception",
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
          <article class="learning-lesson-card ${state.learningFocus === item.id ? "featured" : ""}">
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

function renderMonthlyReportPage() {
  const incomeRows = [
    ["Base delivery fee", "2,760 PHP"],
    ["Quality bonus", "240 PHP"],
    ["Deduction", "0 PHP"]
  ];
  const qualityRows = [
    ["On-time delivery", "92%", 92, "", ""],
    ["POD/POOH pass", "85%", 85, "warning", "chatbot-monthly-pod"],
    ["Contact success", "95%", 95, "", ""]
  ];
  return `
    ${appBar("Monthly Report", true)}
    <div class="content monthly-report-page">
      <section class="monthly-hero-card">
        <div>
          <span>May 2026 · KRAMAT JATI2</span>
          <strong>3,000 PHP</strong>
          <em>Estimated monthly salary</em>
        </div>
      </section>

      <section class="monthly-summary-grid">
        <div><strong>118</strong><span>Delivered</span></div>
        <div><strong>96%</strong><span>Success rate</span></div>
        <div><strong>6</strong><span>Exception orders</span></div>
        <div><strong>2</strong><span>CS tickets</span></div>
      </section>

      <section class="monthly-card">
        <div class="monthly-section-head">
          <strong>Delivery trend</strong>
          <span>Completed orders by week</span>
        </div>
        <div class="monthly-bar-chart">
          <div style="--h:52%"><span></span><b>W1</b><em>24</em></div>
          <div style="--h:68%"><span></span><b>W2</b><em>31</em></div>
          <div style="--h:78%"><span></span><b>W3</b><em>36</em></div>
          <div style="--h:60%"><span></span><b>W4</b><em>27</em></div>
        </div>
      </section>

      <section class="monthly-card">
        <div class="monthly-section-head">
          <strong>Service quality</strong>
          <span>Key metrics that affect rewards</span>
        </div>
        <div class="monthly-quality-list">
          ${qualityRows.map(([label, value, width, tone, action]) => `
            <div class="${action ? "actionable" : ""}"${action ? ` data-action="${action}" role="button" tabindex="0"` : ""}>
              <p><span>${label}</span><strong class="${tone}">${value}</strong></p>
              <i><b style="width:${width}%"></b></i>
            </div>`).join("")}
        </div>
      </section>

      <section class="monthly-card">
        <div class="monthly-section-head">
          <strong>Income breakdown</strong>
          <span>Current month estimate</span>
        </div>
        <div class="monthly-income-list">
          ${incomeRows.map(([label, value]) => `<p><span>${label}</span><strong>${value}</strong></p>`).join("")}
        </div>
      </section>

      <section class="monthly-card monthly-action-card">
        <div class="monthly-section-head">
          <strong>Suggested focus</strong>
          <span>Actions to improve next report</span>
        </div>
        <ul>
          <li>Use Address Guidance for hard-to-find stops to protect completion rate.</li>
          <li>Follow delivery and onhold SOP and keep POD/POOH photos clear to improve the current 98% pass rate.</li>
        </ul>
      </section>
    </div>`;
}

function transferItems() {
  return [
    {
      order: orders[0],
      status: "Approved",
      tone: "success",
      direction: "Incoming",
      from: "Jim",
      to: "Kevin Jakarta",
      reason: "Capacity support for high fail risk order",
      time: "08:32",
      note: "Operator approved the transfer. Scan parcel AWB to accept."
    },
    {
      order: orders[3],
      status: "New request",
      tone: "urgent",
      direction: "Incoming",
      from: "Ravi",
      to: "Kevin Jakarta",
      reason: "Hard-to-find address support",
      time: "08:25",
      note: "New parcel transfer is assigned to you. Scan parcel to accept."
    },
    {
      order: orders[2],
      status: "Pending approval",
      tone: "pending",
      direction: "Outgoing",
      from: "Kevin Jakarta",
      to: "Jim",
      reason: "Redelivery support request",
      time: "08:10",
      note: "Waiting for operator approval before handover."
    }
  ];
}

function selectedTransferItem() {
  return transferItems().find(item => item.order.id === state.selectedTransferOrderId) || transferItems()[0];
}

function transferListCard(item) {
  const order = item.order;
  const tags = order.tags.filter(tag => ["COD", "NSS", "Hard- find Address", "Urgent"].includes(tag)).map(tagHtml).join("");
  return `
    <section class="transfer-list-card" data-action="transfer-detail" data-order="${order.id}" role="button" tabindex="0">
      <div class="transfer-card-id">
        <strong>${order.displayId}</strong>
        <span class="transfer-status ${item.tone}">${item.status}</span>
      </div>
      <span class="transfer-hub">KRAMAT JATI2</span>
      <h3>${order.address}</h3>
      <div class="transfer-card-meta">
        <span>${item.direction}</span>
        <span>${item.from} to ${item.to}</span>
        <em>${item.time}</em>
      </div>
      <div class="tag-row">${tags}</div>
    </section>`;
}

function renderTransferCenterPage() {
  const items = transferItems();
  const incoming = items.filter(item => item.direction === "Incoming").length;
  const needScan = items.filter(item => item.status !== "Pending approval").length;
  return `
    ${appBar("Transfer Center", true)}
    <div class="content transfer-center-page">
      <section class="transfer-alert-card">
        <span>${icons.bell}</span>
        <div>
          <strong>Parcel transfer request approved</strong>
          <p>Parcel transfer approved by operator, please check the parcel list.</p>
        </div>
      </section>

      <section class="transfer-summary-card">
        <div><strong>${incoming}</strong><span>Incoming</span></div>
        <div><strong>${items.length - incoming}</strong><span>Outgoing</span></div>
        <div><strong>${needScan}</strong><span>Need scan</span></div>
      </section>

      <div class="transfer-filter-row">
        <button>All ▾</button>
        <button>Default Sort ↕</button>
      </div>

      <section class="transfer-list">
        ${items.map(transferListCard).join("")}
      </section>
    </div>`;
}

function renderTransferDetailPage() {
  const item = selectedTransferItem();
  const order = item.order;
  const canAccept = item.status !== "Pending approval";
  return `
    ${appBar("Parcel Transfer", true)}
    <div class="content transfer-detail-page">
      <section class="transfer-detail-hero">
        <div class="transfer-hero-icon">${icons.transfer}</div>
        <div>
          <span>${item.direction} transfer</span>
          <strong>${item.status}</strong>
          <p>${item.note}</p>
        </div>
      </section>

      <section class="transfer-detail-card">
        <div class="transfer-detail-id">
          <strong>${order.displayId}</strong>
          <span class="copy-icon">□</span>
        </div>
        <h2>${order.address}</h2>
        <p>Receiver · ${order.buyer}</p>
        <div class="tag-row">${order.tags.filter(tag => tag !== "Shops&Services").map(tagHtml).join("")}</div>
      </section>

      <section class="transfer-info-card">
        <div><span>From</span><strong>${item.from}</strong></div>
        <div><span>To</span><strong>${item.to}</strong></div>
        <div><span>Reason</span><strong>${item.reason}</strong></div>
        <div><span>Requested time</span><strong>${item.time}</strong></div>
      </section>

      <section class="transfer-sop-card">
        <strong>Transfer SOP</strong>
        <p>1. Scan parcel AWB and confirm the order ID.</p>
        <p>2. Check parcel condition with the handover driver.</p>
        <p>3. Accept transfer after parcel count is correct.</p>
      </section>

      <div class="transfer-detail-actions">
        <button class="btn-secondary" data-action="bottom-scan">${icons.scan}<span>Scan parcel</span></button>
        <button class="btn-primary" data-action="accept-transfer" ${canAccept ? "" : "disabled"}>Accept transfer</button>
      </div>
    </div>`;
}

function meTopBar(title, right = "") {
  return `
    <div class="me-native-bar">
      <button class="me-native-back" data-action="back" aria-label="Back">${icons.back}</button>
      <strong>${title}</strong>
      <div class="me-native-right">${right}</div>
    </div>`;
}

function meHomeBar() {
  return `
    <div class="app-bar app-bar-left-chip me-home-bar">
      <div class="biz-chip">${icons.user} <span>Me</span></div>
      <div class="spacer"></div>
      <button class="app-icon-btn" data-action="me-setting" aria-label="Setting">${icons.settings}</button>
    </div>`;
}

const mePerformanceMetrics = [
  { label: "Parcels Delivered", value: "230" },
  { label: "Attendance Rate", value: "98%" },
  { label: "Delivery attempt rate", value: "99%" }
];

const codTickets = [
  { id: "10202335", time: "23:59:59 2019-10-12", amount: "202,560,000 IDR", high: true },
  { id: "10202335", time: "12:00:00 2019-10-12", amount: "820,040 IDR" },
  { id: "10202335", time: "12:00:00 2019-10-12", amount: "820,040 IDR" },
  { id: "10202335", time: "23:59:59 2019-10-12", amount: "820,040 IDR" },
  { id: "10202335", time: "12:00:00 2019-10-12", amount: "820,040 IDR" },
  { id: "10202335", time: "12:00:00 2019-10-12", amount: "820,040 IDR" },
  { id: "10202335", time: "12:00:00 2019-10-12", amount: "820,040 IDR" }
];

function renderProfilePage() {
  return `
    ${meHomeBar()}
    <div class="content me-page">
      <section class="me-profile-head">
        <div class="me-avatar-ring"><div class="home-avatar">K</div></div>
        <div class="me-profile-copy">
          <span>Good afternoon</span>
          <strong>Kevin Jakarta</strong>
          <em>[20221] Dave · KRAMAT JATI2</em>
        </div>
        <button class="me-head-icon me-profile-qr" data-action="me-barcode" aria-label="Barcode">${icons.qr}</button>
      </section>

      <section class="me-money-card" data-action="me-wallet" role="button" tabindex="0">
        <div class="me-section-title">
          <span>${icons.wallet}</span>
          <strong>Wallet + Incentive</strong>
          <b>›</b>
        </div>
        <div class="me-money-main">
          <div>
            <span>My Balance</span>
            <strong>200.000 IDR</strong>
          </div>
          <button data-action="me-incentives">Incentive</button>
        </div>
        <div class="me-money-grid">
          <div class="income"><span>Income</span><strong>+ 36.000 IDR</strong></div>
          <div class="deduction"><span>Deduction</span><strong>- 5.000 IDR</strong></div>
          <div class="bonus"><span>Aug incentive</span><strong>14,325 IDR</strong></div>
        </div>
      </section>

      <section class="me-summary-grid">
        <button class="me-performance-card" data-action="me-performance">
          <div class="me-section-title">
            <span>${icons.chart}</span>
            <strong>Performance</strong>
            <b>›</b>
          </div>
          <div class="me-grade-row">
            <strong>A</strong>
            <div>
              <span>Success rate</span>
              <em>98%</em>
            </div>
          </div>
        </button>

        <button class="me-cod-card" data-action="me-cod">
          <div class="me-section-title">
            <span>${icons.cash}</span>
            <strong>COD Cash</strong>
            <b>›</b>
          </div>
          <div class="me-cod-amount">202.56M IDR</div>
          <span class="me-cod-meta">12 COD orders</span>
        </button>
      </section>

      <section class="me-ai-card">
        <div class="me-section-title">
          <span>${icons.education}</span>
          <strong>AI Education</strong>
          <b>Auto-generated</b>
        </div>
        <p>AI found strong attendance, one proof-quality issue, and high-value COD tasks.</p>
        <button class="me-ai-link" data-action="me-ai-education">
          <span>View personalized training plan</span>
          <b>›</b>
        </button>
      </section>

      <section class="me-utility-grid" aria-label="Me tools">
        <button class="me-utility-card checkin" data-action="me-check-in">
          <span>${icons.check}</span>
          <strong>My Check In</strong>
          <small>Station arrival</small>
        </button>
        <button class="me-utility-card report" data-action="me-drive-report">
          <span>${icons.truck}</span>
          <strong>Drive Report</strong>
          <small>Pre / post drive</small>
        </button>
        <button class="me-utility-card help" data-action="me-help-center">
          <span>${icons.headset}</span>
          <strong>Help Center</strong>
          <small>Cases and support</small>
        </button>
      </section>
    </div>`;
}

function renderWalletPage() {
  return `
    ${meTopBar("Wallet", `<button class="me-native-icon">${icons.settings}</button>`)}
    <div class="me-detail-page wallet-page">
      <section class="wallet-balance-card">
        <span>My Balance</span>
        <div class="wallet-balance-row">
          <strong>200.000 IDR</strong>
          <button>Withdraw</button>
        </div>
      </section>
      <div class="wallet-estimate-row">
        <span>Today's Estimate <i>i</i></span>
        <span>Last Update: 12:37:00</span>
      </div>
      <section class="wallet-income-grid">
        <div class="income">
          <span>${icons.wallet} Income</span>
          <strong>+ 36.000 IDR</strong>
          <small>Allowance: 0<br />Tips: 36.000</small>
        </div>
        <div class="deduction">
          <span>${icons.ticket} Deduction</span>
          <strong>- 5.000 IDR</strong>
          <small>Deposit: - 5.000<br />Penalty: 0</small>
        </div>
      </section>
      <section class="wallet-link-list">
        <button>${icons.clipboard}<span>Transaction</span></button>
        <button>${icons.bank}<span>Bank Account</span></button>
      </section>
    </div>`;
}

function renderIncentivesPage() {
  const bars = [
    { day: "07/08", h1: 22, h2: 12, h3: 0 },
    { day: "08/08", h1: 70, h2: 30, h3: 8 },
    { day: "09/08", h1: 52, h2: 25, h3: 5 },
    { day: "10/08", h1: 88, h2: 34, h3: 9 },
    { day: "11/08", h1: 38, h2: 20, h3: 26, active: true }
  ];
  return `
    ${meTopBar("My Incentives")}
    <div class="me-detail-page incentive-page">
      <div class="incentive-filter-row">
        <button>Daily ▾</button>
        <button>Overall ▾</button>
      </div>
      <section class="incentive-head-row">
        <span>Last Updated : 11/08/2021</span>
        <div><button class="active">Incentives</button><button>Points</button></div>
      </section>
      <section class="incentive-chart-card">
        <div class="incentive-chart-title">
          <span>Aug Sum Incentives (IDR)</span>
          <strong>14,325 ›</strong>
        </div>
        <div class="incentive-legend">
          <span><i class="legend-red"></i>Incentive</span>
          <span><i class="legend-orange"></i>Bonus</span>
          <span><i class="legend-yellow"></i>Allowance</span>
        </div>
        <div class="incentive-chart-area">
          ${bars.map(bar => `
            <div class="incentive-bar ${bar.active ? "active" : ""}">
              <div class="bar-stack">
                <i class="bar-red" style="height:${bar.h1}px"></i>
                <i class="bar-orange" style="height:${bar.h2}px"></i>
                <i class="bar-yellow" style="height:${bar.h3}px"></i>
              </div>
              <span>${bar.day}</span>
            </div>`).join("")}
          <div class="incentive-total-badge">Total<br /><strong>1,225.7</strong></div>
        </div>
      </section>
      <section class="incentive-total-card">
        <span>11/08/2021 , Total</span>
        <strong>1,225.7 <small>IDR</small></strong>
      </section>
      <section class="incentive-breakdown-list">
        <button><span>Incentive (IDR)</span><strong>0⌄</strong></button>
        <button><span>Bonus (IDR)</span><strong>273.5⌄</strong></button>
        <button><span>Allowance (IDR)</span><strong>321.2⌄</strong></button>
      </section>
    </div>`;
}

function renderPerformancePage() {
  return `
    ${meTopBar("My Performance", `<button class="me-native-icon" data-action="me-performance-history">${icons.calendar}</button>`)}
    <div class="me-detail-page performance-page">
      <section class="performance-date-row">
        <span>18/08/2019</span>
        <b>-</b>
        <span>23/08/2019</span>
      </section>
      <section class="performance-grade-card">
        <span class="performance-updated">Last update time: 08/23 12:20:36</span>
        <div class="performance-gauge">
          <div class="gauge-ring"></div>
          <strong>A</strong>
        </div>
        <h2>Congratulations!</h2>
        <p>Over 90% last-mile drivers</p>
        <div class="performance-key">
          <span>Key metric</span>
          <strong>Delivery success rate <em>Weekly</em></strong>
          <b>98%</b>
        </div>
      </section>
      <section class="performance-metrics-list">
        <h3>Other Important weekly metrics</h3>
        ${mePerformanceMetrics.map(item => `<div><span>${item.label}</span><strong>${item.value}</strong></div>`).join("")}
      </section>
      <section class="performance-ai-summary">
        <strong>AI Performance Interpretation</strong>
        <p>Your success rate and attendance are stable. The next growth point is proof quality: one redelivery proof was rejected, so the AI recommends a short POD/POOH drill and pre-delivery photo checklist.</p>
      </section>
    </div>`;
}

function renderPerformanceHistoryPage() {
  const history = [
    { date: "18/08/2019 - 24/08/2019", grade: "A" },
    { date: "12/08/2019 - 18/08/2019", grade: "A" },
    { date: "07/08/2019 - 13/08/2019", grade: "B" },
    { date: "01/08/2019 - 07/08/2019", grade: "C" }
  ];
  return `
    ${meTopBar("Performance History")}
    <div class="me-detail-page performance-history-page">
      ${history.map(item => `
        <button class="performance-history-row" data-action="me-performance">
          <span>${item.date}</span>
          <strong class="grade-${item.grade.toLowerCase()}">${item.grade}</strong>
          <b>›</b>
        </button>`).join("")}
    </div>`;
}

function renderCodTicketPage() {
  return `
    ${meTopBar("COD Ticket", `<button class="me-native-icon">${icons.calendar}</button>`)}
    <div class="me-detail-page cod-page">
      <div class="cod-filter-row">
        <button>Delivery Time ↕</button>
        <button>Date Filter ▾</button>
      </div>
      <section class="cod-ticket-list">
        ${codTickets.map(ticket => `
          <label class="cod-ticket-row">
            <input type="checkbox" />
            <div>
              <strong>ID ${ticket.id}</strong>
              <span>${ticket.time}</span>
            </div>
            <b>${ticket.amount}</b>
          </label>`).join("")}
      </section>
      <section class="cod-bottom-bar">
        <label><input type="checkbox" /> Select All</label>
        <div><strong>Total 0 IDR</strong><span>0 COD Orders</span></div>
        <button>Next</button>
      </section>
    </div>`;
}

function renderCheckInPage() {
  return `
    ${meTopBar("My Check In", `<button class="me-native-icon">${icons.barcode}</button><button class="me-native-icon">${icons.calendar}</button>`)}
    <div class="me-detail-page checkin-page">
      <section class="checkin-driver-row">
        <div class="checkin-photo">K</div>
        <strong>[20221] Dave</strong>
        <span>2021/11/05</span>
      </section>
      <section class="checkin-main">
        <span>You are out of range.</span>
        <h2>Default Station⌄</h2>
        <button>Arrive<small>12:00:00</small></button>
      </section>
      <div class="checkin-empty">No record found.</div>
    </div>`;
}

function renderDriveReportPage() {
  const days = [
    { name: "Thu", date: "9", dots: ["red"] },
    { name: "Fri", date: "10", dots: ["blue", "red"] },
    { name: "Sat", date: "11", dots: ["red", "blue"] },
    { name: "Sun", date: "12", active: true },
    { name: "Mon", date: "13", dots: ["blue"] },
    { name: "Tue", date: "14", dots: ["blue", "red"] },
    { name: "Wed", date: "15", selected: true, dots: ["red", "blue"] }
  ];
  return `
    ${meTopBar("Drive Report")}
    <div class="me-detail-page drive-report-page">
      <section class="drive-report-actions">
        <button class="pre"><strong>Pre-Drive Report ›</strong><span>Please submit Pre-Drive report before drive</span>${icons.truck}</button>
        <button class="post"><strong>Post-Drive Report ›</strong><span>Please submit Post-Drive report after drive</span>${icons.truck}</button>
      </section>
      <section class="report-history-card">
        <button class="report-history-head"><strong>Report History</strong><span>›</span></button>
        <div class="report-days">
          ${days.map(day => `
            <div class="${day.active ? "active" : ""} ${day.selected ? "selected" : ""}">
              <span>${day.name}</span>
              <strong>${day.date}</strong>
              <small>${(day.dots || []).map(dot => `<i class="${dot}"></i>`).join("")}</small>
            </div>`).join("")}
        </div>
        <div class="report-line"></div>
        <div class="report-record red"><strong>07:30</strong><span>Pre-Drive</span><p>Vehicle Plate Number: TY097542</p></div>
        <div class="report-record blue"><strong>16:30</strong><span>Post-Drive</span><p>Vehicle Plate Number: TY097542</p></div>
      </section>
    </div>`;
}

function renderBarcodePage() {
  return `
    ${meTopBar("Barcode")}
    <div class="me-detail-page barcode-page">
      <div class="barcode-hero-bg"></div>
      <section class="barcode-card">
        <strong>Kevin Jakarta</strong>
        <div class="barcode-lines">
          ${Array.from({ length: 28 }, (_, index) => `<i style="width:${index % 5 === 0 ? 4 : index % 3 === 0 ? 2 : 1}px"></i>`).join("")}
        </div>
        <span>196 211</span>
      </section>
    </div>`;
}

function renderAiEducationPage() {
  return `
    ${meTopBar("AI Education")}
    <div class="me-detail-page ai-education-page">
      <section class="ai-education-hero">
        <span>${icons.education}</span>
        <div>
          <strong>Personalized driver training</strong>
          <p>AI generated from Kevin's latest performance, delivery metrics and exception events.</p>
        </div>
      </section>
      <section class="ai-signal-card">
        <strong>Signals used</strong>
        <div><span>Performance</span><b>A · 98% success</b></div>
        <div><span>Delivery volume</span><b>230 parcels this week</b></div>
        <div><span>Exception</span><b>1 proof rejected redelivery</b></div>
        <div><span>Cash handling</span><b>12 COD tickets</b></div>
      </section>
      <section class="ai-training-list">
        <button><strong>POD/POOH photo quality</strong><span>Scenario practice · 6 min</span><p>Take complete doorstep and receiver proof before marking delivered.</p></button>
        <button><strong>COD closeout checklist</strong><span>Cash settlement · 4 min</span><p>Confirm amount, ticket ID and high-value payment before route close.</p></button>
        <button><strong>Hard-to-find first call script</strong><span>Route readiness · 5 min</span><p>Use pre-call and saved key-point photos to reduce failed attempts.</p></button>
      </section>
    </div>`;
}

function renderSettingPage() {
  return `
    ${meTopBar("Setting")}
    <div class="me-detail-page setting-page">
      <section class="setting-profile-card">
        <div class="home-avatar">K</div>
        <div>
          <strong>Kevin Jakarta</strong>
          <span>[20221] Dave · KRAMAT JATI2</span>
        </div>
      </section>

      <section class="setting-list-card">
        <button>
          <span>${icons.user}</span>
          <div><strong>Account Information</strong><small>Phone number, station and driver profile</small></div>
          <b>›</b>
        </button>
        <button>
          <span>${icons.shield}</span>
          <div><strong>Account & Security</strong><small>Password, device and login protection</small></div>
          <b>›</b>
        </button>
        <button>
          <span>${icons.bank}</span>
          <div><strong>Payment Account</strong><small>Bank account and withdrawal settings</small></div>
          <b>›</b>
        </button>
      </section>

      <section class="setting-list-card">
        <button>
          <span>${icons.bell}</span>
          <div><strong>Notifications</strong><small>Delivery, incentive and system notices</small></div>
          <em>On</em>
        </button>
        <button>
          <span>${icons.settings}</span>
          <div><strong>Language</strong><small>English</small></div>
          <b>›</b>
        </button>
        <button data-action="me-help-center">
          <span>${icons.headset}</span>
          <div><strong>Help Center</strong><small>Support cases and service policy</small></div>
          <b>›</b>
        </button>
      </section>

      <section class="setting-list-card compact">
        <button>
          <span>${icons.phone}</span>
          <div><strong>App Version</strong><small>Driver App 5.28.0</small></div>
        </button>
        <button>
          <span>${icons.clipboard}</span>
          <div><strong>Clear Cache</strong><small>23.4 MB</small></div>
          <b>›</b>
        </button>
      </section>

      <button class="setting-logout">Log out</button>
    </div>`;
}

function renderHelpCenterPage() {
  const quickTopics = [
    { icon: icons.cash, title: "COD & Wallet", text: "Settlement, withdrawal, incentive" },
    { icon: icons.check, title: "Check In", text: "Station, attendance, range issue" },
    { icon: icons.box, title: "Delivery Issue", text: "Failed delivery, redelivery, POD" },
    { icon: icons.shield, title: "Account", text: "Login, device, security" }
  ];
  return `
    ${meTopBar("Help Center")}
    <div class="me-detail-page help-center-page">
      <section class="help-hero-card">
        <span>${icons.headset}</span>
        <div>
          <strong>How can we help?</strong>
          <p>Find common driver support topics or submit a case to the support team.</p>
        </div>
      </section>

      <label class="help-search-box">
        ${icons.search}
        <input type="text" placeholder="Search help topics" />
      </label>

      <section class="help-topic-grid">
        ${quickTopics.map(topic => `
          <button>
            <span>${topic.icon}</span>
            <strong>${topic.title}</strong>
            <small>${topic.text}</small>
          </button>`).join("")}
      </section>

      <section class="help-list-card">
        <button>
          <span>${icons.ticket}</span>
          <div><strong>My Tickets</strong><small>2 open cases · latest update today</small></div>
          <b>›</b>
        </button>
        <button>
          <span>${icons.msg}</span>
          <div><strong>Contact Support</strong><small>Chat with support for urgent route issues</small></div>
          <b>›</b>
        </button>
        <button>
          <span>${icons.clipboard}</span>
          <div><strong>SOP & Policy</strong><small>Delivery, COD and proof upload rules</small></div>
          <b>›</b>
        </button>
        <button>
          <span>${icons.phone}</span>
          <div><strong>Emergency Hotline</strong><small>021-555-0188 · 08:00-22:00</small></div>
          <b>›</b>
        </button>
      </section>

      <section class="help-status-card">
        <strong>Recommended for you</strong>
        <p>Your latest rejected proof issue may be solved by the POD/POOH photo quality guide.</p>
        <button data-action="me-ai-education">Open training guide</button>
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

function preCallOrderCard(order) {
  const queued = state.botCallOrderIds.includes(order.id);
  return `
    <section class="precall-order-card" data-order="${order.id}" role="button" tabindex="0">
      <div class="precall-order-main">
        <div class="order-id-left">
          <span>${order.displayId}</span>
          <span class="copy-icon">□</span>
        </div>
        <h3><span class="pin-dot">${icons.pin}</span>${order.address}</h3>
        <p>Buyer · ${order.buyer}</p>
        <div class="tag-row">${order.tags.map(tagHtml).join("")}</div>
      </div>
      <div class="precall-order-side">
        <span class="precall-state ${queued ? "done" : ""}">${queued ? "Queued" : "Not contacted"}</span>
        ${botCallButton(order)}
      </div>
    </section>`;
}

function renderBatchPreCallPage() {
  const candidates = uncontactedOrders();
  const queuedCount = candidates.filter(order => state.botCallOrderIds.includes(order.id)).length;
  return `
    ${appBar("Batch pre-call", true)}
    <div class="content precall-page">
      <section class="precall-summary-card">
        <div>
          <strong>Pre-call uncontacted buyers</strong>
          <span>${candidates.length} orders need buyer confirmation before delivery.</span>
        </div>
        <button class="btn-primary" data-action="bot-call-all">${icons.bot}<span>Bot call all</span></button>
      </section>
      <div class="precall-progress-row">
        <span>${queuedCount}/${candidates.length} queued</span>
        <strong>AI voice bot will confirm delivery availability and capture buyer notes.</strong>
      </div>
      ${candidates.map(preCallOrderCard).join("")}
    </div>`;
}

function renderRedeliveryOrdersPage() {
  const redeliveryList = redeliveryOrders();
  return `
    ${appBar()}
    ${tabs("To-do", { todo: redeliveryList.length, delivered: 0, onHold: 0 })}
    ${sortRow()}
    <div class="content redelivery-filter-page">
      <section class="redelivery-request-card">
        <strong>Redelivery request</strong>
        <p>There is 1 order that was put on-hold during delivery. System rejected the proof and moved it back to To-do for redelivery.</p>
      </section>
      <div class="group-header">To-do · Redelivery Order</div>
      ${redeliveryList.map(redeliveryReviewCard).join("")}
    </div>`;
}

function redeliveryReviewCard(order) {
  return `
    <section class="pooh-review-card">
      <div class="pooh-review-reason">
        <strong>POOH review failed</strong>
        <span>Reason: proof photo did not clearly show buyer location and parcel handover evidence.</span>
      </div>
      ${orderCard(order)}
    </section>`;
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
  const transferPlanOrders = [orders[1], orders[0], orders[2]];
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
        ${isBulkTransfer ? `
          <section class="transfer-plan-card">
            <strong>AI grouped transfer tasks</strong>
            <span>Transfer these orders first to recover today's route progress.</span>
            <div>
              ${transferPlanOrders.map(order => `<em>${order.displayId}</em>`).join("")}
            </div>
          </section>
        ` : ""}
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
        <button class="drawer-ticket" data-action="ticket-center-chat">${icons.ticket}<span>Ticket Center</span></button>
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
    "search-results": renderSearchResultsPage,
    todo: renderTodo,
    "exception-orders": renderExceptionOrders,
    "sequence-new": () => renderSequenceCustomization("new"),
    "sequence-experienced": () => renderSequenceCustomization("experienced"),
    brief: renderBriefDetail,
    "order-detail": renderOrderDetail,
    scan: renderScanPage,
    chatbot: renderChatbotPage,
    "message-center": renderMessageCenterPage,
    "notification-detail": renderNotificationDetailPage,
    "invite-rewards": renderInviteRewardsPage,
    "learning-center": renderLearningCenterPage,
    "monthly-report": renderMonthlyReportPage,
    "transfer-center": renderTransferCenterPage,
    "transfer-detail": renderTransferDetailPage,
    "ai-brief-analysis": renderAiBriefAnalysisPage,
    "progress-analysis-detail": renderProgressAnalysisDetail,
    "batch-pre-call": renderBatchPreCallPage,
    "redelivery-orders": renderRedeliveryOrdersPage,
    profile: renderProfilePage,
    "me-wallet": renderWalletPage,
    "me-incentives": renderIncentivesPage,
    "me-performance": renderPerformancePage,
    "me-performance-history": renderPerformanceHistoryPage,
    "me-cod": renderCodTicketPage,
    "me-check-in": renderCheckInPage,
    "me-drive-report": renderDriveReportPage,
    "me-barcode": renderBarcodePage,
    "me-ai-education": renderAiEducationPage,
    "me-setting": renderSettingPage,
    "me-help-center": renderHelpCenterPage,
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
  if (modalRoot) modalRoot.innerHTML = modalMarkup + floatingChatbotButton();
  const showBottomNav = shouldShowBottomNav();
  if (bottomNav) {
    bottomNav.innerHTML = showBottomNav ? renderBottomNav() : "";
    bottomNav.classList.toggle("is-visible", showBottomNav);
  }
  app.classList.toggle("with-bottom-nav", showBottomNav);
  app.classList.toggle("chatbot-screen", state.screen === "chatbot");
  app.classList.toggle("chat-main-screen", state.screen === "chatbot" && state.chatView === "main");
  app.classList.toggle("scan-screen", state.screen === "scan");
  app.classList.toggle("modal-open", Boolean(modalMarkup) && !state.showComingSoon);
  app.scrollTop = options.preserveScroll ? previousScrollTop : 0;
  syncNav();
  bindMapDrag();
}

function syncNav() {
  const navMap = {
    home: "home",
    "search-results": "home",
    todo: "todo",
    "exception-orders": "home",
    "sequence-new": "sequence-new",
    "sequence-experienced": "sequence-experienced",
    brief: "todo",
    "order-detail": "todo",
    scan: state.activeScenario,
    "message-center": "home",
    "notification-detail": "home",
    "invite-rewards": "home",
    "learning-center": "home",
    "monthly-report": "home",
    "transfer-center": "home",
    "transfer-detail": "home",
    "ai-brief-analysis": "home",
    "progress-analysis-detail": state.analysisBackScreen === "todo" ? "todo" : "home",
    "batch-pre-call": "home",
    "redelivery-orders": "todo",
    profile: "home",
    "me-wallet": "home",
    "me-incentives": "home",
    "me-performance": "home",
    "me-performance-history": "home",
    "me-cod": "home",
    "me-check-in": "home",
    "me-drive-report": "home",
    "me-barcode": "home",
    "me-ai-education": "home",
    "me-setting": "home",
    "me-help-center": "home",
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
  if (screen !== "todo") state.modeSwitcherOpen = false;
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
  if (item.dataset.screen === "todo") {
    state.todoMode = "delivery";
    state.sequenceDriverType = "experienced";
    state.sequenceGroupingActive = false;
    state.sequenceGroupOpen = false;
    state.todoFilter = "all";
  }
  if (item.dataset.screen === "sequence-new" || item.dataset.screen === "sequence-experienced") {
    state.sequenceDriverType = item.dataset.screen === "sequence-new" ? "new" : "experienced";
    state.sequenceGroupingActive = true;
    state.sequenceGroupOpen = false;
  }
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
      if (["todo", "sequence-new", "sequence-experienced"].includes(state.screen) && state.sequenceGroupOpen) {
        state.sequenceGroupOpen = false;
        render();
        return;
      }
      if (state.screen === "brief") {
        go(state.briefBackScreen || "todo");
        return;
      }
      if (state.screen === "chatbot") {
        if (state.chatView === "ticket-detail") {
          state.chatView = "ticket-list";
          render();
          return;
        }
        if (state.chatView !== "main") {
          state.chatView = "main";
          state.chatThread = null;
          state.chatbotContext = null;
          render();
          return;
        }
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
      if (state.screen === "search-results") {
        go("home");
        return;
      }
      if (state.screen === "progress-analysis-detail") {
        go(state.analysisBackScreen || "home");
        return;
      }
      if (state.screen === "invite-rewards" || state.screen === "learning-center" || state.screen === "monthly-report" || state.screen === "transfer-center" || state.screen === "ai-brief-analysis" || state.screen === "batch-pre-call" || state.screen === "redelivery-orders") {
        go("home");
        return;
      }
      if (state.screen === "transfer-detail") {
        go("transfer-center");
        return;
      }
      if (state.screen === "me-performance-history") {
        go("me-performance");
        return;
      }
      if (state.screen.startsWith("me-")) {
        go("profile");
        return;
      }
      if (state.screen === "order-detail" && state.activeScenario === "search-results") {
        go("search-results");
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
      if (state.screen === "order-detail" && state.activeScenario === "batch-pre-call") {
        go("batch-pre-call");
        return;
      }
      if (state.screen === "order-detail" && state.activeScenario === "redelivery-orders") {
        go("redelivery-orders");
        return;
      }
      if (state.screen === "order-detail" && (state.activeScenario === "sequence-new" || state.activeScenario === "sequence-experienced")) {
        go(state.activeScenario);
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
      state.todoMode = "delivery";
      state.modeSwitcherOpen = false;
      state.deliveryTab = "To-do";
      state.todoFilter = "all";
      state.sequenceDriverType = "experienced";
      state.sequenceGroupingActive = false;
      state.sequenceGroupOpen = false;
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
      state.chatbotScenario = "welcome";
      state.chatbotCustomFlow = null;
      state.chatbotContext = null;
      state.chatbotDraft = "";
      state.chatbotFeedback = null;
      state.chatbotBackScreen = "home";
      state.chatView = "main";
      state.chatThread = null;
      go("chatbot");
      return;
    }
    if (action === "bottom-profile") {
      state.showDrawer = false;
      state.showComingSoon = false;
      go("profile");
      return;
    }
    if ([
      "me-wallet",
      "me-incentives",
      "me-performance",
      "me-performance-history",
      "me-cod",
      "me-check-in",
      "me-drive-report",
      "me-barcode",
      "me-ai-education",
      "me-setting",
      "me-help-center"
    ].includes(action)) {
      state.showDrawer = false;
      state.showComingSoon = false;
      go(action);
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
      state.todoMode = "delivery";
      state.modeSwitcherOpen = false;
      state.deliveryTab = actionEl.dataset.tab || "To-do";
      state.todoFilter = "all";
      state.sequenceDriverType = "experienced";
      state.sequenceGroupingActive = false;
      state.sequenceGroupOpen = false;
      go("todo");
      return;
    }
    if (action === "home-task-filter") {
      state.showComingSoon = false;
      state.activeScenario = "todo";
      state.todoMode = "delivery";
      state.modeSwitcherOpen = false;
      state.deliveryTab = "To-do";
      state.todoFilter = actionEl.dataset.filter || "all";
      state.sequenceDriverType = "experienced";
      state.sequenceGroupingActive = false;
      state.sequenceGroupOpen = false;
      go("todo");
      return;
    }
    if (action === "home-pickup-list") {
      state.showComingSoon = false;
      state.activeScenario = "todo";
      state.todoMode = "pickup";
      state.pickupTab = "To-pickup";
      state.modeSwitcherOpen = false;
      state.sequenceGroupingActive = false;
      state.sequenceGroupOpen = false;
      go("todo");
      return;
    }
    if (action === "toggle-mode-switcher") {
      state.modeSwitcherOpen = !state.modeSwitcherOpen;
      render({ preserveScroll: true });
      return;
    }
    if (action === "close-mode-switcher") {
      state.modeSwitcherOpen = false;
      render({ preserveScroll: true });
      return;
    }
    if (action === "switch-todo-mode") {
      const mode = actionEl.dataset.mode || "delivery";
      if (mode === "pickup") {
        state.todoMode = "pickup";
        state.pickupTab = "To-pickup";
      } else if (mode === "return") {
        state.todoMode = "return";
        state.returnTab = "To-return";
      } else {
        state.todoMode = "delivery";
        state.deliveryTab = "To-do";
        state.todoFilter = "all";
        state.sequenceGroupingActive = false;
        state.sequenceGroupOpen = false;
      }
      state.activeScenario = "todo";
      state.modeSwitcherOpen = false;
      render();
      return;
    }
    if (action === "select-delivery-tab") {
      state.modeSwitcherOpen = false;
      state.deliveryTab = actionEl.dataset.tab || "To-do";
      render();
      return;
    }
    if (action === "select-pickup-tab") {
      state.modeSwitcherOpen = false;
      state.pickupTab = actionEl.dataset.tab || "To-pickup";
      render();
      return;
    }
    if (action === "select-return-tab") {
      state.modeSwitcherOpen = false;
      state.returnTab = actionEl.dataset.tab || "To-return";
      render();
      return;
    }
    if (action === "sequence-driver-type") {
      state.sequenceDriverType = actionEl.dataset.sequenceDriver || "new";
      render({ preserveScroll: true });
      return;
    }
    if (action === "sequence-grouping") {
      if (state.screen === "sequence-new") state.sequenceDriverType = "new";
      if (state.screen === "sequence-experienced" || state.screen === "todo") state.sequenceDriverType = "experienced";
      state.todoFilter = "all";
      state.sequenceGroupingActive = true;
      state.sequenceGroupOpen = true;
      render();
      return;
    }
    if (action === "open-sequence-group") {
      state.sequenceGroupingActive = true;
      state.sequenceGroupOpen = !state.sequenceGroupOpen;
      render();
      return;
    }
    if (action === "chatbot-scenario") {
      state.chatbotScenario = actionEl.dataset.scenario || "welcome";
      state.chatbotCustomFlow = null;
      state.chatbotDraft = "";
      state.chatbotFeedback = null;
      if (state.chatbotScenario === "welcome") state.chatbotContext = null;
      state.chatThread = chatThreadForScenario(state.chatbotScenario, state.chatbotContext);
      state.chatView = "faq";
      render({ preserveScroll: true });
      return;
    }
    if (action === "chat-ai-faq") {
      state.chatView = "faq";
      state.chatThread = "ai-faq";
      state.chatbotScenario = "welcome";
      state.chatbotCustomFlow = null;
      state.chatbotContext = null;
      state.chatbotDraft = "";
      state.chatbotFeedback = null;
      render();
      return;
    }
    if (action === "chat-ops-support") {
      state.chatView = "window";
      state.chatThread = "ops";
      state.chatbotContext = null;
      render();
      return;
    }
    if (action === "chat-ops-live") {
      state.chatView = "window";
      state.chatThread = "ops";
      state.chatbotScenario = "human";
      state.chatbotContext = genericContext("Ops Support", "Realtime support conversation.");
      render();
      return;
    }
    if (action === "chat-ops-bot") {
      state.chatView = "window";
      state.chatThread = "ops-bot";
      state.chatbotScenario = "welcome";
      state.chatbotContext = genericContext("Ops Support", "Driver-started support goes through AI Bot first.");
      render();
      return;
    }
    if (action === "chat-ticket-center") {
      state.chatView = "ticket-list";
      state.chatThread = null;
      state.chatbotContext = null;
      render();
      return;
    }
    if (action === "chat-ticket-detail") {
      state.selectedChatTicketId = actionEl.dataset.ticket || "TCK-1024";
      state.chatView = "ticket-detail";
      render();
      return;
    }
    if (action === "chat-filter") {
      state.chatFilter = actionEl.dataset.filter || "All";
      render({ preserveScroll: true });
      return;
    }
    if (action === "chat-thread") {
      const thread = actionEl.dataset.thread || "ai-faq";
      const scenario = actionEl.dataset.scenario || (thread === "ops" ? "human" : "welcome");
      state.chatThread = thread;
      state.chatbotScenario = scenario;
      state.chatbotCustomFlow = null;
      state.chatbotDraft = "";
      state.chatbotFeedback = null;
      state.chatView = thread === "ai-faq" ? "faq" : "window";
      if (thread === "ops") {
        state.chatbotContext = genericContext("Ops Support", "Human support continues when AI cannot resolve the issue.");
      } else if (thread === "buyer" || thread === "seller") {
        state.chatbotContext = null;
      } else if (scenario === "welcome") {
        state.chatbotContext = null;
      }
      render({ preserveScroll: true });
      return;
    }
    if (action === "ticket-center-chat") {
      state.showDrawer = false;
      state.chatView = "ticket-list";
      state.chatbotBackScreen = "home";
      go("chatbot");
      return;
    }
    if (action === "chatbot-from-notification") {
      setChatbotEntry({ scenario: "redeliveryNotification", context: redeliveryContext(), backScreen: "notification-detail" });
      return;
    }
    if (action === "chatbot-from-order") {
      const order = allOrders().find(item => item.id === actionEl.dataset.order) || allOrders().find(item => item.id === state.selectedOrderId) || orders[0];
      setChatbotEntry({ scenario: "orderAssist", context: orderContext(order), backScreen: "order-detail" });
      return;
    }
    if (action === "chatbot-monthly-pod") {
      setChatbotEntry({ scenario: "podPoohImprove", context: monthlyPodContext(), backScreen: "monthly-report" });
      return;
    }
    if (action === "floating-chatbot") {
      enterContextualChatbot();
      return;
    }
    if (action === "chatbot-submit") {
      submitChatbotQuestion();
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
      state.learningFocus = actionEl.dataset.lesson || null;
      go("learning-center");
      return;
    }
    if (action === "monthly-report") {
      state.showComingSoon = false;
      state.learningFocus = null;
      go("monthly-report");
      return;
    }
    if (action === "transfer-center") {
      state.showComingSoon = false;
      go("transfer-center");
      return;
    }
    if (action === "ai-brief-analysis") {
      state.showComingSoon = false;
      go("ai-brief-analysis");
      return;
    }
    if (action === "progress-analysis-detail") {
      state.showComingSoon = false;
      state.analysisBackScreen = state.screen === "todo" ? "todo" : "home";
      state.activeScenario = "delay";
      go("progress-analysis-detail");
      return;
    }
    if (action === "progress-analysis") {
      state.showComingSoon = false;
      state.activeScenario = "delay";
      state.deliveryTab = "To-do";
      go("delay");
      return;
    }
    if (action === "batch-pre-call") {
      state.showComingSoon = false;
      go("batch-pre-call");
      return;
    }
    if (action === "redelivery-orders") {
      state.showComingSoon = false;
      state.activeScenario = "redelivery-orders";
      state.deliveryTab = "To-do";
      go("redelivery-orders");
      return;
    }
    if (action === "bot-call-order") {
      const orderId = actionEl.dataset.order;
      if (orderId && !state.botCallOrderIds.includes(orderId)) {
        state.botCallOrderIds = [...state.botCallOrderIds, orderId];
      }
      showTimedToast("Bot call task queued", actionEl);
      return;
    }
    if (action === "bot-call-all") {
      const candidateIds = uncontactedOrders().map(order => order.id);
      state.botCallOrderIds = [...new Set([...state.botCallOrderIds, ...candidateIds])];
      showTimedToast("Batch bot call tasks queued", actionEl);
      return;
    }
    if (action === "seller-call" || action === "seller-bot-call") {
      showTimedToast(action === "seller-call" ? "Seller call started" : "Seller bot call queued", actionEl);
      return;
    }
    if (action === "open-sequence-suggestion") {
      const screen = actionEl.dataset.screen || "sequence-experienced";
      state.showComingSoon = false;
      state.activeScenario = screen;
      state.deliveryTab = "To-do";
      state.todoFilter = "all";
      state.sequenceDriverType = screen === "sequence-new" ? "new" : "experienced";
      state.sequenceGroupingActive = true;
      state.sequenceGroupOpen = false;
      go(screen);
      return;
    }
    if (action === "transfer-detail") {
      state.selectedTransferOrderId = actionEl.dataset.order || orders[0].id;
      go("transfer-detail");
      return;
    }
    if (action === "accept-transfer") {
      state.toastText = "Parcel transfer accepted";
      const modalRoot = document.getElementById("modal-root");
      const rootRect = modalRoot?.getBoundingClientRect();
      state.comingSoonTop = rootRect ? Math.round(rootRect.height * 0.52) : 360;
      state.showComingSoon = true;
      render({ preserveScroll: true });
      window.clearTimeout(comingSoonTimer);
      comingSoonTimer = window.setTimeout(() => {
        state.showComingSoon = false;
        render({ preserveScroll: true });
      }, 2000);
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
    if (action === "open-progress-transfer") {
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
    state.activeScenario = state.screen === "search-results" ? "search-results" : state.screen === "exception-orders" ? "exception-orders" : state.screen === "batch-pre-call" ? "batch-pre-call" : state.screen === "redelivery-orders" ? "redelivery-orders" : state.screen === "sequence-new" || state.screen === "sequence-experienced" ? state.screen : state.screen === "delay" || state.screen === "pending-delivery" ? "delay" : "todo";
    go("order-detail");
  }
});

document.getElementById("app").addEventListener("input", event => {
  const homeSearch = event.target.closest(".home-search-input");
  if (homeSearch) {
    state.homeSearchQuery = homeSearch.value;
    if (state.homeSearchMessage) state.homeSearchMessage = "";
    return;
  }

  const searchPageInput = event.target.closest(".search-page-input");
  if (searchPageInput) {
    state.searchQuery = searchPageInput.value;
    state.homeSearchQuery = searchPageInput.value;
    return;
  }

  const chatbotInput = event.target.closest(".chatbot-question-input");
  if (chatbotInput) {
    state.chatbotDraft = chatbotInput.value;
    return;
  }

  const target = event.target.closest("[data-action='nav-desc']");
  if (!target) return;
  state.improveDescription = target.value.slice(0, 100);
  const counter = document.querySelector(".desc-count");
  if (counter) {
    counter.textContent = `${state.improveDescription.length}/100`;
    counter.classList.toggle("warn", state.improveDescription.length > 80);
  }
});

document.getElementById("app").addEventListener("keydown", event => {
  if (event.key !== "Enter") return;
  if (event.target.closest(".home-search-input")) {
    event.preventDefault();
    submitHomeSearch();
    return;
  }
  if (event.target.closest(".search-page-input")) {
    event.preventDefault();
    render({ preserveScroll: false });
    return;
  }
  if (event.target.closest(".chatbot-question-input")) {
    event.preventDefault();
    submitChatbotQuestion();
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
