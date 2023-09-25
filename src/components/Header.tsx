import Logo from "./Logo";

export default function Header() {
  return (
    <header className="top-0 flex h-24 items-center bg-primary max-lg:fixed max-lg:z-10 max-lg:h-20 max-lg:w-full">
      <div className="ml-20">
        <Logo />
      </div>
      <div className="flex justify-around items-center text-xl w-[60%] text-secondary font-semibold ml-64 max-lg:hidden">
        {links.map(({ name, link }, i) => (
          <a id="anchor" className="relative" key={i} href={link}>
            {name}
          </a>
        ))}
      </div>
    </header>
  );
}

const links = [
  { name: "Sobre Nós", link: "#sobre-nos" },
  { name: "Nosso Cardápio", link: "#nosso-cardapio" },
  { name: "Encomende Agora", link: "#encomende-agora" },
];
