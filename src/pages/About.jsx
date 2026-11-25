import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Target, Zap, Handshake, RefreshCw } from 'lucide-react';
import db from '../data/db.json';
import { ABOUT_STATS, TEAM_NAMES } from '../data/constants.js';
import StatCard from '../components/ui/StatCard.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import TeamAuthorCard from '../components/about/AuthorCard.jsx';

const values = [
  { title: 'الجودة أولاً', text: 'محتوى مدروس ومكتوب بخبرة', Icon: Target },
  { title: 'تركيز عملي', text: 'أمثلة واقعية يمكنك تطبيقها اليوم', Icon: Zap },
  { title: 'المجتمع', text: 'تعلم مع آلاف المصورين', Icon: Handshake },
  { title: 'دائماً محدث', text: 'أحدث الاتجاهات وأفضل الممارسات', Icon: RefreshCw },
];

const team = TEAM_NAMES.map(name => {
  const post = db.posts.find(item => item.author.name === name);
  return post ? post.author : null;
}).filter(Boolean);

export default function About() {
  return <main className="about-page">
    <section className="about-hero grid-glow"><div className="about-hero-inner content-width"><span className="eyebrow"><i/>من نحن</span><h1>مهمتنا هي <em>الإعلام والإلهام</em></h1><p>مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.</p><div className="stats-row about-stats">{ABOUT_STATS.map((stat, i) => <StatCard key={stat.label} {...stat} index={i}/>)}</div></div></section>

    <section className="values-section"><div className="content-width"><SectionHeader title="قيمنا" subtitle="المبادئ التي توجه كل ما نقوم بإنشائه"/><div className="values-grid">{values.map(({title, text, Icon}) => <article className="value-card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="team-section content-width"><SectionHeader badge="فريقنا" title="تعرف على كتابنا" subtitle="فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع."/><div className="team-grid">{team.map(author => <TeamAuthorCard key={author.name} author={author}/>)}</div></section>

    <section className="about-cta"><div><h2>لديك أسئلة؟ دعنا نتحدث!</h2><p>نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</p><div className="about-cta-actions"><a className="button button-dark" href={`mailto:${db.siteInfo.email}`}><Mail size={19}/> تواصل معنا</a><Link className="button button-light-outline" to="/blog">تصفح المقالات <ArrowLeft size={18}/></Link></div></div></section>
  </main>;
}
