import { useState } from 'react';
import { Share2, Link2 } from 'lucide-react';
import { WhatsappIcon, LinkedinIcon, XIcon } from '../ui/SocialIcons.jsx';

export default function ShareCard() {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;
  const encoded = encodeURIComponent(url);
  async function copy() {
    try { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 2200); }
    catch { setCopied(false); }
  }
  return <section className="details-panel share-panel"><h2 className="details-panel-title"><span><Share2/></span>شارك المقال</h2><div className="share-actions"><button onClick={copy} aria-label="نسخ رابط المقال"><Link2/></button><a href={`https://wa.me/?text=${encoded}`} target="_blank" rel="noreferrer" aria-label="مشاركة عبر واتساب"><WhatsappIcon/></a><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`} target="_blank" rel="noreferrer" aria-label="مشاركة عبر لينكدإن"><LinkedinIcon/></a><a href={`https://twitter.com/intent/tweet?url=${encoded}`} target="_blank" rel="noreferrer" aria-label="مشاركة عبر إكس"><XIcon/></a></div>{copied && <span role="status" className="copy-toast">تم النسخ ✓</span>}</section>;
}
