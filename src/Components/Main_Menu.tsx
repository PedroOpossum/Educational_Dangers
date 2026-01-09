import { Link } from "react-router-dom";

function Main_Menu() {
  

  return (
    <div className="min-h-screen flex justify-between items-center flex-col  bg-[#ffca748f]">
    <div className="flex items-center gap-4">
      <img src="/Logo_Website.png" alt="Educational Dangers logo" className="w-30 h-30 object-contain" />
  
      <h1 className="text-4xl font-serif font-bold ">Welcome to Educational Dangers</h1>

    <div className="flex items-center">
    <Link to="/login" className="hover:underline hover:text-blue-600 text-2xl">
        Login
    </Link>
    <span className="mx-1 text-2xl">/</span>
    <Link to="/signup" className="hover:underline hover:text-blue-600 text-2xl">
        Sign Up
    </Link>
    </div>
    </div>
    </div>
  );
}

export default Main_Menu;