import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, CheckCircle2, RefreshCw, BarChart3, Settings, Brain } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { staggerContainer, staggerItem, fadeIn, viewportSettings } from '@/utils/animations';


function Accelerate() {
    const { t } = useTranslation('accelerate');
    const { t: tSolutions } = useTranslation('solutions');

    const whatWeDoItems = t('whatWeDo.items', { returnObjects: true });
    const safeWhatWeDoItems = Array.isArray(whatWeDoItems) ? whatWeDoItems : [];

    const impactItems = t('impact.items', { returnObjects: true });
    const safeImpactItems = Array.isArray(impactItems) ? impactItems : [];

    const cards = tSolutions('accelerate.cards', { returnObjects: true });
    const safeCards = Array.isArray(cards) ? cards : [];

    const getIcon = (id) => {
        switch (id) {
            case 'flows': return <Zap className="w-6 h-6" />;
            case 'approval': return <CheckCircle2 className="w-6 h-6" />;
            case 'support': return <BarChart3 className="w-6 h-6" />;
            case 'feedback': return <RefreshCw className="w-6 h-6" />;
            default: return <TrendingUp className="w-6 h-6" />;
        }
    };

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
                    border: 'ring-2 ring-[#E67E22]/30'
                };
            case 'intellify':
                return {
                    bg: 'bg-gradient-to-br from-[#0A1628] to-[#1a2d4a]',
                    text: 'text-white',
                    border: ''
                };
            default:
                return {
                    bg: 'bg-gray-100',
                    text: 'text-gray-800',
                    border: ''
                };
        }
    };

    return (
        <div className="overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FEF3E6] via-white to-[#fff8f0] -z-10" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#fce5cc]/50 to-transparent -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-3xl"
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={fadeIn.transition}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A1628] mb-4">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#E67E22] font-medium mb-6">
                            {t('hero.subtitle')}
                        </p>
                        <div className="text-lg text-text-secondary leading-relaxed mb-4">
                            <p dangerouslySetInnerHTML={{ __html: t('hero.intro') }} />
                        </div>
                        <div className="p-6 bg-orange-50/70 rounded-2xl border border-orange-100 mb-8">
                            <p className="text-text-secondary" dangerouslySetInnerHTML={{ __html: t('hero.description') }} />
                        </div>
                        <Button variant="outline" to="/services" className="inline-flex items-center gap-2 border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white">
                            Hizmetlere Geri Dön
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
                            const isActive = card.id === 'accelerate';

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
                                        to={card.id === 'accelerate' ? '#' : `/solutions/${card.id}`}
                                        className={`
                                            mt-auto inline-flex items-center gap-1 text-sm font-semibold
                                            px-4 py-2 rounded-full transition-all
                                            ${isActive
                                                ? 'bg-[#E67E22] text-white hover:bg-[#d9731b]'
                                                : card.id === 'simplify'
                                                    ? 'bg-[#1E6BB8] text-white hover:bg-[#155a9c]'
                                                    : 'bg-white/20 text-white hover:bg-white/30'
                                            }
                                        `}
                                    >
                                        Daha Fazla
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PURPOSE SECTION */}
            <Section background="white">
                <motion.div
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-6">
                        {t('purpose.title')}
                    </h2>
                    <p className="text-xl text-text-secondary font-medium leading-relaxed">
                        {t('purpose.description')}
                    </p>
                </motion.div>
            </Section>

            {/* WHAT WE DO SECTION */}
            <Section background="default">
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
                        {t('whatWeDo.title')}
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {safeWhatWeDoItems.map((item, index) => (
                            <motion.div
                                key={item.id || index}
                                className="flex gap-6 p-6 bg-white rounded-2xl border border-orange-100 shadow-sm"
                                variants={staggerItem}
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-[#E67E22] text-white rounded-xl flex items-center justify-center">
                                    {getIcon(item.id)}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0A1628] mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* IMPACT SECTION */}
            <Section background="white">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={fadeIn.initial}
                        whileInView={fadeIn.animate}
                        viewport={viewportSettings}
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#0A1628] mb-8">
                            {t('impact.title')}
                        </h2>

                        <div className="space-y-4">
                            {safeImpactItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-[#E67E22] text-white rounded-xl">
                                    <span className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-4 h-4" />
                                    </span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportSettings}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-br from-[#E67E22] to-orange-600 rounded-3xl p-1 shadow-2xl">
                            <div className="bg-white/10 backdrop-blur-md w-full h-full rounded-2xl border border-white/20 flex flex-col items-center justify-center text-white p-8 relative overflow-hidden">
                                <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-20" viewBox="0 0 100 50" preserveAspectRatio="none">
                                    <path d="M0 50 L20 40 L40 45 L60 20 L80 25 L100 0 V50 H0 Z" fill="currentColor" />
                                </svg>
                                <span className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter">
                                    {t('impact.metrics')}
                                </span>
                                <span className="text-xl text-orange-50 font-medium text-center uppercase tracking-wide">
                                    {t('impact.metricsLabel')}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* PERSPECTIVE / APPROACH SECTION */}
            <Section background="default">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                >
                    <h2 className="text-2xl font-bold mb-6 text-[#0A1628]">
                        {t('perspective.title')}
                    </h2>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        {t('perspective.text')}
                    </p>
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
                            Hızlandırma yolculuğunuza birlikte başlayalım.
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            to="/about"
                            className="bg-[#E67E22] hover:bg-[#d9731b] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
                        >
                            Birlikte Başlayalım
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Accelerate;
