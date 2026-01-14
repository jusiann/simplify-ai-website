/**
 * Framer Motion animation variants for SimplifAI website
 * All animations use GPU-accelerated properties (transform, opacity) for performance
 */

// Fade in from bottom
export const fadeIn = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    transition: {
        duration: 0.6,
        ease: 'easeOut',
    },
};

// Fade in from left
export const slideInLeft = {
    initial: {
        opacity: 0,
        x: -50,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    transition: {
        duration: 0.6,
        ease: 'easeOut',
    },
};

// Fade in from right
export const slideInRight = {
    initial: {
        opacity: 0,
        x: 50,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    transition: {
        duration: 0.6,
        ease: 'easeOut',
    },
};

// Scale up fade in
export const scaleIn = {
    initial: {
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
    transition: {
        duration: 0.5,
        ease: 'easeOut',
    },
};

// Container for staggered children animations
export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Individual stagger item
export const staggerItem = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Hover scale effect for interactive elements
export const scaleOnHover = {
    whileHover: {
        scale: 1.05,
    },
    whileTap: {
        scale: 0.98,
    },
    transition: {
        duration: 0.3,
        ease: 'easeInOut',
    },
};

// Viewport animation settings
export const viewportSettings = {
    once: true,
    amount: 0.3,
};

// Hero text animation with letter stagger
export const heroTextVariants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Card hover animation
export const cardHover = {
    initial: {
        y: 0,
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    },
    whileHover: {
        y: -8,
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

// Page transition
export const pageTransition = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        },
    },
};
