import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cardHover } from '@/utils/animations';

/**
 * Reusable Card component for services and features
 */
function Card({
    children,
    className = '',
    variant = 'default',
    to,
    hover = true,
    ...props
}) {
    const variants = {
        default: 'bg-white',
        simplify: 'bg-simplify',
        accelerate: 'bg-accelerate',
        smartify: 'bg-smartify text-white',
    };

    const baseStyles = `
    rounded-2xl p-6 lg:p-8
    shadow-card
    ${variants[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    const content = (
        <motion.div
            className={baseStyles}
            {...(hover ? cardHover : {})}
            {...props}
        >
            {children}
        </motion.div>
    );

    if (to) {
        return (
            <Link to={to} className="block">
                {content}
            </Link>
        );
    }

    return content;
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'simplify', 'accelerate', 'smartify']),
    to: PropTypes.string,
    hover: PropTypes.bool,
};

export default Card;
