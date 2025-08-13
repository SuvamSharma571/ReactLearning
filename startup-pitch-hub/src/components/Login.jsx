import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;
    onLogin(username.trim());
  };

  return (
    <div className="panel narrow">
      <h2 className="panel-title">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username
          <input
            type="text"
            placeholder="enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className="btn primary">
          Sign In
        </button>
      </form>
    </div>
  );
}
