import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { staggerContainer, staggerItem, fadeIn, viewportSettings } from '@/utils/animations';

import googleLogo from '@/assets/images/google.svg';
import metaLogo from '@/assets/images/meta.svg';
import awsLogo from '@/assets/images/aws.svg';
import microsoftLogo from '@/assets/images/microsoft.svg';


function Home() {
    const { t } = useTranslation('home');

    const approachCards = t('approach.cards', { returnObjects: true });
    const safeApproachCards = Array.isArray(approachCards) ? approachCards : [];

    const whyReasons = t('why.reasons', { returnObjects: true });
    const safeWhyReasons = Array.isArray(whyReasons) ? whyReasons : [];

    return (
        <div className="overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* BACKGROUND DECOR */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-50/50 to-transparent -z-10 rounded-bl-[100px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center">
                        {/* HERO TEXT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary mb-6">
                                <span dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
                            </h1>
                            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
                                {t('hero.subtitle')}
                            </p>
                            <Button variant="primary" className="bg-text-primary text-white hover:bg-text-primary/90 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all" to="/services">
                                {t('hero.cta')}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CARDS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {safeApproachCards.map((card, index) => (
                            <motion.div
                                key={card.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col items-center text-center px-8 pt-12 pb-8 rounded-2xl overflow-hidden group h-full
                                    ${card.id === 'simplify' ? 'bg-[#E6F4FA]' : ''}
                                    ${card.id === 'accelerate' ? 'bg-gradient-to-br from-[#FEF3E6] to-[#FDEBD0]' : ''}
                                    ${card.id === 'intellify' ? 'bg-[#0A1628] text-white' : ''}
                                `}
                            >
                                {/* DECORATIVE ELEMENTS */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                                    <svg viewBox="0 0 100 100" fill="currentColor" className={card.id === 'intellify' ? 'text-white' : 'text-primary'}>
                                        <circle cx="80" cy="80" r="40" />
                                    </svg>
                                </div>

                                <h3 className={`text-3xl font-bold mb-1 ${card.id === 'simplify' ? 'text-[#1E6BB8]' : ''} ${card.id === 'accelerate' ? 'text-[#E67E22]' : ''}`}>
                                    {card.title}
                                </h3>
                                <p className={`text-lg font-medium mb-4 ${card.id === 'intellify' ? 'text-gray-200' : 'text-text-primary'}`}>
                                    {card.subtitle}
                                </p>
                                <p className={`flex-1 mb-6 leading-relaxed ${card.id === 'intellify' ? 'text-gray-400' : 'text-text-secondary'}`}>
                                    {card.description}
                                </p>

                                <Link
                                    to={`/solutions/${card.id}`}
                                    className={`mt-auto inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all
                                        ${card.id === 'simplify' ? 'bg-[#3b8fd4] text-white hover:bg-[#1E6BB8]' : ''}
                                        ${card.id === 'accelerate' ? 'bg-[#E67E22] text-white hover:bg-[#d9731b]' : ''}
                                        ${card.id === 'intellify' ? 'bg-[#1a2d4a] text-white border border-gray-700 hover:bg-[#253e63]' : ''}
                                    `}
                                >
                                    {card.link}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY SIMPLIFAI SECTION */}
            <section className="relative py-24 bg-background overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                            {t('why.title')}
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {safeWhyReasons.map((reason, index) => (
                                <motion.div
                                    key={reason.id || index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 mt-1 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <p className="text-lg md:text-xl text-text-primary font-medium">{reason.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BRANDS SECTION */}
            <section className="py-12 border-t border-gray-100 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60">
                        <img src={googleLogo} alt="Google" className="h-8 md:h-10" />
                        <img src={metaLogo} alt="Meta" className="h-8 md:h-10" />
                        <img src={awsLogo} alt="AWS" className="h-8 md:h-10" />
                        <img src={microsoftLogo} alt="Microsoft" className="h-8 md:h-10" />
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
