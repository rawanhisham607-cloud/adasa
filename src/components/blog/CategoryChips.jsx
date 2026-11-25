import { categories } from '../../data/categories.js';

export default function CategoryChips({ value, onChange }) {
  const items = [{ slug: 'all', name: 'جميع المقالات' }, ...categories];
  return <div className="category-chips" aria-label="تصفية حسب التصنيف">{items.map(item => <button key={item.slug} type="button" className={value === item.slug ? 'active' : ''} aria-pressed={value === item.slug} onClick={() => onChange(item.slug)}>{item.name}</button>)}</div>;
}
