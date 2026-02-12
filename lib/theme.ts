/**
 * Theme Configuration
 * 
 * This file contains all color values and theme settings for the website.
 * Change colors here to update them across all pages and components.
 */

export const theme = {
    colors: {
        // Primary brand colors
        primary: {
            DEFAULT: '#0066CC',  // Vibrant Blue - main brand color
            hover: '#0052A3',     // Darker blue - for hover states
            light: '#3B82F6',     // Light blue - for backgrounds
            dark: '#1E40AF',      // Dark blue - for text on light backgrounds
        },
        // Neutral colors
        neutral: {
            white: '#FFFFFF',
            black: '#000000',
            gray: {
                50: '#F9FAFB',
                100: '#F3F4F6',
                200: '#E5E7EB',
                300: '#D1D5DB',
                400: '#9CA3AF',
                500: '#6B7280',
                600: '#4B5563',
                700: '#374151',
                800: '#1F2937',
                900: '#111827',
            }
        },

        // Semantic colors
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
    },

    // Typography
    fonts: {
        sans: 'system-ui, -apple-system, sans-serif',
    },

    // Spacing and sizing
    spacing: {
        container: '1280px',
    },
} as const;

// Export individual color values for easy access
export const colors = theme.colors;
export const primaryColor = theme.colors.primary.DEFAULT;
export const primaryHover = theme.colors.primary.hover;

// CSS custom properties for use in stylesheets
export const cssVariables = {
    '--color-primary': theme.colors.primary.DEFAULT,
    '--color-primary-hover': theme.colors.primary.hover,
    '--color-primary-light': theme.colors.primary.light,
    '--color-primary-dark': theme.colors.primary.dark,
};
