import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            await register(form);
            navigate("/");
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Unable to create account"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-md">

                <div className="text-center mb-8">

                    <h1 className="text-4xl font-bold text-blue-600">
                        DesiConnect
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Join the community 🇮🇳
                    </p>

                </div>

                <div className="bg-white rounded-2xl shadow-sm border p-6">

                    <h2 className="text-2xl font-bold mb-6">
                        Create account
                    </h2>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        <input
                            name="name"
                            placeholder="Full name"
                            value={form.name}
                            onChange={handleChange}
                            className="input"
                            required
                        />

                        <input
                            name="username"
                            placeholder="Username"
                            value={form.username}
                            onChange={handleChange}
                            className="input"
                            required
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            value={form.email}
                            onChange={handleChange}
                            className="input"
                            required
                        />

                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="input"
                            required
                        />

                        <input
                            name="password_confirmation"
                            type="password"
                            placeholder="Confirm password"
                            value={form.password_confirmation}
                            onChange={handleChange}
                            className="input"
                            required
                        />

                        <button
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
                        >
                            {loading
                                ? "Creating account..."
                                : "Create account"}
                        </button>

                    </form>

                    <div className="border-t my-6" />

                    <p className="text-center text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 font-semibold"
                        >
                            Login
                        </Link>
                    </p>

                </div>

            </div>
        </div>
    );
}