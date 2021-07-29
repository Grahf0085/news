export const fetchNews = async () => {

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_KEY}`
  );

  const json = await res.json();

  return json;
};
