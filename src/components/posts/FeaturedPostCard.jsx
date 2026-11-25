import { Link } from 'react-router-dom';
import { Clock3, ArrowLeft, Star } from 'lucide-react';
import { categoryByName } from '../../data/categories.js';
import { formatDate } from '../../utils/formatDate.js';
import { resizeImage } from '../../utils/img.js';
import AuthorMeta from './AuthorMeta.jsx';

export default function FeaturedPostCard({ post }) {
  const category = categoryByName[post.category];
  return <article className="featured-card">
    <Link to={`/blog/${post.slug}`} className="featured-image"><img src={resizeImage(post.image, 900, 600)} alt={post.title} loading="lazy"/><span className="featured-ribbon"><Star size={14} fill="currentColor"/> مميز</span></Link>
    <div className="featured-content"><div className="post-meta"><span className="category-pill">{category?.name ?? post.category}</span><span><Clock3/> {post.readTime}</span></div>
      <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p>
      <div className="featured-bottom"><AuthorMeta author={post.author}/><span className="post-date">{formatDate(post.date)}</span><Link className="read-link" to={`/blog/${post.slug}`}>اقرأ المقال <ArrowLeft size={16}/></Link></div>
    </div>
  </article>;
}
