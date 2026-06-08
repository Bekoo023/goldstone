import { Link } from "react-router";
import CtaSection from "../components/CtaSection";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
  FormIcon,
  MessageIcon,
  PhoneIcon,
  TargetIcon,
} from "../components/Icons";
import SectionHeading from "../components/SectionHeading";

const process = [
  {
    number: "01",
    title: "Kick-off meeting",
    text: "We verdiepen ons in jouw bedrijf, aanbod, ideale klant en groeidoelstellingen.",
  },
  {
    number: "02",
    title: "Strategie & voorbereiding",
    text: "We bepalen de propositie, doelgroep, campagne-insteek en scripts voor de opvolging.",
  },
  {
    number: "03",
    title: "Funnel, CRM & automations",
    text: "We bouwen de landingspagina, kwalificatieflow en het dashboard voor realtime inzicht.",
  },
  {
    number: "04",
    title: "Livegang & optimalisatie",
    text: "De machine gaat live. We analyseren de data en verbeteren de resultaten doorlopend.",
  },
];

const channels = [
  {
    title: "Telefonisch",
    subtitle: "Persoonlijke kwalificatie",
    icon: PhoneIcon,
    items: ["Tot 4 belpogingen", "Gerichte kwalificatie", "Direct afspraak inplannen"],
  },
  {
    title: "WhatsApp",
    subtitle: "Snel en laagdrempelig",
    icon: MessageIcon,
    items: ["Persoonlijke opvolging", "Bevestiging", "Afspraakreminders"],
  },
  {
    title: "E-mail",
    subtitle: "Ondersteunende opvolging",
    icon: CalendarIcon,
    items: ["Bevestiging", "Praktijkvoorbeelden", "Afspraakreminders"],
  },
];

export default function ProcessPage() {
  return (
    <main>
      <section className="bg-[#f7f5f0] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98724]">Onze werkwijze</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#14213d] sm:text-6xl">
            Een compleet commercieel systeem. Binnen 30 dagen live.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#647089] sm:text-lg">
            Wij bouwen, beheren en verbeteren de infrastructuur die nodig is om aanvragen
            doelgericht om te zetten in gekwalificeerde afspraken.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Van kick-off tot livegang"
            title="Een helder proces met een duidelijk doel."
            description="Iedere stap bouwt voort op de vorige. Daardoor ontstaat geen losse campagne, maar een commercieel systeem dat schaalbaar is."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {process.map(({ number, title, text }) => (
              <article key={number} className="rounded-[1.7rem] border border-[#14213d]/8 bg-white p-7 shadow-[0_14px_50px_-38px_rgba(20,33,61,0.4)] sm:p-8">
                <span className="text-4xl font-black text-[#e3ca91]">{number}</span>
                <h3 className="mt-5 text-xl font-black text-[#14213d]">{title}</h3>
                <p className="mt-3 leading-7 text-[#6d788d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#14213d] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f0c86a]">Het systeem</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            De juiste infrastructuur achter iedere nieuwe aanvraag.
          </h2>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              { icon: TargetIcon, title: "Aantrekken", text: "Doelgerichte advertenties bereiken de juiste markt met een sterke propositie." },
              { icon: FormIcon, title: "Kwalificeren", text: "Een heldere funnel verzamelt relevante informatie en filtert tijdverspillers." },
              { icon: ChartIcon, title: "Sturen", text: "Het CRM-dashboard maakt leadinstroom, opvolging en resultaten zichtbaar." },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[1.7rem] border border-white/10 bg-white/5 p-7">
                <Icon className="h-6 w-6 text-[#f0c86a]" />
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#c8d1df]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Menselijke opvolging"
            title="Geautomatiseerd waar het kan. Persoonlijk waar het telt."
            description="Nieuwe aanvragen worden snel en zorgvuldig opgevolgd via meerdere kanalen. Zo vergroot je de kans op een kwalitatief gesprek."
            center
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {channels.map(({ title, subtitle, items, icon: Icon }) => (
              <article key={title} className="rounded-[1.7rem] border border-[#14213d]/8 bg-white p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fcf1d4] text-[#a47720]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-7 text-xl font-black text-[#14213d]">{title}</h3>
                <p className="mt-1 text-sm font-bold text-[#b98724]">{subtitle}</p>
                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-[#6d788d]">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[#e5f3e9] text-[#3b9860]">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-black text-[#a47720] transition hover:gap-3">
              Bespreek jouw groeikansen
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#14213d]/8 bg-white p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#fcf1d4] text-[#a47720]">
              <ClockIcon className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-black text-[#14213d]">Binnen 30 dagen draait jouw commerciële machine.</h2>
              <p className="mt-2 leading-7 text-[#6d788d]">
                Van strategie tot livegang: één duidelijke aanpak met zichtbare resultaten.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14213d] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#26395e]"
            >
              Plan een gesprek
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
