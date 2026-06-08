import { useState } from "react";
import { Link, NavLink } from "react-router";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "./Icons";
import Logo from "./Logo";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Over ons", to: "/over-ons" },
  { name: "Werkwijze", to: "/werkwijze" },
  { name: "Contact", to: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#14213d]/8 bg-[#fbfaf7]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hoofdnavigatie">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative py-2 text-sm font-bold transition ${
                  isActive ? "text-[#b98724]" : "text-[#526078] hover:text-[#14213d]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-5 rounded-full bg-[#d5a843]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#14213d] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#26395e] lg:inline-flex"
        >
          Plan een gesprek
          <ArrowRightIcon className="h-4 w-4" />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#14213d]/10 text-[#14213d] lg:hidden"
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#14213d]/8 bg-[#fbfaf7] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobiele navigatie">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-bold transition ${
                    isActive ? "bg-[#f7e6bc] text-[#946b19]" : "text-[#526078] hover:bg-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#14213d] px-5 py-3.5 text-sm font-bold text-white"
            >
              Plan een gesprek
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
