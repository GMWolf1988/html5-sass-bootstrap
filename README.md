# HTML5, SCSS, Bootstrap Editorial Theme

A responsive HTML5, SCSS, Bootstrap theme inspired by the [HTML5 UP Editorial](https://html5up.net/editorial) template that i developed. 
I wanted to test my skills and to see if i could match the current template.

## Features

- 🎨 Clean, magazine-style design
- 📱 Fully responsive with Bootstrap 5
- 🎭 SCSS architecture for easy customisation
- ⚡ Minimal, organised codebase
- 🔧 Modular JavaScript

<img width="2546" height="1260" alt="image" src="https://github.com/user-attachments/assets/eb15aa7f-0c59-433a-8233-d0267ddf6b29" />
<img width="1747" height="1055" alt="Screenshot 2026-02-13 114811" src="https://github.com/user-attachments/assets/82bf5fd4-83b5-47e7-ae0a-a276e7f6dd31" />
<img width="1693" height="1045" alt="image" src="https://github.com/user-attachments/assets/e140432c-5b3b-4123-ae2f-e71536fdbd49" />

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

## Customisation

### Colours

Edit the colour variables in `assets/scss/abstracts/_variables.scss`:

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
- HTML5 UP Editorial: https://html5up.net/editorial
- Images: https://source.unsplash.com

## License

MIT License - feel free to use for personal and commercial projects.
