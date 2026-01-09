import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification  } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider} from "../firebase";

function Signup() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        try 
        {
              const userCredential = await createUserWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
              await updateProfile(user, { displayName: username });

              await setDoc(doc(db, "users", user.uid), {
              username: username,
              email: email,
              createdAt: new Date(),
              });

            await sendEmailVerification(user);
            setMsg("Verification email sent! Check your inbox (and spam folder).");
            console.log("User signed up:", user);
             
        }
        catch (error: any) {
            setMsg(error.message);
        }
    }


     const handleGoogleLogin = async () => {
            try {
              const UserCredential = await signInWithPopup(auth, googleProvider);
              const user = UserCredential.user;

              const userRef = doc(db, "users", user.uid);
              const docSnap = await getDoc(userRef);
              
              if (!docSnap.exists()) 
              {
                  await setDoc(userRef, {
                  username: user.displayName,
                  email: user.email,
                  createdAt: new Date(),
                });
              }

              setMsg("Google Login in Successful!");
            } catch (error: any) {
                setMsg(error.message);
            }
        };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-[#ffca748f]">

        <div className="left-0 top-1/2 grid grid-cols-3 gap-y-20 gap-x-20 absolute transform -translate-y-1/2 ml-30">
            {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-2 h-2 bg-black rounded-full" />  ))}
        </div>

        
        <div className="right-0 top-1/2 grid grid-cols-3 gap-y-20 gap-x-20 absolute transform -translate-y-1/2 mr-30">
            {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-2 h-2 bg-black rounded-full" />  ))}
        </div>


      <div className="w-full bg-[#ffba4a44] p-8 rounded-xl shadow-lg">
        <div className="w-full max-w-3xl mx-auto rounded-3xl p-8 bg-[#ffffffa4] ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        {msg && (
          <p className="mb-4 text-center text-sm text-red-600">{msg}</p>
        )}

        

        <form className="space-y-4" onSubmit={handleSignIn}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Username123"
              onChange = {(e) => setUsername(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

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
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
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
    </div>

  );
}

export default Signup;