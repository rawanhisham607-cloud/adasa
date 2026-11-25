import { Link } from 'react-router-dom';
import { ArrowLeft, Info, Camera, Mail, ChevronLeft } from 'lucide-react';
import db from '../data/db.json';
import { categories } from '../data/categories.js';
import { HOME_STATS } from '../data/constants.js';
import { avatarImage, resizeImage } from '../utils/img.js';
import StatCard from '../components/ui/StatCard.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import FeaturedPostCard from '../components/posts/FeaturedPostCard.jsx';
import PostCard from '../components/posts/PostCard.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';

const sorted = [...db.posts].sort((a, b) => b.date.localeCompare(a.date));
const featured = sorted.filter(post => post.featured);
const latest = sorted.filter(post => !post.featured).slice(0, 3);
const categoryCounts = Object.fromEntries(categories.map(category => [category.name, db.posts.filter(post => post.category === category.name).length]));

export default function Home() {
  return <main>
    <section className="home-hero grid-glow"><div className="home-hero-inner">
      <span className="eyebrow"><i/>مرحباً بك في عدسة</span>
      <h1>اكتشف <em>فن</em><br/>التصوير الفوتوغرافي</h1>
      <p>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
      <div className="hero-actions"><Link className="button button-primary" to="/blog">استكشف المقالات <ArrowLeft size={18}/></Link><Link className="button button-outline" to="/about"><Info size={18}/> اعرف المزيد</Link></div>
      <div className="stats-row">{HOME_STATS.map((stat, i) => <StatCard key={stat.label} {...stat} index={i}/>)}</div>
    </div></section>

    <section className="home-section featured-section"><div className="content-width">
      <div className="section-topline"><SectionHeader align="right" badge="مميز" title="مقالات مختارة" subtitle="محتوى منتقى لبدء رحلة تعلمك"/><Link className="button button-primary small-button" to="/blog">عرض الكل <ArrowLeft size={16}/></Link></div>
      <div className="featured-stack">{featured.map(post => <FeaturedPostCard key={post.id} post={post}/>)}</div>
    </div></section>

    <section className="home-section categories-section"><div className="content-width"><SectionHeader badge="التصنيفات" title="استكشف حسب الموضوع" subtitle="اعثر على محتوى مصمم حسب اهتماماتك"/>
      <div className="home-categories">{categories.map(({slug, name, icon: Icon}) => <Link className="home-category" key={slug} to={`/blog?category=${slug}`}><span className="category-icon"><Icon/></span><strong>{name}</strong><small>{categoryCounts[name] ?? 0} مقالة</small></Link>)}</div>
    </div></section>

    <section className="home-section latest-section"><div className="content-width"><div className="section-topline"><SectionHeader align="right" badge="الأحدث" title="أحدث المقالات" subtitle="محتوى جديد طازج من المطبعة"/><Link className="section-text-link" to="/blog">عرض جميع المقالات <ArrowLeft size={16}/></Link></div>
      <div className="latest-grid">{latest.map(post => <PostCard key={post.id} post={post}/>)}</div>
    </div></section>

    <section className="newsletter-section"><div className="newsletter-panel"><span className="newsletter-icon"><Mail/></span><h2>اشترك في <em>نشرتنا الإخبارية</em></h2><p>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p><NewsletterForm avatars={db.posts.slice(0, 3).map(post => avatarImage(post.author.avatar))}/></div></section>
  </main>;
}
