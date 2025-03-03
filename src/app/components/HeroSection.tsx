// components/Hero.tsx
import React from "react";
import Image from "next/image";

interface HeroProps {
  name: string;
  title: string;
  imageSrc: string;
  backgroundColor?: string;
  textColor?: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  imageSrc,
  backgroundColor = "bg-blue-100",
  textColor = "text-gray-800",
}) => {
  return (
    <div
      className={`relative w-full h-screen flex items-center ${backgroundColor}`}
    >
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text content */}
        <div className="md:w-1/2 z-10 mb-12 md:mb-0">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${textColor}`}
          >
            Hello, I&apos;m {name}
          </h1>
          <h2 className={`text-xl md:text-2xl lg:text-3xl ${textColor}`}>
            {title}
          </h2>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={imageSrc}
              alt={name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
