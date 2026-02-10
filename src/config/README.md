# Config Directory

This directory contains all configuration files for the portfolio, organized into two main subdirectories for better maintainability and separation of concerns.

## Overview

The `config/` directory separates content and behavior configuration:

- **`information/`** - Text content and display data for all components
- **`animations/`** - Animation parameters (duration, delay, transforms, etc.)

This separation allows you to easily update content without touching animation logic, and vice versa.

## Directory Structure

```
config/
├── information/          # Text content configs
│   ├── hero.config.ts
│   ├── about.config.ts
│   ├── experience.config.ts
│   ├── projects.config.ts
│   └── contact.config.ts
└── animations/           # Animation parameters
    ├── hero.animations.ts
    ├── about.animations.ts
    ├── experience.animations.ts
    ├── projects.animations.ts
    ├── contact.animations.ts
    └── projectTile.animations.ts
```

## Information Configs

All text content and display data are stored in TypeScript files within `information/`. Each file exports a typed configuration object.

### Available Configs

- **`hero.config.ts`** - Content for HeroSection (name, title, about me, skills, decorative labels)
- **`about.config.ts`** - Content for AboutSection (heading, paragraphs)
- **`experience.config.ts`** - Content for ExperienceSection (experience items with company, role, period, description)
- **`projects.config.ts`** - Content for ProjectsSection (project items with title, description, tags, coordinates)
- **`contact.config.ts`** - Content for ContactSection (description, contact links)

### Usage Example

```typescript
import { heroConfig } from '../config/information/hero.config';

// Use in component
<h1>{heroConfig.name}</h1>
<p>{heroConfig.aboutMe.text}</p>
```

## Animation Configs

All animation parameters are stored in TypeScript files within `animations/`. Each file exports a typed animation configuration object with interfaces for type safety.

### Available Animation Configs

- **`hero.animations.ts`** - Animation parameters for HeroSection (scroll parallax, initial animations)
- **`about.animations.ts`** - Animation parameters for AboutSection (bidirectional scroll animations)
- **`experience.animations.ts`** - Animation parameters for ExperienceSection (per-item scroll animations)
- **`projects.animations.ts`** - Animation parameters for ProjectsSection (row-based animations)
- **`contact.animations.ts`** - Animation parameters for ContactSection (scroll-based animations)
- **`projectTile.animations.ts`** - Animation parameters for ProjectTile component

### Usage Example

```typescript
import { heroAnimations } from '../config/animations/hero.animations';

// Use in component
<motion.h1
  initial={heroAnimations.name.initial}
  animate={heroAnimations.name.animate}
  transition={heroAnimations.name.transition}
>
  {heroConfig.name}
</motion.h1>
```

## Making Changes

### Updating Content

To update text content, simply edit the corresponding file in `information/`:

1. Open the relevant config file (e.g., `hero.config.ts`)
2. Modify the values in the exported config object
3. Changes will automatically reflect in the component

### Updating Animations

To update animation behavior, edit the corresponding file in `animations/`:

1. Open the relevant animation file (e.g., `hero.animations.ts`)
2. Adjust the animation parameters (duration, delay, transforms, etc.)
3. Changes will automatically apply to the component

For detailed information about animation configuration, see [ANIMATION.md](./ANIMATION.md).

## Type Safety

All config files use TypeScript interfaces to ensure type safety:

- Config objects are typed with interfaces (e.g., `HeroConfig`, `HeroAnimations`)
- TypeScript will catch errors if you use incorrect property names or types
- IDEs will provide autocomplete for all available properties

## Best Practices

1. **Keep content separate from logic** - Use `information/` for content, `animations/` for behavior
2. **Use descriptive names** - Config property names should clearly indicate their purpose
3. **Maintain consistency** - Follow the same structure across similar config files
4. **Document complex values** - Add comments for non-obvious animation parameters
5. **Test changes** - Always test your changes in the browser to ensure animations work as expected
