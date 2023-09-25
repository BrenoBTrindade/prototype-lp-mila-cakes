import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full mt-20 max-lg:h-fit">
      <Image
        className="border-b-[1px] border-text border-dashed max-lg:hidden"
        src={"/hero-image.png"}
        alt="mila cakes logo"
        width={1920}
        height={700}
      />
      <Image
        className="border-b-[1px] border-text border-dashed lg:hidden"
        src={"/hero-image-mobile.png"}
        alt="mila cakes logo"
        width={1920}
        height={700}
      />
    </div>
  );
}
