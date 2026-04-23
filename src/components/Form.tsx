import { useState } from "react";
import { Button } from "./Button";
import { Footer } from "./Footer";
import { Input } from "./Input";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import icone from "../images/icone.jpg";

export function Form() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { themeMode, toggleTheme } = useTheme();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !senha) { toast.error("Preencha todos os campos"); return }
    const emailValido = /\S+@\S+\.\S+/.test(email);
    if (!emailValido) { toast.error("E-mail inválido"); return; }
    if (senha.length < 6) { toast.error("Senha deve ter mais de 6 caracteres"); return; }
    else {
      toast.success("Login realizado com sucesso!");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-[var(--bg-body)]">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-[var(--bg-card)] text-[var(--text)] shadow-md text-lg transition-colors duration-300"
        aria-label="Alternar tema"
      >
        {themeMode === "dark" ? "🌤️" : "🌑"}
      </button>

      <form onSubmit={handleSubmit} className="w-full max-w-[450px] min-h-[550px] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.20)] flex flex-col items-center pt-8 pb-4 bg-[var(--bg-card)]">

        <div className="bg-[var(--icon-bg)] w-[65px] h-[65px] rounded-full flex items-center justify-center shadow-[var(--icon-shadow)]">
          <img
            src={icone}
            className="w-[45px] h-[45px] object-contain"
            alt=""
          />
        </div>

        <h1 className="text-2xl mt-10 text-[var(--text)]">Bem-vindo</h1>
        <p className="text-sm text-[var(--muted)]">Faça login na sua conta</p>

        <Input
          type="email"
          name="email"
          placeholder="seu@email.com"
          text="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="••••••••"
          name="senha"
          text="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="flex justify-end w-full px-8 mt-5">
          <a className="text-[#2563EA] text-sm" href="">
            Esqueceu a senha?
          </a>
        </div>
        <Button />
        <Footer />
      </form>
    </div>
  );
}