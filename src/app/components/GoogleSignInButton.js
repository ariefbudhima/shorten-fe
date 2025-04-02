"use client";

import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

function GoogleSignInButtonInner() {
  const router = useRouter();

  const googleSignIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google Login Success:", tokenResponse);
  
      if (!tokenResponse.access_token) {
        console.error("No access_token received from Google");
        return;
      }
  
      try {
        const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/google-login`;  
        const requestBody = { access_token: tokenResponse.access_token };  
        const res = await fetch(backendUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
          credentials: "include", // save cookies
        });
  
        const data = await res.json();
        console.log("Backend response:", data);
  
        if (data.status) {
          router.push("/dashboard");
        } else {
          console.error("Authentication failed:", data.error || "Unknown error");
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    onError: (error) => console.error("Login Failed", error),
  });

  return (
    <button
      onClick={() => googleSignIn()}
      className="w-full py-3 border rounded-3xl flex items-center justify-center hover:bg-gray-50 transition"
    >
      <img src="/google.svg" alt="Google Logo" className="mr-2 w-5 h-5" />
      Sign In With Google
    </button>
  );
}

export default function GoogleSignInButton() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <GoogleSignInButtonInner />
    </GoogleOAuthProvider>
  );
}
