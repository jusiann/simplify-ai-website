import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportSettings } from '@/utils/animations';

/**
 * StatsGrid component for displaying statistics
 */
function StatsGrid({
    stats = [],
    title,
    variant = 'default',
}) {
    const backgrounds = {
        default: 'bg-white',
        dark: 'bg-accent text-white',
        gradient: 'bg-gradient-to-r from-primary to-primary-dark text-white',
    };

    return (
        <section className={`py-12 lg:py-16 ${backgrounds[variant]}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <motion.h2
                        className="text-2xl lg:text-3xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                    >
                        {title}
                    </motion.h2>
                )}

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id || index}
                            className="text-center"
                            variants={staggerItem}
                        >
                            <div className={`
                text-3xl lg:text-4xl font-bold mb-2
                ${variant === 'default' ? 'text-primary' : 'text-white'}
              `}>
                                {stat.value}
                            </div>
                            <div className={`
                text-sm
                ${variant === 'default' ? 'text-text-secondary' : 'text-gray-300'}
              `}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

StatsGrid.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })),
    title: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'dark', 'gradient']),
};

export default StatsGrid;
