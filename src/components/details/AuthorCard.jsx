import { Linkedin, Github } from 'lucide-react';
import { XIcon } from '../ui/SocialIcons.jsx';
import { DEFAULT_AUTHOR_BIO } from '../../data/constants.js';
import { avatarImage } from '../../utils/img.js';

export default function AuthorCard({ author }) {
  return <section className="details-panel author-detail-card"><img src={avatarImage(author.avatar)} alt={author.name} loading="lazy"/><div className="author-detail-copy"><span>كاتب المقال</span><h2>{author.name}</h2><small>{author.role}</small><p>{DEFAULT_AUTHOR_BIO}</p></div><div className="author-detail-social"><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="GitHub"><Github/></a><a href="#" aria-label="X"><XIcon/></a></div></section>;
}
