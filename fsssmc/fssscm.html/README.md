# FSSSMC Mosque Website

**Federal Site and Service Scheme Muslim Community Mosque**

A complete, production-ready static website built with pure HTML5, CSS3, and Vanilla JavaScript.

---

## Features

### Core Features
- **Multi-page static website** with 8 complete pages
- **Responsive design** for desktop, tablet, and mobile
- **Language toggle** (English/Arabic) with RTL support
- **Prayer times widget** with live countdown
- **Sticky header** with navigation
- **Mobile hamburger menu**
- **Smooth scroll animations**
- **Sticky donate button**
- **Event cards and calendar**
- **FAQ accordion**
- **Contact forms** with validation
- **Search functionality**
- **Google Maps integration**

### Pages Included
1. **Home** (`index.html`) - Hero, introduction, prayer widget, events preview, CTAs
2. **About** (`about.html`) - Mosque info, history, leadership, mission, facilities
3. **Prayer** (`prayer.html`) - Prayer times, Jummah, Taraweeh, Eid, guidelines
4. **Services** (`services.html`) - Islamic education, community services, youth programs
5. **Events** (`events.html`) - Upcoming events, calendar, past events, Ramadan programs
6. **Learn** (`learn.html`) - About Islam, pillars, resources, FAQs, library, videos
7. **Get Involved** (`get-involved.html`) - Donate, volunteer, membership, sponsorship
8. **Contact** (`contact.html`) - Location, contact form, staff directory, newsletter

---

## Technical Specifications

### Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **Vanilla JavaScript** - No frameworks or libraries
- **No build tools** - Direct browser execution
- **No dependencies** - Completely self-contained

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- WCAG compliant contrast ratios
- Screen reader friendly
- Reduced motion support

---

## Folder Structure

```
fsssmc-mosque/
├── index.html              # Home page
├── about.html              # About page
├── prayer.html             # Prayer times page
├── services.html           # Services page
├── events.html             # Events page
├── learn.html              # Learn page
├── get-involved.html       # Get involved page
├── contact.html            # Contact page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # Main JavaScript file
├── assets/
│   ├── images/             # Image assets
│   │   └── README.txt
│   └── patterns/           # Pattern assets
│       └── README.txt
└── README.md               # This file
```

---

## How to Use

### Local Development
1. Download or clone the repository
2. Open `index.html` in any modern web browser
3. No server or build process required!

### Deployment
Simply upload all files to any web hosting service:
- Static hosting (GitHub Pages, Netlify, Vercel)
- Traditional web hosting (cPanel, FTP)
- CDN (Cloudflare, AWS S3)

### Adding Images
1. Add your images to `assets/images/`
2. Add `mosque.jpg` for the hero background
3. The site works perfectly without images (uses emojis and CSS fallbacks)

---

## Language Toggle

The website includes a complete English/Arabic language toggle:
- Click "AR" in the header to switch to Arabic
- Click "EN" to switch back to English
- All text content is embedded in JavaScript
- RTL layout automatically applied for Arabic
- Preference saved in browser localStorage

---

## Prayer Times

The prayer times widget includes:
- Current date display
- Next prayer countdown timer
- All 5 daily prayer times
- Active prayer highlighting
- Auto-updates every minute

To customize prayer times, edit the `prayerTimesData` object in `js/script.js`.

---

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --primary-color: #1a5f4a;
  --accent-color: #d4af37;
  /* ... */
}
```

### Content
- Edit HTML files directly for static content
- Update `languageData` object in `js/script.js` for bilingual content
- Modify `eventsData` for events
- Update `faqData` for FAQs

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| iOS Safari | 14+ |
| Chrome Android | 90+ |

---

## Performance

- No external dependencies
- Minimal file sizes
- Lazy loading ready
- Optimized CSS
- Efficient JavaScript
- Works offline (after initial load)

---

## License

This project is created for FSSSMC Mosque. All rights reserved.

---

## Credits

- **Design & Development**: FSSSMC Mosque Team
- **Icons**: Emoji (native browser support)
- **Fonts**: System fonts (Segoe UI, Arial)

---

## Support

For questions or support, please contact:
- Email: info@fsssmc-mosque.org
- Phone: +234 123 456 7890

---

**© 2024 FSSSMC Mosque. All rights reserved.**
