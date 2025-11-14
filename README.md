# GSAP Pinned Image Mask Reveal on Scroll

A Next.js 15 application featuring an interactive image mask reveal animation with GSAP ScrollTrigger and Lenis smooth scrolling.

## Features

- ⚡ Built with Next.js 15 and TypeScript
- 🎨 GSAP ScrollTrigger animations
- 🖱️ Lenis smooth scrolling
- 📱 Fully responsive design
- 🎯 Type-safe component architecture
- ♿ Optimized performance

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Animation:** GSAP 3.12+ with ScrollTrigger
- **Smooth Scroll:** Lenis
- **Styling:** CSS Modules

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gsap-pinned-image-mask-reveal-on-scroll-
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ImageMaskReveal.tsx  # Main animation component
│   └── ImageMaskReveal.css  # Component styles
└── types/
    └── index.ts             # TypeScript type definitions
```

## Component Usage

The `ImageMaskReveal` component can be used with custom data:

```tsx
import ImageMaskReveal from '@/components/ImageMaskReveal';
import type { ArchSection } from '@/types';

const sections: ArchSection[] = [
  {
    id: 'section-1',
    title: 'Your Title',
    description: 'Your description',
    linkColor: '#D5FF37',
    imageUrl: 'https://example.com/image.webp',
    imageAlt: 'Image description',
  },
  // ... more sections
];

const bgColors = ['#EDF9FF', '#FFECF2', '#FFE8DB'];

export default function Page() {
  return <ImageMaskReveal sections={sections} bgColors={bgColors} />;
}
```

## Build for Production

```bash
npm run build
npm start
```

## License

See LICENSE.txt for details.
