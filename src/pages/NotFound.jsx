import { Link } from 'react-router-dom';
import { Frown, Home, Newspaper } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found grid-glow">
      <div className="not-found-inner">
        <div className="error-number" aria-label="خطأ 404">404</div>
        <div className="sad-face-wrap" aria-hidden="true">
          <span className="float-dot dot-one" /><span className="float-dot dot-two" />
          <Frown size={50} strokeWidth={1.8} />
        </div>
        <h1>عفواً! الصفحة غير موجودة</h1>
        <p className="not-found-copy">الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.</p>
        <div className="not-found-actions">
          <Link className="button button-primary" to="/"><Home size={19} /> الذهاب للرئيسية</Link>
          <Link className="button button-outline" to="/blog"><Newspaper size={19} /> تصفح المقالات</Link>
        </div>
        <div className="helpful-links">
          <span>قد تجد هذه مفيدة:</span>
          <div><Link to="/blog">المدونة</Link><i>•</i><Link to="/about">من نحن</Link><i>•</i><Link to="/privacy">الخصوصية</Link></div>
        </div>
      </div>
    </main>
  );
}
