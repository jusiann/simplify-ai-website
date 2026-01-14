import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/utils/ScrollToTop';

/**
 * Layout wrapper component with Navbar and Footer
 */
function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            {/* Skip Link for Accessibility */}
            <a
                href="#main-content"
                className="skip-link"
            >
                Skip to main content
            </a>

            <Navbar />

            <main
                id="main-content"
                className="flex-1 pt-16 lg:pt-20"
                role="main"
            >
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default Layout;
