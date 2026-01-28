# HTML5 SASS Bootstrap Editorial Theme

A responsive HTML5, SASS, Bootstrap theme inspired by the [HTML5 UP Editorial](https://html5up.net/editorial) template that i developed. 
I wanted to test my skills and to see if i could match the current template.

## Features

- 🎨 Clean, magazine-style design
- 📱 Fully responsive with Bootstrap 5
- 🎭 SASS/SCSS architecture for easy customization
- ⚡ Minimal, organized codebase
- 🔧 Modular JavaScript

## Project Structure

```
html5-bootstrap/
├── index.html              # Homepage
├── generic.html            # Generic page template
├── elements.html           # UI elements showcase
├── package.json            # NPM configuration
├── README.md               # This file
│
└── assets/
    ├── css/
    │   └── main.css        # Compiled CSS
    │
    ├── scss/               # SASS source files
    │   ├── main.scss       # Main entry point
    │   │
    │   ├── abstracts/      # Variables & mixins
    │   │   ├── _variables.scss
    │   │   └── _mixins.scss
    │   │
    │   ├── base/           # Reset & typography
    │   │   ├── _reset.scss
    │   │   └── _typography.scss
    │   │
    │   ├── layout/         # Layout components
    │   │   ├── _wrapper.scss
    │   │   ├── _sidebar.scss
    │   │   ├── _main.scss
    │   │   └── _footer.scss
    │   │
    │   ├── components/     # UI components
    │   │   ├── _buttons.scss
    │   │   ├── _forms.scss
    │   │   ├── _cards.scss
    │   │   ├── _features.scss
    │   │   └── _images.scss
    │   │
    │   ├── sections/       # Page sections
    │   │   ├── _banner.scss
    │   │   ├── _articles.scss
    │   │   ├── _contact.scss
    │   │   └── _elements.scss
    │   │
    │   └── utilities/      # Utility classes
    │       └── _helpers.scss
    │
    ├── js/
    │   ├── main.js         # Main JavaScript
    │   └── modules/        # JS modules
    │       ├── sidebar.js
    │       ├── scroll.js
    │       └── forms.js
    │
    └── images/             # Image assets
        └── (add your images here)
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server with SASS watching:
```bash
npm run dev
```

Or run individual commands:
```bash
# Compile SASS once
npm run sass

# Watch SASS files for changes
npm run sass:watch

# Compile SASS (minified)
npm run sass:compressed

# Start local server
npm run serve
```

## Customization

### Colors

Edit the color variables in `assets/scss/abstracts/_variables.scss`:

```scss
// Brand Colors
$color-primary: #f56a6a;
$color-primary-dark: #e25252;
$color-primary-light: #f78f8f;
```

### Typography

Modify font settings in `assets/scss/abstracts/_variables.scss`:

```scss
// Font Families
$font-family-primary: 'Source Sans Pro', Helvetica, sans-serif;

// Font Sizes
$font-size-base: 1rem;
```

### Spacing

Adjust spacing values in `assets/scss/abstracts/_variables.scss`:

```scss
$spacing-unit: 1rem;
$section-padding: 3rem;
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Original design: [HTML5 UP](https://html5up.net)
- Bootstrap: [Bootstrap 5](https://getbootstrap.com)
- Icons: [Bootstrap Icons](https://icons.getbootstrap.com)

## License

MIT License - feel free to use for personal and commercial projects.
