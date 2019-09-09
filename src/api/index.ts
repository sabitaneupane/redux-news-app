import axios from 'axios';

export const getNews = async () => {
  const response = await axios.get(`https://sabitaneupane.github.io/sample-json-data/news/news.json`);
  return response.data;
};
