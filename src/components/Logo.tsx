import { Link } from "react-router-dom";
import LogoDefault from "../../public/assets/logo.webp";
import LogoWhite from "../../public/assets/logo-white.webp";

interface LogoProps {
  variant?: "default" | "white";
  className?: string; 
}

export default function Logo({
  variant = "default",
  className = "",
}: LogoProps) {
  const logoSrc = variant === "white" ? LogoWhite : LogoDefault;

  return (
    <Link
      to="/"
      className={`flex items-center gap-2 cursor-pointer select-none ${className}`}
    >
      <img
        src={logoSrc}
        alt="Leksara Logo"
        draggable={false}
        className="w-20 md:w-24 xl:w-28 object-contain pointer-events-none select-none"
      />
    </Link>
  );
}
