import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-primary h-[200px] text-secondary text-lg ">
      <div className="flex justify-between items-center h-[200px] w-[90%] mx-auto">
        <div className="flex flex-col items-center">
          <Logo />
          <p> Copyright © 2023 todos os direitos reservados.</p>
        </div>
        <div className="flex flex-col gap-3">
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
        <div className="flex flex-col">
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
  { src: "/icons8-insta.svg", href: "https://www.instagram.com/velfibra" },
  { src: "/icons8-facebook.svg", href: "https://www.facebook.com/velfibra" },
];
