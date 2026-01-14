import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, GitPullRequest, Box, Cuboid as Cube } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { staggerContainer, staggerItem, fadeIn, viewportSettings } from '@/utils/animations';

/**
 * Services page component
 */
function Services() {
    const { t } = useTranslation('services');

    const services = t('services', { returnObjects: true });

    const getServiceLink = (id) => {
        switch (id) {
            case 'digital-process':
                return '/solutions/simplify';
            case 'decision-acceleration':
                return '/solutions/accelerate';
            case 'ai-architecture':
                return '/solutions/intellify';
            default:
                return '/services';
        }
    };

    const getServiceIcon = (id) => {
        switch (id) {
            case 'digital-process':
                return <Settings className="w-10 h-10 text-white" strokeWidth={1.5} />;
            case 'decision-acceleration':
                return <GitPullRequest className="w-10 h-10 text-white" strokeWidth={1.5} />;
            case 'ai-architecture':
                return <Cube className="w-10 h-10 text-white" strokeWidth={1.5} />;
            default:
                return <Box className="w-10 h-10 text-white" strokeWidth={1.5} />;
        }
    };

    const getIconBackground = (id) => {
        switch (id) {
            case 'digital-process':
                return 'bg-gradient-to-br from-[#3b8fd4] to-[#1E6BB8]'; // Blue
            case 'decision-acceleration':
                return 'bg-gradient-to-br from-[#f39c4d] to-[#E67E22]'; // Orange
            case 'ai-architecture':
                return 'bg-gradient-to-br from-[#7cb342] to-[#558b2f]'; // Greenish for AI/Architecture often used, or similar
            default:
                return 'bg-primary';
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={fadeIn.transition}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-8">
                            {t('hero.title')}
                        </h1>

                        <div className="space-y-4 max-w-2xl mx-auto">
                            <h2 className="text-lg md:text-xl text-text-secondary font-medium uppercase tracking-wide">
                                {t('hero.subtitle')}
                            </h2>
                            <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                                {t('hero.description')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={viewportSettings}
                    >
                        {Array.isArray(services) && services.map((service, index) => (
                            <motion.div
                                key={service.id || index}
                                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
                                variants={staggerItem}
                            >
                                {/* Circular Icon Container */}
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110 ${getIconBackground(service.id)}`}>
                                    {getServiceIcon(service.id)}
                                </div>

                                <h3 className="text-2xl font-bold text-[#0A1628] mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-text-secondary leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <Link
                                    to={getServiceLink(service.id)}
                                    className="mt-auto inline-flex items-center px-6 py-2.5 rounded-full bg-gray-100 text-[#0A1628] text-sm font-semibold hover:bg-[#1E6BB8] hover:text-white transition-all duration-300 group-hover:shadow-md"
                                >
                                    {service.link}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-24 pt-8 bg-gray-50/50">
                <div className="text-center">
                    <Button variant="primary" size="lg" to="/contact" className="px-8 py-3 bg-[#3b8fd4] hover:bg-[#1E6BB8] shadow-lg hover:shadow-xl rounded-full text-white font-medium">
                        {t('cta.text')} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </section>


        </div>
    );
}

export default Services;
