
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Dashboard() {

 

  const handleLogout = async () => {
    await signOut(auth);

  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#ffca748f]">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Welcome! You are logged in.</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
