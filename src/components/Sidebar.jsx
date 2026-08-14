import {
    Home,
    User,
    MessageCircle,
    Search,
    Settings,
} from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="hidden lg:block w-60 fixed left-0 top-16 bottom-0 p-4">

            <nav className="space-y-2">

                <a className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 font-semibold">
                    <Home size={20} />
                    Home
                </a>

                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                    <User size={20} />
                    Profile
                </a>

                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                    <MessageCircle size={20} />
                    Messages
                </a>

                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                    <Search size={20} />
                    Search
                </a>

                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                    <Settings size={20} />
                    Settings
                </a>

            </nav>

        </aside>
    );
}