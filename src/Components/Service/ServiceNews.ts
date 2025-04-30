import axios from "axios";
import { INews } from "../../types/type";

const API_URL = "https://679fda0024322f8329c4c4f0.mockapi.io/students/api/News";



export const getNews = () => axios.get<INews[]>(API_URL);

export const createNews = (news: INews) => axios.post(API_URL, news);
export const updateNews = (id: string, news: INews) => axios.put(`${API_URL}/${id}`, news);
export const deleteNews = (id: string) => axios.delete(`${API_URL}/${id}`);