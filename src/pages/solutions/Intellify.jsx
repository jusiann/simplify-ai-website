import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { staggerContainer, staggerItem, fadeIn, viewportSettings } from '@/utils/animations';

const icons = [Brain, Zap, TrendingUp];

/**
 * Intellify/Smartify solution page component
 */
function Intellify() {
    const { t } = useTranslation('solutions');
    const { t: tCommon } = useTranslation('common');

    const whatWeDoItems = t('smartify.whatWeDo.items', { returnObjects: true });
    const impactItems = t('smartify.impact.items', { returnObjects: true });
    const methodologyStages = t('smartify.methodology.stages', { returnObjects: true });

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-smartify text-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        className="max-w-3xl"
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={fadeIn.transition}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {t('smartify.hero.title')}
                        </h1>
                        <p className="mt-6 text-xl text-gray-300">
                            {t('smartify.hero.subtitle')}
                        </p>
                        <p className="mt-4 text-lg text-gray-400">
                            {t('smartify.hero.description')}
                        </p>
                        <div className="mt-8">
                            <Button variant="ghost" to="/services" className="border-white text-white hover:bg-white hover:text-accent">
                                {t('smartify.hero.cta')}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <Section background="white">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                    transition={fadeIn.transition}
                >
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                        {t('smartify.intro.title')}
                    </h2>
                    <p className="text-lg text-text-secondary mb-6">
                        {t('smartify.intro.description')}
                    </p>
                    <p className="text-xl font-semibold text-primary">
                        {t('smartify.intro.conclusion')}
                    </p>
                </motion.div>
            </Section>

            {/* Purpose */}
            <Section background="default">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                        {t('smartify.purpose.title')}
                    </h2>
                    <p className="text-xl text-text-primary">
                        {t('smartify.purpose.text')}
                    </p>
                </motion.div>
            </Section>

            {/* What We Do */}
            <Section background="white">
                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    <motion.h2
                        className="text-2xl lg:text-3xl font-bold text-center mb-12"
                        variants={staggerItem}
                    >
                        {t('smartify.whatWeDo.title')}
                    </motion.h2>

                    <div className="space-y-6">
                        {whatWeDoItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-6 p-6 bg-smartify/5 rounded-2xl border border-smartify/10"
                                variants={staggerItem}
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-smartify text-white rounded-xl flex items-center justify-center">
                                    {(() => { const Icon = icons[index] || Brain; return <Icon className="w-6 h-6" />; })()}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-text-secondary">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Impact */}
            <Section background="default">
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
                        {t('smartify.impact.title')}
                    </motion.h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {impactItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-smartify text-white rounded-xl"
                                variants={staggerItem}
                            >
                                <span className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4" />
                                </span>
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Approach */}
            <Section background="white">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                >
                    <h2 className="text-2xl font-bold text-center mb-6">
                        {t('smartify.approach.title')}
                    </h2>
                    <p className="text-lg text-text-secondary text-center mb-4">
                        {t('smartify.approach.main')}
                    </p>
                    <p className="text-xl text-primary font-medium text-center">
                        {t('smartify.approach.conclusion')}
                    </p>
                </motion.div>
            </Section>

            {/* Methodology */}
            <Section background="default">
                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    <motion.div className="text-center mb-12" variants={staggerItem}>
                        <h2 className="text-2xl lg:text-3xl font-bold">
                            {t('smartify.methodology.title')}
                        </h2>
                        <p className="mt-2 text-text-secondary">
                            {t('smartify.methodology.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {methodologyStages.map((stage) => (
                            <motion.div
                                key={stage.id}
                                className="text-center p-5 bg-white rounded-2xl shadow-sm"
                                variants={staggerItem}
                            >
                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-base font-bold">
                                    {stage.id}
                                </div>
                                <h3 className="font-semibold text-text-primary text-sm">{stage.title}</h3>
                                <p className="text-xs text-text-secondary mt-1 leading-relaxed">{stage.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        className="text-center mt-8 text-lg text-primary font-medium"
                        variants={staggerItem}
                    >
                        {t('smartify.methodology.footer')}
                    </motion.p>
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
                    <p className="text-2xl font-bold text-smartify mb-8">
                        {t('smartify.approach.main')}
                    </p>
                    <Button variant="primary" size="lg" to="/about">
                        {tCommon('buttons.startTogether')}
                    </Button>
                </motion.div>
            </Section>
        </div>
    );
}

export default Intellify;
