import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

const demoPosts = [
    {
        id: 1,
        content: "Welcome to DesiConnect 🇮🇳",
        user: {
            name: "Nagendra Sharma",
            username: "nagendra",
        },
        likes_count: 12,
        comments_count: 3,
    },
    {
        id: 2,
        content: "Building something amazing with React + Laravel 🚀",
        user: {
            name: "Rahul Sharma",
            username: "rahul",
        },
        likes_count: 25,
        comments_count: 6,
    },
];

export default function Home() {
    return (
        <>

            <Navbar />

            <Sidebar />

            <main className="pt-20 lg:ml-60">

                <div className="max-w-2xl mx-auto px-4 pb-10">

                    <CreatePost />

                    <div className="space-y-4 mt-5">

                        {demoPosts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                            />
                        ))}

                    </div>

                </div>

            </main>

        </>
    );
}