import { useNavigate } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import { FaBug } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

const Landing = () => {

  const navigate = useNavigate();
  const goLogin = () => navigate("/login");

  return (
    <div className="bg-[#09090B] text-white overflow-hidden">

      {}
      <div className="flex justify-between items-center px-6 lg:px-16 py-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold sp-text">DevMateAI</h2>

        <button
          onClick={goLogin}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 transition"
        >
          Get Started
        </button>
      </div>


      {}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center text-center py-28 px-6 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
          AI Powered Development  
          <span className="sp-text"> For Modern Developers</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Generate components, debug code, and boost productivity —
          all from one intelligent workspace.
        </p>

        <div className="flex gap-4 mt-10">
          <button
            onClick={goLogin}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 transition"
          >
            Launch App
          </button>

          <button
            onClick={goLogin}
            className="px-8 py-4 rounded-xl border border-gray-700 hover:bg-gray-800 transition"
          >
            Explore Features
          </button>
        </div>
      </motion.div>

      {}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
        <div className="w-[500px] h-[500px] bg-purple-600 blur-[160px] opacity-20 rounded-full mt-[120px]"></div>
      </div>


      {}
      <div className="grid md:grid-cols-3 gap-8 px-8 lg:px-24 pb-24">

        <Feature
          icon={<BsStars size={30}/>}
          title="AI Component Generator"
          desc="Describe UI and generate modern responsive components instantly."
        />

        <Feature
          icon={<HiOutlineCode size={30}/>}
          title="Live Preview"
          desc="Preview UI output instantly in browser without manual setup."
        />

        <Feature
          icon={<FiZap size={30}/>}
          title="Fast Workflow"
          desc="Reduce development time with intelligent automation."
        />

      </div>


      {}
      <motion.div
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.8 }}
        className="px-6 lg:px-24 py-24 bg-[#141319]"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <FaBug /> AI Code Debug
            </h2>

            <p className="text-gray-400 mt-4">
              Paste your buggy code and let AI analyze errors,
              suggest improvements, and optimize performance.
            </p>

            <button
              onClick={goLogin}
              className="mt-6 px-6 py-3 rounded-lg bg-purple-600 hover:scale-105 transition"
            >
              Try Debugger
            </button>
          </div>

          <motion.div
            animate={{ y:[0,-15,0] }}
            transition={{ repeat:Infinity, duration:3 }}
            className="bg-[#09090B] p-6 rounded-xl border border-gray-800"
          >
            <pre className="text-green-400 text-sm">
{`function sum(a,b){
return a+b
// Missing ;
}`}
            </pre>
          </motion.div>

        </div>
      </motion.div>


      {/* CTA */}
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold">
          Ready to Build Faster?
        </h2>

        <button
          onClick={goLogin}
          className="mt-6 px-10 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 transition"
        >
          Start Now
        </button>
      </div>


      {/* FOOTER */}
      <footer className="bg-[#050507] border-t border-gray-800 px-6 lg:px-24 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold sp-text">DevMateAI</h2>
            <p className="text-gray-400 mt-3 text-sm">
              AI powered developer workspace to generate UI,
              debug code and boost productivity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="cursor-pointer hover:text-white" onClick={goLogin}>Launch App</li>
              <li className="cursor-pointer hover:text-white" onClick={goLogin}>Debugger</li>
              <li className="cursor-pointer hover:text-white" onClick={goLogin}>Get Started</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <p className="text-gray-400 text-sm">
              Built for modern developers. Powered by AI.
            </p>

            <button
              onClick={goLogin}
              className="mt-4 px-5 py-2 bg-purple-600 rounded-lg hover:scale-105 transition"
            >
              Login
            </button>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} DevMateAI — All rights reserved
        </div>

      </footer>

    </div>
  );
};

export default Landing;


// Feature Card
const Feature = ({icon, title, desc}) => (
  <motion.div
    whileHover={{ scale:1.05 }}
    className="bg-[#141319] p-8 rounded-xl border border-gray-800"
  >
    <div className="text-purple-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-400 mt-2">{desc}</p>
  </motion.div>
);
