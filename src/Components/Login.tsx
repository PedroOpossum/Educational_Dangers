import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth, googleProvider} from "../firebase";

function Login()
{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  
  const Navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
          // Signup logic to be implemented
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Navigate('/dashboard');

        }
        catch (error: any) {
            setMsg(error.message);
        }
    }

    const handleGoogleLogin = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
          setMsg("Google Login in Successful!");
          Navigate('/dashboard');
        } catch (error: any) {
            setMsg(error.message);
        }
    };

  return (
        <div className="min-h-screen flex items-center justify-center bg-[#ffca748f]">
      <div className="w-full max-w-md bg-[#ffba4a44] p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {msg && (
          <p className="mb-4 text-center text-sm text-red-600">{msg}</p>
        )}


        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              onChange = {(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              onChange = {(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <button
          onClick={handleGoogleLogin}
          className="px-4 py-2 my-8 w-full align-middle justify-center  flex items-center gap-2 bg-white text-blackborder border-slate-300 rounded-lg hover:bg-slate-200 hover:border-slate-600 transition-colors duration-150" 
        >
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Google</span>
          
        </button> 
      </div>
    </div>
  );
}

export default Login;