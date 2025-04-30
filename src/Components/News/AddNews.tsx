import { useState } from "react";
import { createNews } from "../../Components/Service/ServiceNews";
import { INews } from "../../types/type";
import { useNavigate } from "react-router-dom";

function AddNews() {
    const [form, setForm] = useState<INews>({ title: "", description: "", avatar: "" });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createNews(form);
        navigate("/");
    };

    return (
        <div className="bg-gray-800 h-screen">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl text-gray-200 font-bold mb-10 py-5">Add News</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="px-5 py-2 border mb-5 w-96 rounded-2xl bg-gray-200"
                        type="text"
                        name="avatar"
                        placeholder="https//:avatar/picture.jpg"
                        value={form.avatar.length==0?form.avatar="https://avatars.githubusercontent.com/u/39456415":form.avatar}
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

                    <button className="bg-green-500 text-white px-5 py-3 mt-5 rounded-lg w-52" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddNews;