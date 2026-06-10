import { Link } from "react-router";
import CtaSection from "../components/CtaSection";
import { Analytics } from "@vercel/analytics/next"
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
  SparkIcon,
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

const benefits = [
  {
    title: "Meer grip op je pipeline",
    text: "Zie waar leads binnenkomen, welke opvolging plaatsvindt en waar commerciële kansen ontstaan.",
    icon: ChartIcon,
  },
  {
    title: "Snelle persoonlijke opvolging",
    text: "Nieuwe aanvragen worden gericht benaderd via telefoon, WhatsApp en e-mail.",
    icon: ClockIcon,
  },
  {
    title: "Betere gesprekken",
    text: "Je agenda wordt gevuld met prospects die aansluiten op jouw aanbod en groeidoelen.",
    icon: UsersIcon,
  },
  {
    title: "Eén commercieel systeem",
    text: "Geen losse campagnes, maar een structuur waarin funnel, CRM en opvolging samenwerken.",
    icon: LayersIcon,
  },
];

const machineSteps = [
  {
    number: "01",
    title: "Aantrekken",
    text: "We bereiken jouw ideale doelgroep met een scherpe propositie en doelgerichte advertenties.",
    tag: "Meta Ads",
    icon: TargetIcon,
  },
  {
    number: "02",
    title: "Vangen",
    text: "Aanvragen landen in een converterende funnel met slimme pre-kwalificatie.",
    tag: "Funnel + CRM",
    icon: FormIcon,
  },
  {
    number: "03",
    title: "Converteren",
    text: "Geschikte leads worden persoonlijk opgevolgd en direct in jouw agenda gepland.",
    tag: "Appointment setting",
    icon: CalendarIcon,
  },
];

const traditional = [
  "Leads verdwijnen in je inbox",
  "Opvolging ligt volledig bij jou",
  "Losse campagnes zonder samenhang",
  "Nauwelijks zicht op commerciële data",
];

const goldstone = [
  "Exclusieve gekwalificeerde afspraken",
  "Actieve opvolging via meerdere kanalen",
  "Funnel, CRM en opvolging in één systeem",
  "Realtime inzicht in jouw commerciële proces",
];

const channels = [
  {
    title: "Telefonisch",
    text: "Persoonlijke kwalificatie en gerichte opvolging.",
    icon: PhoneIcon,
  },
  {
    title: "WhatsApp",
    text: "Snelle bevestiging, opvolging en reminders.",
    icon: MessageIcon,
  },
  {
    title: "Direct ingepland",
    text: "Gekwalificeerde gesprekken direct in jouw agenda.",
    icon: CalendarIcon,
  },
];

function CheckBadge() {
  return (
    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#e5f3e9] text-[#3b9860]">
      <CheckIcon className="h-3.5 w-3.5" />
    </span>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[590px]">
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#e7c26f]/35 blur-3xl" />
      <div className="absolute -right-10 bottom-6 h-40 w-40 rounded-full bg-[#9fb5c9]/30 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-4 shadow-[0_28px_90px_-40px_rgba(20,33,61,0.4)] backdrop-blur sm:p-6">
        <div className="flex items-center justify-between border-b border-[#14213d]/10 pb-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9aa5b5]">
              GoldStone CRM
            </p>
            <h2 className="mt-1 text-sm font-black text-[#14213d]">
              Commercieel dashboard
            </h2>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f6ed] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#247445]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4aa86a]" />
            Live
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ["247", "Leads", "+18%"],
            ["32%", "Conversie", "+5%"],
            ["€37,5k", "Pipeline", "+24%"],
          ].map(([value, label, change]) => (
            <div key={label} className="rounded-2xl bg-[#f7f5f0] p-3 sm:p-4">
              <p className="text-lg font-black text-[#14213d] sm:text-2xl">{value}</p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#8d99aa] sm:text-[10px]">
                {label}
              </p>
              <p className="mt-2 text-[10px] font-black text-[#3d9960]">{change}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-2xl border border-[#14213d]/10 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-black text-[#14213d]">Nieuwe aanvragen</p>
              <p className="text-[10px] font-bold text-[#9ba5b4]">Vandaag</p>
            </div>

            <div className="mt-4 space-y-3.5">
              {[
                ["TC", "Thomas C.", "Gekwalificeerd", "bg-[#56ae74]"],
                ["MB", "Marlon B.", "Belafspraak", "bg-[#e9b54e]"],
                ["AD", "Anouk D.", "Nieuwe lead", "bg-[#91a5bb]"],
              ].map(([initials, name, status, color]) => (
                <div key={name} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#edf1f5] text-[10px] font-black text-[#526078]">
                    {initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-black text-[#14213d]">
                      {name}
                    </span>
                    <span className="block truncate text-[10px] text-[#98a2b1]">
                      {status}
                    </span>
                  </span>
                  <span className={`h-2 w-2 rounded-full ${color}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#14213d] p-4 text-white">
            <div className="flex items-center justify-between">
              <p className="text-xs font-black">Agenda</p>
              <CalendarIcon className="h-4 w-4 text-[#f0c86a]" />
            </div>

            <p className="mt-1 text-[10px] text-[#afbbcd]">Deze week</p>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/10 p-3">
              <p className="text-[9px] font-black uppercase tracking-wider text-[#f0c86a]">
                Dinsdag · 10:00
              </p>
              <p className="mt-2 text-xs font-black">Strategiegesprek</p>
              <p className="mt-1 text-[10px] text-[#c7d0de]">Thomas Claes</p>
              <span className="mt-3 inline-flex rounded-full bg-[#58ad74]/15 px-2 py-1 text-[9px] font-black text-[#83d99d]">
                Bevestigd
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-[#14213d]/10 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-black text-[#14213d]">Opvolging voltooid</p>
            <p className="text-xs font-black text-[#b98724]">84%</p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#edf0f3]">
            <div className="h-full w-[84%] rounded-full bg-[#d4a847]" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-3 hidden items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:flex">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fcf1d4] text-[#a47720]">
          <PhoneIcon className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs font-black text-[#14213d]">
            Opvolging gestart
          </span>
          <span className="block text-[10px] text-[#8793a4]">
            Binnen 4 uur na aanvraag
          </span>
        </span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#f8f6f1] px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#f0c86a]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#a9bed0]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d9b45d]/30 bg-[#fcf4df] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#946b19] sm:text-[11px]">
              <SparkIcon className="h-4 w-4" />
              Commerciële infrastructuur voor groei
            </p>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.06] text-[#14213d] sm:text-6xl xl:text-[4.6rem]">
              Van losse leads naar{" "}
              <span className="text-[#b98724]">voorspelbare omzetgroei.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#647089] sm:text-lg">
              GoldStone bouwt een compleet sales-ecosysteem dat leads aantrekt,
              kwalificeert en opvolgt. Zo krijg je niet alleen meer aanvragen,
              maar vooral meer gekwalificeerde afspraken in je agenda.
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14213d]/15 bg-white px-6 py-4 text-sm font-black text-[#14213d] transition hover:-translate-y-1 hover:border-[#14213d]/30"
              >
                Bekijk onze werkwijze
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-xs font-bold text-[#647089] sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {[
                "Binnen 30 dagen live",
                "Persoonlijke opvolging",
                "Realtime CRM-inzicht",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckBadge />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <DashboardPreview />
        </div>
      </section>

      <section className="border-y border-[#14213d]/10 bg-white px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map(([number, label], index) => (
            <div
              key={label}
              className={`py-7 sm:py-9 ${
                index % 2 === 1 ? "border-l border-[#14213d]/10 pl-5 sm:pl-8" : ""
              } ${
                index > 1 ? "border-t border-[#14213d]/10 lg:border-t-0" : ""
              } ${index === 2 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <p className="text-3xl font-black text-[#14213d] sm:text-4xl">
                {number}
              </p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#8490a2] sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionHeading
            eyebrow="Waarom GoldStone"
            title="Groei vraagt niet alleen om meer leads. Groei vraagt om structuur."
            description="Veel commerciële kansen verdwijnen door trage opvolging, beperkte kwalificatie of te weinig inzicht. GoldStone brengt alle onderdelen samen in één schaalbaar systeem."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.6rem] border border-[#14213d]/10 bg-white p-6 shadow-[0_14px_50px_-35px_rgba(20,33,61,0.4)] transition hover:-translate-y-1"
              >
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
            description="Een volledig commercieel systeem met menselijke opvolging op de momenten waarop dat daadwerkelijk verschil maakt."
            center
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {machineSteps.map(({ number, title, text, tag, icon: Icon }) => (
              <article
                key={number}
                className="group rounded-[1.8rem] border border-[#14213d]/10 bg-white p-7 transition hover:-translate-y-2 hover:shadow-[0_22px_65px_-35px_rgba(20,33,61,0.4)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#14213d] text-white transition group-hover:bg-[#b98724]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-4xl font-black text-[#ebdfc4]">{number}</span>
                </div>

                <p className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#b98724]">
                  {tag}
                </p>
                <h3 className="mt-3 text-2xl font-black text-[#14213d]">{title}</h3>
                <p className="mt-4 leading-7 text-[#6d788d]">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/werkwijze"
              className="inline-flex items-center gap-2 text-sm font-black text-[#a47720] transition hover:gap-3"
            >
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
            title="Geen losse marketingacties. Wel een commercieel systeem dat blijft werken."
            description="De waarde zit niet alleen in het genereren van aanvragen, maar vooral in wat er daarna gebeurt."
            center
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.8rem] border border-[#14213d]/10 bg-[#f7f5f0] p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8c96a5]">
                Traditionele aanpak
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#14213d]">
                Losse leads, losse acties.
              </h3>

              <ul className="mt-7 space-y-4">
                {traditional.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-[#6d788d]"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ece7df] text-[#9e8e7a]">
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.8rem] bg-[#14213d] p-7 text-white shadow-[0_22px_65px_-35px_rgba(20,33,61,0.65)] sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f0c86a]">
                De GoldStone-aanpak
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Structuur, controle en opvolging.
              </h3>

              <ul className="mt-7 space-y-4">
                {goldstone.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-[#d9e0eb]"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#f0c86a]/15 text-[#f0c86a]">
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
          <SectionHeading
            eyebrow="Persoonlijke opvolging"
            title="Automatisering waar het kan. Menselijk contact waar het telt."
            description="Nieuwe aanvragen worden via meerdere kanalen benaderd, zodat waardevolle commerciële kansen niet blijven liggen."
            center
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {channels.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[1.6rem] border border-[#14213d]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_-35px_rgba(20,33,61,0.4)]"
              >
                <Icon className="h-6 w-6 text-[#b98724]" />
                <h3 className="mt-5 text-lg font-black text-[#14213d]">{title}</h3>
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
