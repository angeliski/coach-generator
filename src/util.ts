export const getRandomRange = (
  size: number
): { begin: number; end: number } => {
  const begin = Math.floor(Math.random() * size);
  const end = Math.floor(Math.random() * size);

  if (begin == end) {
    return getRandomRange(size);
  }
  return { begin, end };
};
