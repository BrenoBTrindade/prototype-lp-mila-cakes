import Image from "next/image";

export default function Order() {
  return (
    <section className="w-[60%] mx-auto my-20">
      <h1 className="text-text text-3xl font-semibold my-10">
        Encomende Agora
      </h1>
      <div className="flex justify-between">
        {orderApp.map(({ src, alt }, i) => (
          <button className="hover:scale-105 duration-500" key={i}>
            {" "}
            <Image
              className="rounded-xl shadow-black/60 shadow-md"
              src={src}
              alt={alt}
              width={550}
              height={300}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

const orderApp = [
  { src: "/wpp.png", alt: "WhatsApp image" },
  { src: "/ifood.png", alt: "Ifood image" },
];
