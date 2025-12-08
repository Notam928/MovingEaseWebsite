# The Best Movers - React Website

A complete, professional, and fully responsive React website for a moving company.

## Features

- ✅ Multi-page application with routing
- ✅ Fully responsive design
- ✅ Beautiful blue & orange color scheme
- ✅ Animated counters
- ✅ Professional UI/UX
- ✅ Mobile-friendly navigation
- ✅ Contact forms
- ✅ Testimonials section
- ✅ FAQ with expandable sections

## Pages Included

1. **Home** - Hero section, services preview, why choose us, process, CTA
2. **Services** - Detailed service descriptions with images
3. **About Us** - Mission, values, team, company statistics
4. **Testimonials** - Customer reviews and ratings
5. **FAQ** - Frequently asked questions with answers
6. **Contact** - Contact form and information

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Extract the ZIP file** to your desired location

2. **Navigate to the project directory**
   ```bash
   cd movers-website-project
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - The app will automatically open at `http://localhost:3000`

## Build for Production

To create a production-ready build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Project Structure

```
movers-website-project/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   └── AnimatedCounter.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── TestimonialsPage.jsx
│   │   ├── FAQPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

### Colors
Edit the Tailwind classes in the components:
- Primary Blue: `blue-600`
- Primary Orange: `orange-500`
- Accent Yellow: `yellow-400`

### Content
- Update text content in each page component
- Replace images with your own
- Modify contact information in `ContactPage.jsx` and `Footer.jsx`

### Contact Information
Update these files with your actual information:
- `src/components/Footer.jsx`
- `src/pages/ContactPage.jsx`

## Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Montserrat font

## Support

For issues or questions, please contact the development team.

## License

© 2024 The Best Movers. All rights reserved.
