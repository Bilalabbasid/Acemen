# Acemen Ventures — Corporate Website

A fully responsive, production-ready corporate website for **Acemen Ventures**, a UK-registered holding company with four ventures across commerce, technology, retail, and travel.

Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
acemen/
├── public/
│   └── images/              # Static images (og-image, logos, photos, etc.)
├── src/
│   ├── app/
│   │   ├── about/           # About Us page
│   │   ├── contact/         # Contact page with working form
│   │   ├── ventures/        # Ventures overview + detail pages
│   │   │   ├── e-commerce/  # E-Commerce venture page
│   │   │   ├── it-solutions/# IT Solutions venture page
│   │   │   ├── shoes/       # Shoes Business venture page
│   │   │   └── ticketing-travel/ # Ticketing & Travel venture page
│   │   ├── globals.css      # Global styles & Tailwind directives
│   │   ├── layout.tsx       # Root layout (metadata, fonts, header/footer)
│   │   └── page.tsx         # Home page
│   └── components/
│       ├── Header.tsx       # Sticky navigation with dropdown
│       ├── Footer.tsx       # Site-wide footer
│       ├── ScrollReveal.tsx # Scroll-triggered fade/slide animations
│       ├── VentureCard.tsx  # Reusable venture card component
│       ├── ContactForm.tsx  # Contact form with validation
│       ├── CTASection.tsx   # Reusable CTA banner
│       └── StatsStrip.tsx   # Stats/credibility bar
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── next.config.js
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, ventures grid, mission snippet, stats, CTA |
| About Us | `/about` | Company story, mission, vision, values, goals, leadership placeholder |
| Our Ventures | `/ventures` | All 4 ventures summarised |
| E-Commerce | `/ventures/e-commerce` | Product categories, value proposition, testimonial |
| IT Solutions | `/ventures/it-solutions` | Services, process, tech stack |
| Shoes Business | `/ventures/shoes` | Collections, quality story, craftsmanship |
| Ticketing & Travel | `/ventures/ticketing-travel` | Event ticketing + travel services split |
| Contact | `/contact` | Form, email, phone, address, social links, map placeholder |

---

## 🎨 Design System

- **Primary**: Deep Navy (`#0a1628`) — trust, professionalism
- **Accent**: Gold (`#d4a843`) — premium, quality
- **Venture Tints**: Blue (E-Commerce), Teal (IT), Fuchsia (Shoes), Amber (Travel)
- **Fonts**: Poppins (headings) + Inter (body) via Google Fonts
- **Animations**: Scroll-triggered fade/slide via Intersection Observer

---

## 🔧 Customisation Guide

### Replace Placeholder Content
Search for `REPLACE` comments throughout the codebase to find:
- Company address, phone, email
- Team member names and photos
- Product/service images
- Customer testimonials
- Social media URLs
- Map embed

### Update Branding
- **Logo**: Replace the `AV` monogram in `Header.tsx` (line ~50) and `Footer.tsx` (line ~30) with an `<Image>` component
- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Fonts**: Edit fonts in `src/app/layout.tsx`

### Contact Form
The contact form currently uses a `mailto:` fallback. To connect a real form service:

1. Sign up at [Formspree](https://formspree.io), [Getform](https://getform.io), or similar
2. In `src/components/ContactForm.tsx`, replace the `handleSubmit` function with your API call (see the commented-out fetch example on line ~70)
3. Alternatively, wire it to your own backend endpoint

### Map
Replace the map placeholder in `src/app/contact/ContactPageClient.tsx` with a Google Maps `<iframe>` embed.

---

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import the repo in Vercel
3. Vercel auto-detects Next.js — no config needed
4. Deploy!

### Netlify

1. Push to GitHub
2. Import in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Any Static Host

1. Run `npm run build`
2. Deploy the `.next` folder
3. Or export as static: add `output: 'export'` to `next.config.js`

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Fonts**: Poppins & Inter (Google Fonts)
- **Performance**: Semantic HTML, ARIA labels, responsive images, minimal JS

---

## 📝 License

© Acemen Ventures. All rights reserved. This codebase is proprietary. Replace this with your chosen license before publishing.

---

*Need help? Contact the development team or refer to the Next.js and Tailwind CSS documentation.*
