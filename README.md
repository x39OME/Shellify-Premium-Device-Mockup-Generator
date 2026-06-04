# MockFlow Studio

> A professional, browser-based mockup generator — no installation required.

![MockFlow Studio](https://img.shields.io/badge/MockFlow-Studio-6366f1?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-10b981?style=for-the-badge)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-f59e0b?style=for-the-badge)

---

## What is MockFlow Studio?

MockFlow Studio is a free, open-source web tool that runs entirely in the browser with no dependencies and no backend. It lets you place your app screenshots inside realistic device frames with professional backgrounds, add decorations and text, and export publication-ready images in seconds.

---

## Features

### 📱 Real Device Frames
Over 35 devices across 6 categories:

| Category | Devices |
|----------|---------|
| iPhone | iPhone 12 → 16 Pro Max (18 models) |
| Samsung Galaxy | S23 → S25 Ultra, Z Fold 6, Z Flip 6 |
| Google Pixel | Pixel 8, 8 Pro, 9, 9 Pro, 9 Pro XL |
| OnePlus & Xiaomi | OnePlus 13, Xiaomi 15, 14 Ultra |
| iPad | iPad Pro 11" & 13" M4, iPad mini 6 |
| Mac & PC | MacBook Pro 14" & 16", iMac, Monitor, Surface |

Every device includes accurate bezel dimensions, Dynamic Island / notch, side buttons, and realistic shadows.

---

### 🎨 Backgrounds & Templates
- **66 ready-made templates** — curated image backgrounds + gradient presets
- **Color system** in 5 categories: 3-Color, 2-Color, Mesh, Solid, Radial
- **Transparent background** export (PNG with alpha channel)
- **Custom color picker** for fully personalized gradients
- **Canvas size presets**: Default, Post, Square, Story, HD, Full HD

---

### 🌐 Website Preview (Web Tab)
- Enter any website URL to generate a website mockup automatically
- **4 frame styles**: Desktop Monitor, MacBook, Browser Window, Mobile Phone
- **5 viewport sizes**: 1280×800, 1440×900, 1920×1080, iPhone, iPad
- Choose a background gradient behind the frame
- Download the result or add it directly to the main stage

---

### 🖼️ Multi-Image Support
- Upload up to **5 screenshots** at once
- Drag & drop to **reorder** them
- Auto-arranged in a balanced, depth-based layout
- Manually **drag each phone** anywhere on the canvas

---

### ⚙️ Layout Controls
- **Spacing** — control the gap between devices
- **Phone Scale** — resize all devices proportionally
- **Overlap** — layer devices over each other
- **Rotation** — tilt all devices
- **Auto toggles**: Auto Rotation, Auto Scale, Auto Spacing, Auto Overlap
- **Reset button** — restore all layout values to default

---

### 🎛️ Per-Phone Control
Each uploaded image gets its own control panel:

- **Z-Index** — control which phone appears on top
- **Scale** — resize this phone independently (40%–160%)
- **Rotation** — tilt this phone individually (−30° to +30°)
- **Offset X / Y** — shift this phone horizontally or vertically
- **Reset** — restore this phone to its default position

---

### ✨ SVG Decorations
- **50 recolorable SVG decorations** — stars, moons, suns, clouds, geometric shapes, celestial elements, and more
- Pick any color with the color picker
- Control **size, opacity, rotation** independently per decoration
- Drag decorations freely on the canvas
- All decorations are **exported in the final image**

---

### 🖊️ Text Overlay
- Add multi-line text directly on the mockup
- Control **font size, weight, color, alignment, and position** (top / center / bottom)
- Live preview updates instantly

---

### 🖼️ Device Customization
- **Frame color** — 7 presets (Black, White, Silver, Gold, Space Gray, Deep Blue, Deep Red) + custom picker
- **Device Shadow** — toggle on/off, choose shadow color and opacity
- **Dynamic Island / Notch** — toggle visibility
- **Side buttons** — toggle visibility

---

### 💾 Export Options
| Option | Values |
|--------|--------|
| Format | PNG, JPG, WEBP |
| Quality | HD (1x), 2x, 3x |
| Size presets | Default, Post, Square, Story, HD |
| Custom size | 600px → 2400px width, 400px → 1600px height |
| Watermark | Optional "MockFlow Studio" badge |

---

### 🌍 Multilingual Interface
- 🇺🇸 English
- 🇸🇦 Arabic (RTL)
- 🇫🇷 Français
- 🇩🇪 Deutsch
- 🇪🇸 Español

---

### ⚙️ Settings & Persistence
- All settings auto-saved to `localStorage`
- Dark / Light theme
- Export format and quality remembered between sessions
- Partial reset options: Clear Images only, Clear Decorations only, Clear Text only, or Reset All

---

## Getting Started

```bash
git clone https://github.com/your-username/mockflow-studio.git
cd mockflow-studio
```

Then open `index.html` in any modern browser. That's it.

> **Important:** All four files must be in the same folder.

```
mockflow-studio/
├── index.html      # Page structure
├── style.css       # All styles
├── script.js       # All logic
└── assets.js       # 52 background images
```

---

## How to Use

```
1. Open index.html in your browser
2. Go to Design tab → upload your app screenshots
3. Go to Device tab → choose your device model
4. Go to BG tab → pick a template or color
5. Optionally add decorations, text, or frame color
6. Press Download → done
```

For a website mockup:
```
1. Go to Web tab
2. Enter a URL (e.g. https://yoursite.com)
3. Choose a frame style (Desktop, MacBook, Browser, Mobile)
4. Click Capture & Preview
5. Download or Add to Stage
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 Canvas | Device rendering & image export |
| Vanilla JavaScript | All logic — zero dependencies |
| SVG | Decorations & device icons |
| CSS Variables | Dark/light theming |
| localStorage | Settings persistence |
| Web APIs only | No backend, no server |

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome / Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Mobile browsers | ✅ Supported |

---

## License

MIT License — free to use, modify, and distribute.

---

## Author

Built with ❤️ using pure HTML, CSS, and JavaScript.  
No frameworks. No build tools. No dependencies.

---

*MockFlow Studio — From screenshot to mockup in seconds.*
