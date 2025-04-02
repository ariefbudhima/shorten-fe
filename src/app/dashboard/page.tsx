"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/dashboard`, {
          credentials: "include", // sendn cookies to BE
        });

        const data = await res.json();
        if (data.status) {
          setUser(data.user);
        } else {
          router.push("/login"); // redirect to login if not login
        }
      } catch (error) {
        console.error("Error checking login:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, [router]);

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/logout`, {
      method: "POST",
      credentials: "include", // include cookies for BE to delete
    });
    setUser(null);
    router.push("/login"); // redirect to login
  };

  if (loading) {
    return <p className="text-center mt-10">Checking login status...</p>;
  }

  if (!user) {
    return null; // redirect to login
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
      <img src={user.picture} alt="Profile" className="w-16 h-16 rounded-full mb-4" />
      <p>Email: {user.email}</p>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
