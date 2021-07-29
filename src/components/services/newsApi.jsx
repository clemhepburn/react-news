/* eslint-disable max-len */
export const fetchNews = async () => {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e5b8c9aa95024515b5deb09b983c6fd6'
  );
  const json = await res.json();
  return json;
};
