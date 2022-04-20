export const fetchStar = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/star`);
  const data = await res.json();

  return data;
};
