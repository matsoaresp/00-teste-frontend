export function Form() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="h-[500px] w-[400px] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.20)] flex flex-col items-center ">
        <div className=" mt-15 bg-[#2563EA] w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-xl">
          <img 
            src="/src/images/icone.jpg"  
            className="w-[50px] h-[50px] object-contain rounded-full"
            alt="" />
        </div>
        
    
            <h1 className="text-2xl mt-10">Bem-vindo</h1>
            <p className="text-sm">Faça login na sua conta</p>
       
       
      </form>
    </div>
  );
}