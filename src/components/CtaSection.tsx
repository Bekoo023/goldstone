import { Link } from "react-router";
import { ArrowRightIcon, CheckIcon, SparkIcon } from "./Icons";

export default function CtaSection() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-[#14213d] px-6 py-12 text-white shadow-[0_25px_80px_-30px_rgba(20,33,61,0.65)] sm:px-12 lg:px-16 lg:py-16">
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#f0c86a]/16 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 h-44 w-44 rounded-full bg-white/8 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-2 text-[#f0c86a]">
              <SparkIcon className="h-5 w-5" />
              <p className="text-xs font-black uppercase tracking-[0.24em]">
                Volgende stap
              </p>
            </div>

            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              Je eerste volgende deal ligt dichterbij dan je denkt.
            </h2>

            <div className="mt-7 flex flex-col gap-3 text-sm text-[#d7deea] sm:flex-row sm:gap-6">
              {[
                "Vrijblijvend gesprek",
                "30 minuten",
                "Gericht groeiplan",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#f0c86a]/15 text-[#f0c86a]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0c86a] px-7 py-4 text-sm font-black text-[#14213d] transition hover:-translate-y-1 hover:bg-[#f6d98e]"
          >
            Plan een strategiegesprek
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}