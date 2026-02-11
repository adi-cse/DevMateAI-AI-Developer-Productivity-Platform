import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Debugger from "./pages/Debugger";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";


// 🔐 Reusable Protection Wrapper
const Protected = ({ children }) => (
  <>
    <SignedIn>
      {children}
    </SignedIn>

    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login/*" element={<Auth />} />

        {/* Protected Pages */}
        <Route
          path="/app"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />

        <Route
          path="/debug"
          element={
            <Protected>
              <Debugger />
            </Protected>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
