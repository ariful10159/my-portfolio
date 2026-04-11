# 🚀 Modern Portfolio - Header/Hero Section..

A premium, dark-themed portfolio header and hero section with smooth animations, futuristic design, and full responsiveness.

## ✨ Features

- **Dark Theme**: Premium dark background (#0B0B0D) with orange accent (#FF7A00)
- **Sticky Navigation**: Smart header with blur effect on scroll
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Smooth Animations**: Fade-in, slide, float, and glow effects
- **Accessibility**: High contrast support, keyboard navigation, semantic HTML
- **Modern UI**: Floating tech badges, gradient text, animated profile ring
- **Performance Optimized**: Debounced scroll events, intersection observers

## 🎨 Customization Guide

### Quick Edits

#### 1. **Personal Information**
Edit these in `index.html`:

```html
<!-- Line 38: Logo -->
<span class="logo-first">Imamul</span><span class="logo-last"> Kabir Anan</span>

<!-- Line 78: Badge -->
Open to Opportunities

<!-- Line 82: Name -->
Hi, I'm <span class="highlight">Imamul Kabir Anan</span>

<!-- Line 87: Title -->
Data Science Enthusiast & Flutter Developer

<!-- Line 92: Bio -->
Passionate about leveraging data to drive insights and building beautiful...
```

#### 2. **Social Links**
Update URLs in `index.html` (lines 53-62 and 108-120):

```html
<a href="https://linkedin.com/in/your-profile" target="_blank">
<a href="https://github.com/your-username" target="_blank">
<a href="https://twitter.com/your-handle" target="_blank">
<a href="mailto:your.email@example.com">
```

#### 3. **Profile Image**
Replace the placeholder image URL (line 130):

```html
<img src="https://via.placeholder.com/400x400" alt="Imamul Kabir Anan">
<!-- Change to your image URL or local path: -->
<img src="images/profile.jpg" alt="Imamul Kabir Anan">
```

#### 4. **Tech Badges**
Customize floating badges (lines 136-152):

```html
<div class="floating-badge badge-1">
    <i class="fas fa-chart-line"></i>
    <span>Data Science</span>
</div>
<!-- Add more or change icons and text -->
```

#### 5. **Color Scheme**
Edit CSS variables in `style.css` (lines 6-14):

```css
:root {
    --bg-dark: #0B0B0D;           /* Main background */
    --orange-primary: #FF7A00;     /* Accent color */
    --orange-light: #FF9433;       /* Light accent */
    --text-primary: #FFFFFF;       /* Main text */
    --text-secondary: #B4B4B8;     /* Secondary text */
}
```

#### 6. **Navigation Links**
Edit menu items in `index.html` (lines 44-52):

```html
<li><a href="#about" class="nav-link">About</a></li>
<li><a href="#skills" class="nav-link">Skills</a></li>
<!-- Add, remove, or reorder as needed -->
```

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🚀 Getting Started

1. **Download/Clone** the files to your project folder
2. **Open** `index.html` in a browser
3. **Customize** your content using the guide above
4. **Deploy** to GitHub Pages, Netlify, or Vercel

### Local Development

Simply open `index.html` in your browser:
- Double-click the file, or
- Use a local server: `python -m http.server` or VS Code Live Server

## 🎯 Sections Included

1. **Header/Navigation**
   - Logo with highlighted name
   - 7 navigation links
   - Social media icons
   - CTA button
   - Mobile hamburger menu

2. **Hero Section**
   - Status badge ("Open to Opportunities")
   - Large headline with name
   - Subtitle/title
   - Bio paragraph
   - Primary CTA button
   - Social icon row
   - Circular profile image with animated ring
   - 4 floating tech badges
   - Scroll indicator

## 🎨 Design Specifications

- **Font**: Inter (Google Fonts)
- **Icons**: Font Awesome 6.4.0
- **Background**: #0B0B0D with grid overlay
- **Accent**: #FF7A00 (orange)
- **Typography**: Bold, clean hierarchy
- **Effects**: Glows, gradients, smooth transitions

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (full layout)
- **Tablet**: 768px - 1024px (adjusted spacing)
- **Mobile**: < 768px (stacked columns, hamburger menu)
- **Small Mobile**: < 480px (optimized for small screens)

## ♿ Accessibility Features

- ✅ Semantic HTML5 structure
- ✅ ARIA labels for icons
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ High contrast mode support
- ✅ Reduced motion support
- ✅ Alt text for images

## 🔧 Advanced Customization

### Enable Optional Features

In `script.js`, uncomment these features:

```javascript
// Typing effect for hero title (line 132)
const heroTitle = document.querySelector('.hero-title .highlight');
typingEffect(heroTitle, originalText, 80);

// Cursor glow effect (line 169)
if (window.innerWidth > 768) {
    createCursorGlow();
}
```

### Add New Sections

After the hero section, add your content:

```html
<section id="about" class="section">
    <div class="container">
        <!-- Your about content -->
    </div>
</section>
```

### Change Animations

Modify animation durations in `style.css`:

```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📝 Content Placeholders

Replace these with your information:

| Field | Location | Current Value |
|-------|----------|---------------|
| Name | Line 38, 82 | Imamul Kabir Anan |
| Title | Line 87 | Data Science Enthusiast & Flutter Developer |
| Bio | Line 92-94 | [Your bio text] |
| Email | Line 117 | your.email@example.com |
| LinkedIn | Line 55, 109 | https://linkedin.com |
| GitHub | Line 58, 112 | https://github.com |
| Twitter | Line 61, 115 | https://twitter.com |
| Image | Line 130 | placeholder image URL |

## 💡 Tips

1. **Images**: Use high-quality square images (400x400px or larger) for best results
2. **Icons**: Browse Font Awesome for different tech icons: https://fontawesome.com/icons
3. **Colors**: Use color picker tools to find complementary shades
4. **Performance**: Optimize images before uploading (use WebP format)
5. **SEO**: Update meta tags and add more sections for better SEO

## 🚀 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git push origin main
# Enable GitHub Pages in repository settings
```

### Netlify
1. Drag and drop your folder to Netlify
2. Your site is live!

### Vercel
```bash
vercel deploy
```

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## 🤝 Support

For issues or questions:
1. Check the customization guide above
2. Review the code comments in each file
3. Modify step by step and test in browser

## 🎉 Credits

- **Design**: Custom modern dark theme
- **Fonts**: Inter (Google Fonts)
- **Icons**: Font Awesome
- **Built by**: Imamul Kabir Anan

---

**Made with ❤️ and lots of ☕**

Happy coding! 🚀
