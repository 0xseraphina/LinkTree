# LinkTree

A simple, customizable personal link aggregation page inspired by Linktree.

## Features

- 🌟 Clean, modern design with glass-morphism effects
- 📱 Fully responsive layout (mobile-first)
- 🌙 Dark/Light theme toggle with localStorage persistence
- ⚙️ JSON-based configuration system
- 📊 Click tracking and analytics support
- 🎨 Smooth animations and hover effects
- 🚀 No external dependencies, pure vanilla JS

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
├── style.css       # Styles with theme support
├── script.js       # JavaScript functionality
└── config.json     # Configuration file
```

## Browser Support

Works in all modern browsers that support:
- CSS Grid and Flexbox
- ES6+ JavaScript features
- CSS custom properties (variables)

## License

MIT License - feel free to use and modify!