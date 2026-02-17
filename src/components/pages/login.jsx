import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/usersAuth.json");
      const users = await res.json();

      const user = users.find(
        u => u.email === email && u.password === password
      );

      if (!user) {
        setError("Usuario o contraseña incorrectos");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");

    } catch (err) {
      setError("Error cargando usuarios");
    }
  };

  return (
    <div className="login-container">
      <h1>Portal del empleado</h1>

      <form onSubmit={handleSubmit}>
        <label>Usuario o email</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && <p>{error}</p>}

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
