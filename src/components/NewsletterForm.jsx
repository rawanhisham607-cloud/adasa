import { useState } from 'react';
import { Check, Mail } from 'lucide-react';

export default function NewsletterForm({ compact = false, avatars = [] }) {
  const [subscribed, setSubscribed] = useState(false);
  return <form className={`newsletter-form${compact ? ' newsletter-compact' : ''}`} onSubmit={event => { event.preventDefault(); if (event.currentTarget.reportValidity()) setSubscribed(true); }}>
    <div className="newsletter-input-row"><label className="sr-only" htmlFor={compact ? 'footer-news-email' : 'home-news-email'}>البريد الإلكتروني</label><input id={compact ? 'footer-news-email' : 'home-news-email'} type="email" required placeholder="أدخل بريدك الإلكتروني"/><button className="button button-primary" type="submit">{subscribed ? 'تم الاشتراك' : compact ? 'اشترك' : 'اشترك الآن'} {subscribed && <Check size={17}/>}</button></div>
    {!compact && <div className="newsletter-proof"><div className="newsletter-avatars">{avatars.slice(0, 3).map((url, i) => <img key={`${url}-${i}`} src={url} alt="" loading="lazy"/>)}</div><span>انضم لـ <b>10,000+</b> مصور</span><i>•</i><span>بدون إزعاج</span><i>•</i><span>إلغاء الاشتراك في أي وقت</span></div>}
    {subscribed && <p className="success-message" role="status">تم تسجيل بريدك بنجاح، شكراً لاشتراكك!</p>}
  </form>;
}
