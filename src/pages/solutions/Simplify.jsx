import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, TrendingUp, Brain } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { fadeIn, viewportSettings } from '@/utils/animations';


function Simplify() {
    const { t } = useTranslation('solutions');

    const cards = t('simplify.cards', { returnObjects: true });
    const safeCards = Array.isArray(cards) ? cards : [];

    const impactItems = t('simplify.impact.items', { returnObjects: true });
    const safeImpactItems = Array.isArray(impactItems) ? impactItems : [];

    const getCardIcon = (id) => {
        switch (id) {
            case 'simplify':
                return <Settings className="w-8 h-8" />;
            case 'accelerate':
                return <TrendingUp className="w-8 h-8" />;
            case 'intellify':
                return <Brain className="w-8 h-8" />;
            default:
                return <Settings className="w-8 h-8" />;
        }
    };

    const getCardStyles = (id) => {
        switch (id) {
            case 'simplify':
                return {
                    bg: 'bg-gradient-to-br from-[#E6F4FA] to-[#d4eef9]',
                    text: 'text-[#1E6BB8]',
                    iconBg: 'bg-[#1E6BB8]/10',
                    border: 'ring-2 ring-[#1E6BB8]/30'
                };
            case 'accelerate':
                return {
                    bg: 'bg-gradient-to-br from-[#FEF3E6] to-[#fce5cc]',
                    text: 'text-[#E67E22]',
                    iconBg: 'bg-[#E67E22]/10',
                    border: ''
                };
            case 'intellify':
                return {
                    bg: 'bg-gradient-to-br from-[#0A1628] to-[#1a2d4a]',
                    text: 'text-white',
                    iconBg: 'bg-white/10',
                    border: ''
                };
            default:
                return {
                    bg: 'bg-gray-100',
                    text: 'text-gray-800',
                    iconBg: 'bg-gray-200',
                    border: ''
                };
        }
    };

    return (
        <div className="overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E6F4FA] via-white to-[#f0f9ff] -z-10" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#d4eef9]/50 to-transparent -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-3xl"
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={fadeIn.transition}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A1628] mb-4">
                            {t('simplify.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#0A1628] font-medium mb-6">
                            {t('simplify.hero.subtitle')}
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
                            {t('simplify.hero.description')}
                        </p>
                        <Button variant="outline" to="/services" className="inline-flex items-center gap-2">
                            {t('simplify.hero.cta')}
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
                            const isActive = card.id === 'simplify';

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
                                    {/* CARD HEADER */}
                                    <h3 className={`text-2xl font-bold mb-2 ${styles.text}`}>
                                        {card.title}
                                    </h3>
                                    <p className={`text-sm font-medium mb-3 ${card.id === 'intellify' ? 'text-gray-300' : 'text-text-primary'}`}>
                                        {card.subtitle}
                                    </p>
                                    <p className={`flex-1 text-sm leading-relaxed mb-6 ${card.id === 'intellify' ? 'text-gray-400' : 'text-text-secondary'}`}>
                                        {card.description}
                                    </p>

                                    {/* CARD LINK */}
                                    <Link
                                        to={card.id === 'simplify' ? '#' : `/solutions/${card.id}`}
                                        className={`
                                            mt-auto inline-flex items-center gap-1 text-sm font-semibold
                                            px-4 py-2 rounded-full transition-all
                                            ${isActive
                                                ? 'bg-[#1E6BB8] text-white hover:bg-[#155a9c]'
                                                : card.id === 'accelerate'
                                                    ? 'bg-[#E67E22] text-white hover:bg-[#d9731b]'
                                                    : 'bg-white/20 text-white hover:bg-white/30'
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

            {/* IMPACT SECTION */}
            <Section background="white">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-8">
                        {t('simplify.footer.main')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                        {safeImpactItems.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                            >
                                <p className="text-text-primary">{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* CTA SECTION */}
            <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                    >
                        <p className="text-xl md:text-2xl text-[#0A1628] font-medium mb-8">
                            {t('simplify.footer.cta')}
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            to="/about"
                            className="bg-[#1E6BB8] hover:bg-[#155a9c] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
                        >
                            {t('simplify.footer.button')}
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Simplify;
