export function parseContent(content = '') {
  const blocks = content.split(/\n\s*\n/).map(block => block.trim()).filter(Boolean);
  const intro = [];
  const sections = [];
  let current = null;

  for (const block of blocks) {
    if (block.startsWith('## ')) {
      current = { id: `section-${sections.length + 1}`, title: block.slice(3).trim(), paragraphs: [] };
      sections.push(current);
    } else if (current) {
      current.paragraphs.push(block);
    } else {
      intro.push(block);
    }
  }
  return { intro, sections };
}
