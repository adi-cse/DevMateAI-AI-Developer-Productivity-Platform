import { SignIn } from "@clerk/clerk-react";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090B]">
      <SignIn
  path="/login"
  routing="path"
  signInFallbackRedirectUrl="/app"
  signUpFallbackRedirectUrl="/app"
/>

    </div>
  );
};

export default Auth;
