//Fetch News Articles
import { NEWS_API_KEY } from "./config";

export const getNewsArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};

  export const getArticles = async (topic) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
  };