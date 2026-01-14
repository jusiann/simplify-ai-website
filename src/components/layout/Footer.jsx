import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { viewportSettings } from '@/utils/animations';
import { useLocation } from 'react-router-dom';

/**
 * Shared Footer Component
 */
function Footer() {
    const { t } = useTranslation('home'); // Using 'home' namespace for common footer text if keys exist there, fallback to hardcoded if specific keys are needed
    const location = useLocation();

    // Determine the year dynamically
    const year = new Date().getFullYear();

    return (
        <section className="py-24 text-center border-t border-gray-100 bg-gray-50/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportSettings}
                className="space-y-4"
            >
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-3xl font-bold">
                        <span className="text-text-primary">Rumeli Simplify</span>
                        <span className="text-primary">.AI</span>
                    </span>
                </div>
                <p className="text-lg text-text-secondary tracking-widest uppercase font-medium">
                    Simplify. Accelerate. Smartify.
                </p>
                <p className="text-xs text-text-secondary/50 mt-12">
                    Rumeli SimplifAI | © {year} SimplifAI, All rights reserved.
                </p>
            </motion.div>
        </section>
    );
}

export default Footer;
