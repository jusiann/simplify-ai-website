import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageToggle from '@/components/layout/LanguageToggle';

/**
 * Navbar component with responsive design and fixed-width language toggle
 */
function Navbar() {
    const { t } = useTranslation('common');
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Fixed-width nav items to prevent layout shift
    const navLinks = [
        { path: '/', label: t('nav.home'), minWidth: 'min-w-[50px]' },
        { path: '/services', label: t('nav.services'), minWidth: 'min-w-[70px]' },
        { path: '/about', label: t('nav.about'), minWidth: 'min-w-[50px]' },
        { path: '/blog', label: t('nav.blog'), minWidth: 'min-w-[50px]' },
        { path: '/contact', label: 'Contact', minWidth: 'min-w-[70px]' },
    ];

    const isActivePath = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo - Fixed width */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 min-w-[200px]"
                        aria-label="SimplifAI Home"
                    >
                        <span className="text-xl lg:text-2xl font-bold">
                            <span className="text-text-primary">simplify</span>
                            <span className="text-primary">.AI</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation - Fixed width items */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`${link.minWidth} text-center text-sm font-medium transition-colors duration-300 ${isActivePath(link.path)
                                    ? 'text-primary'
                                    : 'text-text-secondary hover:text-text-primary'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="ml-4 border-l pl-4 border-gray-200">
                            <LanguageToggle />
                        </div>

                        <Link
                            to="/contact"
                            className="ml-4 px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full 
                hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-text-primary"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
                        >
                            <div className="py-4 space-y-2 flex flex-col">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`block px-4 py-2 text-sm font-medium transition-colors ${isActivePath(link.path)
                                            ? 'text-primary bg-primary/5'
                                            : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <div className="px-4 py-3 border-t border-gray-50 mt-2 flex items-center justify-between">
                                    <span className="text-sm text-text-secondary">Language</span>
                                    <LanguageToggle />
                                </div>

                                <div className="px-4 pt-2 pb-2 flex justify-start">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white 
                      text-sm font-medium rounded-full hover:bg-primary-dark transition-colors shadow-md"
                                    >
                                        Get in Touch
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}

export default Navbar;
