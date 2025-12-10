import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center">
        <div className="border-t-[5px] border-l-[5px] border-r-[5px] border-[#cfa052] w-20 h-5 mb-3" />
        <span
          style={{ color: "#523629" }}
          className="italic font-bold text-[22px] font-georgia"
        >
          CHOCOLAT MILANO
        </span>
        <h2>
          <span
            style={{ color: "#523629" }}
            className="font-semibold text-[325%] font-montserrat"
          >
            IN THE WORLD
          </span>
        </h2>
        <div className="border-t border-[#cfa052] border-[5px] w-20" />
        <span className="text-[#523629] text-[22px] mt-4 font-georgia">
          MILANO – SINGAPORE
        </span>
      </div>
      <div className="text-center justify-center items-center flex bg-[#523629] w-full h-[100px] text-white text-[25px] font-montserrat font-semibold mt-8">
        ENJOY THE CHOCOLAT MILANO EXPERIENCE
      </div>
      <div className="text-center justify-center items-center flex mt-8">
        <span className="text-[#3f3f3f] font-light text-[16px]">
          HEADQUARTER: VIA OROBIA 26, MILAN, ITALY
        </span>
      </div>
      <div className="flex justify-center items-center gap-6 mt-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#523629] hover:text-[#cfa052] transition-colors duration-200 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#523629] hover:text-[#cfa052] transition-colors duration-200 text-2xl"
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
}
