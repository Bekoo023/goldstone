import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// VERVANG/AANVULLEN: pas deze vragen en antwoorden aan naar je eigen tone of voice.
const faqs = [
  {
    q: "Hoe snel kan ik live met GoldStone?",
    a: "Binnen 30 dagen staat het volledige systeem live: advertenties, funnel, CRM en persoonlijke opvolging. In de eerste week brengen we je doelgroep en propositie scherp in kaart, daarna bouwen en testen we de funnel.",
  },
  {
    q: "Wat houdt appointment setting precies in?",
    a: "Iedere geschikte aanvraag wordt persoonlijk opgevolgd via telefoon, WhatsApp en e-mail. Pas wanneer een lead aansluit op jouw aanbod plannen we het gesprek direct in je agenda. Jij voert alleen nog de gesprekken die ertoe doen.",
  },
  {
    q: "Werken jullie met exclusieve leads?",
    a: "Ja. Alle aanvragen die via jouw funnel binnenkomen zijn exclusief voor jou. We verkopen dezelfde leads nooit door aan andere bedrijven.",
  },
  {
    q: "Voor welke bedrijven is dit geschikt?",
    a: "Voor dienstverleners en B2B-bedrijven met een duidelijk aanbod en ruimte om te groeien. Heb je een hogere klantwaarde en wil je voorspelbaar meer gekwalificeerde gesprekken, dan past GoldStone goed.",
  },
  {
    q: "Wat heb ik zelf nodig om te starten?",
    a: "Een helder aanbod en beschikbaarheid voor de geplande gesprekken. De techniek, funnel, advertenties en opvolging nemen wij volledig uit handen.",
  },
  {
    q: "Hoe houd ik zicht op de resultaten?",
    a: "Je krijgt realtime inzicht in je commerciële proces via het GoldStone CRM: instroom van leads, status van de opvolging en geplande afspraken op één plek.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Veelgestelde vragen"
          title="Alles wat je wilt weten voordat we starten."
          description="Staat je vraag er niet bij? Stel hem gerust tijdens een vrijblijvend strategiegesprek."
          center
        />

        <div className="mt-12 space-y-3">
          {faqs.map(({ q, a }, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={q} delay={index * 60}>
                <div className="overflow-hidden rounded-2xl border border-[#14213d]/8 bg-white transition hover:border-[#14213d]/15">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[#14213d] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98724] focus-visible:ring-offset-2"
                    >
                      <span className="text-base font-black sm:text-lg">{q}</span>
                      <span className={isOpen ? "text-[#b98724]" : "text-[#9aa5b5]"}>
                        <Chevron open={isOpen} />
                      </span>
                    </button>
                  </h3>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-[#6d788d]">{a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}