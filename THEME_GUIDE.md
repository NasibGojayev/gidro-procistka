# Theme Configuration Guide

## Overview

The website now uses a centralized theme configuration system. All colors are managed in one place, making it easy to change the entire site's color scheme.

## How to Change Colors

### Option 1: Update Tailwind Config (Recommended)

Edit [`tailwind.config.ts`](file:///Users/nasibgojayev/Desktop/santexnik/tailwind.config.ts):

```typescript
colors: {
  primary: {
    DEFAULT: '#F59E0B',  // Change this to your desired color
    hover: '#D97706',     // Change this to a darker shade
    light: '#FCD34D',     // Change this to a lighter shade
    dark: '#B45309',      // Change this to a dark shade
  },
}
```

### Option 2: Update CSS Variables

Edit [`app/globals.css`](file:///Users/nasibgojayev/Desktop/santexnik/app/globals.css):

```css
:root {
  --color-primary: #F59E0B;        /* Main brand color */
  --color-primary-hover: #D97706;  /* Hover state */
  --color-primary-light: #FCD34D;  /* Light variant */
  --color-primary-dark: #B45309;   /* Dark variant */
}
```

## Quick Color Presets

### Blue Theme
```typescript
primary: {
  DEFAULT: '#0066CC',
  hover: '#0052A3',
  light: '#3B82F6',
  dark: '#1E40AF',
}
```

### Green Theme
```typescript
primary: {
  DEFAULT: '#10B981',
  hover: '#059669',
  light: '#34D399',
  dark: '#047857',
}
```

### Purple Theme
```typescript
primary: {
  DEFAULT: '#8B5CF6',
  hover: '#7C3AED',
  light: '#A78BFA',
  dark: '#6D28D9',
}
```

### Red Theme
```typescript
primary: {
  DEFAULT: '#EF4444',
  hover: '#DC2626',
  light: '#F87171',
  dark: '#B91C1C',
}
```

## Files Updated

All components now use Tailwind theme classes instead of hardcoded colors:
- `text-primary` instead of `text-[#F59E0B]`
- `bg-primary` instead of `bg-[#F59E0B]`
- `hover:bg-primary-hover` instead of `hover:bg-[#D97706]`
- `border-primary` instead of `border-[#F59E0B]`

## Benefits

✅ **Single source of truth** - Change colors in one place  
✅ **Type-safe** - TypeScript ensures correct usage  
✅ **Consistent** - All components use the same color values  
✅ **Easy switching** - Test different color schemes quickly  
✅ **Maintainable** - No need to search/replace across files
