import Image from "next/image";

type TileProps = {
  src: string;
  label: string;
  className: string;
  imageClassName?: string;
  labelClassName?: string;
};

function Tile({
  src,
  label,
  className,
  imageClassName = "",
  labelClassName = "",
}: TileProps) {
    const rightAligned = ["Trunking Systems", "Control & Monitoring Systems", "Windsock & Obstruction Lights"].includes(label);
  const centered = ["Helipad Design & Construction", "Firefighting Systems", "Earthing Systems"].includes(label);
  const alignmentClass = rightAligned ? "left-auto right-[3.4%] text-right" : centered ? "left-1/2 right-auto -translate-x-1/2 text-center" : "left-[3.4%] right-auto text-left";

  return (
    <div className={`absolute overflow-hidden rounded-[10px] ${className}`}>
      <Image
        src={src}
        alt={label}
        fill
        sizes="(max-width: 768px) 50vw, 32vw"
        className={`object-cover ${imageClassName}`}
      />
      <div
        className={`absolute flex min-h-[35px] items-center rounded-[10px] ${alignmentClass} border border-white bg-white/5 px-4 py-1 text-[11px] xl:text-[12px] leading-tight text-white backdrop-blur-[17px] md:min-h-[44px] md:text-[13px] ${labelClassName || "bottom-[5%]"}`}
      >
        {label}
      </div>
    </div>
  );
}

export default function HomeCollage() {
  return (
    <section className="w-full overflow-hidden bg-white py-8">
      <div className="2xl:max-w-340 mx-auto  md:px-8 w-[90%]">
        <div className="relative mx-auto aspect-[1560/1230] w-full">
          <Tile
            src="/home-collage-helipad.png"
            label="Helipad Lighting Systems"
            className="left-0 top-0 h-[34.15%] w-[36%]"
          />
          <Tile
            src="/home-collage-lighting.png"
            label="Helipad Design & Construction"
            className="left-[32%] top-0 h-[45.05%] w-[36%]"
            labelClassName="top-[3.25%] "
          />
          <Tile
            src="/home-collage-windsock.png"
            label="Windsock & Obstruction Lights"
            className="right-0 top-0 h-[34.15%] w-[36.1%]"
            imageClassName="rotate-180 scale-y-[-1]"
          />
          <Tile
            src="/home-collage-cable-trays.png"
            label="Cable Trays"
            className="left-0 top-[34.6%] h-[31.4%] w-[48.6%]"
          />
          <Tile
            src="/home-collage-control-monitoring.png"
            label="Control & Monitoring Systems"
            className="right-0 top-[34.6%] h-[31.4%] w-[48.7%]"
            imageClassName="rotate-180 scale-y-[-1]"
          />
          <Tile
            src="/home-collage-conduit.png"
            label="Conduit Systems"
            className="left-0 top-[66.2%] h-[30%] w-[26%]"
                 imageClassName="rotate scale-y-[-1] m-0.5"
          />
          <Tile
            src="/home-collage-firefighting.png"
            label="Firefighting Systems"
            className="left-[22.5%] top-[63.2%] h-[32.9%] w-[29%] m-0.5"
          />
          <Tile
            src="/home-collage-earthing.png"
            label="Earthing Systems"
            className="left-[49.2%] top-[62.8%] h-[33.4%] w-[25.8%]"
          />
          <Tile
            src="/home-collage-trunking.png"
            label="Trunking Systems"
            className="right-0 top-[66.2%] h-[29.9%] w-[27.6%]"
            imageClassName="rotate-180 m-0.5"
            
          />
          <div className="absolute left-[34%] top-[32%] aspect-square w-[32%] rounded-full border-8 border-[#ffffff] ">
            <div className="absolute inset-[7%] z-0 flex items-center justify-center  rounded-full bg-[#1A4087]">
              <Image
                src="/home-collage-center.png"
                alt="Catobo"
                width={260}
                height={260}
                className="h-[60%] w-[60%] object-contain"
              />
            </div>
            {[
              "left-[12%] top-[12%]",
              "right-[12%] top-[12%]",
              "left-[12%] bottom-[12%]",
              "right-[12%] bottom-[12%]",
            ].map((position) => (
              <Image
                key={position}
                src="/home-collage-dot.svg"
                alt=""
                width={22}
                height={22}
                className={`absolute z-30 h-[4.6%] w-[4.6%] ${position}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
