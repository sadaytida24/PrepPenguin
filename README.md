# 🐧 Prep Penguin - E-Learning Platform

A modern, responsive website for industry certification preparation built with pure HTML, CSS, and JavaScript.

## 📁 Project Structure

```
prep-penguin/
├── index.html          # Main HTML file
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Features

### ✨ Core Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme** - Toggle between themes with persistence
- **Smooth Animations** - Fade-in effects and hover animations
- **Mobile Navigation** - Collapsible hamburger menu
- **Newsletter Signup** - Email validation and success notifications

### 🎨 Design Elements
- **Modern UI** - Clean, professional design
- **Custom Colors** - Branded color scheme with CSS variables
- **Glassmorphism** - Navbar with blur effect on scroll
- **Card Components** - Feature cards and course cards with shadows
- **Gradient Backgrounds** - Beautiful gradient sections

### 📱 Responsive Features
- Mobile-first design approach
- Flexible grid layouts
- Touch-friendly navigation
- Optimized for all screen sizes

## 🛠️ Setup Instructions

### Option 1: Simple Setup
1. Download all files to a folder
2. Open `index.html` in any web browser
3. That's it! No build process required.

### Option 2: Local Server (Recommended)
For the best experience, serve the files through a local server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📋 File Descriptions

### `index.html`
The main HTML structure containing:
- Navigation header with logo and menu
- Hero section with call-to-action
- Features section (6 feature cards)
- Courses section (6 course cards)
- Newsletter subscription
- Footer with links and company info

### `styles.css`
Complete stylesheet organized into sections:
- **Reset & Base Styles** - Normalize across browsers
- **CSS Variables** - Theme colors and shadows
- **Dark Mode** - Dark theme styles
- **Navigation** - Header and mobile menu
- **Components** - Buttons, cards, forms
- **Sections** - Hero, features, courses, newsletter, footer
- **Animations** - Keyframes and transitions
- **Responsive** - Mobile breakpoints
- **Utilities** - Helper classes

### `script.js`
JavaScript functionality including:
- **Theme Management** - Dark/light mode toggle with localStorage
- **Mobile Menu** - Hamburger menu functionality
- **Form Handling** - Newsletter subscription with validation
- **Smooth Scrolling** - Navigation link animations
- **Scroll Effects** - Navbar blur and fade-in animations
- **Accessibility** - Keyboard navigation support
- **Performance** - Debounce and throttle utilities

## 🎯 Key Sections

### Navigation
- Fixed header with logo
- Desktop menu with theme toggle
- Mobile hamburger menu
- Smooth scroll to sections

### Hero Section
- Eye-catching title and description
- Call-to-action buttons
- Gradient background
- Animated entrance

### Features Section
- 6 feature cards with icons
- Hover animations
- Responsive grid layout
- Professional descriptions

### Courses Section
- 6 course cards with badges
- Course metadata (ratings, students)
- Click interactions
- Card hover effects

### Newsletter
- Email validation
- Success notifications
- Gradient background
- Responsive form layout

### Footer
- Multi-column layout
- Organized link sections
- Company information
- Copyright notice

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #6556ff;        /* Main brand color */
    --secondary: #1a21bc;      /* Secondary brand color */
    --grey: #57595f;           /* Text color */
    --slate-gray: #f6faff;     /* Light background */
    --success: #43c639;        /* Success messages */
}
```

### Content
- Update text content in `index.html`
- Add your own images by replacing placeholder divs
- Modify course information in the courses section
- Update footer links and company information

### Styling
- Adjust spacing using the existing utility classes
- Modify animations in the CSS animations section
- Update responsive breakpoints in media queries
- Customize shadows and gradients

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)  
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Advanced Features

### Theme System
- Automatic theme detection
- LocalStorage persistence
- Smooth theme transitions
- System preference detection (can be added)

### Performance
- Intersection Observer for animations
- Debounced scroll events
- Optimized CSS transitions
- Minimal JavaScript footprint

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels (can be enhanced)
- Color contrast compliance
- Focus management

## 📈 Future Enhancements

### Planned Features
- [ ] Image lazy loading
- [ ] Course search functionality
- [ ] Blog section
- [ ] User testimonials
- [ ] Contact form
- [ ] Multi-language support

### Technical Improvements
- [ ] Service Worker for offline support
- [ ] Web Components for reusability
- [ ] CSS Grid container queries
- [ ] Advanced animations with GSAP
- [ ] Analytics integration

## 🐛 Known Issues

- None currently reported

## 📞 Support

For questions or issues:
1. Check the browser console for JavaScript errors
2. Ensure all files are in the same directory
3. Verify the files are being served via HTTP (not file://)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for certification success!**