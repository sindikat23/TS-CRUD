import axios from "axios";
import { INews } from "../types/type";

const base_URL = "https://679fda0024322f8329c4c4f0.mockapi.io/students/api";

export const getNews = async (): Promise<INews[]> => {
  const res = await axios.get(base_URL);
  return res.data;
};

export const addNews = async (news: Omit<NewsItem, "id">): Promise<INews> => {
  const res = await axios.post(base_URL, news);
  return res.data;
};

export const updateNews = async (id: string, news: Omit<INews, "id">): Promise<INews> => {
  const res = await axios.put(`${base_URL}/${id}`, news);
  return res.data;
};

export const deleteNews = async (id: string): Promise<void> => {
  await axios.delete(`${base_URL}/${id}`);
};
