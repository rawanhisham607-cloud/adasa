import { Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Twitter } from 'lucide-react';
import NewsletterForm from '../NewsletterForm.jsx';
import db from '../../data/db.json';

const social = [
  { label: 'YouTube', Icon: Youtube, key: 'youtube' },
  { label: 'LinkedIn', Icon: Linkedin, key: 'linkedin' },
  { label: 'GitHub', Icon: Github, key: 'github' },
  { label: 'X', Icon: Twitter, key: 'twitter' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main content-width">
        <section className="footer-brand" aria-label="عن عدسة">
          <Link to="/" className="footer-brand-title"><span className="footer-mark">ع</span><strong>{db.siteInfo.name}</strong></Link>
          <p>{db.siteInfo.description}</p>
          <div className="social-links">
            {social.map(({ label, Icon, key }) => <a key={label} href={db.siteInfo.social[key]} aria-label={label} target="_blank" rel="noreferrer"><Icon size={18} /></a>)}
          </div>
        </section>

        <FooterColumn title="استكشف">
          <Link to="/">الرئيسية</Link><Link to="/blog">المدونة</Link><Link to="/about">من نحن</Link>
        </FooterColumn>
        <FooterColumn title="التصنيفات">
          <Link to="/blog?category=lighting">إضاءة</Link><Link to="/blog?category=portrait">بورتريه</Link>
          <Link to="/blog?category=landscape">مناظر طبيعية</Link><Link to="/blog?category=techniques">تقنيات</Link>
        </FooterColumn>
        <section className="footer-newsletter">
          <h2 className="footer-heading">ابقى على اطلاع</h2>
          <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <NewsletterForm compact />
        </section>
      </div>
      <div className="footer-bottom">
        <div className="content-width footer-bottom-inner">
          <p>© 2026 {db.siteInfo.name}. صنع بـ <span className="heart">♥</span> جميع الحقوق محفوظة.</p>
          <div><Link to="/privacy">سياسة الخصوصية</Link><Link to="/terms">شروط الخدمة</Link></div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return <section className="footer-column"><h2 className="footer-heading">{title}</h2><div className="footer-links">{children}</div></section>;
}
