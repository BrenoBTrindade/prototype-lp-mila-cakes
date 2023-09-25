import Image from "next/image";
import CupCakesSwiper from "./CupcakesSwiper";
import CupCakesSwiperMobile from "./CupcakesSwiperMobile";

export default function Menu() {
  return (
    <section
      id="nosso-cardapio"
      className="xl:my-10 text-text max-lg:w-[95%] max-lg:mx-auto"
    >
      <div className="flex justify-center my-10 flex-col items-center xl:text-2xl">
        <div className="">
          <h1 className="xl:text-3xl max-lg:text-lg font-semibold">
            Nosso Cardápio
          </h1>
          <h2 className="-mb-1">Destaque do Menu</h2>
          <p className="xl:w-[65%]">
            Bolo de Red Velvet: Uma obra-prima vermelha, fofa e
            irresistivelmente saborosa que derrete na boca.
          </p>
        </div>
        <Image
          className="my-10 shadow-black/60 xl:w-[60%] shadow-md rounded-2xl select-none"
          src={"/red-velvet.png"}
          alt="bolo red velvet"
          width={1500}
          height={400}
        />
      </div>
      <CupCakesSwiper />
      <CupCakesSwiperMobile />
      <div className="flex xl:justify-end max-lg:justify-center xl:w-[80%] my-10">
        <button className="bg-gradient-to-b from-primary to-primary/60 text-secondary px-12 py-2 text-2xl rounded-lg hover:scale-105 duration-500">
          Cardápio Completo
        </button>
      </div>
      <div className="flex my-10 flex-col xl:text-2xl xl:w-[60%] mx-auto">
        <p className="xl:w-[65%]">
          Na Mila Cakes, a qualidade é nossa prioridade. Usamos ingredientes
          frescos e locais sempre que possível, garantindo que nossos doces
          sejam feitos com amor e cuidado. Cada doce é preparado sob medida para
          você, com um toque artesanal que torna nossa confeitaria única.
        </p>
      </div>
    </section>
  );
}
