import { avatarImage } from '../../utils/img.js';
export default function AuthorMeta({ author, compact = false }) {
  return <div className={`author-meta${compact ? ' author-meta-compact' : ''}`}>
    <span className="author-avatar"><img src={avatarImage(author.avatar)} alt="" loading="lazy"/><i /></span>
    <span className="author-copy"><strong>{author.name}</strong>{!compact && <small>{author.role}</small>}</span>
  </div>;
}
