import { Camera, BookOpen, Users, FileText } from 'lucide-react';

const icons = [FileText, Users, BookOpen, Camera];
export default function StatCard({ value, label, index = 0 }) {
  const Icon = icons[index % icons.length];
  return <div className="stat-card"><Icon aria-hidden="true"/><strong>{value}</strong><span>{label}</span></div>;
}
