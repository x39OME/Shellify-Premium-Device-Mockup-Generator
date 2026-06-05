
// BG_IMAGES and BG_NAMES are loaded from backgrounds.js as <script> tag (window globals)

/* ICONS */
const ICO = {
  apple:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
  samsung:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.5A4 4 0 0 0 3.5 7.5v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9zm4.3 3.2c1.9 0 3.3.9 3.8 2.3l-1.5.5c-.3-.8-1.1-1.3-2.3-1.3-1.1 0-1.8.5-1.8 1.2 0 .6.5 1 1.6 1.2l1.2.3c1.8.4 2.7 1.3 2.7 2.6 0 1.6-1.4 2.7-3.5 2.7-2 0-3.5-1-4-2.5l1.5-.5c.4 1 1.3 1.5 2.5 1.5 1.2 0 2-.5 2-1.3 0-.7-.5-1.1-1.7-1.3l-1.2-.3c-1.7-.4-2.6-1.2-2.6-2.5 0-1.6 1.3-2.6 3.3-2.6z"/></svg>',
  google:'<svg viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',
  oneplus:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#F5010C" opacity=".12"/><path d="M14 7h-2v4H8v2h4v4h2v-4h4v-2h-4z" fill="#F5010C"/></svg>',
  ipad:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 1H5C3.9 1 3 1.9 3 3v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-7 19c-.83 0-1.5-.67-1.5-1.5S11.17 17 12 17s1.5.67 1.5 1.5S12.83 20 12 20zm7-4H5V4h14v12z"/></svg>',
  laptop:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>',
};

/* B&W DECORATION SVGs (currentColor = recolorable) */
const DECO_SVG = {
  /* ── STARS & SPARKLES ── */
  star4:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l2.4 7.6L22 11l-7.6 2.4L12 21l-2.4-7.6L2 11l7.6-2.4z"/></svg>',
  star5:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z"/></svg>',
  star6:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.5H20l-5 3.6 1.9 5.6-5-3.6-5 3.6 1.9-5.6-5-3.6h6.3z"/></svg>',
  starOL:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6L12 16.6 6.6 19.4l1.3-6L3.3 9.2l6.1-.6z"/></svg>',
  sparkle:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c.5 5 2 8 7 8.5-5 .5-6.5 3.5-7 8.5-.5-5-2-8-7-8.5 5-.5 6.5-3.5 7-8.5z"/></svg>',
  sparkle2:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c.3 3.5 1.5 6 4.5 7C13.5 10 12 12.5 12 16c-.3-3.5-1.5-6-4.5-7C10.5 8 12 5.5 12 2z"/><path d="M5 10c.2 2 .8 3.5 2.5 4C5.8 14.5 5 16 5 18c-.2-2-.8-3.5-2.5-4C4.2 13.5 5 12 5 10z"/><path d="M19 6c.2 2 .8 3.5 2.5 4-1.7.5-2.5 2-2.5 4-.2-2-.8-3.5-2.5-4C18.2 9.5 19 8 19 6z"/></svg>',
  diamond4:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 9-9-3 9 3 3 9-3-9 9 3-9-3z"/></svg>',
  /* ── MOON & SUN ── */
  moon:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 2A9.5 9.5 0 1 0 22 14.5 7.5 7.5 0 0 1 12.5 2z"/></svg>',
  moonOL:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9A7 7 0 0 1 12 3z"/></svg>',
  crescent:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun:       '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1"/></g></svg>',
  sunOL:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v2.5M12 20v2.5M1.5 12H4M20 12h2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M19.8 4.2L18 6M6 18l-1.8 1.8"/></svg>',
  sunburst:  '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M19.78 4.22l-2.83 2.83M7.05 16.95l-2.83 2.83"/></svg>',
  /* ── CLOUDS ── */
  cloud:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 10a4 4 0 0 0-7.7-1.3A3.5 3.5 0 1 0 6 15h12a3 3 0 0 0 0-5z"/></svg>',
  cloudOL:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M18 10.5a4 4 0 0 0-7.7-1.3A3.5 3.5 0 1 0 6 15.5h12a3 3 0 0 0 0-5z"/></svg>',
  cloudFull: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>',
  /* ── HEARTS & FLOWERS ── */
  heart:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11z"/></svg>',
  heartOL:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11z"/></svg>',
  flower:    '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="5" rx="2" ry="3.5"/><ellipse cx="12" cy="19" rx="2" ry="3.5"/><ellipse cx="5" cy="12" rx="3.5" ry="2"/><ellipse cx="19" cy="12" rx="3.5" ry="2"/><ellipse cx="7.1" cy="7.1" rx="2" ry="3.5" transform="rotate(-45 7.1 7.1)"/><ellipse cx="16.9" cy="16.9" rx="2" ry="3.5" transform="rotate(-45 16.9 16.9)"/><ellipse cx="16.9" cy="7.1" rx="2" ry="3.5" transform="rotate(45 16.9 7.1)"/><ellipse cx="7.1" cy="16.9" rx="2" ry="3.5" transform="rotate(45 7.1 16.9)"/></svg>',
  leaf:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 3-13 7 1 3 5 4 6 4 0 0 .75.5 1.5.5C19.5 14.5 21 10.6 17 8z"/></svg>',
  /* ── GEOMETRIC ── */
  circle:    '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9"/></svg>',
  circleOL:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/></svg>',
  ring:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/></svg>',
  diamond:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l10 10-10 10L2 12z"/></svg>',
  diamondOL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2l10 10-10 10L2 12z"/></svg>',
  triangle:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l10 18H2z"/></svg>',
  hexagon:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 5v10l-9 5-9-5V7z"/></svg>',
  hexOL:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2l9 5v10l-9 5-9-5V7z"/></svg>',
  cross:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8z"/></svg>',
  /* ── LINES & WAVES ── */
  wave:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/></svg>',
  wave2:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 8c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M2 16c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/></svg>',
  zigzag:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12l4-6 4 6 4-6 4 6 4-6"/></svg>',
  line:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 12h18"/></svg>',
  dLine:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2 3"><path d="M3 12h18"/></svg>',
  corner:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 4h8M4 4v8"/></svg>',
  /* ── CELESTIAL ── */
  orbit:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/></svg>',
  spiral:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 12c0 0 0-5 5-5s5 5 5 5-0 7-7 7-7-7-7-7 2-9 9-9 10 10 10 10"/></svg>',
  comet:     '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="18" cy="6" r="3"/><path d="M15.5 8.5L2 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6"/><path d="M13 11L4 20" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.35"/></svg>',
  planet:    '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="11" ry="3.5" transform="rotate(-20 12 12)" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>',
  /* ── ARROWS & SYMBOLS ── */
  arrowUp:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l8 8h-5v8h-6v-8H4z"/></svg>',
  infinity:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4zm0 0c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"/></svg>',
  bolt:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>',
  /* ── DOTS & TEXTURES ── */
  dots3:     '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg>',
  dots9:     '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="6" r="1.5"/><circle cx="12" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/><circle cx="6" cy="18" r="1.5"/><circle cx="12" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/></svg>',
  burst:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2l2.8 2.8M19 5l-2.8 2.8M7.8 16.2L5 19"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></svg>',
  /* ── DECORATIVE FRAMES ── */
  eye:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></svg>',
  feather:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/></svg>',
  crown:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 17V9l4 5 5-9 5 9 4-5v8H3z"/></svg>',
  gem:       '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12l4 6-10 14L2 8z"/></svg>',
  shield:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l8 4v6c0 5.5-3.5 10.7-8 13-4.5-2.3-8-7.5-8-13V6z"/></svg>',
};

const CATS = {
  iPhone:{ico:'apple',label:'iPhone',sub:'Apple'},
  Samsung:{ico:'samsung',label:'Samsung',sub:'Galaxy'},
  Pixel:{ico:'google',label:'Pixel',sub:'Google'},
  OnePlus:{ico:'oneplus',label:'OnePlus',sub:'& Xiaomi'},
  iPad:{ico:'ipad',label:'iPad',sub:'Tablet'},
  MacPC:{ico:'laptop',label:'Mac & PC',sub:'Desktop'},
};

const DEVICES = {
  iPhone:[
    {id:'ip13',n:'iPhone 13',y:'2021',c:{rx:44,irx:40,nt:'pill',nw:126,nh:26,ny:12,bc:'#1a1a1a',bw:3,pw:220,ph:450}},
    {id:'ip14',n:'iPhone 14',y:'2022',c:{rx:44,irx:40,nt:'pill',nw:120,nh:26,ny:12,bc:'#1a1a1a',bw:3,pw:220,ph:450}},
    {id:'ip14pro',n:'iPhone 14 Pro',y:'2022',c:{rx:44,irx:40,nt:'island',nw:90,nh:28,ny:14,bc:'#2a2a2a',bw:3,pw:220,ph:450}},
    {id:'ip15',n:'iPhone 15',y:'2023',c:{rx:44,irx:40,nt:'island',nw:88,nh:28,ny:14,bc:'#1a1a1a',bw:3,pw:220,ph:450}},
    {id:'ip15pro',n:'iPhone 15 Pro',y:'2023',c:{rx:44,irx:40,nt:'island',nw:88,nh:28,ny:14,bc:'#2c2c2c',bw:3,pw:220,ph:450}},
    {id:'ip15pm',n:'iPhone 15 Pro Max',y:'2023',c:{rx:44,irx:40,nt:'island',nw:88,nh:28,ny:14,bc:'#2c2c2c',bw:3,pw:240,ph:490}},
    {id:'ip16',n:'iPhone 16',y:'2024',c:{rx:44,irx:40,nt:'island',nw:86,nh:28,ny:14,bc:'#1a1a1a',bw:3,pw:220,ph:450}},
    {id:'ip16pro',n:'iPhone 16 Pro',y:'2024',c:{rx:44,irx:40,nt:'island',nw:86,nh:28,ny:14,bc:'#2c2c2c',bw:3,pw:220,ph:450}},
    {id:'ip16pm',n:'iPhone 16 Pro Max',y:'2024',c:{rx:44,irx:40,nt:'island',nw:86,nh:28,ny:14,bc:'#2c2c2c',bw:3,pw:240,ph:490}},
  ],
  Samsung:[
    {id:'s23u',n:'Galaxy S23 Ultra',y:'2023',c:{rx:18,irx:14,nt:'dot',nw:14,nh:14,ny:14,bc:'#111',bw:2.5,pw:238,ph:488}},
    {id:'s24',n:'Galaxy S24',y:'2024',c:{rx:26,irx:22,nt:'dot',nw:15,nh:15,ny:14,bc:'#111',bw:2.5,pw:215,ph:440}},
    {id:'s24u',n:'Galaxy S24 Ultra',y:'2024',c:{rx:18,irx:14,nt:'dot',nw:13,nh:13,ny:14,bc:'#111',bw:2.5,pw:238,ph:488}},
    {id:'s25',n:'Galaxy S25',y:'2025',c:{rx:26,irx:22,nt:'dot',nw:14,nh:14,ny:14,bc:'#111',bw:2.5,pw:215,ph:440}},
    {id:'s25u',n:'Galaxy S25 Ultra',y:'2025',c:{rx:18,irx:14,nt:'dot',nw:12,nh:12,ny:14,bc:'#111',bw:2.5,pw:238,ph:488}},
  ],
  Pixel:[
    {id:'px8',n:'Pixel 8',y:'2023',c:{rx:20,irx:16,nt:'dot',nw:13,nh:13,ny:14,bc:'#111',bw:2,pw:215,ph:440}},
    {id:'px9',n:'Pixel 9',y:'2024',c:{rx:20,irx:16,nt:'dot',nw:12,nh:12,ny:14,bc:'#111',bw:2,pw:215,ph:440}},
    {id:'px9p',n:'Pixel 9 Pro',y:'2024',c:{rx:20,irx:16,nt:'dot',nw:12,nh:12,ny:14,bc:'#111',bw:2,pw:225,ph:458}},
  ],
  OnePlus:[
    {id:'op13',n:'OnePlus 13',y:'2025',c:{rx:22,irx:18,nt:'dot',nw:13,nh:13,ny:14,bc:'#111',bw:2,pw:215,ph:440}},
    {id:'mi15',n:'Xiaomi 15',y:'2025',c:{rx:18,irx:14,nt:'dot',nw:12,nh:12,ny:14,bc:'#111',bw:2,pw:212,ph:434}},
  ],
  iPad:[
    {id:'ip11m4',n:'iPad Pro 11"',y:'2024',c:{rx:18,irx:14,nt:'island',nw:66,nh:22,ny:12,bc:'#2c2c2c',bw:3,pw:308,ph:412,isTab:1}},
    {id:'ip13m4',n:'iPad Pro 13"',y:'2024',c:{rx:18,irx:14,nt:'island',nw:66,nh:22,ny:12,bc:'#2c2c2c',bw:3,pw:358,ph:478,isTab:1}},
  ],
  MacPC:[
    {id:'mb14',n:'MacBook 14"',y:'2024',c:{rx:12,irx:10,nt:'dot',nw:8,nh:8,ny:8,bc:'#2a2a2a',bw:4,pw:378,ph:258,isLap:1}},
    {id:'pc27',n:'Monitor 27"',y:'Gen',c:{rx:8,irx:6,nt:'none',nw:0,nh:0,ny:0,bc:'#1a1a1a',bw:4,pw:418,ph:258,isDesk:1}},
  ],
};

const COLOR_LIB = {
  gradient3:[
    {n:'Midnight',g:['#0f0c29','#302b63','#24243e']},
    {n:'Deep Ocean',g:['#0f2027','#203a43','#2c5364']},
    {n:'Royal Purple',g:['#1e0a35','#3d0e45','#6b21a8']},
    {n:'Night Sky',g:['#1a1a2e','#16213e','#0f3460']},
    {n:'Espresso',g:['#1a0e00','#3d2200','#7c3f00']},
    {n:'Forest',g:['#0a1628','#0d2137','#052e16']},
    {n:'Sunset',g:['#f093fb','#f5576c','#4facfe']},
    {n:'Ocean',g:['#4facfe','#00f2fe','#43e97b']},
    {n:'Gold Hour',g:['#f7971e','#ffd200','#f7971e']},
    {n:'Indigo',g:['#667eea','#764ba2','#667eea']},
    {n:'Crimson',g:['#ff416c','#ff4b2b','#ff416c']},
    {n:'Aurora',g:['#a18cd1','#fbc2eb','#a1c4fd']},
    {n:'Sky',g:['#7cb3d4','#a8c8e8','#c5dcee']},
    {n:'Mint',g:['#a8e6cf','#c3f0d9','#dfffed']},
    {n:'Lavender',g:['#c3b1e1','#ddd0f0','#eee8f8']},
    {n:'Peach',g:['#ffb3ba','#ffd0d6','#ffe8ea']},
    {n:'Citrus',g:['#fceabb','#f8b500','#fceabb']},
    {n:'Lagoon',g:['#43cea2','#185a9d','#43cea2']},
  ],
  gradient2:[
    {n:'Cool Blue',g:['#2980b9','#6dd5fa']},
    {n:'Purple Haze',g:['#8E2DE2','#4A00E0']},
    {n:'Pink Dream',g:['#ee9ca7','#ffdde1']},
    {n:'Lemon Lime',g:['#a8e063','#56ab2f']},
    {n:'Cherry',g:['#eb3349','#f45c43']},
    {n:'Slate',g:['#34495e','#5d6d7e']},
    {n:'Rose Gold',g:['#bd5d76','#f4c4f3']},
    {n:'Mango',g:['#ffafbd','#ffc3a0']},
    {n:'Emerald',g:['#11998e','#38ef7d']},
    {n:'Tangerine',g:['#f12711','#f5af19']},
    {n:'Twilight',g:['#0F2027','#2c5364']},
    {n:'Berry',g:['#ec008c','#fc6767']},
    {n:'Stellar',g:['#7474BF','#348AC7']},
    {n:'Pure Light',g:['#e0eafc','#cfdef3']},
    {n:'Charcoal',g:['#232526','#414345']},
  ],
  mesh:[
    {n:'Cosmic Mesh',g:['#ff6e7f','#bfe9ff','#a18cd1','#ffd1ff']},
    {n:'Tropical Mesh',g:['#43e97b','#38f9d7','#fee140','#fa709a']},
    {n:'Aurora Mesh',g:['#667eea','#764ba2','#f093fb','#4facfe']},
    {n:'Soft Mesh',g:['#ffecd2','#fcb69f','#a1c4fd','#c2e9fb']},
    {n:'Ocean Mesh',g:['#4facfe','#00f2fe','#a8edea','#fed6e3']},
    {n:'Rainbow Mesh',g:['#ff9a9e','#fad0c4','#a18cd1','#fbc2eb','#84fab0']},
    {n:'Sunset Mesh',g:['#ff6a00','#ee0979','#5b2c83','#1a1a2e']},
    {n:'Forest Mesh',g:['#11998e','#38ef7d','#a8e063','#56ab2f']},
    {n:'Berry Mesh',g:['#ec008c','#fc6767','#ff6a00','#ee0979']},
  ],
  solid:[
    {n:'Pure Black',g:['#000000','#000000']},
    {n:'Pure White',g:['#ffffff','#ffffff']},
    {n:'Off White',g:['#f8f9fa','#f8f9fa']},
    {n:'Cream',g:['#fdf6e3','#fdf6e3']},
    {n:'Soft Gray',g:['#e5e5e5','#e5e5e5']},
    {n:'Charcoal',g:['#2c2c2e','#2c2c2e']},
    {n:'Navy',g:['#001f3f','#001f3f']},
    {n:'Royal Blue',g:['#1e3a8a','#1e3a8a']},
    {n:'Forest Green',g:['#14532d','#14532d']},
    {n:'Wine',g:['#6c1d2a','#6c1d2a']},
    {n:'Mauve',g:['#c5a3a3','#c5a3a3']},
    {n:'Sage',g:['#b8c5a6','#b8c5a6']},
    {n:'Powder Blue',g:['#b0d4e3','#b0d4e3']},
    {n:'Coral',g:['#ff7f50','#ff7f50']},
    {n:'Mustard',g:['#d4a017','#d4a017']},
  ],
  radial:[
    {n:'Spotlight',g:['#fff','#bbb','#666']},
    {n:'Sun Burst',g:['#ffd700','#ff8c00','#8b0000']},
    {n:'Moon Glow',g:['#fffff0','#e6e6fa','#191970']},
    {n:'Ocean Depth',g:['#00d4ff','#0091ea','#003459']},
    {n:'Fire Ring',g:['#fff200','#ff6b00','#7c0000']},
    {n:'Lavender Cloud',g:['#fff','#dcd0ff','#7c3aed']},
    {n:'Rose Burst',g:['#ffe4e1','#ff69b4','#8b0a50']},
    {n:'Forest Halo',g:['#dfffe0','#56ab2f','#0c2a18']},
    {n:'Aurora Halo',g:['#a1c4fd','#c2e9fb','#3a1c71']},
    {n:'Galaxy Center',g:['#ffffff','#9d50bb','#0f0c29']},
    {n:'Honey',g:['#fff7c2','#f7971e','#5a2a00']},
    {n:'Ice',g:['#ffffff','#e0f7ff','#003459']},
  ],
};
// Legacy alias for color modal
const GRADIENTS = {Premium:COLOR_LIB.gradient3.slice(0,6),Vibrant:COLOR_LIB.gradient3.slice(6,12),Pastel:COLOR_LIB.gradient3.slice(12)};

/* TEMPLATES — ready-made combos */
const TEMPLATES = [
  {n:'Honey Veil',bgMode:'image',bgImg:'bg01',cat:'gradient'},
  {n:'Desert Bloom',bgMode:'image',bgImg:'bg02',cat:'gradient'},
  {n:'Sky Ornate',bgMode:'image',bgImg:'bg03',cat:'pattern'},
  {n:'Void Whisper',bgMode:'image',bgImg:'bg04',cat:'gradient'},
  {n:'Imperial Tide',bgMode:'image',bgImg:'bg05',cat:'gradient'},
  {n:'Cosmic Ember',bgMode:'image',bgImg:'bg06',cat:'gradient'},
  {n:'Dark Aura',bgMode:'image',bgImg:'bg07',cat:'pattern'},
  {n:'Pastel Doodle',bgMode:'image',bgImg:'bg08',cat:'pattern'},
  {n:'Nebula Pearl',bgMode:'image',bgImg:'bg09',cat:'gradient'},
  {n:'Amber Dusk',bgMode:'image',bgImg:'bg10',cat:'gradient'},
  {n:'Solar Drift',bgMode:'image',bgImg:'bg11',cat:'gradient'},
  {n:'Sakura Glow',bgMode:'image',bgImg:'bg12',cat:'gradient'},
  {n:'Celestial Mirror',bgMode:'image',bgImg:'bg13',cat:'gradient'},
  {n:'Sapphire Court',bgMode:'image',bgImg:'bg14',cat:'gradient'},
  {n:'Dawn Veil',bgMode:'image',bgImg:'bg15',cat:'gradient'},
  {n:'Ocean Filigree',bgMode:'image',bgImg:'bg16',cat:'pattern'},
  {n:'Vanilla Whisper',bgMode:'image',bgImg:'bg17',cat:'gradient'},
  {n:'Boreal Hush',bgMode:'image',bgImg:'bg18',cat:'gradient'},
  {n:'Velvet Dusk',bgMode:'image',bgImg:'bg19',cat:'gradient'},
  {n:'Iris Dream',bgMode:'image',bgImg:'bg20',cat:'gradient'},
  {n:'Aurora Green',bgMode:'image',bgImg:'bg21',cat:'gradient'},
  {n:'Purple Haze',bgMode:'image',bgImg:'bg22',cat:'gradient'},
  {n:'Tropical Sunset',bgMode:'image',bgImg:'bg23',cat:'gradient'},
  {n:'Deep Space',bgMode:'image',bgImg:'bg24',cat:'gradient'},
  {n:'Mint Cream',bgMode:'image',bgImg:'bg25',cat:'gradient'},
  {n:'Coral Reef',bgMode:'image',bgImg:'bg26',cat:'gradient'},
  {n:'Electric Blue',bgMode:'image',bgImg:'bg27',cat:'gradient'},
  {n:'Lavender Dream',bgMode:'image',bgImg:'bg28',cat:'gradient'},
  {n:'Forest Mist',bgMode:'image',bgImg:'bg29',cat:'gradient'},
  {n:'Hot Pink',bgMode:'image',bgImg:'bg30',cat:'gradient'},
  {n:'Cyber Yellow',bgMode:'image',bgImg:'bg31',cat:'gradient'},
  {n:'Soft Sky',bgMode:'image',bgImg:'bg32',cat:'gradient'},
  {n:'Magma',bgMode:'image',bgImg:'bg33',cat:'gradient'},
  {n:'Cotton Candy',bgMode:'image',bgImg:'bg34',cat:'gradient'},
  {n:'Emerald Glow',bgMode:'image',bgImg:'bg35',cat:'gradient'},
  {n:'Rose Gold',bgMode:'image',bgImg:'bg36',cat:'gradient'},
  {n:'Ocean Wave',bgMode:'image',bgImg:'bg37',cat:'gradient'},
  {n:'Black Gold',bgMode:'image',bgImg:'bg38',cat:'gradient'},
  {n:'Vapor Wave',bgMode:'image',bgImg:'bg39',cat:'gradient'},
  {n:'Glass Frost',bgMode:'image',bgImg:'bg40',cat:'gradient'},
  {n:'Neon Grid',bgMode:'image',bgImg:'bg41',cat:'gradient'},
  {n:'Holographic',bgMode:'image',bgImg:'bg42',cat:'gradient'},
  {n:'Charcoal Smoke',bgMode:'image',bgImg:'bg43',cat:'gradient'},
  {n:'Sunny Yellow',bgMode:'image',bgImg:'bg44',cat:'gradient'},
  {n:'Watermelon',bgMode:'image',bgImg:'bg45',cat:'gradient'},
  {n:'Cobalt',bgMode:'image',bgImg:'bg46',cat:'gradient'},
  {n:'Tangerine',bgMode:'image',bgImg:'bg47',cat:'gradient'},
  {n:'Plum Velvet',bgMode:'image',bgImg:'bg48',cat:'gradient'},
  {n:'Ice Mint',bgMode:'image',bgImg:'bg49',cat:'gradient'},
  {n:'Wine Velvet',bgMode:'image',bgImg:'bg50',cat:'gradient'},
  {n:'Sky Salmon',bgMode:'image',bgImg:'bg51',cat:'gradient'},
  {n:'Galaxy Nebula',bgMode:'image',bgImg:'bg52',cat:'gradient'},
];

/* STATE */
let S = {
  lang:'en',theme:'dark',activeCat:'iPhone',
  devId:'ip15pro',devName:'iPhone 15 Pro',devIco:'apple',
  devCfg:DEVICES.iPhone.find(d=>d.id==='ip15pro').c,
  bgMode:'gradient',bg:['#0f0c29','#302b63','#24243e'],bgName:'Midnight',bgImg:'bg09',
  bgWidth:1200,bgHeight:700,
  images:[],phonePos:[],
  decoColor:'#ffffff',
  shadow:true,notch:true,autoSave:true,
  format:'png',quality:2,
  gap:40,scale:100,overlap:0,rot:0,frameClr:'#1a1a1a',
  txtContent:'',txtColor:'#ffffff',txtSize:36,txtAlign:'center',txtPos:'bottom',txtWeight:600,
  watermark:false,shadowColor:'#000000',shadowOpacity:55,phoneRot:[],autoRotation:true,
  phoneZIndex:[],phoneOffsetX:[],phoneOffsetY:[],phoneScale:[],
  autoScale:true,autoSpacing:true,autoOverlap:false,
};

try{
  const sv=JSON.parse(localStorage.getItem('mfstudio')||'{}');
  ['lang','theme','activeCat','devId','devName','devIco','bgMode','bg','bgName','bgImg','bgWidth','bgHeight','decoColor','shadow','notch','autoSave','format','quality','gap','scale','overlap','rot','frameClr','txtContent','txtColor','txtSize','txtAlign','txtPos','txtWeight','watermark'].forEach(k=>{if(sv[k]!==undefined)S[k]=sv[k];});
  S.devCfg=findCfg(S.devId);
}catch(e){}

function findCfg(id){for(const a of Object.values(DEVICES)){const d=a.find(x=>x.id===id);if(d)return d.c;}return DEVICES.iPhone[4].c;}
function save(){if(!S.autoSave)return;try{const o={};['lang','theme','activeCat','devId','devName','devIco','bgMode','bg','bgName','bgImg','bgWidth','bgHeight','decoColor','shadow','notch','autoSave','format','quality','gap','scale','overlap','rot','frameClr','txtContent','txtColor','txtSize','txtAlign','txtPos','txtWeight','watermark'].forEach(k=>o[k]=S[k]);localStorage.setItem('mfstudio',JSON.stringify(o));}catch(e){}}

/* I18N */
const TR={
  en:{d:'ltr',f:'Inter',Design:'Design',Device:'Device',BG:'BG',Decor:'Decor',Set:'Set',Templates:'Templates',Images:'Images','Drop images or click':'Drop images or click','up to 5':'PNG · JPG · WEBP — up to 5',uploaded:'uploaded','Arrange & Scale':'Arrange & Scale',Spacing:'Spacing','Phone Scale':'Phone Scale',Overlap:'Overlap',Category:'Category','Selected Device':'Selected Device','Tap category to change':'Tap category to change','Image Backgrounds':'Image Backgrounds','Ready Templates':'Ready Templates',Change:'Change','Background Type':'Background Type',Gradient:'Gradient',Image:'Image',Transparent:'Transparent','Choose gradient':'Choose gradient','Ready Backgrounds':'Ready Backgrounds (click to use)','Background Size':'Background Size',Width:'Width',Height:'Height','Add Decoration':'Add Decoration','Select → click stage to place':'Select → click stage to place','Selected Item':'Selected Item',Color:'Color',Size:'Size',Opacity:'Opacity',Rotation:'Rotation',Deselect:'Deselect',Delete:'Delete','Clear All':'Clear All',Settings:'Settings',Language:'Language','Interface language':'Interface language','Export Format':'Export Format','Image file type':'Image file type',Quality:'Quality','Export resolution':'Export resolution',Theme:'Theme','Light / Dark':'Light / Dark','Device Shadow':'Device Shadow','Depth shadow':'Depth shadow','Notch / Island':'Notch / Island','Show Dynamic Island':'Show Dynamic Island','Auto-Save':'Auto-Save','Save locally':'Save locally',Download:'Download','Choose Device':'Choose Device','Choose Gradient':'Choose Gradient','Drag phones to move · everything updates live':'Drag phones to move · everything updates live','Start Creating':'Start Creating','Upload screenshots · pick a template':'Upload screenshots · pick a template','drag phones · download':'drag phones · download','✓ Downloaded!':'✓ Downloaded!',Single:'Single',Two:'Two',Three:'Three',Four:'Four',Five:'Five'},
  ar:{d:'rtl',f:'Tajawal',Design:'تصميم',Device:'الجهاز',BG:'خلفية',Web:'ويب',Decor:'زخرفة',Set:'إعداد',Templates:'قوالب',Images:'الصور','Drop images or click':'اسحب أو اضغط','up to 5':'PNG · JPG · WEBP — حتى 5',uploaded:'مرفوعة','Arrange & Scale':'الترتيب والحجم',Spacing:'المسافة','Phone Scale':'حجم الهاتف',Overlap:'التداخل',Category:'الفئة','Selected Device':'الجهاز المختار','Tap category to change':'اضغط الفئة للتغيير','Image Backgrounds':'خلفيات صور','Web':'الويب','Website URL':'رابط الموقع','Frame Style':'نمط الإطار','Viewport Size':'حجم النافذة','Background':'الخلفية','Capture & Preview':'التقاط ومعاينة','Enter a URL and click capture to generate a website mockup':'أدخل رابط الموقع ثم اضغط التقاط لإنشاء موكاب','Preview':'معاينة','Download':'تحميل','Add to Stage':'إضافة للمشروع','Loading...':'جاري التحميل...','Captured successfully':'تم الالتقاط بنجاح','Using preview mode — site may block embedding':'وضع المعاينة — قد يحجب الموقع العرض','Desktop':'سطح المكتب','MacBook':'ماك بوك','Browser':'متصفح','Mobile':'جوال','Ready Templates':'قوالب جاهزة',Change:'تغيير','Background Type':'نوع الخلفية',Gradient:'تدرج',Image:'صورة',Transparent:'شفافة','Choose gradient':'اختر تدرجاً','Ready Backgrounds':'خلفيات جاهزة (اضغط للاستخدام)','Background Size':'حجم الخلفية',Width:'العرض',Height:'الارتفاع','Add Decoration':'إضافة زخرفة','Select → click stage to place':'اختر ← اضغط للوضع','Selected Item':'العنصر المختار',Color:'اللون',Size:'الحجم',Opacity:'الشفافية',Rotation:'الدوران',Deselect:'إلغاء',Delete:'حذف','Clear All':'مسح الكل',Settings:'الإعدادات',Language:'اللغة','Interface language':'لغة الواجهة','Export Format':'صيغة التصدير','Image file type':'نوع الملف',Quality:'الجودة','Export resolution':'دقة التصدير',Theme:'المظهر','Light / Dark':'فاتح / داكن','Device Shadow':'ظل الجهاز','Depth shadow':'ظل احترافي','Notch / Island':'الشق / الجزيرة','Show Dynamic Island':'إظهار الجزيرة','Auto-Save':'حفظ تلقائي','Save locally':'حفظ محلي',Download:'تحميل','Choose Device':'اختر الجهاز','Choose Gradient':'اختر التدرج','Drag phones to move · everything updates live':'اسحب الهواتف للتحريك · كل شيء فوري','Start Creating':'ابدأ الإنشاء','Upload screenshots · pick a template':'ارفع الصور · اختر قالباً','drag phones · download':'اسحب الهواتف · حمّل','Gradient Templates':'قوالب متدرجة','Featured':'مميزة','Patterned':'مزخرفة','Website URL':'رابط الموقع','Load':'تحميل','Enter URL to capture website in a device frame':'أدخل الرابط لعرض الموقع في إطار جهاز','Preview Device':'جهاز العرض','Frame Style':'نمط الإطار','Background':'الخلفية','Options':'الخيارات','Device Shadow':'ظل الجهاز','Reflection':'انعكاس','Scale':'الحجم','Web':'ويب','Desktop':'سطح المكتب','Laptop':'لابتوب','Tablet':'تابلت','Phone':'هاتف','Dark':'داكن','Light':'فاتح','Minimal':'بسيط','Image Backgrounds':'خلفيات صور','Auto Rotation':'دوران تلقائي','Side phones tilt':'ميل الهواتف الجانبية','Auto Scale':'حجم تلقائي','Side phones smaller':'حجم جانبي تلقائي','Auto Spacing':'مسافة تلقائية','Equal spacing':'مسافة متساوية','Auto Overlap':'تداخل تلقائي','Depth overlap':'تداخل عمقي','Default':'افتراضي','Lock Ratio':'قفل النسبة','Locked':'مقفل','Recent':'الأخيرة','Random template':'قالب عشوائي','Dark':'داكن','Light':'فاتح','Search templates...':'ابحث عن قالب...','Rotation':'الالتفاف','Shadow Opacity':'شفافية الظل','Scale':'الحجم','Offset X':'إزاحة أفقية','Offset Y':'إزاحة عمودية','Z-Index':'الطبقة','Phone':'هاتف','Reset':'إعادة تعيين','Side phones tilt':'ميل الهواتف الجانبية','Clear Images':'مسح الصور','Clear Decorations':'مسح الزخارف','Clear Text':'مسح النص','Reset All':'مسح الكل','✓ Downloaded!':'✓ تم التحميل!',Single:'واحد',Two:'اثنان',Three:'ثلاثة',Four:'أربعة',Five:'خمسة',
    'Per-Phone Control':'تحكم فردي بالهواتف','Phone':'هاتف','Reset':'إعادة تعيين',
    'Z-Index':'الطبقة','Scale':'الحجم','Offset X':'إزاحة أفقية','Offset Y':'إزاحة عمودية',
    'Rotation':'الالتفاف','Text Overlay':'نص على الصورة','Device Rotation':'دوران الجهاز',
    'Frame Color':'لون الإطار','Device Shadow':'ظل الجهاز','Shadow Opacity':'شفافية الظل',
    'Shadow Color':'لون الظل','Upload images first':'ارفع الصور أولاً',
    'Image Backgrounds':'خلفيات الصور','Ready Templates':'قوالب جاهزة',
    'Transparent Background':'خلفية شفافة','Export with no background':'تصدير بدون خلفية',
    'Colors':'الألوان','All':'الكل','Featured':'مميزة','Gradients':'تدرجات','Templates':'القوالب','Size':'الحجم',
    '3-Color':'3 ألوان','2-Color':'لونان','Mesh':'شبكي','Solid':'صلب','Radial':'شعاعي',
    'Arrange & Scale':'الترتيب والحجم','Text Overlay':'نص على الصورة','Frame Color':'لون الإطار',
    'Images':'الصور','Spacing':'المسافة','Phone Scale':'حجم الهاتف','Overlap':'التداخل',
    'Add depth shadow':'إضافة ظل','Dynamic Island':'الجزيرة الديناميكية',
    'Z-Index':'الطبقة','Scale':'الحجم','Rotation':'الالتفاف','Shadow Opacity':'شفافية الظل',
    'Offset X':'إزاحة أفقية','Offset Y':'إزاحة عمودية',
    'Phone':'هاتف','Reset':'إعادة تعيين','Featured':'مميزة','Gradient Templates':'قوالب متدرجة','Image Backgrounds':'خلفيات صور'},
  fr:{d:'ltr',f:'Inter',Design:'Design',Device:'Appareil',BG:'Fond',Decor:'Décor',Set:'Régl',Templates:'Modèles',Images:'Images','Drop images or click':'Glisser ou cliquer','up to 5':'PNG · JPG · WEBP — jusqu\'à 5',uploaded:'chargées','Arrange & Scale':'Disposition',Spacing:'Espacement','Phone Scale':'Échelle',Overlap:'Chevauchement',Category:'Catégorie','Selected Device':'Sélectionné','Tap category to change':'Appuyer pour changer','Image Backgrounds':'Fonds Image','Ready Templates':'Modèles',Change:'Changer','Background Type':'Type de fond',Gradient:'Dégradé',Image:'Image',Transparent:'Transparent','Choose gradient':'Choisir dégradé','Ready Backgrounds':'Fonds prêts (cliquer)','Background Size':'Taille du fond',Width:'Largeur',Height:'Hauteur','Add Decoration':'Décoration','Select → click stage to place':'Sélectionner → cliquer','Selected Item':'Élément',Color:'Couleur',Size:'Taille',Opacity:'Opacité',Rotation:'Rotation',Deselect:'Désélect.',Delete:'Suppr.','Clear All':'Tout effacer',Settings:'Réglages',Language:'Langue','Interface language':'Langue','Export Format':'Format','Image file type':'Type fichier',Quality:'Qualité','Export resolution':'Résolution',Theme:'Thème','Light / Dark':'Clair/Sombre','Device Shadow':'Ombre','Depth shadow':'Ombre','Notch / Island':'Encoche','Show Dynamic Island':'Dynamic Island','Auto-Save':'Auto-save','Save locally':'Sauvegarder',Download:'Télécharger','Choose Device':'Choisir appareil','Choose Gradient':'Choisir dégradé','Drag phones to move · everything updates live':'Glisser pour déplacer · temps réel','Start Creating':'Commencer','Upload screenshots · pick a template':'Charger · choisir modèle','drag phones · download':'glisser · télécharger','✓ Downloaded!':'✓ Téléchargé!',Single:'Un',Two:'Deux',Three:'Trois',Four:'Quatre',Five:'Cinq'},
  de:{d:'ltr',f:'Inter',Design:'Design',Device:'Gerät',BG:'BG',Decor:'Deko',Set:'Einst',Templates:'Vorlagen',Images:'Bilder','Drop images or click':'Ziehen oder klicken','up to 5':'PNG · JPG · WEBP — bis 5',uploaded:'geladen','Arrange & Scale':'Anordnung',Spacing:'Abstand','Phone Scale':'Skalierung',Overlap:'Überlappung',Category:'Kategorie','Selected Device':'Ausgewählt','Tap category to change':'Tippen zum Ändern','Image Backgrounds':'Bild-Hintergründe','Ready Templates':'Vorlagen',Change:'Ändern','Background Type':'Hintergrundtyp',Gradient:'Verlauf',Image:'Bild',Transparent:'Transparent','Choose gradient':'Verlauf wählen','Ready Backgrounds':'Hintergründe (klicken)','Background Size':'Hintergrundgröße',Width:'Breite',Height:'Höhe','Add Decoration':'Dekoration','Select → click stage to place':'Wählen → klicken','Selected Item':'Element',Color:'Farbe',Size:'Größe',Opacity:'Transparenz',Rotation:'Rotation',Deselect:'Abwählen',Delete:'Löschen','Clear All':'Alle löschen',Settings:'Einstellungen',Language:'Sprache','Interface language':'Sprache','Export Format':'Format','Image file type':'Dateityp',Quality:'Qualität','Export resolution':'Auflösung',Theme:'Design','Light / Dark':'Hell/Dunkel','Device Shadow':'Schatten','Depth shadow':'Tiefenschatten','Notch / Island':'Notch','Show Dynamic Island':'Dynamic Island','Auto-Save':'Auto-Speichern','Save locally':'Lokal speichern',Download:'Herunterladen','Choose Device':'Gerät wählen','Choose Gradient':'Verlauf wählen','Drag phones to move · everything updates live':'Ziehen zum Bewegen · live','Start Creating':'Beginnen','Upload screenshots · pick a template':'Hochladen · Vorlage','drag phones · download':'ziehen · herunterladen','✓ Downloaded!':'✓ Heruntergeladen!',Single:'Eins',Two:'Zwei',Three:'Drei',Four:'Vier',Five:'Fünf'},
  es:{d:'ltr',f:'Inter',Design:'Diseño',Device:'Disp.',BG:'Fondo',Decor:'Decor',Set:'Ajust',Templates:'Plantillas',Images:'Imágenes','Drop images or click':'Arrastrar o clic','up to 5':'PNG · JPG · WEBP — hasta 5',uploaded:'cargadas','Arrange & Scale':'Disposición',Spacing:'Espaciado','Phone Scale':'Escala',Overlap:'Superposición',Category:'Categoría','Selected Device':'Seleccionado','Tap category to change':'Tocar para cambiar','Image Backgrounds':'Fondos Imagen','Ready Templates':'Plantillas',Change:'Cambiar','Background Type':'Tipo de fondo',Gradient:'Degradado',Image:'Imagen',Transparent:'Transparente','Choose gradient':'Elegir degradado','Ready Backgrounds':'Fondos (clic)','Background Size':'Tamaño del fondo',Width:'Ancho',Height:'Alto','Add Decoration':'Decoración','Select → click stage to place':'Elegir → clic','Selected Item':'Elemento',Color:'Color',Size:'Tamaño',Opacity:'Opacidad',Rotation:'Rotación',Deselect:'Quitar',Delete:'Eliminar','Clear All':'Limpiar',Settings:'Ajustes',Language:'Idioma','Interface language':'Idioma','Export Format':'Formato','Image file type':'Tipo','Quality:':'Calidad',Quality:'Calidad','Export resolution':'Resolución',Theme:'Tema','Light / Dark':'Claro/Oscuro','Device Shadow':'Sombra','Depth shadow':'Sombra','Notch / Island':'Muesca','Show Dynamic Island':'Dynamic Island','Auto-Save':'Auto-guardar','Save locally':'Guardar',Download:'Descargar','Choose Device':'Elegir disp.','Choose Gradient':'Elegir degradado','Drag phones to move · everything updates live':'Arrastrar · en vivo','Start Creating':'Empezar','Upload screenshots · pick a template':'Subir · plantilla','drag phones · download':'arrastrar · descargar','✓ Downloaded!':'✓ Descargado!',Single:'Uno',Two:'Dos',Three:'Tres',Four:'Cuatro',Five:'Cinco'},
};
function T(k){return (TR[S.lang]||TR.en)[k]||(TR.en[k]||k);}

const LABELS=[['l-imgs','Images'],['bst-tmpl','Templates'],['bst-clr','Colors'],['bst-size','Size'],['ct-grad3','3-Color'],['ct-grad2','2-Color'],['ct-mesh','Mesh'],['ct-solid','Solid'],['ct-radial','Radial'],['l-drop','Drop images or click'],['l-upto','up to 5'],['l-uploaded','uploaded'],['l-arrange','Arrange & Scale'],['l-gap','Spacing'],['l-scale','Phone Scale'],['l-overlap','Overlap'],['l-cat','Category'],['l-seldev','Selected Device'],['l-tap','Tap category to change'],['chg-btn','Change'],['l-bgmode','Background Type'],['bm-grad','Gradient'],['bm-img','Image'],['bm-transp','Transparent'],['l-readybg','Ready Backgrounds'],['l-bgsize','Background Size'],['l-width','Width'],['l-height','Height'],['l-adddeco','Add Decoration'],['l-deco-hint','Select → click stage to place'],['l-selitem','Selected Item'],['l-deco-color','Color'],['l-dsize','Size'],['l-dop','Opacity'],['l-drot','Rotation'],['deco-desel','Deselect'],['deco-del','Delete'],['deco-clear','Clear All'],['l-settings','Settings'],['s-lang','Language'],['s-lang-d','Interface language'],['s-format','Export Format'],['s-format-d','Image file type'],['s-quality','Quality'],['s-quality-d','Export resolution'],['s-theme','Theme'],['s-theme-d','Light / Dark'],['s-save','Auto-Save'],['s-save-d','Save locally'],['l-dl','Download'],['l-choosedev','Choose Device'],['l-choosebg','Choose Gradient'],['stage-hint','Drag phones to move · everything updates live'],['l-start','Start Creating'],['l-aspect-lock','Lock Ratio'],['l-recent-colors','Recent'],['tf-pattern','Patterned'],['tf-dark','Dark'],['tf-light','Light'],['tf-all','All'],['tf-featured','Featured'],['tf-gradient','Gradients'],['l-web-url','Website URL'],['l-web-frame','Frame Style'],['l-web-dim','Viewport Size'],['l-web-bg','Background'],['l-web-capture','Capture & Preview'],['l-web-hint','Enter a URL and click capture to generate a website mockup'],['l-web-preview','Preview'],['l-web-dl','Download'],['l-web-add','Add to Stage'],['l-wf-desktop','Desktop'],['l-wf-macbook','MacBook'],['l-wf-browser','Browser'],['l-wf-phone','Mobile'],['l-autorot','Auto Rotation'],['l-autorot-d','Side phones tilt'],['l-autoscale','Auto Scale'],['l-autoscale-d','Side phones smaller'],['l-autospacing','Auto Spacing'],['l-autospacing-d','Equal spacing'],['l-autooverlap','Auto Overlap'],['l-autooverlap-d','Depth overlap'],['l-reset-arrange','Reset'],['reset-arrange-btn','Reset'],['l-web-url','Website URL'],['l-web-load','Load'],['l-web-hint','Enter URL to capture website in a device frame'],['l-web-device','Preview Device'],['l-web-style','Frame Style'],['l-web-bg','Background'],['l-web-options','Options'],['l-web-shadow','Device Shadow'],['l-web-reflection','Reflection'],['l-web-scale','Scale'],['wdb-desktop','Desktop'],['wdb-laptop','Laptop'],['wdb-tablet','Tablet'],['wdb-phone','Phone'],['wst-dark','Dark'],['wst-light','Light'],['wst-minimal','Minimal'],['rst-images','Clear Images'],['rst-deco','Clear Decorations'],['rst-text','Clear Text'],['rst-all','Reset All'],['l-shadow-d','Device Shadow'],['l-shadow-dd','Add depth shadow'],['l-shadow-color','Shadow Color'],['l-shadow-opacity','Shadow Opacity'],['l-per-phone','Per-Phone Control'],['l-upload-first','Upload images first'],['l-text-sec','Text Overlay'],['l-rot-sec','Device Rotation'],['l-rot','Rotation'],['l-frame-sec','Frame Color'],['l-notch-d','Notch / Island'],['l-notch-dd','Dynamic Island']];

function applyLang(){
  const L=TR[S.lang]||TR.en;
  document.documentElement.dir=L.d;document.documentElement.lang=S.lang;
  document.body.style.fontFamily=`'${L.f}','Tajawal',sans-serif`;
  LABELS.forEach(([id,k])=>{const el=document.getElementById(id);if(el)el.textContent=T(k);});
  document.querySelectorAll('.ntab').forEach(b=>{const m={design:'Design',device:'Device',bg:'BG',deco:'Decor',web:'Web',settings:'Set'};if(b.dataset.t==='web'){const badge=b.querySelector('.new-badge');b.textContent=T(m[b.dataset.t]);if(badge){const nb=badge.cloneNode(true);b.appendChild(nb);}}else{b.textContent=T(m[b.dataset.t]);}});
  const ed=document.getElementById('l-start-desc');if(ed)ed.innerHTML=T('Upload screenshots · pick a template')+'<br>'+T('drag phones · download');
  const cn=document.getElementById('clr-name');if(cn)cn.textContent=S.bgName||T('Choose gradient');
  updateLayoutLabel();
  // Rebuild dynamic panels so labels update with language
  if(typeof buildPerPhonePanel==='function') buildPerPhonePanel();
  if(typeof buildTemplates==='function') buildTemplates();
  if(typeof buildColorContent==='function') buildColorContent();
}

/* THEME */
function setTheme(th){S.theme=th;document.documentElement.setAttribute('data-theme',th);document.getElementById('theme-btn').textContent=th==='dark'?'☀️':'🌙';const t=document.getElementById('tog-theme');th==='dark'?t.classList.remove('on'):t.classList.add('on');save();}
document.getElementById('theme-btn').addEventListener('click',()=>setTheme(S.theme==='dark'?'light':'dark'));
document.getElementById('tog-theme').addEventListener('click',()=>setTheme(S.theme==='dark'?'light':'dark'));

/* TABS */
document.querySelectorAll('.ntab').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.ntab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');document.getElementById('t-'+b.dataset.t).classList.add('active');
}));

/* TEMPLATES */
function buildTemplates(filter){
  filter=filter||window._tmplFilter||'all';
  window._tmplFilter=filter;
  // Update filter buttons
  document.querySelectorAll('.tmpl-filter').forEach(b=>{
    b.classList.toggle('active', b.dataset.f===filter);
  });
  const g=document.getElementById('tmpl-grid');g.innerHTML='';
  const imgTmpls=TEMPLATES.filter(t=>t.bgMode==='image');
  const gradTmpls=TEMPLATES.filter(t=>t.bgMode==='gradient');

  function addSection(label,items,sectionType){
    if(!items.length)return;
    // Filter: show section only if matches current filter
    if(filter==='featured'&&sectionType!=='featured')return;
    if(filter==='gradient'&&sectionType!=='gradient')return;
    const sec=document.createElement('div');sec.className='tmpl-section';
    const lbl=document.createElement('div');lbl.className='tmpl-section-lbl';lbl.textContent=label;
    sec.appendChild(lbl);
    const grid=document.createElement('div');grid.className='tmpl-section-grid';
    items.forEach(tp=>{
      const card=document.createElement('div');card.className='tmpl-card';
      let prevStyle=tp.bgMode==='image'
        ?`background-image:url(${BG_IMAGES[tp.bgImg]});background-size:cover;background-position:center`
        :`background:linear-gradient(135deg,${tp.bg.join(',')})`;
      card.innerHTML=`<div class="tmpl-prev" style="${prevStyle}"></div><div class="tmpl-name">${tp.n}</div>`;card.setAttribute('data-name',tp.n);
      card.addEventListener('click',()=>{
        document.querySelectorAll('.tmpl-card').forEach(c=>c.classList.remove('active'));
        card.classList.add('active');
        S.bgMode=tp.bgMode;S.colorType='gradient3';
        if(tp.bgMode==='image'){S.bgImg=tp.bgImg;}
        else{S.bg=tp.bg;S.bgName=tp.bgName;}
        // Keep user's gap/scale/rot — only change background
        syncBgModeUI();updateClrPreview();render();save();
      });
      grid.appendChild(card);
    });
    sec.appendChild(grid);g.appendChild(sec);
  }

  // Categorize by cat field
  const patternTmpls = imgTmpls.filter(t=>t.cat==='pattern');
  const pureTmpls    = imgTmpls.filter(t=>t.cat!=='pattern');
  const featured     = [imgTmpls[2],imgTmpls[6],imgTmpls[7],imgTmpls[15],imgTmpls[0],imgTmpls[21]].filter(Boolean);

  if(filter==='dark'){
    addSection(T('Patterned'),patternTmpls.filter(t=>isDarkTemplate(t)),'pattern');
    addSection(T('Image Backgrounds'),pureTmpls.filter(t=>isDarkTemplate(t)),'image');
  } else if(filter==='light'){
    addSection(T('Patterned'),patternTmpls.filter(t=>!isDarkTemplate(t)),'pattern');
    addSection(T('Image Backgrounds'),pureTmpls.filter(t=>!isDarkTemplate(t)),'image');
  } else if(filter==='featured'){
    addSection(T('Featured'),featured,'featured');
  } else if(filter==='pattern'){
    addSection(T('Patterned'),patternTmpls,'pattern');
  } else {
    // 'all'
    if(patternTmpls.length) addSection(T('Patterned'),patternTmpls,'pattern');
    addSection(T('Image Backgrounds'),pureTmpls,'image');
  }
}

/* CATEGORY */
function buildCatGrid(){
  const g=document.getElementById('cat-grid');g.innerHTML='';
  Object.entries(CATS).forEach(([key,cat])=>{
    const el=document.createElement('button');el.className='cat-card'+(key===S.activeCat?' active':'');
    el.innerHTML=`${ICO[cat.ico]}<div class="cat-name">${cat.label}</div><div class="cat-sub">${cat.sub}</div>`;
    el.addEventListener('click',()=>{S.activeCat=key;document.querySelectorAll('.cat-card').forEach(c=>c.classList.remove('active'));el.classList.add('active');openDmod(key);});
    g.appendChild(el);
  });
}

/* DEVICE MODAL */
let _dc='iPhone';
function openDmod(cat){_dc=cat||S.activeCat;buildDmodCats();renderDevItems(_dc);document.getElementById('dmod').classList.add('open');}
function buildDmodCats(){
  const el=document.getElementById('dmod-cats');el.innerHTML='';
  Object.entries(CATS).forEach(([key,cat])=>{
    const b=document.createElement('button');b.className='dcat-btn'+(key===_dc?' active':'');
    b.innerHTML=`${ICO[cat.ico]}<span>${cat.label}</span><span class="dcat-count">${DEVICES[key].length}</span>`;
    b.addEventListener('click',()=>{_dc=key;document.querySelectorAll('.dcat-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderDevItems(key);});
    el.appendChild(b);
  });
}
function renderDevItems(cat){
  const p=document.getElementById('dmod-items');p.innerHTML='';
  const grid=document.createElement('div');grid.className='dev-grid';
  DEVICES[cat].forEach(d=>{
    const c=document.createElement('div');c.className='dev-card'+(d.id===S.devId?' active':'');
    c.innerHTML=`${ICO[CATS[cat].ico]}<div class="dev-card-name">${d.n}</div><div class="dev-card-year">${d.y}</div>`;
    c.addEventListener('click',()=>{
      S.devId=d.id;S.devCfg=d.c;S.devName=d.n;S.devIco=CATS[cat].ico;S.activeCat=cat;
      document.getElementById('sel-icon').innerHTML=ICO[S.devIco];
      document.getElementById('sel-name').textContent=S.devName;
      document.getElementById('dmod').classList.remove('open');
      S.phonePos=[];S.phoneZIndex=[];S.phoneOffsetX=[];S.phoneOffsetY=[];S.phoneScale=[];S.phoneRot=[];
      render();buildPerPhonePanel();save();
    });
    grid.appendChild(c);
  });
  p.appendChild(grid);
}
document.getElementById('chg-btn').addEventListener('click',()=>openDmod(S.activeCat));
document.getElementById('dmod-close').addEventListener('click',()=>document.getElementById('dmod').classList.remove('open'));
document.getElementById('dmod').addEventListener('click',e=>{if(e.target===document.getElementById('dmod'))document.getElementById('dmod').classList.remove('open');});

/* COLOR MODAL */
function buildCmod(){
  const body=document.getElementById('cmod-body');body.innerHTML='';
  for(const[gn,colors]of Object.entries(GRADIENTS)){
    const grp=document.createElement('div');grp.className='clr-group';grp.innerHTML=`<div class="clr-gtitle">${gn}</div>`;
    const grid=document.createElement('div');grid.className='clr-sw-grid';
    colors.forEach(c=>{
      const sw=document.createElement('div');sw.className='clr-sw'+(c.n===S.bgName?' active':'');
      sw.style.background=`linear-gradient(135deg,${c.g.join(',')})`;sw.innerHTML=`<span>${c.n}</span>`;
      sw.addEventListener('click',()=>{document.querySelectorAll('.clr-sw').forEach(x=>x.classList.remove('active'));sw.classList.add('active');S.bg=c.g;S.bgName=c.n;S.bgMode='gradient';syncBgModeUI();updateClrPreview();document.getElementById('clr-name').textContent=c.n;render();save();});
      grid.appendChild(sw);
    });
    grp.appendChild(grid);body.appendChild(grp);
  }
  const cust=document.createElement('div');cust.className='custom-sec';
  cust.innerHTML=`<div class="flabel">Custom</div><div class="custom-row"><input type="color" id="cc1" value="#6366f1"><input type="color" id="cc2" value="#a855f7"><input type="text" id="cc-name" value="Custom" style="max-width:80px"><button class="apply-btn" id="apply-c">Apply</button></div>`;
  body.appendChild(cust);
  const _applyC=document.getElementById('apply-c');if(_applyC)_applyC.addEventListener('click',()=>{const c1=document.getElementById('cc1').value,c2=document.getElementById('cc2').value,nm=document.getElementById('cc-name').value||'Custom';S.bg=[c1,c2,c1];S.bgName=nm;updateClrPreview();document.getElementById('clr-name').textContent=nm;render();save();});
}
function updateClrPreview(){const el=document.getElementById('clr-strip');if(el)el.style.background=`linear-gradient(90deg,${S.bg.join(',')})`;}
const _openCmod=document.getElementById('open-cmod');if(_openCmod)_openCmod.addEventListener('click',()=>{S.bgMode='gradient';syncBgModeUI();buildCmod();document.getElementById('cmod').classList.add('open');render();save();});
const _cmodClose=document.getElementById('cmod-close');if(_cmodClose)_cmodClose.addEventListener('click',()=>document.getElementById('cmod').classList.remove('open'));
const _cmod=document.getElementById('cmod');if(_cmod)_cmod.addEventListener('click',e=>{if(e.target===_cmod)_cmod.classList.remove('open');});

/* BG MODE */
document.querySelectorAll('.bg-mode-btn').forEach(b=>b.addEventListener('click',()=>{S.bgMode=b.dataset.bm;syncBgModeUI();render();save();}));
function syncBgModeUI(){
  document.querySelectorAll('.bg-mode-btn').forEach(b=>b.classList.toggle('active',b.dataset.bm===S.bgMode));
  const g=document.getElementById('bg-gradient-sec');if(g)g.style.display='block';
  const i=document.getElementById('bg-image-sec');if(i)i.style.display='block';
}
function buildBgThumbs(){
  const g=document.getElementById('bg-thumbs');g.innerHTML='';
  Object.entries(BG_IMAGES).forEach(([key,url])=>{
    const t=document.createElement('div');t.className='bg-thumb'+(key===S.bgImg?' active':'');
    t.style.backgroundImage=`url(${url})`;t.title=BG_NAMES[key]||key;
    const lbl=document.createElement('span');lbl.className='bg-thumb-lbl';lbl.textContent=BG_NAMES[key]||key;
    t.appendChild(lbl);
    t.addEventListener('click',()=>{S.bgImg=key;S.bgMode='image';document.querySelectorAll('.bg-thumb').forEach(x=>x.classList.remove('active'));t.classList.add('active');syncBgModeUI();render();save();});
    g.appendChild(t);
  });
}

/* UPLOAD */
const fileInput=document.getElementById('file-input');
fileInput.addEventListener('change',function(){loadFiles(Array.from(this.files));this.value='';});
const upbox=document.getElementById('upbox');
upbox.addEventListener('dragover',e=>{e.preventDefault();upbox.classList.add('drag');});
upbox.addEventListener('dragleave',()=>upbox.classList.remove('drag'));
upbox.addEventListener('drop',e=>{e.preventDefault();upbox.classList.remove('drag');loadFiles(Array.from(e.dataTransfer.files).filter(f=>f.type.startsWith('image/')));});
function loadFiles(files){
  const sp=5-S.images.length;if(sp<=0){toast('Max 5');return;}
  const valid=Array.from(files).filter(f=>f.type.startsWith('image/')).slice(0,sp);
  if(!valid.length)return;
  let loaded=0;
  valid.forEach(f=>{
    const r=new FileReader();
    r.onload=ev=>{
      const img=new Image();
      img.onload=()=>{
        S.images.push({url:ev.target.result,el:img});
        loaded++;
        S.phonePos=[];
        S.phoneZIndex=[];S.phoneOffsetX=[];S.phoneOffsetY=[];S.phoneScale=[];S.phoneRot=[];
        renderThumbs();
        updateUI();
        render();
        buildPerPhonePanel();
      };
      img.onerror=()=>{loaded++;};
      img.src=ev.target.result;
    };
    r.readAsDataURL(f);
  });
}
let dragIdx=null;
function renderThumbs(){
  const c=document.getElementById('thumbs');c.innerHTML='';
  S.images.forEach((item,i)=>{
    const w=document.createElement('div');w.className='thumb';w.draggable=true;
    const img=document.createElement('img');img.src=item.url;
    const del=document.createElement('button');del.className='thumb-del';del.textContent='×';
    del.onclick=e=>{e.stopPropagation();S.images.splice(i,1);S.phonePos=[];renderThumbs();updateUI();render();buildPerPhonePanel();};
    const num=document.createElement('div');num.className='thumb-num';num.textContent=i+1;
    w.appendChild(img);w.appendChild(del);w.appendChild(num);
    w.addEventListener('dragstart',()=>{dragIdx=i;setTimeout(()=>w.style.opacity='.4',0);});
    w.addEventListener('dragend',()=>{w.style.opacity='1';dragIdx=null;});
    w.addEventListener('dragover',e=>{e.preventDefault();w.classList.add('dover');});
    w.addEventListener('dragleave',()=>w.classList.remove('dover'));
    w.addEventListener('drop',e=>{e.preventDefault();w.classList.remove('dover');if(dragIdx===null||dragIdx===i)return;const m=S.images.splice(dragIdx,1)[0];S.images.splice(i,0,m);S.phonePos=[];renderThumbs();updateUI();render();buildPerPhonePanel();});
    c.appendChild(w);
  });
}
function updateLayoutLabel(){const m={1:T('Single'),2:T('Two'),3:T('Three'),4:T('Four'),5:T('Five')};document.getElementById('layout-name').textContent=m[S.images.length]||'—';}
function updateUI(){document.getElementById('img-count').textContent=S.images.length;updateLayoutLabel();document.getElementById('dl-btn').disabled=S.images.length===0;document.getElementById('empty-state').style.display=S.images.length===0?'block':'none';}

/* SLIDERS — live render */
function bindSlider(slId,valId,key,suffix,onInput){
  const sl=document.getElementById(slId),vl=document.getElementById(valId);
  sl.value=S[key];vl.textContent=S[key]+suffix;
  sl.addEventListener('input',()=>{S[key]=parseFloat(sl.value);vl.textContent=S[key]+suffix;if(onInput)onInput();render();save();});
}
bindSlider('sl-gap','v-gap','gap','px');
bindSlider('sl-scale','v-scale','scale','%');
bindSlider('sl-overlap','v-overlap','overlap','px');
bindSlider('sl-width','v-width','bgWidth','px');
bindSlider('sl-height','v-height','bgHeight','px');
document.getElementById('sel-format').addEventListener('change',e=>{S.format=e.target.value;updateExportInfo&&updateExportInfo();save();});
document.getElementById('sel-quality').addEventListener('change',e=>{S.quality=parseFloat(e.target.value);updateExportInfo&&updateExportInfo();save();});
document.getElementById('sel-lang').addEventListener('change',e=>{S.lang=e.target.value;applyLang();save();});

/* TOGGLES */
function bindTog(id,key,cb){const b=document.getElementById(id);if(!b)return;S[key]?b.classList.add('on'):b.classList.remove('on');b.addEventListener('click',()=>{b.classList.toggle('on');S[key]=b.classList.contains('on');if(cb)cb();render();save();});}
bindTog('tog-shadow','shadow');
bindTog('tog-notch','notch');
bindTog('tog-save','autoSave');
// Design tab toggles (shadow + notch) - synced with same S keys
(function(){
  function syncDesignTog(id, key){
    const b=document.getElementById(id);
    if(!b)return;
    S[key]?b.classList.add('on'):b.classList.remove('on');
    b.addEventListener('click',()=>{
      b.classList.toggle('on');
      S[key]=b.classList.contains('on');
      // also sync settings tog
      const sb=document.getElementById(key==='shadow'?'tog-shadow':'tog-notch');
      if(sb){S[key]?sb.classList.add('on'):sb.classList.remove('on');}
      render();save();
    });
  }
  syncDesignTog('tog-shadow-d','shadow');
  syncDesignTog('tog-notch-d','notch');
})();
// also sync design togs when settings togs clicked
['tog-shadow','tog-notch'].forEach(id=>{
  const el=document.getElementById(id);
  if(!el)return;
  el.addEventListener('click',()=>{
    const key=id==='tog-shadow'?'shadow':'notch';
    const did=id==='tog-shadow'?'tog-shadow-d':'tog-notch-d';
    const db=document.getElementById(did);
    if(db){S[key]?db.classList.add('on'):db.classList.remove('on');}
  });
},{once:false});

/* DECORATION */
let selDeco=null,pendDeco=null;
function buildDecoGrid(){
  const g=document.getElementById('deco-grid');g.innerHTML='';
  Object.entries(DECO_SVG).forEach(([key,svg])=>{
    const b=document.createElement('button');b.className='deco-btn';b.innerHTML=svg;b.style.color=S.decoColor==='#ffffff'?'#888':S.decoColor;
    b.addEventListener('click',()=>{document.querySelectorAll('.deco-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');pendDeco=svg;});
    g.appendChild(b);
  });
}
document.getElementById('stage').addEventListener('click',e=>{
  if(!pendDeco)return;
  // Don't place if click came from sidebar (deco-btn area)
  if(e.target.closest('.deco-btn')||e.target.closest('#t-deco'))return;
  if(e.target.closest('.phone-el')||e.target.closest('.deco-el')||e.target.closest('.web-frame-el'))return;
  const layer=document.getElementById('deco-layer');
  const rect=document.getElementById('stage').getBoundingClientRect();
  const el=document.createElement('div');el.className='deco-el';
  const sz=48;
  // Get stage scale factor
  const stageForDeco=document.getElementById('stage');
  let decoSF=1;
  if(stageForDeco){const t=window.getComputedStyle(stageForDeco).transform;if(t&&t!=='none'){const m=t.match(/matrix\(([^,]+)/);if(m)decoSF=parseFloat(m[1])||1;}}
  const decoX=(e.clientX-rect.left)/decoSF-sz/2;
  const decoY=(e.clientY-rect.top)/decoSF-sz/2;
  el.style.cssText=`left:${decoX}px;top:${decoY}px;width:${sz}px;height:${sz}px;color:${S.decoColor};opacity:1;cursor:move;pointer-events:all;user-select:none;`;
  el.dataset.rot='0';el.dataset.svg=pendDeco;
  el.innerHTML=pendDeco+'<div class="deco-del">×</div>';
  // Ensure SVG inherits color
  el.querySelectorAll('svg').forEach(s=>{s.style.color=S.decoColor;s.style.fill='currentColor';});
  el.querySelector('.deco-del').addEventListener('click',ev=>{ev.stopPropagation();el.remove();if(selDeco===el)selDeco=null;});
  makeDraggable(el,true);
  layer.appendChild(el);selectDeco(el);
  pendDeco=null;document.querySelectorAll('.deco-btn').forEach(b=>b.classList.remove('active'));
});
function makeDraggable(el,isDeco){
  let dragging=false,ox=0,oy=0;
  el.addEventListener('mousedown',e=>{
    if(e.target.classList.contains('deco-del'))return;
    e.preventDefault();e.stopPropagation();
    if(isDeco)selectDeco(el);else selectPhone(el);
    dragging=true;
    el.style.cursor='grabbing';
    // Get scale factor from stage transform
    // Get stage scale factor from CSS transform matrix
    const stageEl=document.getElementById('stage');
    let scaleFactor=1;
    if(stageEl){
      const t=window.getComputedStyle(stageEl).transform;
      if(t&&t!=='none'){const m=t.match(/matrix\(([^,]+)/);if(m)scaleFactor=parseFloat(m[1])||1;}
    }
    const pr=el.parentElement.getBoundingClientRect();
    // parentElement rect is already in screen space (accounts for CSS transform)
    // but element style.left/top are in stage space, so divide mouse delta by scale
    const elLeft=parseFloat(el.style.left||0);
    const elTop=parseFloat(el.style.top||0);
    ox=(e.clientX-pr.left)/scaleFactor-elLeft;
    oy=(e.clientY-pr.top)/scaleFactor-elTop;
    const mv=ev=>{
      if(!dragging)return;
      const r=el.parentElement.getBoundingClientRect();
      const nx=(ev.clientX-r.left)/scaleFactor-ox;
      const ny=(ev.clientY-r.top)/scaleFactor-oy;
      el.style.left=nx+'px'; el.style.top=ny+'px';
      if(!isDeco){const idx=parseInt(el.dataset.idx);if(idx>=0)S.phonePos[idx]={x:nx,y:ny};}
    };
    const up=()=>{
      dragging=false;
      el.style.cursor=isDeco?'move':'grab';
      document.removeEventListener('mousemove',mv);
      document.removeEventListener('mouseup',up);
      save();
    };
    document.addEventListener('mousemove',mv);
    document.addEventListener('mouseup',up);
  });
}
function selectDeco(el){if(selDeco)selDeco.classList.remove('sel');document.querySelectorAll('.phone-el').forEach(p=>p.classList.remove('sel'));selDeco=el;if(!el)return;el.classList.add('sel');document.getElementById('deco-color').value=rgbToHex(el.style.color)||'#ffffff';document.getElementById('deco-color').value=rgbToHex(el.style.color)||'#ffffff';document.getElementById('sl-dsize').value=parseFloat(el.style.width)||48;document.getElementById('v-dsize').textContent=(parseFloat(el.style.width)||48)+'px';document.getElementById('sl-dop').value=Math.round((parseFloat(el.style.opacity)??1)*100);document.getElementById('v-dop').textContent=Math.round((parseFloat(el.style.opacity)??1)*100)+'%';document.getElementById('sl-drot').value=parseFloat(el.dataset.rot)||0;document.getElementById('v-drot').textContent=(parseFloat(el.dataset.rot)||0)+'°';}
function rgbToHex(rgb){if(!rgb)return null;if(rgb[0]==='#')return rgb;const m=rgb.match(/\d+/g);if(!m)return null;return '#'+m.slice(0,3).map(x=>(+x).toString(16).padStart(2,'0')).join('');}
document.getElementById('deco-color').addEventListener('input',function(){
  S.decoColor=this.value;
  if(selDeco){
    selDeco.style.color=this.value;
    // Update all SVG children color
    const svgs=selDeco.querySelectorAll('svg');
    svgs.forEach(s=>{s.style.color=this.value;});
  }
  // Rebuild deco grid with new default color
  buildDecoGrid();save();
});
document.getElementById('sl-dsize').addEventListener('input',function(){if(selDeco){selDeco.style.width=this.value+'px';selDeco.style.height=this.value+'px';document.getElementById('v-dsize').textContent=this.value+'px';}});
document.getElementById('sl-dop').addEventListener('input',function(){if(selDeco){selDeco.style.opacity=this.value/100;document.getElementById('v-dop').textContent=this.value+'%';}});
document.getElementById('sl-drot').addEventListener('input',function(){if(selDeco){selDeco.style.transform=`rotate(${this.value}deg)`;selDeco.dataset.rot=this.value;document.getElementById('v-drot').textContent=this.value+'°';}});
document.getElementById('deco-desel').addEventListener('click',()=>{if(selDeco){selDeco.classList.remove('sel');selDeco=null;}});
document.getElementById('deco-del').addEventListener('click',()=>{if(selDeco){selDeco.remove();selDeco=null;}});
document.getElementById('deco-clear').addEventListener('click',()=>{document.getElementById('deco-layer').innerHTML='';selDeco=null;});

/* PHONE SELECTION */
function selectPhone(el){document.querySelectorAll('.phone-el').forEach(p=>p.classList.remove('sel'));if(selDeco){selDeco.classList.remove('sel');selDeco=null;}el.classList.add('sel');}

/* ═══ RENDER (live DOM preview) ═══ */
function buildPhoneHTML(cfg,scale){
  const pw=cfg.pw*scale,ph=cfg.ph*scale,bw=cfg.bw*scale,rx=cfg.rx*scale,irx=cfg.irx*scale;
  return {pw,ph,bw,rx,irx};
}
function defaultLayout(n,W,H){
  const cx=W/2,cy=H/2;
  const gf=1+(S.gap-40)/160; // gap factor: stronger effectith gap slider
  const ov=S.overlap;
  if(n===1)return[{x:cx,y:cy,s:1,r:0,z:1}];

  // autoSpacing ON  = proportional spread (smart)
  // autoSpacing OFF = equal fixed gaps between phones
  // autoScale ON    = side phones smaller
  // autoScale OFF   = all phones same size
  // autoOverlap ON  = overlap distributes evenly (soft)
  // autoOverlap OFF = direct overlap (strong)

  if(n===2){
    const base=W*.18;
    const sp=S.autoSpacing!==false?base*gf:base;
    const ov2=S.autoOverlap?ov*0.3:ov/2;
    const sc2=S.autoScale!==false?.88:1;
    return[
      {x:cx-sp+ov2, y:cy, s:sc2, r:0, z:1},
      {x:cx+sp-ov2, y:cy, s:sc2, r:0, z:2}
    ];
  }
  if(n===3){
    const base=W*.26;
    const sp=S.autoSpacing!==false?base*gf:base;
    const ar=S.autoRotation?8:0;
    const sc3=S.autoScale!==false?.72:1;
    const vy=S.autoScale!==false?H*.045:0;
    const ov3=S.autoOverlap?ov*0.4:ov;
    return[
      {x:cx-sp+ov3, y:cy+vy, s:sc3, r:-ar, z:1},
      {x:cx,        y:cy,    s:S.autoScale!==false?.90:1, r:0, z:3},
      {x:cx+sp-ov3, y:cy+vy, s:sc3, r:ar,  z:1}
    ];
  }
  if(n===4){
    const base1=W*.34, base2=W*.112;
    const sp1=S.autoSpacing!==false?base1*gf:base1;
    const sp2=S.autoSpacing!==false?base2*gf:base2;
    const ov4=S.autoOverlap?ov*0.3:ov*0.5;
    const sc4a=S.autoScale!==false?.62:1;
    const sc4b=S.autoScale!==false?.80:1;
    const vy1=S.autoScale!==false?H*.06:0;
    const vy2=S.autoScale!==false?H*.015:0;
    return[
      {x:cx-sp1+ov4*1.5, y:cy+vy1, s:sc4a, r:S.autoRotation?-12:0, z:1},
      {x:cx-sp2+ov4*.5,  y:cy+vy2, s:sc4b, r:S.autoRotation? -4:0, z:2},
      {x:cx+sp2-ov4*.5,  y:cy+vy2, s:sc4b, r:S.autoRotation?  4:0, z:3},
      {x:cx+sp1-ov4*1.5, y:cy+vy1, s:sc4a, r:S.autoRotation? 12:0, z:1}
    ];
  }
  // n===5
  const base1=W*.39, base2=W*.20;
  const sp1=S.autoSpacing!==false?base1*gf:base1;
  const sp2=S.autoSpacing!==false?base2*gf:base2;
  const ov5=S.autoOverlap?ov*0.25:ov*0.4;
  const sc5a=S.autoScale!==false?.54:1;
  const sc5b=S.autoScale!==false?.70:1;
  const sc5c=S.autoScale!==false?.85:1;
  return[
    {x:cx-sp1+ov5*2, y:cy+(S.autoScale!==false?H*.085:0), s:sc5a, r:S.autoRotation?-15:0, z:1},
    {x:cx-sp2+ov5,   y:cy+(S.autoScale!==false?H*.03:0),  s:sc5b, r:S.autoRotation? -7:0, z:2},
    {x:cx,           y:cy-(S.autoScale!==false?H*.015:0),  s:sc5c, r:0, z:5},
    {x:cx+sp2-ov5,   y:cy+(S.autoScale!==false?H*.03:0),  s:sc5b, r:S.autoRotation?  7:0, z:2},
    {x:cx+sp1-ov5*2, y:cy+(S.autoScale!==false?H*.085:0), s:sc5a, r:S.autoRotation? 15:0, z:1}
  ];
}

function render(){
  const stage=document.getElementById('stage');
  const W=S.bgWidth,H=S.bgHeight;
  // fit stage into available area
  const main=document.querySelector('.main');
  const availW=main.clientWidth-48,availH=main.clientHeight-48;
  const fit=Math.min(availW/W,availH/H,1);
  stage.style.width=W+'px';stage.style.height=H+'px';
  stage.style.transform=`scale(${fit})`;
  stage.style.transformOrigin='center';

  // BG
  const bg=document.getElementById('stage-bg');
  stage.classList.remove('transp');
  if(S.bgMode==='transparent'){bg.style.background='';stage.classList.add('transp');stage.style.background='';bg.className='transp-bg';}
  else if(S.bgMode==='image'){bg.className='';bg.style.backgroundImage=`url(${BG_IMAGES[S.bgImg]})`;bg.style.background=`url(${BG_IMAGES[S.bgImg]}) center/cover`;}
  else {
    bg.className='';bg.style.backgroundImage='';
    const ct=S.colorType||'gradient3';
    if(ct==='radial'){bg.style.background=`radial-gradient(circle at 30% 30%,${S.bg.join(',')})`;} 
    else if(ct==='mesh'){
      const stops=S.bg;
      const lyrs=stops.map((c,i)=>{const px=[20,80,30,70,50][i]||50,py=[20,30,80,70,50][i]||50;return `radial-gradient(at ${px}% ${py}%,${c} 0px,transparent 50%)`;});
      bg.style.background=lyrs.join(',')+`,${stops[0]}`;
    }
    else if(ct==='solid'){bg.style.background=S.bg[0];}
    else{bg.style.background=`linear-gradient(135deg,${S.bg.join(',')})`;} 
  }

  // Text overlay on stage
  let txtOverlay=document.getElementById('stage-txt');
  if(!txtOverlay){txtOverlay=document.createElement('div');txtOverlay.id='stage-txt';document.getElementById('stage').appendChild(txtOverlay);}
  txtOverlay.style.cssText=`position:absolute;inset:0;z-index:10;display:flex;align-items:${S.txtPos==='top'?'flex-start':S.txtPos==='bottom'?'flex-end':'center'};justify-content:${S.txtAlign==='center'?'center':S.txtAlign==='left'?'flex-start':'flex-end'};padding:24px;pointer-events:none;`;
  if(S.txtContent&&S.txtContent.trim()){
    txtOverlay.innerHTML=`<span style="color:${S.txtColor};font-size:${S.txtSize}px;font-weight:${S.txtWeight};font-family:'Inter','Tajawal',sans-serif;text-shadow:0 2px 8px rgba(0,0,0,.4);max-width:90%;text-align:${S.txtAlign};line-height:1.35;white-space:pre-wrap;word-break:break-word;">${S.txtContent.replace(/</g,'&lt;')}</span>`;
  } else { txtOverlay.innerHTML=''; }

  // Phones
  const layer=document.getElementById('phones-layer');layer.innerHTML='';
  const n=S.images.length;if(n===0)return;
  const sc=S.scale/100;
  const layout=defaultLayout(n,W,H);
  S.images.forEach((item,i)=>{
    const pos=layout[i];if(!pos)return;
    const cfg=S.devCfg;
    const dim=buildPhoneHTML(cfg,pos.s*sc);
    const el=document.createElement('div');el.className='phone-el';el.dataset.idx=i;
    // position (use saved override if present)
    const saved=S.phonePos[i];
    const left=saved?saved.x:(pos.x-dim.pw/2);
    const top=saved?saved.y:(pos.y-dim.ph/2);
    const fc=S.frameClr||cfg.bc;
    // Per-phone overrides
    const pz = (S.phoneZIndex[i]!==undefined) ? S.phoneZIndex[i] : (pos.z||i+1);
    const pox= (S.phoneOffsetX[i]||0);
    const poy= (S.phoneOffsetY[i]||0);
    const psc= (S.phoneScale[i]!==undefined) ? S.phoneScale[i]/100 : 1;
    const finalW=Math.round(dim.pw*psc), finalH=Math.round(dim.ph*psc);
    const finalRx=Math.round(dim.rx*psc), finalBw=Math.round(dim.bw*psc);
    const phoneRot=(S.phoneRot&&S.phoneRot[i]!==undefined?S.phoneRot[i]:0);
    const finalRot=(S.rot||0)+pos.r+phoneRot;
    el.style.cssText=`left:${left+pox}px;top:${top+poy}px;width:${finalW}px;height:${finalH}px;border-radius:${finalRx}px;background:${fc};padding:${finalBw}px;transform:rotate(${finalRot}deg);z-index:${pz};${S.shadow?(()=>{const sc=S.shadowColor||'#000000';const op=(S.phoneShadowOp&&S.phoneShadowOp[i]!==undefined?S.phoneShadowOp[i]:S.shadowOpacity||55)/100;const r=parseInt(sc.slice(1,3),16),g=parseInt(sc.slice(3,5),16),b=parseInt(sc.slice(5,7),16);return`box-shadow:0 30px 60px rgba(${r},${g},${b},${op.toFixed(2)})`;})():''}`;
    const frame=document.createElement('div');frame.className='phone-frame';frame.style.borderRadius=dim.irx+'px';
    const img=document.createElement('img');img.src=item.url;img.style.borderRadius=dim.irx+'px';
    frame.appendChild(img);
    // notch
    if(S.notch&&cfg.nt!=='none'&&cfg.nw>0){
      const notch=document.createElement('div');
      const nw=cfg.nw*pos.s*sc,nh=cfg.nh*pos.s*sc,ny=cfg.ny*pos.s*sc;
      notch.style.cssText=`position:absolute;top:${ny}px;left:50%;transform:translateX(-50%);width:${cfg.nt==='dot'?nh:nw}px;height:${nh}px;background:#111;border-radius:${nh}px;z-index:5;`;
      frame.appendChild(notch);
    }
    el.appendChild(frame);
    makeDraggable(el,false);
    layer.appendChild(el);
  });
}

window.addEventListener('resize',render);

/* DOWNLOAD via canvas */
function rr(ctx,x,y,w,h,r){r=Math.min(Math.abs(r),Math.abs(w)/2,Math.abs(h)/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.arcTo(x+w,y,x+w,y+r,r);ctx.lineTo(x+w,y+h-r);ctx.arcTo(x+w,y+h,x+w-r,y+h,r);ctx.lineTo(x+r,y+h);ctx.arcTo(x,y+h,x,y+h-r,r);ctx.lineTo(x,y+r);ctx.arcTo(x,y,x+r,y,r);ctx.closePath();}

document.getElementById('dl-btn').addEventListener('click',async()=>{
  const dlBtn=document.getElementById('dl-btn');
  const spinner=document.getElementById('dl-spinner');
  if(dlBtn)dlBtn.disabled=true;
  if(spinner)spinner.style.display='inline-block';
  if(!S.images.length)return;
  const q=S.quality,W=S.bgWidth*q,H=S.bgHeight*q;
  const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
  const ctx=canvas.getContext('2d');

  // BG
  if(S.bgMode==='transparent'){/* leave transparent */}
  else if(S.bgMode==='image'){
    await new Promise(res=>{const bgImg=new Image();bgImg.onload=()=>{ctx.drawImage(bgImg,0,0,W,H);res();};bgImg.onerror=res;bgImg.src=BG_IMAGES[S.bgImg];});
  } else {
    const grd=ctx.createLinearGradient(0,0,W,H);S.bg.forEach((c,i)=>grd.addColorStop(i/Math.max(S.bg.length-1,1),c));ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
  }

  // Decorations — draw on canvas
  const decoLayer=document.getElementById('deco-layer');
  const pxRatio=W/S.bgWidth;
  const decoItems=Array.from(decoLayer.children);
  for(const el of decoItems){
    const lx=parseFloat(el.style.left)||0,ly=parseFloat(el.style.top)||0;
    const sz=parseFloat(el.style.width)||48;
    const op=parseFloat(el.style.opacity)??1;
    const rot=(parseFloat(el.dataset.rot)||0)*Math.PI/180;
    const color=el.style.color||'#fff';
    const rawSvg=el.dataset.svg||'';
    if(!rawSvg)continue;
    const svgStr=rawSvg.replace(/currentColor/g,color);
    await new Promise(res=>{
      const img=new Image();
      const svg64='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(svgStr)));
      img.onload=()=>{
        ctx.save();ctx.globalAlpha=op;
        const dcx=(lx+sz/2)*pxRatio,dcy=(ly+sz/2)*pxRatio;
        ctx.translate(dcx,dcy);ctx.rotate(rot);
        ctx.drawImage(img,-sz*pxRatio/2,-sz*pxRatio/2,sz*pxRatio,sz*pxRatio);
        ctx.restore();res();
      };
      img.onerror=()=>res();
      img.src=svg64;
    });
  }

  // Text overlay
  if(S.txtContent&&S.txtContent.trim()){
    const fs=S.txtSize*(W/1200);
    ctx.save();
    ctx.font=`${S.txtWeight} ${fs}px 'Inter','Tajawal',sans-serif`;
    ctx.fillStyle=S.txtColor;
    ctx.textAlign=S.txtAlign;
    const tx=S.txtAlign==='center'?W/2:S.txtAlign==='left'?fs*0.8:W-fs*0.8;
    const ty=S.txtPos==='top'?fs*1.4:S.txtPos==='center'?H/2:H-fs*0.8;
    const lines=(S.txtContent||'').split('\n');
    lines.forEach((line,li)=>ctx.fillText(line,tx,ty+li*fs*1.3));
    ctx.restore();
  }

  // Phones — read positions from DOM
  const phoneLayer=document.getElementById('phones-layer');
  const sc=S.scale/100;
  Array.from(phoneLayer.children).forEach(el=>{
    const idx=parseInt(el.dataset.idx);
    const cfg=S.devCfg;
    const lx=parseFloat(el.style.left)||0,ly=parseFloat(el.style.top)||0;
    const pw=parseFloat(el.style.width),ph=parseFloat(el.style.height);
    const rotM=el.style.transform.match(/rotate\(([-\d.]+)deg\)/);
    const rot=(rotM?parseFloat(rotM[1]):0)*Math.PI/180;
    const relScale=pw/cfg.pw;
    const cx=(lx+pw/2)*pxRatio,cy=(ly+ph/2)*pxRatio;
    drawPhoneCanvas(ctx,cx,cy,relScale*pxRatio,rot+(S.rot||0)*Math.PI/180,S.images[idx].el,cfg,S.frameClr);
  });

  // Watermark
  if(S.watermark){
    ctx.save();
    ctx.font=`bold ${Math.round(W*0.013)}px Inter,sans-serif`;
    ctx.fillStyle='rgba(255,255,255,0.45)';
    ctx.textAlign='right';ctx.textBaseline='bottom';
    ctx.fillText('MockFlow Studio',W-16,H-12);
    ctx.restore();
  }

  const mime=S.format==='jpeg'?'image/jpeg':S.format==='webp'?'image/webp':'image/png';
  const ext=S.format==='jpeg'?'jpg':S.format;
  if(S.format==='jpeg'&&S.bgMode==='transparent'){
    // jpeg can't be transparent — fill white
    const tmp=document.createElement('canvas');tmp.width=W;tmp.height=H;const tc=tmp.getContext('2d');tc.fillStyle='#fff';tc.fillRect(0,0,W,H);tc.drawImage(canvas,0,0);
    download(tmp.toDataURL(mime,0.95),ext);
    if(dlBtn){dlBtn.disabled=S.images.length===0;}
    if(spinner)spinner.style.display='none';
  } else {
    download(canvas.toDataURL(mime,0.95),ext);
  if(dlBtn){dlBtn.disabled=S.images.length===0;}
  if(spinner)spinner.style.display='none';
  }
});function download(url,ext){const a=document.createElement('a');a.download='mockflow-'+Date.now()+'.'+ext;a.href=url;a.click();toast(T('✓ Downloaded!'));}

function drawPhoneCanvas(ctx,cx,cy,sc,rot,img,cfg,frameClr){
  const pw=cfg.pw*sc,ph=cfg.ph*sc,bw=cfg.bw*sc,rx=cfg.rx*sc,irx=cfg.irx*sc;
  ctx.save();ctx.translate(cx,cy);ctx.rotate(rot);
  if(S.shadow){ctx.shadowColor='rgba(0,0,0,.55)';ctx.shadowBlur=40*sc;ctx.shadowOffsetY=16*sc;}
  ctx.fillStyle=frameClr||cfg.bc;rr(ctx,-pw/2-bw,-ph/2-bw,pw+bw*2,ph+bw*2,rx);ctx.fill();
  ctx.shadowColor='transparent';ctx.shadowBlur=0;ctx.shadowOffsetY=0;
  ctx.save();rr(ctx,-pw/2,-ph/2,pw,ph,irx);ctx.clip();ctx.drawImage(img,-pw/2,-ph/2,pw,ph);ctx.restore();
  if(S.notch&&cfg.nt!=='none'&&cfg.nw>0){
    const nw=cfg.nw*sc,nh=cfg.nh*sc,ny=-ph/2+cfg.ny*sc;ctx.fillStyle='#111';
    if(cfg.nt==='dot'){ctx.beginPath();ctx.arc(0,ny+nh/2,nh/2,0,Math.PI*2);ctx.fill();}
    else{rr(ctx,-nw/2,ny,nw,nh,nh/2);ctx.fill();}
  }
  ctx.restore();
}

function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2500);}

/* BG SUB-TABS */
document.querySelectorAll('.bg-subtab').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.bg-subtab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.bg-sub').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  document.getElementById('bsub-'+b.dataset.sub).classList.add('active');
}));

/* COLOR CATEGORY TABS */
let _ct='gradient3';
function buildColorContent(){
  const wrap=document.getElementById('color-content');if(!wrap)return;
  wrap.innerHTML='';
  const items=COLOR_LIB[_ct]||[];
  items.forEach(c=>{
    const it=document.createElement('div');
    it.className='color-box'+(c.n===S.bgName?' active':'');
    let bgStyle;
    if(_ct==='radial')bgStyle=`radial-gradient(circle at 30% 30%,${c.g.join(',')})`;
    else if(_ct==='mesh'){
      const stops=c.g;
      const layers=stops.map((col,i)=>{
        const x=[20,80,30,70,50][i]||50,y=[20,30,80,70,50][i]||50;
        return `radial-gradient(at ${x}% ${y}%,${col} 0px,transparent 50%)`;
      });
      bgStyle=layers.join(',')+`,${stops[0]}`;
    }
    else if(_ct==='solid')bgStyle=c.g[0];
    else bgStyle=`linear-gradient(135deg,${c.g.join(',')})`;
    it.style.background=bgStyle;
    const lbl=document.createElement('span');
    lbl.className='color-box-lbl';lbl.textContent=c.n;
    it.appendChild(lbl);
    it.addEventListener('click',()=>{
      document.querySelectorAll('.color-box').forEach(x=>x.classList.remove('active'));
      it.classList.add('active');
      S.bg=c.g;S.bgName=c.n;S.bgMode='gradient';S.colorType=_ct;
      if(typeof addRecentColor==='function')addRecentColor(c.g);
      syncBgModeUI();render();save();
    });
    it.addEventListener('mouseenter',()=>{
      const prevBg=S.bg,prevMode=S.bgMode,prevCt=S.colorType;
      S.bg=c.g;S.bgMode='gradient';S.colorType=_ct;render();
      it._prevBg=prevBg;it._prevMode=prevMode;it._prevCt=prevCt;
    });
    it.addEventListener('mouseleave',()=>{
      if(it._prevBg){S.bg=it._prevBg;S.bgMode=it._prevMode;S.colorType=it._prevCt;}
      render();
    });
    wrap.appendChild(it);
  });
}
document.querySelectorAll('.color-tab').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.color-tab').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');_ct=b.dataset.ct;buildColorContent();
}));
document.getElementById('apply-custc').addEventListener('click',()=>{
  const c1=document.getElementById('custc1').value,c2=document.getElementById('custc2').value;
  S.bg=[c1,c2,c1];S.bgName='Custom';S.bgMode='gradient';
  syncBgModeUI();updateClrPreview();render();save();
});

/* SIZE PRESETS */
document.querySelectorAll('.size-preset').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.size-preset').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  const w=parseInt(b.dataset.w),h=parseInt(b.dataset.h);
  S.bgWidth=w;S.bgHeight=h;
  document.getElementById('sl-width').value=w;document.getElementById('v-width').textContent=w+'px';
  document.getElementById('sl-height').value=h;document.getElementById('v-height').textContent=h+'px';
  render();save();
}));


/* ════ PER-PHONE PANEL ════ */
function buildPerPhonePanel(){
  const list=document.getElementById('per-phone-list');
  if(!list)return;
  list.innerHTML='';
  if(!S.images.length){
    const emp=document.createElement('div');
    emp.className='per-phone-empty';
    emp.textContent=T('Upload images first');
    list.appendChild(emp);return;
  }
  S.images.forEach((img,i)=>{
    const card=document.createElement('div');card.className='phone-card';
    if(S.phoneZIndex[i]===undefined)  S.phoneZIndex[i]=i+1;
    if(S.phoneOffsetX[i]===undefined) S.phoneOffsetX[i]=0;
    if(S.phoneOffsetY[i]===undefined) S.phoneOffsetY[i]=0;
    if(S.phoneScale[i]===undefined)   S.phoneScale[i]=100;
    if(S.phoneRot===undefined)        S.phoneRot=[];
    if(S.phoneRot[i]===undefined)     S.phoneRot[i]=0;

    // Thumbnail
    const thumb=document.createElement('img');
    thumb.className='phone-card-thumb';thumb.src=img.url;

    // Header
    const hdr=document.createElement('div');hdr.className='phone-card-header';
    hdr.innerHTML=`<div class="phone-card-title"><span class="phone-card-num">${i+1}</span><span>${T('Phone')} ${i+1}</span></div><button class="phone-card-reset" data-idx="${i}">${T('Reset')}</button>`;
    hdr.prepend(thumb);
    card.appendChild(hdr);

    // Z-Index row
    const zrow=document.createElement('div');zrow.className='phone-zrow';
    zrow.innerHTML=`<span class="phone-mini-lbl">${T('Z-Index')}</span><div class="z-btns"><button class="z-btn" data-idx="${i}" data-dir="-1">&#8595;</button><span class="z-val" id="zv-${i}">${S.phoneZIndex[i]}</span><button class="z-btn" data-idx="${i}" data-dir="1">&#8593;</button></div>`;
    card.appendChild(zrow);

    // Sliders
    function mkSlider(lblKey,key,arr,min,max,step,suffix,id){
      const row=document.createElement('div');row.className='phone-mini-row';
      const val=arr[i]!==undefined?arr[i]:(key==='scale'?100:0);
      row.innerHTML=`<div class="phone-mini-head"><span class="phone-mini-lbl">${T(lblKey)}</span><span class="phone-mini-val" id="${id}-${i}">${val}${suffix}</span></div><input type="range" min="${min}" max="${max}" step="${step}" value="${val}" data-idx="${i}" data-key="${key}">`;
      row.querySelector('input').addEventListener('input',function(){
        const v=parseFloat(this.value);
        if(key==='scale')        S.phoneScale[i]=v;
        else if(key==='ox')      S.phoneOffsetX[i]=v;
        else if(key==='oy')      S.phoneOffsetY[i]=v;
        else if(key==='rot_i')  {S.phoneRot=S.phoneRot||[];S.phoneRot[i]=v;}
        else if(key==='sop')    {S.phoneShadowOp=S.phoneShadowOp||[];S.phoneShadowOp[i]=v;}
        else if(key==='sop')    {S.phoneShadowOp=S.phoneShadowOp||[];S.phoneShadowOp[i]=v;}
        document.getElementById(`${id}-${i}`).textContent=v+suffix;
        render();
      });
      card.appendChild(row);
    }
    if(!S.phoneShadowOp)S.phoneShadowOp=[];
    if(S.phoneShadowOp[i]===undefined)S.phoneShadowOp[i]=55;
    mkSlider('Scale',         'scale', S.phoneScale,    40,  300, 2, '%',  'psc');
    mkSlider('Rotation',      'rot_i', S.phoneRot||[], -180, 180, 2, '°',  'prot');
    mkSlider('Shadow Opacity','sop',   S.phoneShadowOp,   0, 100,  5, '%',  'psop');
    mkSlider('Offset X',      'ox',    S.phoneOffsetX, -200, 200,  4, 'px', 'pox');
    mkSlider('Offset Y',      'oy',    S.phoneOffsetY, -200, 200,  4, 'px', 'poy');

    list.appendChild(card);
  });

  // Z-index buttons
  list.querySelectorAll('.z-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.idx),d=parseInt(btn.dataset.dir);
      S.phoneZIndex[i]=Math.max(1,Math.min(10,(S.phoneZIndex[i]||i+1)+d));
      const zv=document.getElementById(`zv-${i}`);
      if(zv)zv.textContent=S.phoneZIndex[i];
      render();
    });
  });

  // Reset buttons
  list.querySelectorAll('.phone-card-reset').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.idx);
      S.phoneZIndex[i]=i+1;S.phoneOffsetX[i]=0;
      S.phoneOffsetY[i]=0;S.phoneScale[i]=100;
      if(S.phoneRot)S.phoneRot[i]=0;
      buildPerPhonePanel();render();
    });
  });
}


/* ════════════════════════════════════════════
   WEB PREVIEW FEATURE
════════════════════════════════════════════ */

// State for web preview
let webState = {
  url: '',
  frame: 'desktop',
  viewport: '1280x800',
  bg: ['#667eea','#764ba2','#667eea'],
  bgName: 'Indigo',
  screenshotDataUrl: null,
};

// Frame definitions: how the screenshot is displayed
const WEB_FRAMES = {
  desktop: {
    // Big monitor with stand
    render(ctx, img, W, H) {
      const sw=img.naturalWidth||img.width, sh=img.naturalHeight||img.height;
      const mw=W*.82, mh=H*.72;
      const mx=(W-mw)/2, my=H*.04;
      const bezel=16, br=10;
      // Monitor bezel
      ctx.fillStyle='#1a1a2e';
      roundRect(ctx,mx,my,mw,mh+bezel*2,br);ctx.fill();
      // Screen
      ctx.save();roundRect(ctx,mx+bezel,my+bezel,mw-bezel*2,mh,6);ctx.clip();
      ctx.drawImage(img,mx+bezel,my+bezel,mw-bezel*2,mh);ctx.restore();
      // Bottom bar + stand
      ctx.fillStyle='#1a1a2e';
      ctx.fillRect(W/2-mw*.18,my+mh+bezel*2,mw*.36,H*.04);
      ctx.fillRect(W/2-mw*.28,my+mh+bezel*2+H*.04,mw*.56,H*.025);
    },
    aspectRatio: 16/10,
  },
  macbook: {
    render(ctx, img, W, H) {
      const sw=img.naturalWidth||img.width;
      const lw=W*.85, lh=H*.62;
      const lx=(W-lw)/2, ly=H*.05;
      const bezel=14;
      // Lid (screen part)
      ctx.fillStyle='#2a2a2a';
      roundRect(ctx,lx,ly,lw,lh,12);ctx.fill();
      // Screen
      ctx.save();roundRect(ctx,lx+bezel,ly+bezel,lw-bezel*2,lh-bezel*2,4);ctx.clip();
      ctx.drawImage(img,lx+bezel,ly+bezel,lw-bezel*2,lh-bezel*2);ctx.restore();
      // Camera dot
      ctx.fillStyle='#444';ctx.beginPath();ctx.arc(W/2,ly+8,3,0,Math.PI*2);ctx.fill();
      // Bottom (keyboard base)
      ctx.fillStyle='#2a2a2a';
      roundRect(ctx,lx-lw*.04,ly+lh,lw*1.08,H*.085,4);ctx.fill();
      // Keyboard area
      ctx.fillStyle='#222';roundRect(ctx,lx+lw*.04,ly+lh+H*.012,lw*.92,H*.04,3);ctx.fill();
      // Trackpad
      ctx.fillStyle='#333';roundRect(ctx,W/2-lw*.12,ly+lh+H*.06,lw*.24,H*.02,4);ctx.fill();
    },
    aspectRatio: 16/10,
  },
  browser: {
    render(ctx, img, W, H) {
      const bw=W*.9, bh=H*.85;
      const bx=(W-bw)/2, by=H*.04;
      const toolbar=H*.075;
      // Window chrome
      ctx.fillStyle='#2d2d2d';
      roundRect(ctx,bx,by,bw,bh,10);ctx.fill();
      // Toolbar bg
      ctx.fillStyle='#3d3d3d';
      roundRect(ctx,bx,by,bw,toolbar,10);ctx.fill();
      ctx.fillRect(bx,by+toolbar/2,bw,toolbar/2);
      // Traffic lights
      const dots=[{x:bx+20,c:'#ff5f57'},{x:bx+40,c:'#febc2e'},{x:bx+60,c:'#28c840'}];
      dots.forEach(d=>{ctx.fillStyle=d.c;ctx.beginPath();ctx.arc(d.x,by+toolbar/2,7,0,Math.PI*2);ctx.fill();});
      // URL bar
      ctx.fillStyle='#555';roundRect(ctx,bx+bw*.2,by+toolbar*.18,bw*.56,toolbar*.55,6);ctx.fill();
      ctx.fillStyle='#aaa';ctx.font=`${Math.round(H*.022)}px monospace`;
      ctx.textAlign='left';ctx.textBaseline='middle';
      const urlText=webState.url.replace(/^https?:\/\//,'').substring(0,30);
      ctx.fillText(urlText||'example.com',bx+bw*.22,by+toolbar/2);
      // Tab bar hint
      ctx.fillStyle='#4a4a4a';roundRect(ctx,bx+10,by+8,bw*.22,toolbar*.45,4);ctx.fill();
      ctx.fillStyle='#888';ctx.font=`${Math.round(H*.018)}px sans-serif`;
      ctx.textAlign='center';ctx.fillText('Tab',bx+bw*.11+10,by+toolbar*.28);
      // Page content
      ctx.save();ctx.beginPath();ctx.rect(bx,by+toolbar,bw,bh-toolbar);ctx.clip();
      ctx.drawImage(img,bx,by+toolbar,bw,bh-toolbar);ctx.restore();
    },
    aspectRatio: 16/9,
  },
  phone: {
    render(ctx, img, W, H) {
      const pw=W*.4, ph=H*.82;
      const px=(W-pw)/2, py=H*.05;
      const bezel=14, r=40;
      // Phone body
      ctx.fillStyle='#111';
      roundRect(ctx,px,py,pw,ph,r);ctx.fill();
      // Screen
      ctx.save();roundRect(ctx,px+bezel,py+bezel,pw-bezel*2,ph-bezel*2,r-8);ctx.clip();
      ctx.drawImage(img,px+bezel,py+bezel,pw-bezel*2,ph-bezel*2);ctx.restore();
      // Dynamic island
      ctx.fillStyle='#111';roundRect(ctx,px+pw/2-pw*.12,py+bezel+H*.01,pw*.24,H*.03,20);ctx.fill();
    },
    aspectRatio: 9/18,
  },
};

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.arcTo(x+w,y,x+w,y+r,r);
  ctx.lineTo(x+w,y+h-r);ctx.arcTo(x+w,y+h,x+w-r,y+h,r);
  ctx.lineTo(x+r,y+h);ctx.arcTo(x,y+h,x,y+h-r,r);
  ctx.lineTo(x,y+r);ctx.arcTo(x,y,x+r,y,r);
  ctx.closePath();
}

async function captureWebsite() {
  const url = document.getElementById('web-url-input').value.trim();
  if(!url){ setWebStatus('Enter a URL first','err'); return; }
  
  let finalUrl = url;
  if(!finalUrl.startsWith('http')) finalUrl='https://'+finalUrl;
  webState.url = finalUrl;

  const btn = document.getElementById('web-capture-btn');
  const spinner = document.getElementById('web-capture-spinner');
  btn.disabled = true;
  if(spinner) spinner.style.display='inline-block';
  setWebStatus(T('Loading...'),'');

  const vp = webState.viewport||'1280x800';
  const [vpW,vpH] = vp.split('x');

  // Services that return images without CORS restrictions
  // Using direct <img> src (no canvas needed for display)
  const services = [
    `https://image.thum.io/get/width/${vpW}/crop/${vpH}/noanimate/${encodeURIComponent(finalUrl)}`,
    `https://mini.s-shot.ru/${vpW}x${vpH}/1/${encodeURIComponent(finalUrl)}`,
    `https://api.screenshotone.com/take?url=${encodeURIComponent(finalUrl)}&viewport_width=${vpW}&viewport_height=${vpH}&format=jpeg&image_quality=80&access_key=free`,
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(finalUrl)}?w=${vpW}&h=${vpH}`,
  ];

  // Try each service by loading into <img> tag (avoids CORS since we just display, not draw to canvas)
  let serviceUrl = null;
  for(let i=0;i<services.length;i++){
    setWebStatus(T('Loading...')+' ('+(i+1)+'/'+services.length+')','');
    const ok = await testImageUrl(services[i]);
    if(ok){ serviceUrl = services[i]; break; }
  }

  if(serviceUrl){
    webState.screenshotUrl = serviceUrl; // store as URL, not dataURL
    webState.screenshotDataUrl = null;
    setWebStatus('✓ '+T('Captured successfully'),'ok');
  } else {
    // Fallback: generate a beautiful canvas preview
    webState.screenshotDataUrl = createFallbackPreview(finalUrl);
    webState.screenshotUrl = null;
    setWebStatus('⚠ '+T('Using preview mode — site may block embedding'),'');
  }
  renderWebPreview();
  btn.disabled = false;
  if(spinner) spinner.style.display='none';
}

function testImageUrl(url){
  return new Promise(resolve=>{
    const img=new Image();
    const timer=setTimeout(()=>{img.src='';resolve(false);},8000);
    img.onload=()=>{clearTimeout(timer);resolve(img.naturalWidth>10);};
    img.onerror=()=>{clearTimeout(timer);resolve(false);};
    img.src=url;
  });
}

function loadImageAsDataUrl(url){
  return new Promise((resolve,reject)=>{
    const img=new Image();
    img.crossOrigin='anonymous';
    const timer=setTimeout(()=>{img.src='';reject(new Error('timeout'));},10000);
    img.onload=()=>{
      clearTimeout(timer);
      if(!img.naturalWidth){reject(new Error('empty'));return;}
      const c=document.createElement('canvas');
      c.width=img.naturalWidth||1280;c.height=img.naturalHeight||800;
      const ctx=c.getContext('2d');
      try{ctx.drawImage(img,0,0);resolve(c.toDataURL('image/jpeg',0.9));}
      catch(e){reject(new Error('cors'));}
    };
    img.onerror=()=>{clearTimeout(timer);reject(new Error('load failed'));};
    img.src=url+'?_t='+Date.now(); // cache bust
  });
}

function createFallbackPreview(url){
  // Create a beautiful styled preview canvas showing the URL
  const c=document.createElement('canvas');c.width=1280;c.height=800;
  const ctx=c.getContext('2d');
  // Background
  const grd=ctx.createLinearGradient(0,0,1280,800);
  grd.addColorStop(0,'#667eea');grd.addColorStop(1,'#764ba2');
  ctx.fillStyle=grd;ctx.fillRect(0,0,1280,800);
  // Browser chrome simulation
  ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(0,0,1280,60);
  // Address bar
  ctx.fillStyle='rgba(255,255,255,.2)';
  ctx.beginPath();ctx.roundRect(200,15,700,30,15);ctx.fill();
  ctx.fillStyle='#fff';ctx.font='14px monospace';ctx.textAlign='left';ctx.textBaseline='middle';
  ctx.fillText(url.substring(0,60),216,30);
  // Dots
  [{x:40,c:'#ff5f57'},{x:65,c:'#febc2e'},{x:90,c:'#28c840'}].forEach(d=>{ctx.fillStyle=d.c;ctx.beginPath();ctx.arc(d.x,30,8,0,Math.PI*2);ctx.fill();});
  // Content area
  ctx.fillStyle='rgba(255,255,255,.08)';ctx.fillRect(40,80,600,200);ctx.fillRect(680,80,560,200);
  ctx.fillRect(40,300,1200,60);ctx.fillRect(40,380,800,40);ctx.fillRect(40,440,600,40);
  // Label
  ctx.fillStyle='rgba(255,255,255,.9)';ctx.font='bold 36px Inter,sans-serif';ctx.textAlign='center';
  const host=url.replace(/^https?:\/\//,'').split('/')[0];
  ctx.fillText(host,640,560);
  ctx.fillStyle='rgba(255,255,255,.5)';ctx.font='18px Inter,sans-serif';
  ctx.fillText('Website Preview',640,610);
  return c.toDataURL('image/jpeg',0.9);
}

function renderWebPreview(){
  const srcUrl = webState.screenshotUrl || webState.screenshotDataUrl;
  if(!srcUrl) return;
  const frame=WEB_FRAMES[webState.frame]||WEB_FRAMES.desktop;
  const ar=frame.aspectRatio;
  const W=640, H=Math.round(640/ar);
  const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
  const ctx=canvas.getContext('2d');
  // Draw background gradient
  const grd=ctx.createLinearGradient(0,0,W,H);
  (webState.bg||['#667eea','#764ba2']).forEach((c,i,a)=>grd.addColorStop(i/Math.max(a.length-1,1),c));
  ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);

  const img=new Image();
  img.crossOrigin='anonymous';
  img.onload=()=>{
    frame.render(ctx,img,W,H);
    webState.finalCanvas=canvas;
    showWebPreview(canvas);
  };
  img.onerror=()=>{
    // Can't draw to canvas (CORS) but can still show in <img> tag for display
    // Build frame without screenshot content — show frame only
    frame.render(ctx,new Image(),W,H);
    webState.finalCanvas=canvas;
    // For the thumbnail: show img src directly
    showWebPreviewImg(srcUrl, W, H);
  };
  img.src=srcUrl;
}

function showWebPreview(canvas){
  const wrap=document.getElementById('web-preview-wrap');
  const div=document.getElementById('web-preview-canvas');
  if(wrap)wrap.style.display='flex';
  if(div){
    div.innerHTML='';
    const pi=new Image();
    pi.src=canvas.toDataURL('image/jpeg',.92);
    pi.style.cssText='width:100%;border-radius:8px;display:block;';
    div.appendChild(pi);
  }
  renderWebOnStage(canvas);
}

function showWebPreviewImg(url, W, H){
  // Show screenshot directly in <img> for preview (works even with CORS)
  const wrap=document.getElementById('web-preview-wrap');
  const div=document.getElementById('web-preview-canvas');
  if(wrap)wrap.style.display='flex';
  if(div){
    div.innerHTML='';
    // Build a composite preview: bg color + img overlay
    const container=document.createElement('div');
    container.style.cssText=`position:relative;width:100%;aspect-ratio:${W}/${H};border-radius:8px;overflow:hidden;background:linear-gradient(135deg,${(webState.bg||['#667eea','#764ba2']).join(',')});`;
    const screenshot=document.createElement('img');
    screenshot.src=url;
    screenshot.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:8px;';
    container.appendChild(screenshot);
    div.appendChild(container);
  }
  // Also place on stage as img element
  renderWebOnStageImg(url);
}

function renderWebOnStageImg(url){
  const stage=document.getElementById('stage');
  if(!stage)return;
  stage.querySelectorAll('.web-frame-el').forEach(e=>e.remove());
  const W=parseInt(stage.style.width)||1200;
  const H=parseInt(stage.style.height)||700;
  const frame=WEB_FRAMES[webState.frame]||WEB_FRAMES.desktop;
  const ar=frame.aspectRatio;
  const fw=Math.round(Math.min(W*.85, H*.85*ar));
  const fh=Math.round(fw/ar);
  const el=document.createElement('img');
  el.className='web-frame-el';
  el.src=url;
  el.style.cssText=`position:absolute;left:${(W-fw)/2}px;top:${(H-fh)/2}px;width:${fw}px;height:${fh}px;border-radius:12px;box-shadow:0 30px 80px rgba(0,0,0,.6);z-index:4;cursor:grab;object-fit:cover;`;
  makeDraggable(el,false);
  stage.appendChild(el);
}

function renderWebOnStage(frameCanvas){
  // Place the framed screenshot onto the main stage
  const stage=document.getElementById('stage');
  if(!stage)return;
  // Remove old web-frame-el
  stage.querySelectorAll('.web-frame-el').forEach(e=>e.remove());
  const W=parseInt(stage.style.width)||1200;
  const H=parseInt(stage.style.height)||700;
  const el=document.createElement('canvas');
  el.className='web-frame-el';
  const scale=Math.min((W*.9)/frameCanvas.width,(H*.85)/frameCanvas.height,1);
  const fw=Math.round(frameCanvas.width*scale), fh=Math.round(frameCanvas.height*scale);
  el.width=fw;el.height=fh;
  el.getContext('2d').drawImage(frameCanvas,0,0,fw,fh);
  el.style.cssText=`position:absolute;left:${(W-fw)/2}px;top:${(H-fh)/2}px;width:${fw}px;height:${fh}px;border-radius:12px;box-shadow:0 30px 80px rgba(0,0,0,.6);z-index:4;cursor:grab;`;
  makeDraggable(el,false);
  stage.appendChild(el);
}

function setWebStatus(msg,type){
  const el=document.getElementById('web-status');
  if(!el)return;
  el.textContent=msg;el.className='web-status '+(type||'');
}

function initWebTab(){
  // Frame buttons
  document.querySelectorAll('.web-frame-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.web-frame-btn').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      webState.frame=b.dataset.frame;
      if(webState.screenshotDataUrl)renderWebPreview();
    });
  });
  // Viewport
  const vpSel=document.getElementById('web-viewport');
  if(vpSel)vpSel.addEventListener('change',()=>{webState.viewport=vpSel.value;});
  // Capture button
  const capBtn=document.getElementById('web-capture-btn');
  if(capBtn)capBtn.addEventListener('click',captureWebsite);
  // Enter key on URL input
  const urlInput=document.getElementById('web-url-input');
  if(urlInput)urlInput.addEventListener('keydown',e=>{if(e.key==='Enter')captureWebsite();});
  // Download
  const dlBtn=document.getElementById('web-dl-btn');
  if(dlBtn)dlBtn.addEventListener('click',()=>{
    if(!webState.finalCanvas && !webState.screenshotUrl && !webState.screenshotDataUrl){ toast('No preview yet'); return; }
    if(webState.finalCanvas){
      const a=document.createElement('a');a.download='web-mockup-'+Date.now()+'.png';
      a.href=webState.finalCanvas.toDataURL('image/png');a.click();
    } else {
      // Open screenshot directly
      const a=document.createElement('a');a.href=webState.screenshotUrl||webState.screenshotDataUrl;
      a.target='_blank';a.download='web-mockup-'+Date.now()+'.jpg';a.click();
    }
    toast('✓ '+T('✓ Downloaded!'));
  });
  // Add to stage toggle
  const addBtn=document.getElementById('web-add-btn');
  if(addBtn)addBtn.addEventListener('click',()=>{
    if(!webState.finalCanvas)return;
    renderWebOnStage(webState.finalCanvas);
    toast('✓ Added to stage');
  });
  // BG color picker for web tab
  const webCmod=document.getElementById('web-open-cmod');
  if(webCmod)webCmod.addEventListener('click',()=>{
    buildCmod();document.getElementById('cmod').classList.add('open');
    // Override to update webState.bg
    const origClose=()=>document.getElementById('cmod').classList.remove('open');
    document.getElementById('cmod-close').onclick=origClose;
  });
}

// Add AR translations for web tab


/* ════════════════════════════════════
   TEMPLATE SEARCH + SHUFFLE + FILTERS
════════════════════════════════════ */

// Template search
function initTemplateSearch(){
  const input = document.getElementById('tmpl-search');
  if(!input) return;
  input.addEventListener('input', ()=>{
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll('.tmpl-card').forEach(card=>{
      const name = (card.dataset.name||'').toLowerCase();
      card.style.display = (!q || name.includes(q)) ? '' : 'none';
    });
    // Hide empty sections
    document.querySelectorAll('.tmpl-section').forEach(sec=>{
      const visible = [...sec.querySelectorAll('.tmpl-card')].some(c=>c.style.display!=='none');
      sec.style.display = visible ? '' : 'none';
    });
  });
}

// Shuffle button - pick random template
function initShuffle(){
  const btn = document.getElementById('tmpl-shuffle');
  if(!btn) return;
  btn.addEventListener('click',()=>{
    const cards = [...document.querySelectorAll('.tmpl-card')].filter(c=>c.style.display!=='none');
    if(!cards.length) return;
    const card = cards[Math.floor(Math.random()*cards.length)];
    card.click();
    card.scrollIntoView({behavior:'smooth', block:'nearest'});
    btn.style.transform='rotate(360deg)';
    setTimeout(()=>btn.style.transform='',400);
  });
}

/* ════════════════════════════════════
   ASPECT RATIO LOCK
════════════════════════════════════ */
let _aspectLocked = false;
let _aspectRatio  = 1200/700;

function gcd(a,b){return b===0?a:gcd(b,a%b);}
function updateAspectDisplay(){
  const w=S.bgWidth, h=S.bgHeight;
  const d=gcd(w,h);
  const el=document.getElementById('aspect-ratio-display');
  if(el) el.textContent=`${w/d}:${h/d}`;
}
function initAspectLock(){
  const btn=document.getElementById('aspect-lock-btn');
  if(!btn) return;
  btn.addEventListener('click',()=>{
    _aspectLocked=!_aspectLocked;
    _aspectRatio=S.bgWidth/S.bgHeight;
    btn.classList.toggle('locked',_aspectLocked);
    btn.querySelector('span').textContent=_aspectLocked?'Locked':'Lock Ratio';
    btn.firstChild.textContent=_aspectLocked?'🔒 ':'🔓 ';
  });

  // Hook into width slider to maintain ratio
  const slW=document.getElementById('sl-width');
  const slH=document.getElementById('sl-height');
  if(slW) slW.addEventListener('input',()=>{
    if(_aspectLocked){
      const newH=Math.round(slW.value/_aspectRatio);
      const clamped=Math.max(400,Math.min(1600,newH));
      slH.value=clamped; S.bgHeight=clamped;
      const vH=document.getElementById('v-height');
      if(vH) vH.textContent=clamped+'px';
    }
    updateAspectDisplay();
  });
  if(slH) slH.addEventListener('input',()=>{
    if(_aspectLocked){
      const newW=Math.round(slH.value*_aspectRatio);
      const clamped=Math.max(600,Math.min(2400,newW));
      slW.value=clamped; S.bgWidth=clamped;
      const vW=document.getElementById('v-width');
      if(vW) vW.textContent=clamped+'px';
    }
    updateAspectDisplay();
  });
  updateAspectDisplay();
}

/* ════════════════════════════════════
   QUICK PRESETS in Size tab
════════════════════════════════════ */
function initQuickPresets(){
  document.querySelectorAll('.qp-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const w=parseInt(btn.dataset.w), h=parseInt(btn.dataset.h);
      S.bgWidth=w; S.bgHeight=h;
      const slW=document.getElementById('sl-width');const vW=document.getElementById('v-width');
      const slH=document.getElementById('sl-height');const vH=document.getElementById('v-height');
      if(slW)slW.value=w; if(vW)vW.textContent=w+'px';
      if(slH)slH.value=h; if(vH)vH.textContent=h+'px';
      document.querySelectorAll('.qp-btn,.size-preset').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      _aspectRatio=w/h; updateAspectDisplay();
      if(typeof updateExportInfo==='function') updateExportInfo();
      render(); save();
    });
  });
}

/* ════════════════════════════════════
   RECENTLY USED COLORS
════════════════════════════════════ */
let _recentColors = JSON.parse(localStorage.getItem('mf_recent_colors')||'[]');

function addRecentColor(gradient){
  const key=JSON.stringify(gradient);
  _recentColors=_recentColors.filter(c=>JSON.stringify(c)!==key);
  _recentColors.unshift(gradient);
  _recentColors=_recentColors.slice(0,8);
  localStorage.setItem('mf_recent_colors',JSON.stringify(_recentColors));
  renderRecentColors();
}

function renderRecentColors(){
  const row=document.getElementById('recent-colors-row');
  const list=document.getElementById('recent-colors-list');
  if(!row||!list) return;
  if(!_recentColors.length){row.style.display='none';return;}
  row.style.display='flex';
  list.innerHTML='';
  _recentColors.forEach(g=>{
    const sw=document.createElement('div');
    sw.className='recent-color-swatch';
    sw.style.background=`linear-gradient(135deg,${g.join(',')})`;
    sw.title='Apply color';
    sw.addEventListener('click',()=>{
      S.bg=g; S.bgMode='gradient'; S.colorType='gradient3';
      syncBgModeUI(); render(); save();
    });
    list.appendChild(sw);
  });
}

/* ════════════════════════════════════
   TEMPLATE DARK/LIGHT FILTER
════════════════════════════════════ */
function isDarkTemplate(tp){
  if(tp.bgMode==='gradient'&&tp.bg){
    // Check if first color is dark
    const hex=tp.bg[0].replace('#','');
    if(hex.length===6){
      const r=parseInt(hex.slice(0,2),16),g=parseInt(hex.slice(2,4),16),b=parseInt(hex.slice(4,6),16);
      const lum=(r*299+g*587+b*114)/1000;
      return lum<128;
    }
  }
  // Image templates: assume dark background images are "dark"
  const darkImgs=['bg04','bg05','bg07','bg09','bg10','bg13','bg14','bg18','bg19','bg22','bg24','bg33','bg37','bg38','bg39','bg41','bg43','bg48','bg50','bg52'];
  return darkImgs.includes(tp.bgImg);
}

/* INIT */
(function(){
  S.devCfg=findCfg(S.devId);
  setTheme(S.theme);
  document.getElementById('sel-lang').value=S.lang;
  document.getElementById('sel-format').value=S.format;
  document.getElementById('sel-quality').value=S.quality;
  document.getElementById('deco-color').value=S.decoColor;
  [['sl-gap','v-gap','gap','px'],['sl-scale','v-scale','scale','%'],['sl-overlap','v-overlap','overlap','px'],['sl-width','v-width','bgWidth','px'],['sl-height','v-height','bgHeight','px']].forEach(([s,v,k,sf])=>{const sl=document.getElementById(s);if(sl)sl.value=S[k];const vl=document.getElementById(v);if(vl)vl.textContent=S[k]+sf;});
  document.getElementById('sel-icon').innerHTML=ICO[S.devIco]||ICO.apple;
  document.getElementById('sel-name').textContent=S.devName;
  updateClrPreview();
  buildTemplates();buildCatGrid();buildDecoGrid();initTemplateSearch();initShuffle();initAspectLock();initQuickPresets();renderRecentColors();
  // Template filter buttons
  document.querySelectorAll('.tmpl-filter').forEach(btn=>{
    btn.addEventListener('click',()=>{
      buildTemplates(btn.dataset.f);
    });
  });syncBgModeUI();buildColorContent();buildPerPhonePanel();initWebTab();

  // Stage zoom Ctrl+Scroll
  (function(){
    let zl=1;
    const se=document.getElementById('stage');if(!se)return;
    se.parentElement.addEventListener('wheel',e=>{
      if(!e.ctrlKey&&!e.metaKey)return;e.preventDefault();
      zl=Math.min(2.5,Math.max(0.25,zl+(e.deltaY<0?0.1:-0.1)));
      const cur=se.style.transform.match(/scale\(([^)]+)\)/);
      if(!se._bs)se._bs=cur?parseFloat(cur[1]):1;
      se.style.transform='scale('+(se._bs*zl)+')';
    },{passive:false});
    se.parentElement.addEventListener('dblclick',e=>{
      if(e.target!==se.parentElement)return;
      zl=1;se.style.transform='scale('+(se._bs||1)+')';
    });
  })();

  // ── ROTATION slider ──
  const slRot=document.getElementById('sl-rot');
  const vRot=document.getElementById('v-rot');
  if(slRot){slRot.value=S.rot||0;vRot.textContent=(S.rot||0)+'°';slRot.addEventListener('input',()=>{S.rot=parseFloat(slRot.value);vRot.textContent=S.rot+'°';render();save();});}

  // ── FRAME COLOR ──
  S.frameClr=S.frameClr||'#1a1a1a';
  document.querySelectorAll('.frame-clr').forEach(b=>{
    if(b.dataset.clr===S.frameClr)b.classList.add('active');
    b.addEventListener('click',()=>{
      document.querySelectorAll('.frame-clr').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');S.frameClr=b.dataset.clr;render();save();
    });
  });
  const frameCustom=document.getElementById('frame-custom');
  if(frameCustom){frameCustom.value=S.frameClr;frameCustom.addEventListener('input',()=>{S.frameClr=frameCustom.value;document.querySelectorAll('.frame-clr').forEach(x=>x.classList.remove('active'));render();save();});}

  // ── TEXT controls ──
  const txtInput=document.getElementById('txt-input');
  const txtColor=document.getElementById('txt-color');
  const txtSize=document.getElementById('txt-size');
  const txtAlign=document.getElementById('txt-align');
  const txtPos=document.getElementById('txt-pos');
  const txtWeight=document.getElementById('txt-weight');
  if(txtInput){txtInput.value=S.txtContent||'';txtInput.addEventListener('input',()=>{S.txtContent=txtInput.value;render();save();});}
  if(txtColor){txtColor.value=S.txtColor||'#ffffff';txtColor.addEventListener('input',()=>{S.txtColor=txtColor.value;render();save();});}
  if(txtSize){txtSize.value=S.txtSize||36;txtSize.addEventListener('change',()=>{S.txtSize=parseInt(txtSize.value);render();save();});}
  if(txtAlign){txtAlign.value=S.txtAlign||'center';txtAlign.addEventListener('change',()=>{S.txtAlign=txtAlign.value;render();save();});}
  if(txtPos){txtPos.value=S.txtPos||'bottom';txtPos.addEventListener('change',()=>{S.txtPos=txtPos.value;render();save();});}
  if(txtWeight){txtWeight.value=S.txtWeight||600;txtWeight.addEventListener('change',()=>{S.txtWeight=parseInt(txtWeight.value);render();save();});}

  // ── QUICK SIZE PRESETS (footer) ──
  function setQuickSize(w,h,btn){
    S.bgWidth=w;S.bgHeight=h;
    document.getElementById('sl-width').value=w;document.getElementById('v-width').textContent=w+'px';
    document.getElementById('sl-height').value=h;document.getElementById('v-height').textContent=h+'px';
    document.querySelectorAll('.qs-btn,.size-preset').forEach(b=>b.classList.remove('active'));
    if(btn)btn.classList.add('active');
    updateExportInfo();render();save();
  }
  document.querySelectorAll('.qs-btn').forEach(b=>{
    b.addEventListener('click',()=>setQuickSize(parseInt(b.dataset.w),parseInt(b.dataset.h),b));
  });
  function updateExportInfo(){
    const q=S.quality||2;
    const el=document.getElementById('export-info');
    if(el)el.textContent=`${S.bgWidth*q} × ${S.bgHeight*q}px  •  ${S.format||'png'} ${q}x`;
  }
  updateExportInfo();

  // ── RESET ──
    // Partial reset handlers
  function doReset(type){
    if(type==='images'||type==='all'){S.images=[];S.phonePos=[];S.phoneZIndex=[];S.phoneOffsetX=[];S.phoneOffsetY=[];S.phoneScale=[];S.phoneRot=[];renderThumbs();updateUI();buildPerPhonePanel();}
    if(type==='deco'||type==='all'){const l=document.getElementById('deco-layer');if(l)l.innerHTML='';selDeco=null;}
    if(type==='text'||type==='all'){S.txtContent='';const ti=document.getElementById('txt-input');if(ti)ti.value='';}
    render();save();toast('✓ '+T('Reset'));
  }
  const resetBtn=document.getElementById('reset-btn');
  if(resetBtn)resetBtn.addEventListener('click',()=>doReset('all'));
  const ri=document.getElementById('rst-images');if(ri)ri.addEventListener('click',()=>doReset('images'));
  const rd=document.getElementById('rst-deco');if(rd)rd.addEventListener('click',()=>doReset('deco'));
  const rt=document.getElementById('rst-text');if(rt)rt.addEventListener('click',()=>doReset('text'));
  const ra=document.getElementById('rst-all');if(ra)ra.addEventListener('click',()=>doReset('all'));

  // ── WATERMARK toggle ──
  const togWm=document.getElementById('tog-wm');
  if(togWm){if(S.watermark)togWm.classList.add('on');togWm.addEventListener('click',()=>{togWm.classList.toggle('on');S.watermark=togWm.classList.contains('on');save();});}

  // Transparent toggle
  (function(){
    const tb=document.getElementById('tog-transp');
    if(!tb)return;
    if(S.bgMode==='transparent')tb.classList.add('on');
    tb.addEventListener('click',()=>{
      tb.classList.toggle('on');
      S.bgMode=tb.classList.contains('on')?'transparent':'gradient';
      render();save();
    });
  })();
  // Design shadow/notch initial state
  const tsd=document.getElementById('tog-shadow-d');
  if(tsd&&S.shadow)tsd.classList.add('on');
  const tnd=document.getElementById('tog-notch-d');
  if(tnd&&S.notch)tnd.classList.add('on');
  // Auto toggles
  function bindAutoTog(id,key){
    const b=document.getElementById(id);if(!b)return;
    if(S[key])b.classList.add('on');
    b.addEventListener('click',()=>{b.classList.toggle('on');S[key]=b.classList.contains('on');render();save();});
  }
  bindAutoTog('tog-autorot','autoRotation');
  bindAutoTog('tog-autoscale','autoScale');
  bindAutoTog('tog-autospacing','autoSpacing');
  bindAutoTog('tog-autooverlap','autoOverlap');

  // Reset arrange button
  const resetArrangeBtn=document.getElementById('reset-arrange-btn');
  if(resetArrangeBtn)resetArrangeBtn.addEventListener('click',()=>{
    S.gap=40;S.scale=100;S.overlap=0;S.rot=0;
    ['sl-gap','sl-scale','sl-overlap','sl-rot'].forEach((id,i)=>{
      const sl=document.getElementById(id);if(sl)sl.value=[40,100,0,0][i];
    });
    ['v-gap','v-scale','v-overlap','v-rot'].forEach((id,i)=>{
      const vl=document.getElementById(id);if(vl)vl.textContent=[40+'px',100+'%',0+'px',0+'°'][i];
    });
    render();save();toast('✓ Reset');
  });

  // Default quick size btn
  const qsDef=document.getElementById('qs-def');
  if(qsDef)qsDef.addEventListener('click',()=>{
    document.querySelectorAll('.qs-btn,.size-preset').forEach(b=>b.classList.remove('active'));
    qsDef.classList.add('active');
    S.bgWidth=1200;S.bgHeight=700;
    const slW=document.getElementById('sl-width');if(slW)slW.value=1200;
    const vW=document.getElementById('v-width');if(vW)vW.textContent='1200px';
    const slH=document.getElementById('sl-height');if(slH)slH.value=700;
    const vH=document.getElementById('v-height');if(vH)vH.textContent='700px';
    if(typeof updateExportInfo==='function')updateExportInfo();
    render();save();
  });
  // Shadow color + opacity
  const shadowColorEl=document.getElementById('shadow-color');
  const shadowOpEl=document.getElementById('sl-shadow-opacity');
  const shadowOpVal=document.getElementById('v-shadow-opacity');
  if(shadowColorEl){
    shadowColorEl.value=S.shadowColor||'#000000';
    shadowColorEl.addEventListener('input',()=>{S.shadowColor=shadowColorEl.value;render();save();});
  }
  if(shadowOpEl){
    shadowOpEl.value=S.shadowOpacity||55;
    if(shadowOpVal)shadowOpVal.textContent=(S.shadowOpacity||55)+'%';
    shadowOpEl.addEventListener('input',()=>{
      S.shadowOpacity=parseInt(shadowOpEl.value);
      if(shadowOpVal)shadowOpVal.textContent=S.shadowOpacity+'%';
      // Also update per-phone shadow opacities and their sliders
      if(S.phoneShadowOp){
        S.phoneShadowOp=S.phoneShadowOp.map(()=>S.shadowOpacity);
        // Update per-phone sliders if visible
        document.querySelectorAll('[id^="psop-"]').forEach((sl,ii)=>{
          sl.textContent=S.shadowOpacity+'%';
        });
        document.querySelectorAll('input[data-key="sop"]').forEach(sl=>{
          sl.value=S.shadowOpacity;
        });
      }
      render();save();
    });
  }
  // Add new LABELS for shadow controls

  applyLang();updateUI();render();
})();
