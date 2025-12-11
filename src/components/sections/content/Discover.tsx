"use client";
import { useEffect, useState } from "react";

export default function Discover() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const parallax = y * (1 - Math.exp(-y / 200));
      setOffsetY(parallax);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#e1c5ad] w-full h-[110vh] flex mb-10 relative overflow-hidden">
      <div
        className="absolute -top-10 left-0 w-full h-[120%] bg-cover bg-center"
        style={{
          backgroundImage: "url('./discoverimg.jpg')",
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      <div className="bg-[#e1c5ad] relative w-2/5 flex justify-center items-center">
        <div className="absolute top-43 left-22 border-[5px] w-[90px] h-[90px] border-[#cfa052]" />

        <div className="bg-[#e1c5ad] relative max-w-[380px] p-1">
          <span className="block italic font-georgia text-[22px] font-bold mb-2">
            Discover a
          </span>

          <h2 className="font-montserrat text-[325%] font-semibold leading-tight mb-4">
            FABOLOUS <br />
            GELATO <br />
            IN MILANO
          </h2>

          <p className="font-georgia font-light mb-6">
            At Chocolat Milano Boccaccio, we spoil our clients by offering
            infinite options during the whole day: coffee and snacks for a small
            break, cakes and chocolate bars, but above all our famous Gelato.
          </p>

          <button
            type="button"
            className="cursor-pointer italic font-georgia font-semibold border-b-[5px] border-[#cfa052] 
          text-[15px] pb-1 text-[#cfa052] hover:border-[#523629]"
          >
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
