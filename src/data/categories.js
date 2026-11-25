import { Sun, UserRound, Mountain, SlidersHorizontal, Settings2 } from 'lucide-react';

export const categories = [
  { slug: 'lighting', name: 'إضاءة', icon: Sun },
  { slug: 'portrait', name: 'بورتريه', icon: UserRound },
  { slug: 'landscape', name: 'مناظر طبيعية', icon: Mountain },
  { slug: 'techniques', name: 'تقنيات', icon: SlidersHorizontal },
  { slug: 'gear', name: 'معدات', icon: Settings2 },
];

export const categoryByName = Object.fromEntries(categories.map(category => [category.name, category]));
