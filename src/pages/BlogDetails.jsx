import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Home as HomeIcon, ChevronLeft, CalendarDays, Clock3, Camera, Image as ImageIcon, Mail } from 'lucide-react';
import db from '../data/db.json';
import { categoryByName } from '../data/categories.js';
import { formatDate } from '../utils/formatDate.js';
import { avatarImage, detailImage } from '../utils/img.js';
import { parseContent } from '../utils/parseContent.js';
import TOC from '../components/details/TOC.jsx';
import TagsCard from '../components/details/TagsCard.jsx';
import ShareCard from '../components/details/ShareCard.jsx';
import AuthorCard from '../components/details/AuthorCard.jsx';
import RelatedPostCard from '../components/posts/RelatedPostCard.jsx';
import NotFound from './NotFound.jsx';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = db.posts.find(item => item.slug === slug);
  const parsed = useMemo(() => post ? parseContent(post.content) : { intro: [], sections: [] }, [post]);

  useEffect(() => {
    if (!post) return;
    const previous = document.title;
    document.title = `${post.title} | عدسة`;
    return () => { document.title = previous; };
  }, [post]);

  if (!post) return <NotFound />;
  const category = categoryByName[post.category];
  const related = [...db.posts].filter(item => item.id !== post.id && item.category === post.category).sort((a, b) => b.date.localeCompare(a.date));
  const relatedPosts = [...related, ...db.posts.filter(item => item.id !== post.id && item.category !== post.category).sort((a, b) => b.date.localeCompare(a.date))].slice(0, 3);
  const sections = parsed.sections;

  return <main className="details-page">
    <section className="details-hero" style={{ '--details-image': `url("${detailImage(post.image)}")` }}>
      <div className="details-hero-inner content-width">
        <nav className="breadcrumb" aria-label="مسار التنقل"><Link to="/" aria-label="الرئيسية"><HomeIcon size={16}/></Link><ChevronLeft/><Link to="/blog">المدونة</Link><ChevronLeft/><Link className="current" to={`/blog?category=${category?.slug ?? ''}`}>{post.category}</Link></nav>
        <div className="details-hero-copy"><div className="details-meta"><Link className="details-category" to={`/blog?category=${category?.slug ?? ''}`}>{post.category}</Link><span><CalendarDays/>{formatDate(post.date)}</span><span><Clock3/>{post.readTime}</span></div>
          <h1>{post.title}</h1><div className="hero-author"><img src={avatarImage(post.author.avatar)} alt=""/><span><strong>{post.author.name}</strong><small>{post.author.role}</small></span></div>
        </div>
      </div>
    </section>

    <div className="details-layout content-width">
      <article className="article-main">
        <blockquote className="excerpt-quote">“{post.excerpt}”</blockquote>
        <div className="article-prose">{parsed.intro.map((paragraph, index) => <p key={`intro-${index}`}>{paragraph}</p>)}
          {sections.map(section => <section id={section.id} className="article-section" key={section.id}><h2><span><Camera/></span>{section.title}</h2>{section.paragraphs.map((paragraph, index) => <p key={`${section.id}-${index}`}>{paragraph}</p>)}</section>)}
        </div>
        <TagsCard tags={post.tags}/><ShareCard/><AuthorCard author={post.author}/>
      </article>
      <aside className="details-sidebar"><TOC sections={sections}/>
        <section className="details-panel info-panel"><div className="info-tile"><CalendarDays/><strong>{formatDate(post.date, false)}</strong><small>تاريخ النشر</small></div><div className="info-tile"><Clock3/><strong>{post.readTime}</strong><small>وقت القراءة</small></div></section>
        <section className="details-panel mini-cta"><span><Mail/></span><h2>لا تفوّت جديدنا</h2><p>اشترك للحصول على أحدث المقالات</p><Link className="button button-primary" to="/blog">تصفح المزيد</Link></section>
      </aside>
    </div>

    <section className="related-section content-width"><div className="related-heading"><div className="related-title"><span><ImageIcon/></span><div><h2>مقالات قد تعجبك</h2><p>استكشف المزيد من المحتوى المميز</p></div></div><Link to={`/blog?category=${category?.slug ?? ''}`}>عرض الكل <ChevronLeft size={17}/></Link></div><div className="related-grid">{relatedPosts.map(item => <RelatedPostCard key={item.id} post={item}/>)}</div></section>
  </main>;
}
