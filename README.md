# Roy — Portfolio (Bento Grid Style)

A Next.js bento-grid portfolio inspired by the "nev" design style — warm off-white background, interactive cards, filter tabs, dark mode, and smooth animations.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations & layout transitions)
- **Lucide React** (icons)

## 📁 Project Structure

```
app/
  globals.css         ← Base styles + custom CSS
  layout.tsx          ← Root layout with ThemeProvider
  page.tsx            ← Main page with bento grid logic

components/
  Navbar.tsx          ← Navigation with filter tabs
  ThemeProvider.tsx   ← Dark/light mode context
  cards/
    BioCard.tsx         ← Hero bio card with avatar
    MapCard.tsx         ← Location map card
    SpotifyCard.tsx     ← Spotify now-playing
    TwitterCard.tsx     ← Twitter/X social card
    ProjectCard.tsx     ← Project showcase card
    TechStackCard.tsx   ← Tech badges card
    BlogCard.tsx        ← Blog post card
    NewsletterCard.tsx  ← Email subscription card
    DarkModeCard.tsx    ← Theme toggle card
    ClockCard.tsx       ← Live Bangladesh time card
    GitHubCard.tsx      ← GitHub profile card
```

## 🎨 Customization

### Your Info
Edit `app/page.tsx` — update projects array with your real work.

### Colors
The main palette is defined in `app/globals.css`:
- Light BG: `#f2ede8` (warm off-white)
- Dark BG: `#0f0f0f`
- Cards: `#ffffff` / `#1a1a1a`

### Add Spotify API
In `components/cards/SpotifyCard.tsx` — replace static data with a real Spotify API route in `app/api/spotify/route.ts`.

### Add Map
Replace the SVG map in `MapCard.tsx` with a real Mapbox or Leaflet integration.

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Connect repo to vercel.com
3. Deploy — zero config needed with Next.js
