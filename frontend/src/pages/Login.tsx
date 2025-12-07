import { useState } from "react";
import { api } from "../services/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      onLogin();
    } catch (err) {
      alert("Login falhou");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="p-6 bg-gray-800 rounded-xl w-80">
        <h1 className="text-white text-xl mb-4">Login</h1>

        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3"
        />

        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          className="mb-3"
        />

        <Button onClick={handleLogin} className="w-full">
          Entrar
        </Button>
      </div>
    </div>
  );
}
