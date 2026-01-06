# Animated Logo Mark - Implementation Guide

## Overview

A premium, cybersecurity-themed animated logo component that replaces your static "TB" badge. Features subtle animations that feel sophisticated and tech-forward without being distracting.

---

## Features

✅ **Rotating scan ring** – Full rotation every ~12 seconds (adjustable)
✅ **Sweep highlight** – Radar-like effect that travels around periodically
✅ **Pulsing corner brackets** – 4-corner (circle) or 6-corner (hex) scanner lock-on effect
✅ **Hover enhancement** – Subtle glow intensification + ring acceleration
✅ **Reduced motion support** – Fully respects `prefers-reduced-motion` for accessibility
✅ **Performance optimized** – CSS transforms only, no expensive filters
✅ **Responsive scaling** – Works at hero size (large) and nav size (small icon)

---

## Quick Start

### 1. **Circle Badge (Default)**

```jsx
import AnimatedLogoMark from './components/AnimatedLogoMark';

// In your Hero component:
<AnimatedLogoMark variant="circle" size="hero" />
```

### 2. **Hexagon Badge (Optional)**

```jsx
import AnimatedLogoMarkHex from './components/AnimatedLogoMarkHex';

<AnimatedLogoMarkHex size="hero" />
```

### 3. **Navbar Icon Version**

```jsx
// Small, compact version
<AnimatedLogoMark variant="circle" size="nav" />
```

---

## Component Props

### AnimatedLogoMark (Circle)

| Prop | Type | Default | Options |
|------|------|---------|---------|
| `variant` | string | `'circle'` | `'circle'` or `'hex'` (use HexComponent for hex) |
| `size` | string | `'hero'` | `'hero'` or `'nav'` |

### AnimatedLogoMarkHex

| Prop | Type | Default | Options |
|------|------|---------|---------|
| `size` | string | `'hero'` | `'hero'` or `'nav'` |

---

## Customization

### Speed & Motion Adjustments

Edit the CSS in `AnimatedLogoMark.css` or `AnimatedLogoMarkHex.css`:

```css
/* Speed: Scan Ring Rotation */
@keyframes scan-rotate {
  /* Current: 12s per full rotation */
  animation: scan-rotate 12s linear infinite;
}

/* Faster options (more noticeable): */
animation: scan-rotate 8s linear infinite;   /* Snappy */
animation: scan-rotate 10s linear infinite;  /* Moderate */

/* Slower options (subtle): */
animation: scan-rotate 14s linear infinite;  /* Leisurely */
animation: scan-rotate 16s linear infinite;  /* Very subtle */
```

### Hover Speed (Ring Acceleration)

```css
/* Default: speeds from 12s → 8s on hover */
svg.hover-active .scan-ring {
  animation: scan-rotate 8s linear infinite;
}

/* To make less dramatic: */
svg.hover-active .scan-ring {
  animation: scan-rotate 10s linear infinite;
}
```

### Glow Intensity

```css
/* Default drop-shadow on container */
filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.08));

/* More prominent glow: */
filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.12));

/* Subtle glow: */
filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.05));
```

### Bracket Pulse Speed

```css
@keyframes bracket-pulse {
  /* Current: 3 seconds */
  animation: bracket-pulse 3s cubic-bezier(0.4, 0.0, 0.6, 1.0) infinite;
}

/* Faster: */
animation: bracket-pulse 2s cubic-bezier(0.4, 0.0, 0.6, 1.0) infinite;

/* Slower: */
animation: bracket-pulse 4s cubic-bezier(0.4, 0.0, 0.6, 1.0) infinite;
```

---

## Design Guidelines

### Colors & Opacity
- **Ring opacity**: 0.6 (adjust in SVG `opacity` attribute)
- **Sweep opacity**: 0.4
- **Brackets**: 0.3–0.8 during pulse
- **Glow**: Uses white at reduced opacity for subtlety

### When to Use Each Variant

**Circle Badge:**
- Default, most familiar
- Works well on any background
- 4 corner brackets feel balanced

**Hex Badge:**
- More angular, technical feel
- 6 corners suggest more "scanning"
- Better for minimalist designs

---

## Integration with Navbar

Create a smaller version for your navbar:

```jsx
import AnimatedLogoMark from './components/AnimatedLogoMark';
import Navbar from './components/Navbar';

// In Navbar.js:
<div className="logo">
  <AnimatedLogoMark variant="circle" size="nav" />
</div>
```

Style it to fit your navbar height:

```css
.navbar .logo {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## Accessibility

### Reduced Motion Support

The component automatically respects the `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled */
  /* Static, premium badge remains visible */
}
```

Users who have this preference enabled in their OS will see:
- ✅ Static badge (no rotation/sweeps/pulses)
- ✅ Maintained premium glow effect
- ✅ Hover effects still work (no motion)

### Testing Reduced Motion
Enable in Chrome DevTools:
1. Open DevTools → Settings (⚙️)
2. Under "Rendering", toggle "Emulate CSS media feature prefers-reduced-motion"

---

## Performance Notes

### Optimizations Used
- **CSS transforms only** – No expensive layout recalculations
- **Hardware acceleration** – `will-change` and `backface-visibility`
- **SVG optimization** – Minimal nodes, no complex paths
- **No filter blur** – Only drop-shadow for glow
- **Efficient animations** – Uses `linear` and simple `cubic-bezier` timings

### Browser Support
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS 14+, Android 11+)

---

## Troubleshooting

### "Animation not playing"
Check if prefers-reduced-motion is enabled. Inspect in DevTools:
```javascript
window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

### "Ring not visible"
Verify SVG viewBox is `0 0 400 400` and circle radius matches size:
- Hero: `r="175"`
- Nav: `r="50"`

### "Glow too faint/bright"
Adjust `filter: drop-shadow()` values in `.animated-logo-mark-container`

### "Brackets not pulsing"
Ensure CSS file is imported and `@media (prefers-reduced-motion: no-preference)` is active

---

## File Structure

```
src/
├── components/
│   ├── AnimatedLogoMark.js          ← Circle variant
│   ├── AnimatedLogoMark.css
│   ├── AnimatedLogoMarkHex.js       ← Hex variant
│   ├── AnimatedLogoMarkHex.css
│   └── Hero.js                      ← Updated to use component
└── ...
```

---

## Example Usage in Different Contexts

### Full Hero Section
```jsx
<div className="hero-logo-container">
  <AnimatedLogoMark variant="circle" size="hero" />
</div>
```

### Profile Card
```jsx
<div className="profile-card">
  <div className="card-logo">
    <AnimatedLogoMark variant="circle" size="nav" />
  </div>
  <h2>Taheem Bhuiyan</h2>
</div>
```

### Favicon / Branding
```jsx
// Can be rasterized to PNG/SVG for static favicon use
<AnimatedLogoMark variant="circle" size="nav" />
```

---

## Advanced: Custom Colors

To change the ring/glow colors, modify the SVG gradients in the component:

```jsx
<linearGradient id="scanGradient">
  <stop offset="0%" stopColor="rgba(YOUR_COLOR, 0.6)" />
  <stop offset="50%" stopColor="rgba(YOUR_COLOR, 0.2)" />
  <stop offset="100%" stopColor="rgba(YOUR_COLOR, 0.6)" />
</linearGradient>
```

Or adjust the drop-shadow filter:
```css
filter: drop-shadow(0 0 20px rgba(YOUR_R, YOUR_G, YOUR_B, 0.15));
```

---

## Summary

You now have two premium, animated logo variants that:
- ✅ Feel cybersecurity-themed without being cheesy
- ✅ Animate subtly and professionally
- ✅ Respect accessibility preferences
- ✅ Perform smoothly (CSS-optimized)
- ✅ Scale responsively (hero & nav sizes)
- ✅ Match your dark, glassy aesthetic

Choose the circle for familiarity or the hex for more edge. Both work beautifully in your portfolio.
