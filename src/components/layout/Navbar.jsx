import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Aperture, Search, Menu, X, ArrowLeft } from 'lucide-react';
import db from '../../data/db.json';

const links = [
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/blog', label: 'المدونة', blog: true },
  { to: '/about', label: 'من نحن', end: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(false);

  useEffect(() => {
    setMenuOpen(false);
    if (location.pathname === '/blog' && searchRef.current) {
      requestAnimationFrame(() => document.getElementById('blog-search')?.focus());
      searchRef.current = false;
    }
  }, [location.pathname]);

  function openSearch() {
    searchRef.current = true;
    if (location.pathname === '/blog') {
      requestAnimationFrame(() => document.getElementById('blog-search')?.focus());
    } else navigate('/blog');
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label="عدسة، الصفحة الرئيسية">
          <span className="brand-mark"><Aperture aria-hidden="true" /></span>
          <span className="brand-copy"><strong>{db.siteInfo.name}</strong><small>{db.siteInfo.tagline}</small></span>
        </Link>

        <nav className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="التنقل الرئيسي">
          {links.map(({ to, label, end, blog }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => {
                const active = blog
                  ? location.pathname === '/blog' || location.pathname.startsWith('/blog/')
                  : isActive;
                return `nav-link${active ? ' active' : ''}`;
              }}
            >{label}</NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-button search-trigger" onClick={openSearch} aria-label="البحث في المقالات">
            <Search size={21} />
          </button>
          <Link className="button button-primary nav-cta" to="/blog">ابدأ القراءة <ArrowLeft size={16} /></Link>
          <button className="icon-button menu-trigger" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}
