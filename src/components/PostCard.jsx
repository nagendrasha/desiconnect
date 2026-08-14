import {
    Heart,
    MessageCircle,
    MoreHorizontal,
} from "lucide-react";

export default function PostCard({ post }) {
    return (
        <article className="bg-white border rounded-xl shadow-sm overflow-hidden">

            <div className="p-4 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                        {post.user?.name?.charAt(0)}
                    </div>

                    <div>
                        <p className="font-semibold">
                            {post.user?.name}
                        </p>

                        <p className="text-xs text-gray-500">
                            @{post.user?.username} · 2h
                        </p>
                    </div>

                </div>

                <button>
                    <MoreHorizontal />
                </button>

            </div>

            {post.content && (
                <div className="px-4 pb-4">
                    <p className="text-gray-800">
                        {post.content}
                    </p>
                </div>
            )}

            {post.image && (
                <img
                    src={post.image}
                    alt=""
                    className="w-full max-h-[500px] object-cover"
                />
            )}

            <div className="px-4 py-3">

                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">

                    <span>
                        ❤️ {post.likes_count || 0}
                    </span>

                    <span>
                        {post.comments_count || 0} comments
                    </span>

                </div>

                <div className="border-t border-b py-2 flex">

                    <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg">
                        <Heart size={19} />
                        Like
                    </button>

                    <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg">
                        <MessageCircle size={19} />
                        Comment
                    </button>

                </div>

            </div>

        </article>
    );
}