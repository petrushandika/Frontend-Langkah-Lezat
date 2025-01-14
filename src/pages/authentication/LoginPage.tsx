import LoginForm from "./components/LoginForm";

function LoginPage() {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/background.png')" }}>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                <img src="/src/assets/logo.png" alt="Logo" className="mb-8 w-32 md:w-48" />
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;
