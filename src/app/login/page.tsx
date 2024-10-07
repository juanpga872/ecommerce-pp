"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/Input";
import FormContainer from "../components/FormContainer";
import Button from "../components/Button";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username: formData.username,
      password: formData.password,
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
    }
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Login</Button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </FormContainer>
  );
};

export default LoginPage;





