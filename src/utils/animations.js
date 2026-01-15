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


export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};


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


export const viewportSettings = {
    once: true,
    amount: 0.3,
};


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
