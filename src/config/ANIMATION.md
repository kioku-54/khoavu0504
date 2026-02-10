# Animation Configuration Guide

This guide provides comprehensive documentation for the animation system used throughout the portfolio. All animation parameters are centralized in the `animations/` directory for easy customization.

## Overview

The portfolio uses **Framer Motion** for all animations, with two main animation patterns:

1. **Scroll-based animations** - Animations that respond to scroll position
2. **Initial/Entry animations** - Animations that trigger on component mount or viewport entry

These patterns can be combined to create rich, interactive experiences.

## Animation Types

### Scroll-based Animations

Scroll-based animations use Framer Motion's `useScroll` and `useTransform` hooks to create animations that respond to scroll position. They're ideal for parallax effects and elements that fade in/out as you scroll.

#### Key Concepts

- **`offset`**: Defines when the animation starts and ends relative to the viewport
  - `['start start', 'end start']` - Animation runs from when section starts to when it ends (parallax effect)
  - `['start end', 'end start']` - Animation runs from when section enters viewport to when it exits (entry/exit effect)

- **`keyframes`**: Progress points in the animation (0 = start, 1 = end)
  - `[0, 1]` - Simple two-point animation
  - `[0, 0.3, 0.7, 1]` - Four-point animation for bidirectional effects (fade in → visible → fade out)

- **`transforms`**: Output values at each keyframe
  - `opacity: [0, 1, 1, 0]` - Fade in, stay visible, fade out
  - `y: [100, 0, 0, -100]` - Move up, stay, move down
  - `scale: [0.9, 1, 1, 0.9]` - Scale up, stay, scale down

#### Example: Bidirectional Scroll Animation

```typescript
// In animation config
scroll: {
  offset: ['start end', 'end start'],
  keyframes: [0, 0.3, 0.7, 1],
  opacity: [0, 1, 1, 0],  // Fade in → visible → fade out
  y: [100, 0, 0, -100],    // Move up → center → move down
}

// In component
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: aboutAnimations.scroll.offset,
});

const opacity = useTransform(
  scrollYProgress,
  aboutAnimations.scroll.keyframes,
  aboutAnimations.scroll.opacity
);
```

This creates an animation that:
- Fades in and moves up when scrolling down into view (0 → 0.3)
- Stays visible and centered when in viewport (0.3 → 0.7)
- Fades out and moves down when scrolling up out of view (0.7 → 1)

### Initial/Entry Animations

Initial animations trigger when a component mounts or enters the viewport. They're defined using Framer Motion's `initial`, `whileInView`, and `viewport` props.

#### Key Properties

- **`initial`**: Starting state of the animation
  ```typescript
  initial: {
    opacity: 0,
    y: 20,
  }
  ```

- **`whileInView`**: Target state when element enters viewport
  ```typescript
  whileInView: {
    opacity: 1,
    y: 0,
  }
  ```

- **`viewport`**: Configuration for viewport detection
  ```typescript
  viewport: {
    once: true,        // Run animation only once
    margin: '-100px',  // Trigger when 100px before entering viewport
  }
  ```

- **`transition`**: Animation timing and easing
  ```typescript
  transition: {
    duration: 0.8,     // Animation duration in seconds
    delay: 0.2,       // Delay before animation starts
    ease: 'easeOut',  // Easing function
  }
  ```

#### Example: Entry Animation

```typescript
// In animation config
name: {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    ease: 'easeOut',
  },
}

// In component
<motion.h1
  initial={heroAnimations.name.initial}
  animate={heroAnimations.name.animate}
  transition={heroAnimations.name.transition}
>
  {heroConfig.name}
</motion.h1>
```

## Parameter Reference

### Scroll Animation Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `offset` | `[string, string]` | Scroll trigger points | `['start end', 'end start']` |
| `keyframes` | `number[]` | Animation progress points | `[0, 0.3, 0.7, 1]` |
| `opacity` | `number[]` | Opacity values at keyframes | `[0, 1, 1, 0]` |
| `scale` | `number[]` | Scale values at keyframes | `[0.9, 1, 1, 0.9]` |
| `x` | `number[]` | Horizontal position values | `[-30, 0, 0, 30]` |
| `y` | `number[]` | Vertical position values | `[100, 0, 0, -100]` |
| `blur` | `number[]` | Blur values (for filter) | `[0, 4]` |

### Entry Animation Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `initial` | `object` | Starting state | `{ opacity: 0, y: 20 }` |
| `whileInView` | `object` | Target state | `{ opacity: 1, y: 0 }` |
| `viewport.once` | `boolean` | Run only once | `true` |
| `viewport.margin` | `string` | Trigger margin | `'-100px'` |
| `transition.duration` | `number` | Duration in seconds | `0.8` |
| `transition.delay` | `number` | Delay in seconds | `0.2` |
| `transition.ease` | `string` | Easing function | `'easeOut'` |
| `transition.delayMultiplier` | `number` | Multiplier for staggered delays | `0.1` |

## Component Patterns

### HeroSection

**Pattern**: Scroll parallax + initial animations

- Uses scroll-based parallax for the map image (scale, opacity, blur)
- Uses initial animations for text elements (name, title, about, skills)
- Scroll offset: `['start start', 'end start']` for parallax effect

**Key Features**:
- Map image scales down and blurs as you scroll
- Text elements fade in sequentially on page load

### AboutSection

**Pattern**: Bidirectional scroll animations

- Uses 4-keyframe system for smooth entry/exit
- Multiple elements (avatar, heading, content) animate independently
- Scroll offset: `['start end', 'end start']` for entry/exit

**Key Features**:
- Elements fade in when scrolling down
- Elements fade out when scrolling up
- Each element has its own transform values

### ExperienceSection

**Pattern**: Per-item scroll animations

- Each experience item has its own scroll animation
- Uses `delayMultiplier` for staggered animations
- Scroll offset: `['start end', 'end start']`

**Key Features**:
- Items animate horizontally (x transform)
- Staggered delays create cascading effect
- Each item tracks its own scroll position

### ProjectsSection

**Pattern**: Row-based animations with mount delay

- Projects are grouped into rows, each row animates independently
- Uses `mountDelay` to prevent flicker on initial load
- Uses `layoutEffect: false` for scroll animations

**Key Features**:
- Rows animate vertically (y transform)
- Mount delay ensures smooth initial render
- Prevents animation conflicts on page load

### ContactSection

**Pattern**: Scroll-based scale and opacity

- Simple scroll animation for the entire section
- Uses scale and opacity transforms
- Scroll offset: `['start end', 'end start']`

**Key Features**:
- Section scales and fades based on scroll position
- Smooth entry/exit animation

## Code Examples

### Example 1: Simple Scroll Animation

```typescript
// In animation config
scroll: {
  offset: ['start end', 'end start'],
  keyframes: [0, 1],
  opacity: [0, 1],
}

// In component
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: animations.scroll.offset,
});

const opacity = useTransform(
  scrollYProgress,
  animations.scroll.keyframes,
  animations.scroll.opacity
);

<motion.div style={{ opacity }}>
  Content
</motion.div>
```

### Example 2: Bidirectional Scroll Animation

```typescript
// In animation config
scroll: {
  offset: ['start end', 'end start'],
  keyframes: [0, 0.3, 0.7, 1],
  opacity: [0, 1, 1, 0],
  y: [50, 0, 0, -50],
}

// In component
const opacity = useTransform(
  scrollYProgress,
  animations.scroll.keyframes,
  animations.scroll.opacity
);
const y = useTransform(
  scrollYProgress,
  animations.scroll.keyframes,
  animations.scroll.y
);

<motion.div style={{ opacity, y }}>
  Content
</motion.div>
```

### Example 3: Entry Animation with Stagger

```typescript
// In animation config
transition: {
  duration: 0.6,
  delayMultiplier: 0.1,
}

// In component
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={animations.initial}
    whileInView={animations.whileInView}
    transition={{
      duration: animations.transition.duration,
      delay: index * animations.transition.delayMultiplier,
    }}
  >
    {item.content}
  </motion.div>
))}
```

## Best Practices

### 1. Use Consistent Keyframes

For bidirectional animations, always use 4 keyframes `[0, 0.3, 0.7, 1]`:
- `0 → 0.3`: Entry animation
- `0.3 → 0.7`: Visible state
- `0.7 → 1`: Exit animation

### 2. Match Initial and Scroll States

When using both initial and scroll animations, ensure the initial state matches the scroll animation's starting point:

```typescript
// Good: Initial matches scroll start
initial: { opacity: 0, y: 100 }
scroll: { y: [100, 0, 0, -100] }

// Bad: Mismatch causes jump
initial: { opacity: 0, y: 0 }
scroll: { y: [100, 0, 0, -100] }
```

### 3. Use Appropriate Offsets

- `['start start', 'end start']` - For parallax effects (HeroSection)
- `['start end', 'end start']` - For entry/exit animations (most sections)

### 4. Prevent Flicker

For components with scroll animations, use:
- `layoutEffect: false` in `useScroll` options
- `mountDelay` to delay scroll animation setup
- Match `initial` state with scroll animation start

### 5. Optimize Performance

- Use `viewport.once: true` for animations that should only run once
- Avoid animating too many properties simultaneously
- Use `will-change` CSS property for frequently animated elements

### 6. Test Responsively

Always test animations on different screen sizes:
- Mobile devices may have different scroll behavior
- Viewport margins may need adjustment for smaller screens
- Consider reducing animation complexity on mobile

## Troubleshooting

### Animation Not Triggering

- Check that `offset` values are correct
- Ensure element has sufficient height to trigger scroll
- Verify `viewport.margin` isn't too restrictive

### Flicker on Page Load

- Add `mountDelay` to delay scroll animation setup
- Use `layoutEffect: false` in `useScroll` options
- Ensure `initial` state matches scroll animation start

### Animation Too Fast/Slow

- Adjust `transition.duration` (in seconds)
- Modify `keyframes` to change animation timing
- Try different easing functions (`easeOut`, `easeIn`, `easeInOut`)

### Staggered Animations Not Working

- Verify `delayMultiplier` is set correctly
- Check that index is being passed to `transition.delay`
- Ensure all items are using the same animation config

## Additional Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [useScroll Hook](https://www.framer.com/motion/use-scroll/)
- [useTransform Hook](https://www.framer.com/motion/use-transform/)
- [Viewport Animations](https://www.framer.com/motion/gestures/#viewport)
