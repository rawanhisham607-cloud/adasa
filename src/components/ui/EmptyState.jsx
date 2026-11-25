import { SearchX } from 'lucide-react';
export default function EmptyState({ onClear }) {
  return <div className="empty-state"><span><SearchX size={31}/></span><h2>لم يتم العثور على مقالات</h2><p>جرّب تغيير كلمات البحث أو اختيار تصنيف آخر.</p><button className="button button-primary" onClick={onClear}>مسح الفلاتر</button></div>;
}
