import { useState } from "react";
import { Button } from "./Button";
import { Footer } from "./Footer";
import { Input } from "./Input";
import { toast } from "react-toastify";

export function Form() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !senha) { toast.error("Preencha todos os campos"); return }
    const emailValido = /\S+@\S+\.\S+/.test(email);
    if (!emailValido) { toast.error("E-mail inválido"); return; }
    if (senha.length < 4) { toast.error("Senha deve ter mais de 6 caracteres"); return; }
    else {
      toast.success("Login realizado com sucesso!");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-[450px] min-h-[550px] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.20)] flex flex-col items-center pt-8 pb-4">

        <div className="bg-[#2563EA] w-[65px] h-[65px] rounded-full flex items-center justify-center shadow-xl mt-5">
          <img
            src="/src/images/icone.jpg"
            className="w-[45px] h-[45px] object-contain"
            alt=""
          />
        </div>

        <h1 className="text-2xl mt-10">Bem-vindo</h1>
        <p className="text-sm text-gray-500">Faça login na sua conta</p>

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