/* Mock data matching the API spec from mock_api_data.json */
const APP_DATA = {
  receiver: {
    name: 'Nick Chan',
    address: 'Jl. Letnan Jenderal S. Parman, Grogol, 11470 Jaket',
    phone: '6287772563080',
    alternativePhone: '6287772563123',
  },

  payment: {
    total: '3,600',
    currency: 'PHP',
    details: [
      { type: 'COD', amount: '3,500' },
      { type: 'ASF', amount: '100' },
    ],
  },

  orders: [
    {
      id: 'PH005314767368',
      amount: '3,100',
      currency: 'PHP',
      tags: [
        { text: 'COD Cek Dulu', style: 'filled_red' },
        { text: 'ROS', style: 'outline' },
        { text: 'ASF', style: 'outline' },
      ],
    },
    {
      id: 'PH005314799215',
      amount: '500',
      currency: 'PHP',
      tags: [
        { text: 'Left 7 Days', style: 'outline_warning', icon: 'timer' },
        { text: 'COD', style: 'outline' },
      ],
    },
    {
      id: 'PH005314812043',
      amount: null,
      currency: 'PHP',
      tags: [],
    },
    {
      id: 'PH005314823661',
      amount: null,
      currency: 'PHP',
      tags: [],
    },
  ],

  orderCount: 4,

  /* Map data — Davao City, Philippines area */
  map: {
    center: [7.0445, 125.5512],
    zoom: 15,
    keyPoint: { lat: 7.044144, lng: 125.55086, label: 'KeyPoint' },
    destination: { lat: 7.0468, lng: 125.5538, label: 'Destination', avatarIndex: 3 },
    /* History route: orange solid line (already delivered) */
    historyRoute: [
      [7.0410, 125.5475],
      [7.0418, 125.5487],
      [7.0426, 125.5496],
      [7.0433, 125.5503],
      [7.044144, 125.55086],
    ],
    /* Destination route: green dashed line (remaining) */
    destinationRoute: [
      [7.044144, 125.55086],
      [7.0450, 125.5518],
      [7.0458, 125.5528],
      [7.0468, 125.5538],
    ],
  },

  /* Fallback waypoints when no display_data URL param is provided */
  waypoints: [
    {
      index: 1,
      name: 'Motolite Drive Carwash',
      instruction: 'Turn right when see Motolite Drive Carwash',
      imageUrl: 'https://picsum.photos/seed/motolite-carwash/700/280',
    },
    {
      index: 2,
      name: 'Yen Yen Store',
      instruction: 'Turn left at Yen Yen Store and continue straight ahead',
      imageUrl: 'https://picsum.photos/seed/yenyen-store/700/280',
    },
  ],
};

/* ── Shared utility functions ── */

function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

const RECIPIENT_IMAGE_BASE_URLS = {
  VN: 'https://spx.shopee.vn',
  ID: 'https://spx.shopee.co.id',
  TH: 'https://spx.shopee.co.th',
  MY: 'https://spx.shopee.com.my',
  SG: 'https://spx.shopee.sg',
  PH: 'https://spx.shopee.ph',
  TW: 'https://spx.shopee.tw',
  BR: 'https://spx.shopee.com.br',
  XX: 'https://spx.shopee.systems',
};

function getRecipientImageFullUrl(imageUrl, market) {
  if (!imageUrl) return '';
  const key = (market || '').toUpperCase();
  const base = RECIPIENT_IMAGE_BASE_URLS[key] || RECIPIENT_IMAGE_BASE_URLS.XX;
  const path = imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl;
  return base + path;
}
