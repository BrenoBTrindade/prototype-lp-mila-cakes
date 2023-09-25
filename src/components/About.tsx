import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre-nos"
      className="relative w-full xl:h-[600px] max-lg:h-[450px] text-text"
    >
      <Image
        className="absolute inset-0 w-full h-full max-lg:hidden"
        src={"/bg-cupcakes-1.png"}
        alt="cupcakes"
        width={1920}
        height={600}
      />
      <Image
        className="absolute inset-0 w-full lg:hidden h-[450px]"
        src={"/bg-cupcake-mobile.png"}
        alt="cupcakes"
        width={400}
        height={400}
      />
      <div className="absolute inset-0  bg-white bg-opacity-75 rounded-xl xl:h-[400px] max-lg:h-[300px] xl:w-[60%] mx-auto top-28">
        <div className="flex flex-col justify-center items-center w-[80%] mx-auto xl:mt-20">
          <h1 className="xl:text-3xl font-semibold max-lg:mt-8">Sobre Nós</h1>
          <p className="xl:my-10 xl:text-2xl">
            Na Mila Cakes, somos mais do que uma confeitaria. Somos artesãos
            apaixonados por criar verdadeiras obras-primas de sabor. Nossa
            história começa com a paixão pela confeitaria, e a cada dia, nos
            dedicamos a aperfeiçoar nossas receitas, buscando ingredientes de
            alta qualidade para garantir que cada doce que você prove seja uma
            explosão de sabor inesquecível.
          </p>
        </div>
      </div>
    </section>
  );
}
