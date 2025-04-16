# LinkTree

A simple, customizable personal link aggregation page inspired by Linktree.

## Features

- 🌟 Clean, modern design with glass-morphism effects
- 📱 Fully responsive layout (mobile-first design)
- 🌙 Dark/Light theme toggle with localStorage persistence
- ⚙️ JSON-based configuration system for easy customization
- 📊 Built-in click tracking and analytics dashboard
- 🎨 Smooth animations and micro-interactions
- ♿ Full keyboard navigation and accessibility support
- 💡 Interactive tooltips with link descriptions
- 📋 One-click copy link functionality
- 🎯 Social media icon integration (Twitter, GitHub, LinkedIn, etc.)
- 📡 PWA support with offline functionality
- 🎭 CSS custom properties for easy theming
- ⚡ Service worker for fast loading and offline access
- 🔍 SEO optimized with Open Graph and Twitter Cards
- 🚀 Zero external dependencies, pure vanilla JS

## Usage

1. Open `index.html` in your browser
2. Customize your profile and links in `config.json`
3. Deploy to any static hosting service

## Configuration

Edit `config.json` to customize:

```json
{
  "profile": {
    "username": "@yourusername",
    "bio": "Your bio here",
    "avatar": "path/to/your/avatar.jpg"
  },
  "links": [
    {
      "title": "🌟 Your Link",
      "url": "https://example.com",
      "description": "Link description"
    }
  ],
  "theme": {
    "defaultMode": "light",
    "allowToggle": true
  },
  "analytics": {
    "trackClicks": true
  }
}
```

## File Structure

```
LinkTree/
├── index.html      # Main HTML structure
├── style.css       # Styles with CSS custom properties
├── script.js       # Core JavaScript functionality
├── analytics.js    # Analytics and click tracking
├── config.json     # Configuration file
├── manifest.json   # PWA manifest
├── sw.js          # Service worker for offline support
└── README.md      # Documentation
```

## Installation & Setup

1. Clone or download the repository
2. Customize `config.json` with your information
3. Open `index.html` in a web browser or deploy to any static hosting service
4. For PWA features, serve over HTTPS

## Customization

### Theme Colors

Modify CSS custom properties in `style.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --border-light: #667eea;
    /* ... other variables */
}
```

### Analytics

Enable/disable analytics in `config.json`:

```json
{
  "analytics": {
    "trackClicks": true,
    "provider": "console"
  }
}
```

### Social Icons

Supported icon types:
- `twitter` - Twitter/X icon
- `linkedin` - LinkedIn icon  
- `github` - GitHub icon
- `instagram` - Instagram icon
- Any emoji for custom icons

## Browser Support

Works in all modern browsers that support:
- CSS Grid and Flexbox
- ES6+ JavaScript features
- CSS custom properties (variables)

## License

MIT License - feel free to use and modify!