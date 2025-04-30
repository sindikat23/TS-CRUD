import { useEffect, useState } from "react";
import { getNews, deleteNews } from "../Service/ServiceNews";
import { INews } from "../../types/type";
import { useNavigate } from "react-router-dom";

function NewsList() {
    const [news, setNews] = useState<INews[]>([]);
    const navigate = useNavigate();

    const fetchNews = async () => {
        try {
            const res = await getNews();
            console.log(res.data);
            setNews(res.data);

        } catch (error) {
            console.error("Xatolik:", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Haqiqatan ham o'chirmoqchimisiz?")) {
            await deleteNews(id);
            fetchNews();
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="bg-gray-800 py-2">
            <div className="container mx-auto">
                <div className="flex justify-between my-2 border-[1px] border-gray-300 p-2 rounded-[20px_0px_20px_0px]">
                    <h1 className="text-3xl py-2 font-bold text-orange-400">News</h1>
                    <button className="border mx-1 px-2  rounded-lg text-white bg-green-500" onClick={() => navigate("/add")}>Add News</button>
                </div>
                <div className="grid grid-cols-4 gap-5 py-10">
                    {news.map((item) => (
                        <div key={item.id} className="col-span-1 border rounded-lg p-3 bg-gray-300 hover:bg-gray-400 hover:scale-105 duration-700 flex flex-col justify-between">
                            <div className="flex justify-center rounded-xl items-center h-[200px] overflow-hidden">
                                <img src={item?.avatar} alt={item.title} />
                            </div>
                            <h3 className="text-xl font-semibold py-2 cursor-pointer">Title: <span className="text-gray-700">{item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}</span></h3>
                            <p className="text-lg font-medium cursor-pointer">Description: <span className="text-gray-700">{item.description.length > 50 ? item.description.slice(0, 50) + "..." : item.description}</span></p>
                            <div className="flex justify-between py-2 items-center text-white font-semibold">
                                <button className="border px-3 py-1.5 rounded-lg bg-yellow-500 text-white" onClick={() => navigate(`/edit/${item.id}`)}>Update</button>
                                <button className="border px-3 py-1.5 rounded-lg bg-red-500 text-white" onClick={() => handleDelete(item.id!)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsList;