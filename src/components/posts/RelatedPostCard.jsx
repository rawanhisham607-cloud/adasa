import { Link } from 'react-router-dom';
import { Clock3 } from 'lucide-react';
import { categoryByName } from '../../data/categories.js';
import { avatarImage, resizeImage } from '../../utils/img.js';
export default function RelatedPostCard({ post }) {
  return <article className="related-card"><Link to={`/blog/${post.slug}`} className="related-image"><img src={resizeImage(post.image, 700, 440)} alt={post.title} loading="lazy"/><span>{categoryByName[post.category]?.name ?? post.category}</span></Link><div className="related-body"><h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3><div className="related-meta"><span><img src={avatarImage(post.author.avatar)} alt="" loading="lazy"/>{post.author.name}</span><span><Clock3/>{post.readTime}</span></div></div></article>;
}
