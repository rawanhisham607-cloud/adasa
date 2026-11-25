export function formatDate(value, includeYear = true) {
  const date = new Date(`${value}T00:00:00Z`);
  return new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric', month: 'long', ...(includeYear ? { year: 'numeric' } : {}), timeZone: 'UTC',
  }).format(date);
}
