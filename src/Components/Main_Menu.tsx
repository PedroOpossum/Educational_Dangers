import { Link } from "react-router-dom";

function Main_Menu() {
  

  return (
    <div className="min-h-screen flex justify-center bg-[#ffca748f]">
      <img src="/Logo_Website.png" alt="Educational Dangers logo" className="w-30 h-30 object-contain" />
  
      <h1 className="text-4xl font-serif font-bold text-center">Welcome to Educational Dangers</h1>

    <div className="flex items-center text-blue-600">
    <Link to="/login" className="hover:underline">
        Login
    </Link>
    <span className="mx-1 text-slate-400">/</span>
    <Link to="/signup" className="hover:underline">
        Sign Up
    </Link>
    </div>
    </div>
  );
}

export default Main_Menu;