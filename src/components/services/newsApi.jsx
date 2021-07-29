export const fetchNews = async (searchQuery) => {
  const res = await fetch(
    ''
  );
  const json = await res.json();
  return json;
};
