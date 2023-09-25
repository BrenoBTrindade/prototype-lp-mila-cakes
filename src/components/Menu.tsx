import Image from "next/image";
import CupCakesSwiper from "./CupcakesSwiper";

export default function Menu() {
  return (
    <section id="nosso-cardapio" className="my-10 text-text">
      <div className="flex justify-center my-10 flex-col items-center text-2xl">
        <div className="">
          <h1 className="text-3xl font-semibold">Nosso Cardápio</h1>
          <h2 className="-mb-1">Destaque do Menu</h2>
          <p className="w-[65%]">
            Bolo de Red Velvet: Uma obra-prima vermelha, fofa e
            irresistivelmente saborosa que derrete na boca.
          </p>
        </div>
        <Image
          className="my-10 shadow-black/60 w-[60%] shadow-md rounded-2xl select-none"
          src={"/red-velvet.png"}
          alt="bolo red velvet"
          width={1500}
          height={400}
        />
      </div>
      <CupCakesSwiper />
      <div className="flex justify-end w-[80%] my-10">
        <button className="bg-gradient-to-b from-primary to-primary/60 text-secondary px-12 py-2 text-2xl rounded-lg hover:scale-105 duration-500">
          Cardápio Completo
        </button>
      </div>
      <div className="flex my-10 flex-col text-2xl w-[60%] mx-auto">
        <p className="w-[65%]">
          Na Mila Cakes, a qualidade é nossa prioridade. Usamos ingredientes
          frescos e locais sempre que possível, garantindo que nossos doces
          sejam feitos com amor e cuidado. Cada doce é preparado sob medida para
          você, com um toque artesanal que torna nossa confeitaria única.
        </p>
      </div>
    </section>
  );
}
