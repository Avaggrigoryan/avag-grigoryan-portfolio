# Public Assets Directory

This directory contains all static assets for the personal portfolio website.

## Directory Structure

```
public/
├── images/
│   ├── projects/          # Project screenshots and thumbnails
│   ├── profile/           # Profile pictures and personal photos
│   └── backgrounds/       # Background images and patterns
├── icons/                 # SVG icons, favicons, and small graphics
├── documents/             # PDFs, resumes, and downloadable files
├── videos/                # Video files and demos
└── fonts/                 # Custom font files
```

## Usage in Components

### Images
```jsx
// Profile image
<img src="/images/profile/avatar.jpg" alt="Profile" />

// Project screenshot
<img src="/images/projects/project-1.jpg" alt="Project 1" />

// Background image
<div style={{backgroundImage: 'url(/images/backgrounds/hero-bg.jpg)'}}>
```

### Icons
```jsx
// SVG icon
<img src="/icons/logo.svg" alt="Logo" />

// Favicon (automatically used by Next.js)
// Place favicon.ico in the root of public/
```

### Documents
```jsx
// Download link
<a href="/documents/resume.pdf" download>Download Resume</a>
```

### Videos
```jsx
// Video element
<video src="/videos/demo.mp4" controls />
```

## Best Practices

1. **Optimize images** before adding them to reduce file size
2. **Use descriptive filenames** (e.g., `project-ecommerce-dashboard.jpg`)
3. **Keep file sizes reasonable** for web performance
4. **Use appropriate formats**:
   - JPG for photos
   - PNG for graphics with transparency
   - SVG for icons and simple graphics
   - WebP for modern browsers (with fallbacks)

## Next.js Image Optimization

For better performance, use Next.js Image component:

```jsx
import Image from 'next/image'

<Image
  src="/images/profile/avatar.jpg"
  alt="Profile Picture"
  width={300}
  height={300}
  priority // for above-the-fold images
/>
```
