import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Pagination({ page, pages, onChange }) {
  if (pages <= 1) return null;
  return <nav className="pagination-wrap" aria-label="التنقل بين صفحات المقالات"><div className="pagination">
    <button type="button" aria-label="الصفحة السابقة" disabled={page === 1} onClick={() => onChange(page - 1)}><ChevronRight size={18}/></button>
    {Array.from({ length: pages }, (_, i) => i + 1).map(number => <button key={number} type="button" aria-current={page === number ? 'page' : undefined} className={page === number ? 'active' : ''} onClick={() => onChange(number)}>{number.toLocaleString('ar-EG')}</button>)}
    <button type="button" aria-label="الصفحة التالية" disabled={page === pages} onClick={() => onChange(page + 1)}><ChevronLeft size={18}/></button>
  </div><p>صفحة {page.toLocaleString('ar-EG')} من {pages.toLocaleString('ar-EG')}</p></nav>;
}
