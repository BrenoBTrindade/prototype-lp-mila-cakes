import Image from "next/image";

export default function Order() {
  return (
    <section className="xl:w-[60%] mx-auto my-20 max-lg:w-[95%] max-lg:mx-auto">
      <h1 className="text-text xl:text-3xl max-lg:text-xl font-semibold my-10">
        Encomende Agora
      </h1>
      <div className="flex justify-between">
        {orderApp.map(({ src, alt }, i) => (
          <button className="hover:scale-105 duration-500" key={i}>
            {" "}
            <Image
              className="rounded-xl shadow-black/60 shadow-md max-lg:w-[170px] max-lg:h-[100px]"
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
