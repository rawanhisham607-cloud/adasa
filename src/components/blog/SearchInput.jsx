import { Search, X } from 'lucide-react';

export default function SearchInput({ value, onChange }) {
  return <div className="blog-search-wrap"><Search aria-hidden="true" size={19}/><input id="blog-search" type="search" value={value} onChange={event => onChange(event.target.value)} placeholder="ابحث في المقالات..." aria-label="ابحث في المقالات"/>{value && <button type="button" onClick={() => onChange('')} aria-label="مسح البحث"><X size={16}/></button>}</div>;
}
