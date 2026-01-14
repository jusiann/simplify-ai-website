import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { staggerContainer, staggerItem, fadeIn, slideInLeft, viewportSettings } from '@/utils/animations';

/**
 * Simplify solution page component
 */
function Simplify() {
    const { t } = useTranslation('solutions');
    const { t: tCommon } = useTranslation('common');

    const whatWeDoItems = t('simplify.whatWeDo.items', { returnObjects: true });
    const impactItems = t('simplify.impact.items', { returnObjects: true });
    const cards = t('simplify.cards', { returnObjects: true });

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-simplify overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        className="max-w-3xl"
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={fadeIn.transition}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
                            {t('simplify.hero.title')}
                        </h1>
                        <p className="mt-6 text-xl text-text-secondary">
                            {t('simplify.hero.subtitle')}
                        </p>
                        <p className="mt-4 text-lg text-text-secondary">
                            {t('simplify.hero.description')}
                        </p>
                        <div className="mt-8">
                            <Button variant="outline" to="/services">
                                {t('simplify.hero.cta')}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <Section background="white">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                    transition={fadeIn.transition}
                >
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                        {t('simplify.intro.title')}
                    </h2>
                    <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-xl mb-6">
                        <ul className="space-y-2 text-lg text-text-secondary">
                            {t('simplify.intro.problems', { returnObjects: true }).map((problem, index) => (
                                <li key={index}>"{problem}"</li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                        {t('simplify.intro.cause')}
                    </p>
                </motion.div>
            </Section>

            {/* Purpose & What We Do */}
            <Section background="default">
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={slideInLeft.initial}
                        whileInView={slideInLeft.animate}
                        viewport={viewportSettings}
                        transition={slideInLeft.transition}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-primary">
                            {t('simplify.purpose.title')}
                        </h2>
                        <p className="text-lg text-text-primary">
                            {t('simplify.purpose.text')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={viewportSettings}
                    >
                        <h2 className="text-2xl font-bold mb-6">
                            {t('simplify.whatWeDo.title')}
                        </h2>
                        <ul className="space-y-4">
                            {whatWeDoItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-3"
                                    variants={staggerItem}
                                >
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4" />
                                    </span>
                                    <span className="text-text-secondary">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </Section>

            {/* Impact */}
            <Section background="white">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    <motion.h2
                        className="text-2xl lg:text-3xl font-bold text-center mb-8"
                        variants={staggerItem}
                    >
                        {t('simplify.impact.title')}
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {impactItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-simplify rounded-2xl"
                                variants={staggerItem}
                            >
                                <p className="text-text-primary">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Solution Cards */}
            <Section background="default">
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={`
                rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2
                ${index === 0 ? 'bg-simplify ring-2 ring-primary' : ''}
                ${index === 1 ? 'bg-accelerate' : ''}
                ${index === 2 ? 'bg-smartify text-white' : ''}
              `}
                            variants={staggerItem}
                        >
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-sm opacity-80 mb-3">{card.description}</p>
                            <p className="text-sm opacity-70">{card.details}</p>
                            {index !== 0 && (
                                <Link
                                    to={`/solutions/${card.id}`}
                                    className={`
                    inline-block mt-4 text-sm font-medium
                    ${index === 2 ? 'text-white' : 'text-primary'}
                  `}
                                >
                                    {tCommon('buttons.learnMore')} →
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            {/* CTA */}
            <Section background="gradient">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportSettings}
                >
                    <p className="text-lg text-text-primary mb-4">
                        {t('simplify.footer.main')}
                    </p>
                    <p className="text-xl font-semibold text-primary mb-8">
                        {t('simplify.footer.cta')}
                    </p>
                    <Button variant="secondary" size="lg" to="/about">
                        {t('simplify.footer.button')}
                    </Button>
                </motion.div>
            </Section>
        </div>
    );
}

export default Simplify;
