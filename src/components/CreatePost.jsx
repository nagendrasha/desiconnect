import { Image, Smile } from "lucide-react";
import { useState } from "react";

export default function CreatePost() {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!content.trim()) return;

        console.log("New post:", content);

        setContent("");
    };

    return (
        <div className="bg-white border rounded-xl p-4 shadow-sm">

            <form onSubmit={handleSubmit}>

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full resize-none border-none outline-none text-gray-700"
                    rows="3"
                />

                <div className="border-t my-3" />

                <div className="flex items-center justify-between">

                    <div className="flex gap-2">

                        <button
                            type="button"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-50 text-green-600"
                        >
                            <Image size={19} />
                            Photo
                        </button>

                        <button
                            type="button"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-yellow-50 text-yellow-600"
                        >
                            <Smile size={19} />
                            Feeling
                        </button>

                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
                    >
                        Post
                    </button>

                </div>

            </form>

        </div>
    );
}