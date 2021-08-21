/* eslint-disable max-len */
export const fetchNews = async () => {
  const apiKey = process.env.NEWS_API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=news&pageSize=12&apiKey=${apiKey}`
  );
  const json = await res.json();
  return json.articles;
};


export async function articleSearch(searchInput) {
  const apiKey = process.env.NEWS_API_KEY;
  const res = await fetch(`https://newsapi.org/v2/everything?q=${searchInput}&pageSize=12&apiKey=${apiKey}`);
  const json = await res.json();

  return json.articles;
}