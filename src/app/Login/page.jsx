"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter(); // add router
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Typed credentials:", { username, password });

    const res = await signIn("credentials", {
      redirect: false, // prevent automatic redirect
      username,
      password,
    });

    if (res.error) {
      setError(res.error);
      console.log("Login failed:", res.error);
    } else {
      setError("");
      console.log("Login success! Session:", session);
      router.push("/"); // redirect to home page after login
    }
  };

  if (session?.user) {
    router.push("/"); // redirect immediately if already logged in
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label className="label">Username</label>
            <input
              type="text"
              className="input mb-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
            <button type="submit" className="btn btn-neutral w-full mt-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
