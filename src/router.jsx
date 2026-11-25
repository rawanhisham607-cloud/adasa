import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import About from './pages/About.jsx';
import LegalPage from './pages/LegalPage.jsx';

function StepPlaceholder({ title }) {
  return (
    <main className="placeholder-page grid-glow">
      <span className="eyebrow"><i /> عدسة</span>
      <h1>{title}</h1>
      <p>سيكون هذا القسم متاحاً في الخطوة التالية.</p>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:slug', element: <BlogDetails /> },
      { path: '/about', element: <About /> },
      { path: '/privacy', element: <LegalPage type="privacy" /> },
      { path: '/terms', element: <LegalPage type="terms" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
