import { useState } from "react";
import { useAuth } from "../modules/core/providers/AuthProvider";

export default function LoginPage() {
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    await signin({ email, password });
    // navigate to /profile on success…
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="block w-full border p-2 mb-4"
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="block w-full border p-2 mb-4"
      />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Log In
      </button>
    </form>
  );
}
