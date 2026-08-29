# astrology

# Sri Siddhi Vinayaka Astrology & Vastu Centre — Website

A single-page React + Vite website for a Vedic astrology & Vastu consultation business.
Written in a simple, beginner-friendly style — every file has comments explaining *why*,
not just *what*.

## 1. Project structure

``` 
astro-site/
├── src/
│   ├── components/        one file per section (Header, Hero, Services, ...)
│   ├── data/
│   │   └── websiteData.js   ALL text, images, phone number, etc. live here
│   ├── hooks/
│   │   └── useFadeIn.js     small reusable "fade in on scroll" hook
│   ├── App.jsx             puts all the sections together, in order
│   ├── main.jsx             React's entry point
│   └── index.css            all styling (colors, layout, responsive rules)
├── index.html
├── package.json
└── vite.config.js
```

## 2. How to run it

You need [Node.js](https://nodejs.org) installed (version 18 or newer is fine).

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To build a production-ready version:

```bash
npm run build
```

This creates a `dist/` folder you can deploy anywhere.

## 3. How to edit the content

**Almost everything you'd want to change lives in `src/data/websiteData.js`.**
You should not need to touch the component files (`.jsx`) at all for normal edits.

### Change the phone number, WhatsApp number, email, or address
Open `src/data/websiteData.js` and edit the `siteConfig` object at the top:

```js
export const siteConfig = {
  phone: '+91 98765 43210',
  whatsappNumber: '919876543210', // no "+" and no spaces
  email: 'info@example.com',
  address: '...',
  hours: '...',
}
```

The phone/WhatsApp buttons all over the site (floating buttons, CTA section,
contact section) automatically use these values — you only change them once.

### Change images
Every image URL in the site is inside `src/data/websiteData.js`
(hero background, about photo, service icons use `lucide-react` not images,
gallery photos, puja photos, video thumbnails).

Simply replace the URL string with your own image link, e.g.:

```js
bgImage: 'https://your-domain.com/images/hero.jpg',
```

Or put your own images inside `src/assets/images/` and import them at the
top of `websiteData.js`:

```js
import heroImage from '../assets/images/hero.jpg'
// then use heroImage instead of a URL
```

### Change text (headings, descriptions, testimonials, FAQs...)
Also all in `websiteData.js` — just edit the strings.

## 4. How to change colors

Open `src/index.css` and edit the CSS variables at the very top:

```css
:root {
  --primary: #6d1b2b;      /* deep maroon */
  --secondary: #b8860b;    /* gold */
  --background: #fffaf0;   /* warm cream */
  --dark: #24150f;         /* dark brown */
  --text: #4a3a32;         /* body text */
}
```

Because every component uses `var(--primary)` etc. instead of hard-coded
colors, changing these 5 lines re-colors the entire website.

## 5. How the site is built (for learning)

- **`App.jsx`** just lists the sections in order — think of it as a table of contents.
- **Each section is its own file** in `src/components/`, so it's easy to find
  and edit one part of the page without scrolling through a giant file.
- **`websiteData.js`** separates *content* from *layout* — a common beginner
  best-practice so non-developers (or future-you) can update text safely.
- **`useState`** is used for anything that changes on the screen: the mobile
  menu open/closed, which FAQ is expanded, which testimonial is showing,
  the contact form's values, and the gallery lightbox.
- **`useEffect`** is used for things that need to happen automatically:
  detecting scroll position, animating the counters.
- No backend/server is included — the contact form just shows a success
  message. To actually receive submissions you'd connect it to a service
  like Formspree, EmailJS, or your own backend.

## 6. Deploying

### Vercel
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → "New Project" → import the repo.
3. Vercel auto-detects Vite. Click **Deploy**.

### Netlify
1. Push this project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) → "Add new site" → import the repo.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy site**.

## 7. Notes

- All images currently used are placeholder photos from Unsplash — replace
  them with your own licensed/royalty-free images before going live.
- The contact form has basic front-end validation but no backend — see
  section 5 above.
- Icons are from [lucide-react](https://lucide.dev/icons/) — browse that
  site if you want to swap any icon used in `websiteData.js`.

