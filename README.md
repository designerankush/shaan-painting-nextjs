# Shaan Painting — Next.js TypeScript SEO Structure

Converted from the supplied HTML into a clean Next.js App Router project without Tailwind.

## Run

```bash
npm install
npm run dev
```

## Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  robots.ts
  sitemap.ts
components/
  layout/
    Header/
      Header.tsx
      Header.module.css
    Footer/
      Footer.tsx
      Footer.module.css
  common/
    Cursor/
    Lightbox/
    Icons/
  popup/
    QuotePopup/
      QuotePopup.tsx
      QuotePopup.module.css
  pages/
    HomePage/
      HomePage.tsx
      HomePage.module.css
      components/
        Hero/
        Ticker/
        About/
        Services/
        Gallery/
        BeforeAfter/
        Process/
        WhyUs/
        Contact/
data/
  siteData.ts
hooks/
lib/
public/images/
```

## SEO included

- Next.js `metadata` API
- Open Graph and Twitter metadata
- Robots and sitemap routes
- Local business JSON-LD schema
- Semantic section structure and image alt text

Popup close is handled through React state and works with close button, Maybe Later, and Escape key.
