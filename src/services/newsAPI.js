export const newsApi = async () => {

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_KEY}`
  );

  const json = await res.json();

  return json;
};

export const newsApiSearch = async (search) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=
      ${process.env.NEWS_KEY}`);

  const json = await res.json();

  return json;
};
