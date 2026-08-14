import { Search, MessageCircle, Bell, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">

            <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">

                <div className="text-2xl font-bold text-blue-600">
                    DesiConnect
                </div>

                <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">

                    <Search size={18} className="text-gray-500" />

                    <input
                        placeholder="Search people..."
                        className="bg-transparent outline-none ml-2 w-full"
                    />

                </div>

                <div className="flex items-center gap-3">

                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <MessageCircle size={21} />
                    </button>

                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Bell size={21} />
                    </button>

                    <div className="hidden sm:block text-sm">
                        <p className="font-semibold">
                            {user?.name}
                        </p>

                        <p className="text-gray-500">
                            @{user?.username}
                        </p>
                    </div>

                    <button
                        onClick={logout}
                        className="p-2 hover:bg-red-50 text-red-500 rounded-full"
                    >
                        <LogOut size={20} />
                    </button>

                </div>

            </div>

        </header>
    );
}