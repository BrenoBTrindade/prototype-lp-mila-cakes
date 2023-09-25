import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-primary h-[100px] flex">
      <div className="ml-20">
        <Logo />
      </div>
      <div className="flex justify-around items-center text-xl w-[60%] text-secondary font-semibold ml-64">
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
