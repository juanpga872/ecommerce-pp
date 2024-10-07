"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "", 
    password: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false, 
      username: formData.username, 
      password: formData.password
    });

    if (result?.ok) {
      const session = await fetch("/api/auth/session").then((res) => res.json());
    
      if (session?.accessToken) {
        sessionStorage.setItem("token", session.accessToken);
      }
      router.push("/");
    }

    if (result?.error) {
      setError("Invalid login credentials");
    } else if (result?.ok) {
      // Aquí no necesitas hacer una segunda llamada para obtener el token
      router.push("/"); // Redirigir a la página principal
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginPage;




