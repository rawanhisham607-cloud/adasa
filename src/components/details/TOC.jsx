import { List } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy.js';

export default function TOC({ sections }) {
  const ids = sections.map(section => section.id);
  const active = useScrollSpy(ids);
  return <nav className="details-panel toc-panel" aria-label="محتويات المقال"><h2 className="details-panel-title"><span><List/></span>محتويات المقال</h2><ol>{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className={active === section.id ? 'active' : ''}><span>{(index + 1).toLocaleString('ar-EG')}</span>{section.title}</a></li>)}</ol></nav>;
}
