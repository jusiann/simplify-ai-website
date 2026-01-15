import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, TrendingUp, BarChart3, Lightbulb, Bot, Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { fadeIn, viewportSettings, staggerContainer, staggerItem } from '@/utils/animations';


function Intellify() {
    const { t } = useTranslation('solutions');

    const cards = t('smartify.cards', { returnObjects: true });
    const safeCards = Array.isArray(cards) ? cards : [];

    const whatWeDoItems = t('smartify.whatWeDo.items', { returnObjects: true });
    const safeWhatWeDoItems = Array.isArray(whatWeDoItems) ? whatWeDoItems : [];

    const impactItems = t('smartify.impact.items', { returnObjects: true });
    const safeImpactItems = Array.isArray(impactItems) ? impactItems : [];

    const systemItems = t('smartify.systems.items', { returnObjects: true });
    const safeSystemItems = Array.isArray(systemItems) ? systemItems : [];

    const getCardStyles = (id) => {
        switch (id) {
            case 'simplify':
                return {
                    bg: 'bg-gradient-to-br from-[#E6F4FA] to-[#d4eef9]',
                    text: 'text-[#1E6BB8]',
                    border: ''
                };
            case 'accelerate':
                return {
                    bg: 'bg-gradient-to-br from-[#FEF3E6] to-[#fce5cc]',
                    text: 'text-[#E67E22]',
                    border: ''
                };
            case 'intellify':
                return {
                    bg: 'bg-gradient-to-br from-[#0A1628] to-[#1a2d4a]',
                    text: 'text-white',
                    border: 'ring-2 ring-white/30'
                };
            default:
                return {
                    bg: 'bg-gray-100',
                    text: 'text-gray-800',
                    border: ''
                };
        }
    };

    const getWhatWeDoIcon = (index) => {
        const icons = [Brain, Bot, TrendingUp];
        const Icon = icons[index] || Brain;
        return <Icon className="w-6 h-6" />;
    };

    const getSystemIcon = (iconName) => {
        switch (iconName) {
            case 'chart':
                return <BarChart3 className="w-8 h-8" />;
            case 'lightbulb':
                return <Lightbulb className="w-8 h-8" />;
            case 'robot':
                return <Bot className="w-8 h-8" />;
            default:
                return <Brain className="w-8 h-8" />;
        }
    };

    return (
        <div className="overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1a2d4a] to-[#0A1628] -z-10" />
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 -z-10">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-40 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-3xl"
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={fadeIn.transition}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
                            {t('smartify.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                            {t('smartify.hero.subtitle')}
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
                            {t('smartify.hero.description')}
                        </p>
                        <Button
                            variant="ghost"
                            to="/services"
                            className="border-white text-white hover:bg-white hover:text-[#0A1628] inline-flex items-center gap-2"
                        >
                            {t('smartify.hero.cta')}
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE CARDS SECTION */}
            <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {safeCards.map((card, index) => {
                            const styles = getCardStyles(card.id);
                            const isActive = card.id === 'intellify';

                            return (
                                <motion.div
                                    key={card.id || index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={viewportSettings}
                                    transition={{ delay: index * 0.1 }}
                                    className={`
                                        relative flex flex-col items-center text-center rounded-2xl p-6 lg:p-8 h-full
                                        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                                        ${styles.bg} ${styles.border}
                                        ${card.id === 'intellify' ? 'text-white' : ''}
                                    `}
                                >
                                    <h3 className={`text-2xl font-bold mb-2 ${styles.text}`}>
                                        {card.title}
                                    </h3>
                                    <p className={`text-sm font-medium mb-3 ${card.id === 'intellify' ? 'text-gray-300' : 'text-text-primary'}`}>
                                        {card.subtitle}
                                    </p>
                                    <p className={`flex-1 text-sm leading-relaxed mb-6 ${card.id === 'intellify' ? 'text-gray-400' : 'text-text-secondary'}`}>
                                        {card.description}
                                    </p>

                                    <Link
                                        to={card.id === 'intellify' ? '#' : `/solutions/${card.id}`}
                                        className={`
                                            mt-auto inline-flex items-center gap-1 text-sm font-semibold
                                            px-4 py-2 rounded-full transition-all
                                            ${isActive
                                                ? 'bg-white/20 text-white hover:bg-white/30'
                                                : card.id === 'simplify'
                                                    ? 'bg-[#1E6BB8] text-white hover:bg-[#155a9c]'
                                                    : 'bg-[#E67E22] text-white hover:bg-[#d9731b]'
                                            }
                                        `}
                                    >
                                        {card.link}
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SYSTEMS SECTION */}
            <Section background="white">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] text-center mb-8">
                        {t('smartify.systems.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                        <div>
                            <p className="text-lg text-text-secondary mb-6">
                                {t('smartify.systems.subtitle')}
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            {safeSystemItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-16 h-16 bg-[#0A1628]/5 rounded-xl flex items-center justify-center text-[#0A1628]">
                                        {getSystemIcon(item.icon)}
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-text-secondary font-medium">{item.title}</p>
                                    </div>
                                    {index < safeSystemItems.length - 1 && (
                                        <span className="text-2xl text-gray-300 mx-2">+</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-text-secondary max-w-3xl mx-auto">
                        {t('smartify.systems.description')}
                    </p>
                </motion.div>
            </Section>

            {/* PURPOSE */}
            <Section background="default">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                >
                    <h2 className="text-2xl font-bold mb-4 text-[#0A1628]">
                        {t('smartify.purpose.title')}
                    </h2>
                    <p className="text-xl text-text-primary leading-relaxed">
                        {t('smartify.purpose.text')}
                    </p>
                </motion.div>
            </Section>

            {/* WHAT WE DO */}
            <Section background="white">
                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    <motion.h2
                        className="text-2xl lg:text-3xl font-bold text-center mb-12 text-[#0A1628]"
                        variants={staggerItem}
                    >
                        {t('smartify.whatWeDo.title')}
                    </motion.h2>

                    <div className="space-y-6">
                        {safeWhatWeDoItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-6 p-6 bg-[#0A1628]/5 rounded-2xl border border-[#0A1628]/10"
                                variants={staggerItem}
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-[#0A1628] text-white rounded-xl flex items-center justify-center">
                                    {getWhatWeDoIcon(index)}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0A1628] mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* IMPACT */}
            <Section background="default">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    <motion.h2
                        className="text-2xl lg:text-3xl font-bold text-center mb-8 text-[#0A1628]"
                        variants={staggerItem}
                    >
                        {t('smartify.impact.title')}
                    </motion.h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {safeImpactItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-[#0A1628] text-white rounded-xl"
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

            {/* APPROACH */}
            <Section background="white">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                >
                    <h2 className="text-2xl font-bold mb-6 text-[#0A1628]">
                        {t('smartify.approach.title')}
                    </h2>
                    <p className="text-lg text-text-secondary mb-4">
                        {t('smartify.approach.main')}
                    </p>
                    <p className="text-xl text-[#0A1628] font-medium">
                        {t('smartify.approach.conclusion')}
                    </p>
                </motion.div>
            </Section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                    >
                        <p className="text-xl md:text-2xl text-[#0A1628] font-medium mb-8">
                            {t('smartify.footer.main')}
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            to="/about"
                            className="bg-[#0A1628] hover:bg-[#1a2d4a] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
                        >
                            {t('smartify.footer.button')}
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Intellify;
