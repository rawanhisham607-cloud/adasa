import { useCallback, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../data/categories.js';

const validCategories = new Set(categories.map(category => category.slug));

export function useBlogFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const search = searchParams.get('search') || '';
  const rawPage = Number(searchParams.get('page'));
  const viewParam = searchParams.get('view');
  const category = categoryParam === 'all' || validCategories.has(categoryParam) ? categoryParam : 'all';
  const page = Number.isInteger(rawPage) && rawPage > 0 && rawPage <= 5 ? rawPage : 1;
  const view = viewParam === 'list' ? 'list' : 'grid';

  const update = useCallback((changes, replace = false) => {
    const next = new URLSearchParams(searchParams);
    for (const [key, value] of Object.entries(changes)) {
      if (value == null || value === '' || (key === 'category' && value === 'all') || (key === 'page' && Number(value) === 1) || (key === 'view' && value === 'grid')) next.delete(key);
      else next.set(key, String(value));
    }
    setSearchParams(next, { replace });
  }, [searchParams, setSearchParams]);

  const setCategory = useCallback(value => update({ category: value, page: 1 }), [update]);
  const setSearch = useCallback((value, replace = true) => update({ search: value.trim(), page: 1 }, replace), [update]);
  const setPage = useCallback(value => update({ page: value }), [update]);
  const setView = useCallback(value => update({ view: value }), [update]);
  const clearFilters = useCallback(() => setSearchParams(params => {
    const next = new URLSearchParams(params);
    next.delete('category'); next.delete('search'); next.delete('page');
    return next;
  }), [setSearchParams]);

  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    let changed = false;
    if (categoryParam !== 'all' && !validCategories.has(categoryParam)) { next.delete('category'); changed = true; }
    if (searchParams.has('page') && (!Number.isInteger(rawPage) || rawPage < 1 || rawPage > 5)) { next.delete('page'); changed = true; }
    if (viewParam && viewParam !== 'grid' && viewParam !== 'list') { next.delete('view'); changed = true; }
    if (searchParams.has('search') && !search.trim()) { next.delete('search'); changed = true; }
    if (changed) setSearchParams(next, { replace: true });
  }, [searchParams, setSearchParams, categoryParam, rawPage, viewParam, search]);

  const normalizeInvalid = useMemo(() => ({ categoryParam, category, rawPage, page }), [categoryParam, category, rawPage, page]);
  return { category, search, page, view, setCategory, setSearch, setPage, setView, clearFilters, normalizeInvalid };
}
