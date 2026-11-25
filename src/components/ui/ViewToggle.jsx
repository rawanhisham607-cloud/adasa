import { Grid2X2, List } from 'lucide-react';
export default function ViewToggle({ value, onChange }) {
  return <div className="view-toggle" aria-label="طريقة عرض المقالات">{[['list', List, 'قائمة'], ['grid', Grid2X2, 'شبكة']].map(([key, Icon, label]) => <button key={key} type="button" aria-label={`عرض ${label}`} aria-pressed={value === key} className={value === key ? 'active' : ''} onClick={() => onChange(key)}><Icon size={19}/></button>)}</div>;
}
