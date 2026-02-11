import { UserButton, SignedIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 h-[70px] border-b border-gray-800">

      <h2
        className="text-xl font-bold sp-text cursor-pointer"
        onClick={() => navigate("/app")}
      >
        DevMateAI
      </h2>

      <SignedIn>
        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/debug")}
            className="px-4 py-2 bg-purple-600 rounded-lg hover:scale-105 transition"
          >
            Debug AI
          </button>

          <UserButton fallbackRedirectUrl="/" />

        </div>
      </SignedIn>

    </div>
  );
};

export default Navbar;
