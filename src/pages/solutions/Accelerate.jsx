import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, FastForward, CheckCircle2, RefreshCw, BarChart3 } from 'lucide-react';
import Section from '@/components/ui/Section';
import { staggerContainer, staggerItem, fadeIn, viewportSettings } from '@/utils/animations';

/**
 * Accelerate (Hızlandır) Solution Page
 * Theme: Orange / Speed / Efficiency
 */
function Accelerate() {
    const { t } = useTranslation('accelerate');

    // Helper to check if items exist to prevent errors
    const whatWeDoItems = t('whatWeDo.items', { returnObjects: true });
    const safeWhatWeDoItems = Array.isArray(whatWeDoItems) ? whatWeDoItems : [];

    const impactItems = t('impact.items', { returnObjects: true });
    const safeImpactItems = Array.isArray(impactItems) ? impactItems : [];

    // Icon mapping for What We Do section
    const getIcon = (id) => {
        switch (id) {
            case 'flows': return <Zap className="w-8 h-8 text-[#E67E22]" />;
            case 'approval': return <CheckCircle2 className="w-8 h-8 text-[#E67E22]" />;
            case 'support': return <BarChart3 className="w-8 h-8 text-[#E67E22]" />;
            case 'feedback': return <RefreshCw className="w-8 h-8 text-[#E67E22]" />;
            default: return <FastForward className="w-8 h-8 text-[#E67E22]" />;
        }
    };

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
                {/* Background Decor - Orange Theme */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-orange-50/40 to-transparent -z-10 rounded-bl-[100px]" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-orange-50/30 to-transparent -z-10 rounded-tr-[100px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A1628] mb-6">
                                {t('hero.title')}
                            </h1>
                            <p className="text-xl md:text-2xl text-[#E67E22] font-bold mb-8 uppercase tracking-wide">
                                {t('hero.subtitle')}
                            </p>

                            <div className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto space-y-6">
                                <p dangerouslySetInnerHTML={{ __html: t('hero.intro') }} />
                                <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100">
                                    <p dangerouslySetInnerHTML={{ __html: t('hero.description') }} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Purpose Section */}
            <Section background="white">
                <motion.div
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-6">
                        {t('purpose.title')}
                    </h2>
                    <p className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed">
                        {t('purpose.description')}
                    </p>
                </motion.div>
            </Section>

            {/* What We Do - Card Grid */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">
                            {t('whatWeDo.title')}
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {safeWhatWeDoItems.map((item, index) => (
                            <motion.div
                                key={item.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportSettings}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                            >
                                <div className="mb-6 p-4 bg-orange-50 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                                    {getIcon(item.id)}
                                </div>
                                <h3 className="text-xl font-bold text-[#0A1628] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section - Rising Graph Visual */}
            <Section background="white">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={fadeIn.initial}
                        whileInView={fadeIn.animate}
                        viewport={viewportSettings}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-12">
                            {t('impact.title')}
                        </h2>

                        <div className="space-y-8">
                            {safeImpactItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <TrendingUp className="w-6 h-6 text-[#E67E22]" />
                                    </div>
                                    <p className="text-lg text-text-primary font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Impact Metric Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportSettings}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-br from-[#E67E22] to-orange-600 rounded-3xl p-1 shadow-2xl transition-all duration-500">
                            <div className="bg-white/10 backdrop-blur-md w-full h-full rounded-2xl border border-white/20 flex flex-col items-center justify-center text-white p-8 relative overflow-hidden">
                                {/* Abstract chart lines background */}
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

            {/* SimplifAI Perspective - Bottom CTA style */}
            <section className="py-24 bg-[#0A1628] text-white overflow-hidden relative">
                {/* Abstract Lines */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="0" y1="80" x2="80" y2="0" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            {t('perspective.title')}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                            {t('perspective.text')}
                        </p>
                    </motion.div>
                </div>
            </section>


        </div>
    );
}

export default Accelerate;
