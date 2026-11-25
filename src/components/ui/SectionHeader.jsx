export default function SectionHeader({ badge, title, highlight, subtitle, align = 'center' }) {
  return <div className={`section-heading section-heading-${align}`}>
    {badge && <span className="eyebrow"><i />{badge}</span>}
    <h2>{title}{highlight && <> <em>{highlight}</em></>}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>;
}
