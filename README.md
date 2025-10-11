# Avag Grigoryan - Portfolio Website

A modern, responsive, and professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases Avag Grigoryan's expertise in Finance & Enterprise Automation.

## 🚀 Features

- **Modern Design**: Clean, professional layout with elegant corporate styling
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth Framer Motion animations and custom cursor
- **SEO Optimized**: Meta tags, structured data (JSON-LD), and accessibility features
- **TypeScript**: Full type safety and better development experience
- **Performance**: Fast loading with Next.js optimization
- **Accessibility**: Keyboard navigation and high contrast colors

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/avag-grigoryan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

#### 1. Hero Section (`components/Hero.tsx`)
```tsx
// Update name and title
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
  Hi, I'm{' '}
  <span className="text-primary-600">Your Name</span>
</h1>

<h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
  Your Professional Title
</h2>
```

#### 2. About Section (`components/About.tsx`)
```tsx
// Update personal description and highlights
const highlights = [
  'Your key achievements and skills',
  // ... more highlights
]
```

#### 3. Experience Section (`components/Experience.tsx`)
```tsx
// Update work experience
const experiences = [
  {
    company: 'Your Company',
    position: 'Your Position',
    // ... other details
  }
]
```

#### 4. Projects Section (`components/Projects.tsx`)
```tsx
// Update your projects
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    // ... other details
  }
]
```

#### 5. Contact Information (`components/Contact.tsx`)
```tsx
// Update contact details
<p className="text-gray-900 font-semibold">your.email@example.com</p>
<p className="text-gray-900 font-semibold">+1 (555) 123-4567</p>
```

### Styling Customization

#### Colors (`tailwind.config.js`)
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... update primary colors
      },
      accent: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... update accent colors
      }
    }
  }
}
```

#### Fonts (`app/layout.tsx`)
```tsx
const inter = Inter({ subsets: ['latin'] })
// Change to your preferred font
```

### Adding Your Photo

1. Add your photo to the `public` folder
2. Update the profile image in `components/Hero.tsx`:

```tsx
<div className="w-80 h-80 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center shadow-2xl">
  <img 
    src="/your-photo.jpg" 
    alt="Your Name" 
    className="w-72 h-72 rounded-full object-cover"
  />
</div>
```

### Adding a CV Download

1. Add your CV PDF to the `public` folder
2. Update the download button in `components/Hero.tsx`:

```tsx
<motion.button
  onClick={() => window.open('/your-cv.pdf', '_blank')}
  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
>
  <Download className="mr-2" size={20} />
  Download CV
</motion.button>
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS settings as instructed

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or connect your GitHub repository

### Other Platforms

- **GitHub Pages**: Use `next export` and deploy the `out` folder
- **AWS S3**: Upload the `out` folder to an S3 bucket
- **Firebase Hosting**: Use Firebase CLI to deploy

## 📱 SEO & Performance

### Meta Tags
The website includes comprehensive meta tags for:
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Search Engine Optimization
- Structured Data (JSON-LD)

### Performance Optimization
- Image optimization with Next.js
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Smooth animations with Framer Motion

### Accessibility
- Keyboard navigation support
- High contrast colors
- Screen reader friendly
- Focus indicators

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── CustomCursor.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
│   ├── your-photo.jpg
│   └── your-cv.pdf
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 Content Guidelines

### Writing Style
- Professional and concise
- Use active voice
- Quantify achievements when possible
- Include relevant keywords for SEO

### Images
- Use high-quality, professional photos
- Optimize images for web (WebP format recommended)
- Maintain consistent aspect ratios

### Contact Information
- Use a professional email address
- Include relevant social media links
- Keep contact information up to date

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, please:

- Open an issue on GitHub
- Contact: avag.grigoryan@example.com
- LinkedIn: [linkedin.com/in/avag-grigoryan](https://linkedin.com/in/avag-grigoryan)

---

**Built with ❤️ by Avag Grigoryan**