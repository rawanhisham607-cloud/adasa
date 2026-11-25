import { Link } from 'react-router-dom';
import { Clock3, ChevronLeft } from 'lucide-react';
import { categoryByName } from '../../data/categories.js';
import { formatDate } from '../../utils/formatDate.js';
import { resizeImage } from '../../utils/img.js';
import AuthorMeta from './AuthorMeta.jsx';

export default function PostCard({ post }) {
  const category = categoryByName[post.category];
  return <article className="post-card">
    <Link className="post-card-image" to={`/blog/${post.slug}`}><img src={resizeImage(post.image, 800, 520)} alt={post.title} loading="lazy"/><span className="image-category">{category?.name ?? post.category}</span></Link>
    <div className="post-card-body"><div className="post-meta"><span><Clock3/> {post.readTime}</span><i>•</i><span>{formatDate(post.date)}</span></div>
      <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><div className="post-card-bottom"><AuthorMeta author={post.author}/><Link className="round-arrow" to={`/blog/${post.slug}`} aria-label={`اقرأ ${post.title}`}><ChevronLeft size={19}/></Link></div>
    </div>
  </article>;
}
