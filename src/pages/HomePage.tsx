import { Link } from "react-router";
import CtaSection from "../components/CtaSection";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
  FormIcon,
  LayersIcon,
  MessageIcon,
  PhoneIcon,
  TargetIcon,
  UsersIcon,
} from "../components/Icons";
import SectionHeading from "../components/SectionHeading";

const stats = [
  ["2000+", "bedrijven geholpen"],
  ["6+", "jaar trackrecord"],
  ["360°", "sales & marketing"],
  ["30", "dagen tot livegang"],
];

const phases = [
  {
    number: "01",
    title: "Aantrekken",
    description: "Bereik jouw ideale klant met een scherpe propositie en doelgerichte advertenties.",
    icon: TargetIcon,
  },
  {
    number: "02",
    title: "Vangen",
    description: "Laat aanvragen landen in een converterende funnel met slimme pre-kwalificatie.",
    icon: FormIcon,
  },
  {
    number: "03",
    title: "Converteren",
    description: "Volg iedere lead zorgvuldig op en plan de juiste gesprekken direct in jouw agenda.",
    icon: CalendarIcon,
  },
];

const traditional = [
  "Losse leads in je inbox",
  "Opvolging ligt volledig bij jou",
  "Beperkt inzicht in resultaten",
  "Marketingacties zonder samenhang",
];

const goldstone = [
  "Exclusieve gekwalificeerde afspraken",
  "Actieve opvolging via meerdere kanalen",
  "Realtime CRM-inzicht",
  "Eén commercieel groeisysteem",
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-10 top-12 h-36 w-36 rounded-full bg-[#f0c86a]/35 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-36 w-36 rounded-full bg-[#9bb5c8]/35 blur-3xl" />

      <div className="relative rounded-[2rem] border border-white/80 bg-white/90 p-4 shadow-[0_24px_90px_-35px_rgba(20,33,61,0.35)] backdrop-blur sm:p-6">
        <div className="flex items-center justify-between border-b border-[#14213d]/8 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#98a4b5]">GoldStone CRM</p>
            <p className="mt-1 text-sm font-black text-[#14213d]">Commercieel dashboard</p>
          </div>
          <span className="rounded-full bg-[#e7f6ed] px-3 py-1 text-[11px] font-black text-[#237545]">
            Live
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ["247", "Leads", "+18%"],
            ["32%", "Conversie", "+5%"],
            ["€37,5k", "Pipeline", "+24%"],
          ].map(([number, label, change]) => (
            <div key={label} className="rounded-2xl bg-[#f7f5f0] p-3 sm:p-4">
              <p className="text-lg font-black text-[#14213d] sm:text-2xl">{number}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#8b96a8]">{label}</p>
              <p className="mt-2 text-[11px] font-black text-[#3b9860]">{change}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_0.78fr]">
          <div className="rounded-2xl border border-[#14213d]/8 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-black text-[#14213d]">Nieuwe aanvragen</p>
              <p className="text-[10px] font-bold text-[#a0a8b5]">Vandaag</p>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["TC", "Thomas C.", "Gekwalificeerd"],
                ["MB", "Marlon B.", "Belafspraak"],
                ["AD", "Anouk D.", "Nieuwe lead"],
              ].map(([initials, name, status], index) => (
                <div key={name} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#edf1f5] text-[10px] font-black text-[#526078]">
                    {initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-black text-[#14213d]">{name}</span>
                    <span className="block truncate text-[10px] text-[#97a1b1]">{status}</span>
                  </span>
                  <span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-[#55ad73]" : index === 1 ? "bg-[#eab54c]" : "bg-[#92a6bc]"}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#14213d] p-4 text-white">
            <p className="text-xs font-black">Agenda</p>
            <p className="mt-1 text-[10px] text-[#aeb9cb]">Deze week</p>
            <div className="mt-4 rounded-xl bg-white/10 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#f0c86a]">Dinsdag · 10:00</p>
              <p className="mt-2 text-xs font-black">Strategiegesprek</p>
              <p className="mt-1 text-[10px] text-[#c8d1df]">Thomas Claes</p>
              <p className="mt-3 inline-flex rounded-full bg-[#58ad74]/15 px-2 py-1 text-[9px] font-bold text-[#83d99d]">
                Bevestigd
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-7 -left-3 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:flex sm:items-center sm:gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f7e6bc] text-[#a47720]">
          <PhoneIcon className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs font-black text-[#14213d]">Opvolging gestart</span>
          <span className="block text-[10px] text-[#8692a4]">Binnen 4 uur na aanvraag</span>
        </span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#f7f5f0] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#f0c86a]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d9b45d]/25 bg-[#fcf4df] px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#946b19]">
              <span className="h-2 w-2 rounded-full bg-[#d5a843]" />
              Commerciële groeipartner
            </p>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] text-[#14213d] sm:text-6xl xl:text-7xl">
              Een schaalbaar sales-ecosysteem voor{" "}
              <span className="text-[#b98724]">voorspelbare groei.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#647089] sm:text-lg">
              GoldStone brengt leadgeneratie, kwalificatie, opvolging en CRM-inzicht samen.
              Zo krijg je niet alleen meer kansen, maar ook meer grip op iedere commerciële stap.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14213d] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#26395e]"
              >
                Plan een strategiegesprek
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                to="/werkwijze"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14213d]/14 bg-white px-6 py-4 text-sm font-black text-[#14213d] transition hover:-translate-y-1 hover:border-[#14213d]/30"
              >
                Bekijk onze werkwijze
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-xs font-bold text-[#647089] sm:flex-row sm:gap-6">
              {["Binnen 30 dagen live", "Persoonlijke opvolging", "Realtime dashboard"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#e5f3e9] text-[#3b9860]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="border-y border-[#14213d]/8 bg-white px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map(([number, label], index) => (
            <div
              key={label}
              className={`py-7 sm:py-9 ${index % 2 === 1 ? "border-l border-[#14213d]/8 pl-5 sm:pl-8" : ""} ${index > 1 ? "border-t border-[#14213d]/8 lg:border-t-0" : ""} ${index === 2 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <p className="text-3xl font-black text-[#14213d] sm:text-4xl">{number}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8490a2]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionHeading
            eyebrow="Waarom GoldStone"
            title="Groei vraagt niet alleen om meer leads. Groei vraagt om structuur."
            description="Veel commerciële kansen verdwijnen door trage opvolging, beperkte kwalificatie of te weinig inzicht. Wij brengen alle onderdelen samen in één schaalbare infrastructuur."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Meer controle",
                text: "Bekijk leadinstroom, opvolging en resultaten in één overzichtelijk CRM-dashboard.",
                icon: ChartIcon,
              },
              {
                title: "Snellere opvolging",
                text: "Iedere aanvraag wordt gericht benaderd via telefoon, WhatsApp en e-mail.",
                icon: ClockIcon,
              },
              {
                title: "Betere kwalificatie",
                text: "Besteed jouw tijd aan prospects die passen bij jouw aanbod en groeidoelstellingen.",
                icon: UsersIcon,
              },
              {
                title: "Eén groeisysteem",
                text: "Geen losse acties, maar een commerciële machine waarin alle onderdelen samenwerken.",
                icon: LayersIcon,
              },
            ].map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[1.6rem] border border-[#14213d]/8 bg-white p-6 shadow-[0_14px_50px_-35px_rgba(20,33,61,0.4)]">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#fcf1d4] text-[#a47720]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-black text-[#14213d]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6d788d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="De GoldStone-machine"
            title="Van eerste klik tot gekwalificeerde afspraak."
            description="Een volledig commercieel systeem, met menselijke opvolging op de momenten waarop dat daadwerkelijk verschil maakt."
            center
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {phases.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="group rounded-[1.8rem] border border-[#14213d]/8 bg-white p-7 transition hover:-translate-y-2 hover:shadow-[0_22px_65px_-35px_rgba(20,33,61,0.4)] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#14213d] text-white transition group-hover:bg-[#b98724]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-4xl font-black text-[#ebdfc4]">{number}</span>
                </div>
                <h3 className="mt-9 text-2xl font-black text-[#14213d]">{title}</h3>
                <p className="mt-4 leading-7 text-[#6d788d]">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/werkwijze" className="inline-flex items-center gap-2 text-sm font-black text-[#a47720] transition hover:gap-3">
              Ontdek de volledige werkwijze
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Het verschil"
            title="Geen leads die blijven liggen. Wel een commercieel systeem dat blijft werken."
            center
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.8rem] border border-[#14213d]/8 bg-[#f7f5f0] p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8c96a5]">Traditionele aanpak</p>
              <h3 className="mt-3 text-2xl font-black text-[#14213d]">Losse leads, losse acties.</h3>
              <ul className="mt-7 space-y-4">
                {traditional.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold text-[#6d788d]">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#ece7df] text-[#9e8e7a]">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.8rem] bg-[#14213d] p-7 text-white shadow-[0_22px_65px_-35px_rgba(20,33,61,0.65)] sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f0c86a]">De GoldStone-aanpak</p>
              <h3 className="mt-3 text-2xl font-black">Structuur, controle en opvolging.</h3>
              <ul className="mt-7 space-y-4">
                {goldstone.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold text-[#d9e0eb]">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f0c86a]/15 text-[#f0c86a]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: PhoneIcon, label: "Telefonisch", text: "Persoonlijke kwalificatie en gerichte opvolging." },
              { icon: MessageIcon, label: "WhatsApp", text: "Snelle bevestiging, opvolging en reminders." },
              { icon: CalendarIcon, label: "Direct ingepland", text: "Gekwalificeerde gesprekken in jouw agenda." },
            ].map(({ icon: Icon, label, text }) => (
              <article key={label} className="rounded-[1.6rem] border border-[#14213d]/8 bg-white p-6">
                <Icon className="h-6 w-6 text-[#b98724]" />
                <h3 className="mt-5 text-lg font-black text-[#14213d]">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6d788d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
