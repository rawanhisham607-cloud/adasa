import { useEffect, useState } from 'react';
import SearchInput from './SearchInput.jsx';
import CategoryChips from './CategoryChips.jsx';
import { useDebounce } from '../../hooks/useDebounce.js';

export default function FilterBar({ search, category, setSearch, setCategory }) {
  const [draft, setDraft] = useState(search);
  const debounced = useDebounce(draft, 300);
  useEffect(() => setDraft(search), [search]);
  useEffect(() => { if (debounced !== search) setSearch(debounced, true); }, [debounced, search, setSearch]);
  return <div className="filter-bar"><div className="filter-inner content-width"><CategoryChips value={category} onChange={setCategory}/><SearchInput value={draft} onChange={setDraft}/></div></div>;
}
