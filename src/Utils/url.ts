import axios from "axios";
import { NewsItem } from "../types/type";

const BASE_URL = "https://679fda0024322f8329c4c4f0.mockapi.io/students/api";

export const getNews = async (): Promise<NewsItem[]> => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const addNews = async (news: Omit<NewsItem, "id">): Promise<NewsItem> => {
  const res = await axios.post(BASE_URL, news);
  return res.data;
};

export const updateNews = async (id: string, news: Omit<NewsItem, "id">): Promise<NewsItem> => {
  const res = await axios.put(`${BASE_URL}/${id}`, news);
  return res.data;
};

export const deleteNews = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
