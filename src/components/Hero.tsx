import Image from "next/image";

export default function Hero() {
  return (
    <div className=" w-full">
      <Image
        className="border-b-[1px] border-text border-dashed"
        src={"/hero-image.png"}
        alt="mila cakes logo"
        width={1920}
        height={700}
      />
    </div>
  );
}
