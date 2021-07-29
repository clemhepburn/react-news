/* eslint-disable max-len */
export const fetchNews = async () => {
  const apiKey = process.env.NEWS_API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
  );
  const json = await res.json();
  return json.articles;
};
