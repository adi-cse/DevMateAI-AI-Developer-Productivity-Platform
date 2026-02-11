import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import Editor from "@monaco-editor/react";
import Navbar from "../components/Navbar";

const Debugger = () => {

  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
  });

  const runDebug = async () => {

    if(!code.trim()) return;

    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
You are an expert software engineer.

Analyze the following code.
1) Find bugs
2) Explain problems
3) Provide fixed version

Code:
${code}
`
      });

      setResult(response.text);

    } catch(e){
      setResult("Error analyzing code");
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#09090B] min-h-screen text-white">

      <Navbar />

      <div className="p-6">

        <h1 className="text-2xl font-bold mb-4">
          AI Code Debugger
        </h1>

        <Editor
          height="300px"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(v)=>setCode(v)}
        />

        <button
          onClick={runDebug}
          className="mt-4 px-6 py-3 bg-purple-600 rounded-lg"
        >
          {loading ? "Analyzing..." : "Debug Code"}
        </button>

        <pre className="mt-6 bg-[#141319] p-4 rounded-lg whitespace-pre-wrap">
          {result}
        </pre>

      </div>
    </div>
  );
};

export default Debugger;
