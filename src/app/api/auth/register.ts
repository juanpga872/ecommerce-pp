import { NextApiRequest, NextApiResponse } from "next";

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, username, password, name, phone } = req.body;

    // Llamada al backend para registrar al usuario
    const response = await fetch("http://192.168.88.39:7000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        name,  
        phone  
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();  
      return res.status(500).json({ message: errorData.message || "Error registering user" });
    }

    return res.status(200).json({ message: "User registered successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

