import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import API from "@/networks/api";
import LOCAL_STORAGE from "@/networks/storage";
import { loginDto } from "@/dtos/auth.dto";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";

function LoginForm() {
    const { login } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<loginDto>();

    const onLogin = async (data: loginDto) => {
        try {
            setLoading(true);
            const response = await API.AUTH.LOGIN(data);
            const token = response.token;
            LOCAL_STORAGE.SET(token);

            login();

        } catch (err: any) {
            setError("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-primary text-2xl font-semibold text-center mb-6">Admin Login</h3>

            <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
                <div className="flex items-center gap-x-3 border p-3 rounded-lg">
                    <MdEmail className="text-primary text-lg" />
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format",
                            },
                        })}
                        className="flex-1 outline-none text-sm sm:text-base"
                    />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <div className="flex items-center gap-x-3 border p-3 rounded-lg">
                    <RiLockPasswordFill className="text-primary text-lg" />
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                        className="flex-1 outline-none text-sm sm:text-base"
                    />
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-white w-full py-3 mt-6 rounded-lg text-sm sm:text-base"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
