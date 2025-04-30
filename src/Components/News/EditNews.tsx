import { useEffect, useState } from "react";
import { getNews, updateNews } from "../../Components/Service/ServiceNews";
import { INews } from "../../types/type";
import { useNavigate, useParams } from "react-router-dom";

function EditNews() {
    const [form, setForm] = useState<INews>({ title: "", description: "", avatar: "" });
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const fetchSingleNews = async () => {
        try {
            const res = await getNews();
            const update_news = res.data.find((item) => item.id === id);
            if (update_news) {
                setForm({ title: update_news.title, description: update_news.description, avatar: update_news.avatar });
            }
        } catch (error) {
            console.error("Xatolik:", error);
        }
    };

    useEffect(() => {
        fetchSingleNews();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            await updateNews(id, form);
            navigate("/");
        }
    };

    return (
        <div className="bg-gray-800 h-screen">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-10 py-5 text-gray-200">Update News</h1>
                <form onSubmit={handleSubmit}>
                <input
                        className="px-5 py-2 border mb-5 w-96 rounded-2xl bg-gray-200"
                        type="text"
                        name="avatar"
                        placeholder="https//:avatar/picture.jpg"
                        value={form.avatar}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        className="px-5 py-2 border mb-5 w-96 rounded-2xl bg-gray-200"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleChange}
                    />
                    <br />
                    <textarea
                        className="border px-5 py-2 w-96 rounded-2xl bg-gray-200"
                        name="description"
                        placeholder="Description..."
                        value={form.description}
                        onChange={handleChange}
                    />
                    <br />
                    <button className="bg-green-500 text-white px-5 py-3 mt-5 rounded-lg w-52" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditNews;