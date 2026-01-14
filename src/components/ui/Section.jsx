import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn, viewportSettings } from '@/utils/animations';

/**
 * Reusable Section component for consistent page sections
 */
function Section({
    children,
    className = '',
    background = 'default',
    animate = true,
    id,
    ...props
}) {
    const backgrounds = {
        default: 'bg-background',
        white: 'bg-white',
        dark: 'bg-accent text-white',
        gradient: 'bg-gradient-to-b from-background to-white',
    };

    const baseStyles = `
    py-16 lg:py-24
    ${backgrounds[background]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    const Wrapper = animate ? motion.section : 'section';
    const animationProps = animate ? {
        initial: fadeIn.initial,
        whileInView: fadeIn.animate,
        transition: fadeIn.transition,
        viewport: viewportSettings,
    } : {};

    return (
        <Wrapper
            id={id}
            className={baseStyles}
            {...animationProps}
            {...props}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </Wrapper>
    );
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    background: PropTypes.oneOf(['default', 'white', 'dark', 'gradient']),
    animate: PropTypes.bool,
    id: PropTypes.string,
};

export default Section;
