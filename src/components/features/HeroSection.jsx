import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { heroTextVariants, staggerContainer, staggerItem } from '@/utils/animations';

/**
 * HeroSection component for page headers
 */
function HeroSection({
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    variant = 'default',
    showCards = false,
    cards = [],
}) {
    const backgrounds = {
        default: 'bg-gradient-to-b from-white to-background',
        dark: 'bg-accent text-white',
        light: 'bg-background',
    };

    return (
        <section className={`relative py-20 lg:py-32 overflow-hidden ${backgrounds[variant]}`}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        variants={heroTextVariants}
                    >
                        {title}
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed"
                            variants={staggerItem}
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {description && (
                        <motion.p
                            className="mt-4 text-base text-text-secondary"
                            variants={staggerItem}
                        >
                            {description}
                        </motion.p>
                    )}

                    {ctaText && (
                        <motion.div
                            className="mt-8"
                            variants={staggerItem}
                        >
                            <Button
                                variant="ghost"
                                size="lg"
                                to={ctaLink}
                            >
                                {ctaText}
                            </Button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Solution Cards */}
                {showCards && cards.length > 0 && (
                    <motion.div
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                className={`
                  rounded-2xl p-6 lg:p-8 relative overflow-hidden
                  ${index === 0 ? 'bg-simplify' : ''}
                  ${index === 1 ? 'bg-accelerate' : ''}
                  ${index === 2 ? 'bg-smartify text-white' : ''}
                `}
                                variants={staggerItem}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            >
                                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                <p className="text-sm opacity-80 mb-4">{card.subtitle}</p>
                                <p className="text-sm leading-relaxed opacity-90">
                                    {card.description}
                                </p>
                                {card.link && (
                                    <Button
                                        variant={index === 2 ? 'ghost' : 'outline'}
                                        size="sm"
                                        to={`/solutions/${card.id}`}
                                        className="mt-6"
                                    >
                                        {card.link} →
                                    </Button>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}

HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'dark', 'light']),
    showCards: PropTypes.bool,
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
    })),
};

export default HeroSection;
