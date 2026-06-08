import { Link } from "react-router";
import goldstoneLogo from "../assets/goldstone-logo.png";

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Ga naar de GoldStone homepage"
      className="inline-flex shrink-0 items-center"
    >
      <img
        src={goldstoneLogo}
        alt="GoldStone"
        className={`h-auto object-contain ${
          light
            ? "w-[235px] max-w-full"
            : "w-[175px] sm:w-[215px]"
        }`}
      />
    </Link>
  );
}