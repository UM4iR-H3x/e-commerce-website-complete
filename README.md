# Premium Dropshipping Store

A modern, professional React-based dropshipping e-commerce website with full functionality, dark/light theme support, and WhatsApp integration.

## 🌟 Features

### 🎨 Theme Support
- **Automatic System Preference Detection**: Automatically detects user's system preference (dark/light mode)
- **Smooth Theme Transitions**: Beautiful animations when switching between themes
- **Manual Theme Toggle**: Users can manually switch themes via the header

### 🏠 Landing/Home Page
- **Animated Hero Section**: Eye-catching hero with call-to-action
- **Trusted Companies Section**: Logos of 10 trusted companies (Amazon, DHL, FedEx, etc.)
- **Features Showcase**: Highlighting key benefits
- **Featured Products Preview**: Showcasing trending products

### 🛍️ Product Management
- **Product Listings**: 10 trending CJdropshipping products with official images
- **Advanced Filtering**: Filter by category, search by name/description
- **Sorting Options**: Sort by name, price (low/high), rating
- **Product Cards**: Animated cards with hover effects
- **Add to Cart**: Fully functional cart integration

### 📱 Product Details
- **Image Gallery**: Multiple product images with thumbnail navigation
- **Detailed Information**: Full product specs, features, and descriptions
- **Quantity Selector**: Adjustable quantity controls
- **Buy Now via WhatsApp**: Direct WhatsApp integration for instant purchases
- **Add to Cart**: Seamless cart integration

### 🛒 Shopping Cart
- **Cart Management**: Add, remove, and update quantities
- **Order Summary**: Real-time total calculation
- **WhatsApp Checkout**: Complete order via WhatsApp with pre-filled message
- **Persistent Storage**: Cart data saved in localStorage

### 📞 Contact & Support
- **Contact Form**: Fully functional form with validation
- **WhatsApp Integration**: Direct chat button (+93 782 538 457)
- **Contact Information**: Phone, email, and address display
- **FAQ Section**: Comprehensive FAQ with accordion functionality

### 🎯 Additional Features
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimization**: React Helmet for meta tags and descriptions
- **Accessibility**: ARIA roles, keyboard navigation, screen reader support
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Performance Optimized**: Efficient rendering and state management

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dropshipping-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header with theme toggle
│   ├── Footer.js       # Footer with links and social media
│   └── WhatsAppButton.js # Floating WhatsApp chat button
├── context/            # React Context providers
│   ├── ThemeContext.js # Dark/light theme management
│   └── CartContext.js  # Shopping cart state management
├── data/               # Static data files
│   └── products.js     # Product data and categories
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Products.js     # Product listings
│   ├── ProductDetail.js # Individual product page
│   ├── Cart.js         # Shopping cart
│   ├── About.js        # About us page
│   ├── Contact.js      # Contact form
│   └── FAQ.js          # FAQ page
├── App.js              # Main app component with routing
├── index.js            # React entry point
└── index.css           # Global styles and TailwindCSS
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Helmet Async**: SEO and meta tag management

## 🎨 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 11,
  name: "Product Name",
  price: 29.99,
  description: "Product description...",
  category: "Category Name",
  shipping: "7-15 days worldwide",
  image: "product-image-url",
  features: ["Feature 1", "Feature 2"],
  rating: 4.5,
  reviews: 123
}
```

### Modifying Theme Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-primary-color',
        // ... other shades
      }
    }
  }
}
```

### Updating Contact Information
Update contact details in:
- `src/components/WhatsAppButton.js` (WhatsApp number)
- `src/pages/Contact.js` (Contact form and info)
- `src/components/Footer.js` (Footer contact info)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
REACT_APP_WHATSAPP_NUMBER=+93782538457
REACT_APP_CONTACT_EMAIL=info@dropstore.com
```

### Build Configuration
The project uses Create React App with the following scripts:
- `npm start`: Development server
- `npm run build`: Production build
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add homepage to `package.json`: `"homepage": "https://username.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- **WhatsApp**: +93 782 538 457
- **Email**: info@dropstore.com
- **Website**: Contact form on the website

## 🙏 Acknowledgments

- **CJdropshipping** for product data and images
- **TailwindCSS** for the amazing utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons

---

**Built with ❤️ for the dropshipping community** 