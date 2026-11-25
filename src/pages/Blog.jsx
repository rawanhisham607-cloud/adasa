import { useEffect, useMemo } from 'react';
import { Newspaper, X } from 'lucide-react';
import db from '../data/db.json';
import { categories } from '../data/categories.js';
import { useBlogFilters } from '../hooks/useBlogFilters.js';
import FilterBar from '../components/blog/FilterBar.jsx';
import ViewToggle from '../components/ui/ViewToggle.jsx';
import Pagination from '../components/ui/Pagination.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import PostCard from '../components/posts/PostCard.jsx';
import PostListItem from '../components/posts/PostListItem.jsx';

const PAGE_SIZE = 6;
export default function Blog() {
  const filters = useBlogFilters();
  const categoryName = categories.find(item => item.slug === filters.category)?.name;
  const filtered = useMemo(() => {
    const query = filters.search.trim().toLocaleLowerCase('ar');
    return [...db.posts].filter(post => {
      const category = categories.find(item => item.name === post.category);
      const matchesCategory = filters.category === 'all' || category?.slug === filters.category;
      const searchable = [post.title, post.excerpt, post.category, ...(post.tags || [])].join(' ').toLocaleLowerCase('ar');
      return matchesCategory && (!query || searchable.includes(query));
    }).sort((a, b) => b.date.localeCompare(a.date));
  }, [filters.category, filters.search]);
  const pages = Math.ceil(filtered.length / PAGE_SIZE);
  const page = Math.min(filters.page, Math.max(pages, 1));
  const shown = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hasFilters = filters.category !== 'all' || Boolean(filters.search.trim());

  useEffect(() => {
    if (filters.category !== filters.normalizeInvalid.category || filters.page !== page) {
      if (filters.category !== filters.normalizeInvalid.category) filters.setCategory('all');
      else filters.setPage(page);
    }
  }, [filters.category, filters.normalizeInvalid.category, filters.page, filters.setCategory, filters.setPage, page]);

  useEffect(() => {
    if (filters.page > 1) document.getElementById('blog-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [filters.page]);

  return <main className="blog-page">
    <section className="blog-hero grid-glow"><span className="eyebrow"><Newspaper size={15}/> <i/>مدونتنا</span><h1>استكشف <em>مقالاتنا</em></h1><p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p></section>
    <FilterBar search={filters.search} category={filters.category} setSearch={filters.setSearch} setCategory={filters.setCategory}/>
    <section className="blog-results content-width" id="blog-results">
      <div className="results-toolbar"><p>عرض <strong>{filtered.length.toLocaleString('ar-EG')}</strong> مقالات{categoryName && <> في <b>{categoryName}</b></>}{filters.search.trim() && <> عن <b>«{filters.search.trim()}»</b></>}</p><div className="results-controls">{hasFilters && <button className="clear-filters" onClick={filters.clearFilters}>مسح الفلاتر <X size={15}/></button>}<ViewToggle value={filters.view} onChange={filters.setView}/></div></div>
      {shown.length ? <><div className={filters.view === 'grid' ? 'results-grid' : 'results-list'}>{shown.map(post => filters.view === 'grid' ? <PostCard key={post.id} post={post}/> : <PostListItem key={post.id} post={post}/>)}</div><Pagination page={page} pages={pages} onChange={filters.setPage}/></> : <EmptyState onClear={filters.clearFilters}/>}
    </section>
  </main>;
}
