import { Github, Linkedin, BadgeCheck } from 'lucide-react';
import { XIcon } from '../ui/SocialIcons.jsx';
import { avatarImage } from '../../utils/img.js';

export default function TeamAuthorCard({ author }) {
  return <article className="team-card"><div className="team-avatar"><img src={avatarImage(author.avatar)} alt={author.name} loading="lazy"/><span><BadgeCheck size={15} fill="currentColor"/></span></div><h3>{author.name}</h3><p>{author.role}</p><div className="team-social"><a href="#" aria-label={`LinkedIn ${author.name}`}><Linkedin/></a><a href="#" aria-label={`GitHub ${author.name}`}><Github/></a><a href="#" aria-label={`X ${author.name}`}><XIcon/></a></div></article>;
}
