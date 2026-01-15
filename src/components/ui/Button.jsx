import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    type = 'button',
    className = '',
    ...props
}) {
    const baseStyles = `
    inline-flex items-center justify-center font-medium 
    rounded-full transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

    const variants = {
        primary: `
      bg-primary text-white 
      hover:bg-primary-dark 
      focus:ring-primary
    `,
        secondary: `
      bg-secondary text-white 
      hover:bg-secondary-dark 
      focus:ring-secondary
    `,
        ghost: `
      bg-transparent text-text-primary 
      border border-text-primary 
      hover:bg-text-primary hover:text-white 
      focus:ring-text-primary
    `,
        outline: `
      bg-transparent text-primary 
      border-2 border-primary 
      hover:bg-primary hover:text-white 
      focus:ring-primary
    `,
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2.5 text-sm',
        lg: 'px-8 py-3 text-base',
    };

    const combinedClassName = `
    ${baseStyles} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${className}
  `.trim().replace(/\s+/g, ' ');


    if (href) {
        return (
            <a
                href={href}
                className={combinedClassName}
                {...props}
            >
                {children}
            </a>
        );
    }


    if (to) {
        return (
            <Link
                to={to}
                className={combinedClassName}
                {...props}
            >
                {children}
            </Link>
        );
    }


    return (
        <button
            type={type}
            className={combinedClassName}
            {...props}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'outline']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    href: PropTypes.string,
    to: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
};

export default Button;
