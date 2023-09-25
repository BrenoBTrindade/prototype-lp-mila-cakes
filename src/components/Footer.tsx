import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-primary xl:h-[200px] max-lg:h-[450px] text-secondary text-lg ">
      <div className="flex max-lg:flex-col justify-between xl:items-center h-[200px] w-[90%] mx-auto max-lg:gap-6">
        <div className="flex flex-col items-center">
          <Logo />
          <p className=" max-lg:text-xs">
            {" "}
            Copyright © 2023 todos os direitos reservados.
          </p>
        </div>
        <div className="flex flex-col gap-3 max-lg:items-center">
          <h1 className="text-2xl">Contatos</h1>
          <div>
            <p> Telefone: (91) 9805205000</p>
          </div>
          <div>
            <p> Endereço: rua.........</p>
          </div>
          <div>
            <p> Email: MilaCakes@email.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-lg:items-center">
          <h1 className="text-2xl mb-5">Redes Sociais</h1>
          <div className="flex">
            {networks.map((network) => (
              <Link key={network.src} href={network.href} target="_blank">
                <Image
                  className="ml-2 w-16 hover:scale-110 hover:brightness-125"
                  src={network.src}
                  alt={network.src}
                  width={50}
                  height={50}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const networks = [
  { src: "/icons8-insta.svg", href: "https://www.instagram.com/mila_cakes33" },
  { src: "/icons8-facebook.svg", href: "https://www.facebook.com/milacakes33" },
];
