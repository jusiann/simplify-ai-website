import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

// Lazy load page components for code splitting
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Simplify = lazy(() => import('@/pages/solutions/Simplify'));
const Accelerate = lazy(() => import('@/pages/solutions/Accelerate'));
const Intellify = lazy(() => import('@/pages/solutions/Intellify'));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: 'solutions/simplify',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Simplify />
          </Suspense>
        ),
      },
      {
        path: 'solutions/accelerate',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Accelerate />
          </Suspense>
        ),
      },
      {
        path: 'solutions/intellify',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Intellify />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
