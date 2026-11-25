import { Link } from 'react-router-dom';
import { Tags } from 'lucide-react';
export default function TagsCard({ tags = [] }) {
  return <section className="details-panel tags-panel"><h2 className="details-panel-title"><span><Tags/></span>الوسوم</h2><div className="tag-list">{tags.map(tag => <Link key={tag} to={`/blog?search=${encodeURIComponent(tag)}`}>#{tag}</Link>)}</div></section>;
}
