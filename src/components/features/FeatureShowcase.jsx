import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Zap, Settings, Target, TrendingUp, Lightbulb, Users } from 'lucide-react';
import { staggerContainer, staggerItem, viewportSettings } from '@/utils/animations';
import Button from '@/components/ui/Button';

// Icon mapping
const iconMap = {
    strategy: BarChart3,
    brain: Brain,
    zap: Zap,
    settings: Settings,
    target: Target,
    trending: TrendingUp,
    lightbulb: Lightbulb,
    users: Users,
};

/**
 * FeatureShowcase component for displaying features in a grid
 */
function FeatureShowcase({
    title,
    subtitle,
    features = [],
    columns = 3,
    variant = 'default',
    showLinks = false,
}) {
    const gridCols = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4',
    };

    const cardStyles = {
        default: 'bg-white',
        simplify: 'bg-simplify',
        accelerate: 'bg-accelerate',
        smartify: 'bg-smartify text-white',
    };

    const getIcon = (iconType) => {
        const IconComponent = iconMap[iconType] || BarChart3;
        return <IconComponent className="w-6 h-6" />;
    };

    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <motion.div
                        className="text-center mb-12 lg:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.6 }}
                    >
                        {title && (
                            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}

                <motion.div
                    className={`grid grid-cols-1 ${gridCols[columns]} gap-6 lg:gap-8`}
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id || index}
                            className={`
                rounded-2xl p-6 lg:p-8 shadow-card
                ${cardStyles[feature.color || variant]}
                transition-shadow duration-300 hover:shadow-card-hover
              `}
                            variants={staggerItem}
                        >
                            {feature.iconType && (
                                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  ${feature.color === 'smartify' ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary'}
                `}>
                                    {getIcon(feature.iconType)}
                                </div>
                            )}

                            <h3 className={`
                text-xl font-semibold mb-3
                ${feature.color === 'smartify' ? 'text-white' : 'text-text-primary'}
              `}>
                                {feature.title}
                            </h3>

                            <p className={`
                text-sm leading-relaxed
                ${feature.color === 'smartify' ? 'text-gray-300' : 'text-text-secondary'}
              `}>
                                {feature.description}
                            </p>

                            {showLinks && feature.link && (
                                <Button
                                    variant={feature.color === 'smartify' ? 'ghost' : 'outline'}
                                    size="sm"
                                    to={feature.linkTo}
                                    className="mt-6"
                                >
                                    {feature.link} →
                                </Button>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

FeatureShowcase.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        iconType: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        color: PropTypes.string,
        link: PropTypes.string,
        linkTo: PropTypes.string,
    })),
    columns: PropTypes.oneOf([2, 3, 4]),
    variant: PropTypes.string,
    showLinks: PropTypes.bool,
};

export default FeatureShowcase;
