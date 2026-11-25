import { Link } from 'react-router-dom';
import { CalendarDays, Clock3, ArrowLeft } from 'lucide-react';
import { categoryByName } from '../../data/categories.js';
import { formatDate } from '../../utils/formatDate.js';
import { resizeImage } from '../../utils/img.js';
import AuthorMeta from './AuthorMeta.jsx';

export default function PostListItem({ post }) {
  const category = categoryByName[post.category];
  return <article className="post-list-item"><Link className="list-image" to={`/blog/${post.slug}`}><img src={resizeImage(post.image, 800, 500)} alt={post.title} loading="lazy"/></Link><div className="list-content"><div className="post-meta"><span className="category-pill">{category?.name ?? post.category}</span><span><Clock3/> {post.readTime}</span><span><CalendarDays/> {formatDate(post.date)}</span></div><h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><div className="list-bottom"><AuthorMeta author={post.author}/><Link className="read-link" to={`/blog/${post.slug}`}>اقرأ المقال <ArrowLeft size={16}/></Link></div></div></article>;
}
