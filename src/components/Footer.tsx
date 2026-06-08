import { Link } from "react-router";
import { ArrowRightIcon } from "./Icons";
import Logo from "./Logo";

const links = [
  { label: "Home", to: "/" },
  { label: "Over ons", to: "/over-ons" },
  { label: "Werkwijze", to: "/werkwijze" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#14213d] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-md leading-7 text-[#c7cfdd]">
              De commerciële groeipartner voor bedrijven die structureel meer
              gekwalificeerde afspraken en meer grip op hun salesproces willen.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c86a]">
              Navigatie
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="w-fit text-sm text-[#c7cfdd] transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c86a]">
              Klaar voor groei?
            </p>

            <p className="mt-5 text-sm leading-6 text-[#c7cfdd]">
              Ontdek tijdens een vrijblijvend strategiegesprek welke commerciële
              kansen er voor jouw bedrijf liggen.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#f0c86a] transition hover:gap-3"
            >
              Plan een gesprek
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-[#93a0b5] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GoldStone. Alle rechten voorbehouden.</p>
          <p>Commerciële infrastructuur voor groei.</p>
        </div>
      </div>
    </footer>
  );
}
