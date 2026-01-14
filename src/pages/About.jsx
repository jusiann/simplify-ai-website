import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Brain, Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import { staggerContainer, staggerItem, fadeIn, viewportSettings } from '@/utils/animations';

/**
 * About page component
 */
function About() {
    const { t } = useTranslation('about');

    const whatWeDoItems = t('whatWeDo.items', { returnObjects: true });

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section - Matching Home Page Style */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
                {/* Subtle Background Decor similar to Home */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-50/30 to-transparent -z-10 rounded-bl-[100px]" />

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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who We Are - Centered Text Only */}
            <Section background="white">
                <motion.div
                    initial={fadeIn.initial}
                    whileInView={fadeIn.animate}
                    viewport={viewportSettings}
                    transition={fadeIn.transition}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                        {t('whoWeAre.title')}
                    </h3>
                    <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                        <p dangerouslySetInnerHTML={{ __html: t('whoWeAre.intro') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('whoWeAre.description') }} />
                    </div>
                </motion.div>
            </Section>

            {/* Our Belief - Text directly on gray background */}
            <section className="py-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto p-8 lg:p-12"
                        initial={fadeIn.initial}
                        whileInView={fadeIn.animate}
                        viewport={viewportSettings}
                        transition={fadeIn.transition}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-8 text-center">
                            {t('belief.title')}
                        </h2>

                        <div className="space-y-6 text-lg text-text-secondary leading-relaxed text-center">
                            <p className="text-xl text-[#0A1628]" dangerouslySetInnerHTML={{ __html: t('belief.main') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('belief.description') }} />
                            <p className="italic text-primary" dangerouslySetInnerHTML={{ __html: t('belief.extended') }} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What We Do - Matching Home "Why SimplifAI" List Style */}
            <section className="py-24 bg-white overflow-hidden">
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

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {Array.isArray(whatWeDoItems) && whatWeDoItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={staggerItem}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={viewportSettings}
                                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 mt-1 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <p className="text-lg md:text-xl text-text-primary font-medium">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;
