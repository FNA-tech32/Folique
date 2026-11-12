# Folique — Modern Web Development & Creative Showcase

[![Brand](https://img.shields.io/badge/Brand-Folique-00eeff?style=for-the-badge&logo=codeforces&logoColor=black)](https://github.com/folique-dev)
[![Status](https://img.shields.io/badge/Status-Active%20%26%20Maintained-brightgreen?style=for-the-badge)]()
[![Theme](https://img.shields.io/badge/Theme-Neon%20Dark%20Aesthetic-051925?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)]()

Welcome to the official repository and codebase of **Folique** — a sleek, high-performance web development showcase and digital studio portfolio. Folique demonstrates modern web design, responsive layouts, interactive animations, and five specialized web applications spanning Web Audio, HTML5 Canvas, Tailwind CSS, and glassmorphic UI engineering.

---

## 📑 Table of Contents

- [Overview & Brand Identity](#-overview--brand-identity)
- [Key Website Features](#-key-website-features)
- [Showcased Sub-Projects & Interactive Apps](#-showcased-sub-projects--interactive-apps)
- [Primary & Alternative Contact Details](#-primary--alternative-contact-details)
- [Technology Stack](#-technology-stack)
- [Repository Structure](#-repository-structure)
- [Getting Started & Local Execution](#-getting-started--local-execution)
- [Design Architecture & Theme](#-design-architecture--theme)
- [Browser Compatibility](#-browser-compatibility)
- [License & Credits](#-license--credits)

---

## 🌟 Overview & Brand Identity

**Folique** is engineered around a futuristic neon-cyan on deep-ocean-blue aesthetic (`#00eeff` on `#051925`). It serves as both a front-facing studio portfolio and an interactive laboratory containing distinct web applications.

### Brand Highlights:
- **Brand Name**: Folique
- **Motto**: *Where creative design meets responsive, cutting-edge web development.*
- **Core Focus**: Frontend engineering, interactive audio/visual tools, modern UI/UX design, and clean web architecture.

---

## 🚀 Key Website Features

1. **Sticky Glassmorphic Navigation**:
   - Fixed header with background blur (`backdrop-filter: blur(14px)`).
   - Dynamic scroll-spy that highlights active navigation links as sections enter the viewport.
   - Smooth mobile responsive drawer with hamburger toggle.

2. **Hero Presentation**:
   - Dynamic typewriter effect powered by **Typed.js** rotating through key specialties.
   - Profile avatar with soft neon cyan glow and hover scaling.
   - Quick action CTA buttons (`Explore Work` and `Contact Us`).
   - Direct access to primary and alternative social and messaging handles.

3. **About Folique**:
   - High-contrast narrative layout detailing technical philosophies, standards, and engineering goals.

4. **Dedicated Services Section**:
   - **Web Engineering**: High-performance semantic HTML5, CSS3, and JavaScript web apps.
   - **Interactive Apps**: Real-time canvas graphics, Web Audio analyzers, and custom widgets.
   - **UI/UX & Branding**: Dark mode neon aesthetics, accessibility, and human-first interface flows.

5. **Curated Project Portfolio**:
   - Interactive 3-column card grid with hover slide-up overlay cards linking to individual live applications.

6. **Comprehensive Contact Suite**:
   - Dual-channel communication system with explicit **Primary** and **Alternative** contact details.
   - Integrated inquiry form capturing full name, primary email, alternative contact (email/phone), subject, and message.
   - Real-time client-side submission acknowledgement.

---

## 🎮 Showcased Sub-Projects & Interactive Apps

The Folique ecosystem contains five fully self-contained web applications accessible directly from the portfolio grid:

| Project | File Path | Core Technologies | Description |
| :--- | :--- | :--- | :--- |
| **Auth Portal UI** | [`Register/registrastiya.html`](Register/registrastiya.html) | HTML5, CSS3 Glassmorphism, IonIcons | Futuristic login and registration modal featuring frosted-glass backdrop, floating input labels, and checkbox states. |
| **Audio Music Player** | [`music/music.html`](music/music.html) | HTML5 Audio, JavaScript, Tailwind CSS | Sleek web audio player interface with playback controls, volume slider, album cover art, and local MP3 asset streaming. |
| **Smart Calculator** | [`calculyator.html`](calculyator.html) | Tailwind CSS 3.4, Vanilla JavaScript | Responsive scientific and standard digital calculator with real-time active key animations, sound tactile feedback, and display scaling. |
| **Matrix Digital Rain** | [`matrix/matrix.html`](matrix/matrix.html) | HTML5 Canvas API, JavaScript | Fullscreen digital rain visualizer replicating the classic cyberpunk matrix effect, with interactive real-time color theme customizer. |
| **Neon Music Flow** | [`NEON MUSIC FLOW/indexv.html`](NEON%20MUSIC%20FLOW/indexv.html) | Web Audio API, Canvas 2D, AudioContext | Real-time audio frequency visualizer that analyzes live microphone input streams via `AnalyserNode` and maps frequencies to particle physics. |

---

## 📬 Primary & Alternative Contact Details

Folique provides clear, multi-tiered communication channels so clients, collaborators, and visitors can always reach the team:

### Contact Channels Summary Table

| Contact Channel | Primary Detail | Alternative Detail | Notes |
| :--- | :--- | :--- | :--- |
| **Email Address** | [`contact@folique.com`](mailto:contact@folique.com) | [`support@folique.com`](mailto:support@folique.com) | Monitored daily; support handles technical inquiries. |
| **Telephone Line** | [`+1 (555) 019-2834`](tel:+15550192834) | [`+1 (555) 019-5678`](tel:+15550195678) | Primary line for business calls; alternative line for emergency support. |
| **Instant Messaging** | **Telegram**: [@FoliqueOfficial](https://t.me/FoliqueOfficial) | **WhatsApp**: [+1 (555) 019-2834](https://wa.me/15550192834) | Direct instant messaging for quick consultation. |
| **Social & Code** | **GitHub**: [github.com/folique-dev](https://github.com/folique-dev) | **Instagram**: [@folique.design](https://www.instagram.com/folique.design/) | Code repositories, design concepts, and updates. |
| **Studio Presence** | Digital Studio / Global Remote | Mon – Fri: 09:00 AM – 06:00 PM (UTC) | Serving clients globally across timezones. |

---

## 🛠 Technology Stack

### Languages & Frameworks
- **HTML5**: Semantic elements, accessible forms, audio tags, and canvas nodes.
- **CSS3**: Custom design tokens, CSS Grid, Flexbox, keyframe animations, and backdrop filters.
- **JavaScript (ES6+)**: Event handling, DOM manipulation, Web Audio API, Canvas 2D contexts, and form processing.
- **Tailwind CSS (v3.4.17)**: Utility-first styling used within the Smart Calculator and Music Player modules.

### Libraries & CDNs
- **[Typed.js](https://github.com/mattboldt/typed.js/)**: Dynamic typing animation in the hero banner.
- **[ScrollReveal.js](https://scrollrevealjs.org/)**: Scroll-triggered entrance animations for cards, titles, and layout blocks.
- **[Font Awesome 6.5.1](https://fontawesome.com/)**: Vector icons for social links, services, and contact cards.
- **[IonIcons](https://ionic.io/ionicons)**: Modern icon set utilized in the authentication portal.
- **Google Fonts**: Poppins, DM Sans, Outfit, DM Mono, and Playfair Display typography.

---

## 📁 Repository Structure

```text
Folique/
├── index.html                   # Main landing page & portfolio showcase
├── portfoliyo.css               # Core stylesheet (theme, components, responsive rules)
├── portfoliyo.js                # Interactivity, Typed.js, ScrollReveal, form handler
├── README.md                    # Project documentation & website guide
├── calculyator.html             # Smart Calculator web application
├── calculyatorimg.png           # Smart Calculator preview image
├── github.png                   # GitHub showcase preview image
├── photo_2026-03-09_21-22-06.jpg# Folique brand profile/hero image
├── assets/
│   └── cv.pdf                   # Curriculum Vitae / Brand credentials document
├── matrix/
│   ├── matrix.html              # Matrix Digital Rain canvas visualizer
│   ├── matri_img.png            # Matrix preview thumbnail
│   ├── script.js                # Canvas drop logic & color picker script
│   └── style.css                # Controls and canvas layout styling
├── music/
│   ├── music.html               # Web Music Player application
│   ├── musicc.mp3               # Audio media asset
│   └── musicimg.png             # Music player preview thumbnail
├── NEON MUSIC FLOW/
│   ├── indexv.html              # Neon Music Flow real-time audio visualizer
│   ├── floww.png                # Visualizer preview thumbnail
│   ├── script.js                # Web Audio API microphone stream visualizer
│   └── style.css                # Visualizer neon UI styling
└── Register/
    ├── registrastiya.html       # Glassmorphism authentication portal
    ├── registratriya.png        # Authentication portal thumbnail
    ├── registratsiya.css        # Frosted glass styling & form animations
    └── img.jpg                  # Background wallpaper asset
```

---

## 💻 Getting Started & Local Execution

Because the website and its sub-projects are built on pure, standard web technologies, no compiler or heavy build step is required.

### 1. Clone or Download the Workspace
```bash
cd "c:\Users\QBS Accounting\Documents\websites\Folique"
```

### 2. Run with a Local Static Server

#### Option A: Python 3 HTTP Server
```bash
# Start server at port 8000
python -m http.server 8000
```
Open your browser and navigate to:
```
http://localhost:8000
```

#### Option B: Node.js `npx serve` or `http-server`
```bash
npx serve .
# or
npx http-server -p 8080
```

#### Option C: VS Code Live Server
1. Open the `Folique` folder in VS Code.
2. Right-click on `index.html`.
3. Select **"Open with Live Server"**.

> **Note on Microphone Features**: For the **Neon Music Flow** (`NEON MUSIC FLOW/indexv.html`) visualizer, modern browsers require an HTTP/HTTPS origin (such as `http://localhost:...`) to grant microphone access for the Web Audio API.

---

## 🎨 Design Architecture & Theme

Folique adheres to a disciplined CSS variable design system defined in `portfoliyo.css`:

```css
:root {
    --bg-color: #051925;          /* Deep ocean background */
    --second-bg-color: #072333;   /* Secondary card & section tone */
    --card-bg: rgba(7, 35, 51, 0.75);
    --input-bg: rgba(5, 25, 37, 0.85);
    --text-color: #ffffff;        /* Pure white typography */
    --text-muted: #c5d4dc;        /* High-readability muted text */
    --main-color: #00eeff;        /* Neon cyan primary accent */
    --main-color-hover: #00f2ff;
    --alt-accent: #c084fc;        /* Lavender accent for alternative tags */
    --border-color: rgba(0, 238, 255, 0.18);
}
```

---

## 🌐 Browser Compatibility

| Browser | Status | Recommended Version |
| :--- | :--- | :--- |
| **Google Chrome** | Fully Supported | 90+ |
| **Microsoft Edge** | Fully Supported | 90+ |
| **Mozilla Firefox** | Fully Supported | 88+ |
| **Apple Safari** | Fully Supported | 14+ |
| **Mobile Browsers** | Responsive & Touch-Optimized | Chrome Mobile, Safari iOS |

---

## 📄 License & Credits

- **Brand & Project**: **Folique**
- **Copyright**: © 2026 Folique. All rights reserved.
- **License**: Released under the [MIT License](https://opensource.org/licenses/MIT). You are welcome to adapt, modify, and build upon this project for educational and commercial purposes.
