# My Portfolio

Minimalist portfolio website with GIS/Map-inspired design and smooth animations.

## Installation

```bash
# Install dependencies
npm install
```

## Usage

### Development

Run the development server:

```bash
npm run dev
```

The application will run at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

### Linting & Formatting

```bash
# Check for linting errors
npm run lint

# Automatically fix linting errors
npm run lint:fix

# Format code
npm run format

# Check code formatting
npm run format:check
```

## Project Structure

```
src/
├── components/          # React components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   └── ui/             # UI components
├── config/             # Configuration files
│   ├── information/    # Text content configs
│   └── animations/     # Animation parameters
├── assets/             # Static assets
└── App.tsx             # Main app component
```

## Editing Content

All text content and animation parameters are managed in the `src/config/` directory:

- **Text content**: Edit files in `src/config/information/`
- **Animation parameters**: Edit files in `src/config/animations/`

For detailed information, see:
- [Config Directory README](src/config/README.md)
- [Animation Configuration Guide](src/config/ANIMATION.md)

## Technologies Used

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
