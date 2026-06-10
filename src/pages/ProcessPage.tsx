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
  SparkIcon,
  TargetIcon,
} from "../components/Icons";
import SectionHeading from "../components/SectionHeading";

const processSteps = [
  {
    number: "01",
    phase: "Fundament",
    title: "Kick-off & commerciële analyse",
    text: "We starten met een verdiepende sessie waarin we jouw bedrijf, aanbod, ideale klant en groeidoelstellingen scherp in kaart brengen.",
    icon: TargetIcon,
    items: [
      "Analyse van jouw aanbod",
      "Ideale klant bepalen",
      "Groeidoelen vastleggen",
    ],
  },
  {
    number: "02",
    phase: "Strategie",
    title: "Propositie & campagnevoorbereiding",
    text: "Op basis van de analyse ontwikkelen we een heldere commerciële aanpak die aansluit op jouw doelgroep en markt.",
    icon: SparkIcon,
    items: [
      "Scherpe propositie",
      "Campagne-insteek bepalen",
      "Scripts voor opvolging",
    ],
  },
  {
    number: "03",
    phase: "Implementatie",
    title: "Funnel, CRM & automatisering",
    text: "We bouwen de complete infrastructuur achter jouw campagnes, zodat iedere aanvraag overzichtelijk wordt verwerkt.",
    icon: FormIcon,
    items: [
      "Converterende funnel",
      "Slimme kwalificatieflow",
      "Centraal CRM-dashboard",
    ],
  },
  {
    number: "04",
    phase: "Groei",
    title: "Livegang & doorlopende optimalisatie",
    text: "Na de livegang monitoren we de resultaten en verbeteren we het proces op basis van data en praktijkervaring.",
    icon: ChartIcon,
    items: [
      "Campagnes activeren",
      "Resultaten analyseren",
      "Doorlopend optimaliseren",
    ],
  },
];

const infrastructure = [
  {
    title: "Campagnes",
    text: "Gerichte advertenties waarmee je de juiste doelgroep bereikt.",
    icon: TargetIcon,
  },
  {
    title: "Conversiefunnel",
    text: "Een duidelijke route die bezoekers omzet in relevante aanvragen.",
    icon: FormIcon,
  },
  {
    title: "CRM-dashboard",
    text: "Realtime inzicht in leadinstroom, opvolging en commerciële kansen.",
    icon: ChartIcon,
  },
  {
    title: "Agenda-integratie",
    text: "Gekwalificeerde afspraken worden direct in jouw agenda geplaatst.",
    icon: CalendarIcon,
  },
];

const channels = [
  {
    title: "Telefonisch",
    subtitle: "Persoonlijke kwalificatie",
    text: "We nemen gericht contact op om te bepalen of een aanvraag daadwerkelijk aansluit op jouw aanbod.",
    icon: PhoneIcon,
    items: [
      "Tot vier belpogingen",
      "Kwalificatie op jouw criteria",
      "Direct afspraak inplannen",
    ],
  },
  {
    title: "WhatsApp",
    subtitle: "Snel en toegankelijk",
    text: "We gebruiken WhatsApp voor snelle communicatie, bevestigingen en praktische opvolging.",
    icon: MessageIcon,
    items: [
      "Persoonlijke berichten",
      "Snelle bevestigingen",
      "Afspraakreminders",
    ],
  },
  {
    title: "E-mail",
    subtitle: "Ondersteunende opvolging",
    text: "E-mail ondersteunt het proces met relevante informatie en duidelijke afspraakbevestigingen.",
    icon: CalendarIcon,
    items: [
      "Afspraakbevestigingen",
      "Relevante informatie",
      "Automatische reminders",
    ],
  },
];

const afterLaunch = [
  "Je weet waar iedere aanvraag vandaan komt",
  "Je ziet welke opvolging heeft plaatsgevonden",
  "Je houdt grip op jouw volledige pipeline",
  "Je agenda wordt gevuld met relevante gesprekken",
];

export default function ProcessPage() {
  return (
    <main>
      <section id="proces" className="scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Het implementatieproces"
            title="Vier fases. Eén duidelijke commerciële basis."
            description="We nemen het volledige traject uit handen en zorgen dat strategie, techniek en opvolging logisch op elkaar aansluiten."
            center
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {processSteps.map(
              ({ number, phase, title, text, icon: Icon, items }) => (
                <article
                  key={number}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-[#14213d]/10 bg-white p-7 shadow-[0_16px_55px_-42px_rgba(20,33,61,0.45)] transition hover:-translate-y-1 hover:shadow-[0_22px_65px_-40px_rgba(20,33,61,0.52)] sm:p-8"
                >
                  <span className="absolute -right-1 -top-5 text-[7rem] font-black leading-none text-[#f7f1e4] transition group-hover:text-[#f2e6ca]">
                    {number}
                  </span>

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#14213d] text-[#f0c86a] transition group-hover:bg-[#b98724] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>

                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b98724]">
                        Fase {number} · {phase}
                      </p>
                    </div>

                    <h3 className="mt-7 max-w-md text-2xl font-black leading-tight text-[#14213d]">
                      {title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#6d788d]">
                      {text}
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs font-bold leading-5 text-[#647089]"
                        >
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#e5f3e9] text-[#3b9860]">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>

                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#14213d] px-5 py-14 text-white sm:px-8 sm:py-20">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#f0c86a]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f0c86a]">
                De infrastructuur
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                Alles wat nodig is om grip te krijgen op jouw pipeline.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#c8d1df] sm:text-lg">
              Achter iedere campagne bouwen we een solide basis. Daardoor weet
              je niet alleen hoeveel aanvragen er binnenkomen, maar ook wat
              ermee gebeurt en waar commerciële kansen ontstaan.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f0c86a]/15 text-[#f0c86a]">
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mt-6 text-lg font-black">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#c8d1df]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Persoonlijke opvolging"
            title="Automatisering ondersteunt het proces. Menselijk contact maakt het verschil."
            description="Nieuwe aanvragen worden zorgvuldig opgevolgd via meerdere kanalen. Zo blijft geen waardevolle kans onbenut."
            center
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {channels.map(({ title, subtitle, text, items, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.8rem] border border-[#14213d]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_55px_-38px_rgba(20,33,61,0.42)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fcf1d4] text-[#a47720]">
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mt-6 text-xl font-black text-[#14213d]">
                  {title}
                </h3>

                <p className="mt-1 text-sm font-bold text-[#b98724]">
                  {subtitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#6d788d]">{text}</p>

                <ul className="mt-6 space-y-3 border-t border-[#14213d]/10 pt-5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-bold text-[#647089]"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#e5f3e9] text-[#3b9860]">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#14213d]/10 bg-white p-7 shadow-[0_18px_60px_-45px_rgba(20,33,61,0.5)] sm:p-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b98724]">
              Na de livegang
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#14213d] sm:text-4xl">
              Geen black box, maar volledige controle over jouw commerciële
              proces.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6d788d] sm:text-base">
              Je krijgt een overzichtelijke werkwijze waarin iedere aanvraag,
              actie en afspraak inzichtelijk blijft.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {afterLaunch.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-[#f7f5f0] p-4"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e5f3e9] text-[#3b9860]">
                  <CheckIcon className="h-4 w-4" />
                </span>

                <p className="text-sm font-bold leading-6 text-[#647089]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
