export function resizeImage(url, width, height = width) {
  if (!url) return '';
  try {
    const image = new URL(url);
    image.searchParams.set('w', String(width));
    image.searchParams.set('h', String(height));
    return image.toString();
  } catch {
    return url;
  }
}

export const detailImage = url => resizeImage(url, 1600, 900);
export const avatarImage = url => resizeImage(url, 200, 200);
