import { Link } from "react-router";

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link to="/" aria-label="Ga naar de homepage" className="group inline-flex items-center gap-3">
      <span
        className={`grid h-10 w-10 rotate-45 place-items-center rounded-[10px] border ${
          light
            ? "border-[#f0c86a]/50 bg-[#f0c86a]"
            : "border-[#d8ae52]/50 bg-[#f6d27e]"
        } shadow-[0_8px_24px_-8px_rgba(184,137,36,0.8)] transition group-hover:rotate-[52deg]`}
      >
        <span className="-rotate-45 text-[11px] font-black tracking-tight text-[#14213d]">
          GS
        </span>
      </span>
      <span className={`text-lg font-black tracking-[0.18em] ${light ? "text-white" : "text-[#14213d]"}`}>
        GOLDSTONE
      </span>
    </Link>
  );
}
