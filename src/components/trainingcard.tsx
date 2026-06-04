import Image from "next/image";
import Link from "next/link";

interface TrainingProgramCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
}

export default function TrainingProgramCard({
  image,
  title,
  description,
  href = "#",
}: TrainingProgramCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden bg-white transition-all duration-300  2xl:max-w-350 w-[90%] mx-auto lg:px-8 py-10"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full h-[450px] overflow-hidden rounded">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 "
        />
      </div>

      {/* Content */}
      <div className="pt-3 w-full md:w-[60%]">
        <h3 className="text-[20px] md:text-[30px] lg:text-[35px] text-[#000000] font-medium  mb-2 leading-12">
          {title}
        </h3>

        <p className="text-[#636363] leading-relaxed text-[16px] font-light">
          {description}
        </p>
      </div>
    </Link>
  );
}