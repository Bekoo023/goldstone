import { useState } from "react";
import type { FormEvent } from "react";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  SparkIcon,
  TargetIcon,
} from "../components/Icons";

const advantages = [
  {
    icon: ClockIcon,
    text: "Vrijblijvend gesprek van 30 minuten",
  },
  {
    icon: CalendarIcon,
    text: "Een afspraak op een passend moment",
  },
  {
    icon: TargetIcon,
    text: "Concrete inzichten voor jouw situatie",
  },
];

const inputClassName =
  "mt-2 w-full rounded-xl border border-[#14213d]/10 bg-[#fbfaf7] px-4 py-3 text-sm font-medium text-[#14213d] outline-none transition placeholder:text-[#a4adba] focus:border-[#b98724] focus:bg-white focus:ring-4 focus:ring-[#b98724]/10";

const labelClassName = "text-sm font-black text-[#526078]";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: koppel dit formulier vóór publicatie aan jouw CRM,
    // backend of formulierdienst.
    setSubmitted(true);
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-[#f7f5f0] px-5 py-12 sm:px-8 sm:py-16">
        <div className="absolute -left-24 top-6 h-64 w-64 rounded-full bg-[#a9bed0]/15 blur-3xl" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f0c86a]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.06] text-[#14213d] sm:text-6xl">
            Ontdek waar jouw{" "}
            <span className="text-[#b98724]">
              commerciële groeikansen
            </span>{" "}
            liggen.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#647089] sm:text-lg">
            Plan een vrijblijvend gesprek. We brengen jouw huidige situatie in
            kaart en bespreken welke stappen nodig zijn om meer grip te krijgen
            op leadinstroom, opvolging en afspraken.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b98724]">
              Persoonlijke kennismaking
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#14213d] sm:text-4xl">
              Een helder gesprek over jouw volgende groeistap.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[#647089]">
              Tijdens het strategiegesprek kijken we naar jouw commerciële
              proces, de huidige knelpunten en de kansen die nu mogelijk blijven
              liggen.
            </p>

            <div className="mt-7 space-y-3">
              {advantages.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-2xl border border-[#14213d]/8 bg-white p-3.5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fcf1d4] text-[#a47720]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <p className="text-sm font-bold text-[#647089]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[#14213d] p-6 text-white shadow-[0_18px_55px_-38px_rgba(20,33,61,0.7)]">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f0c86a]">
                Wat gebeurt er daarna?
              </p>

              <p className="mt-3 text-sm leading-7 text-[#d5deea]">
                We bekijken jouw aanvraag en nemen persoonlijk contact met je op
                om een geschikt moment voor het strategiegesprek te bepalen.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#14213d]/10 bg-white p-6 shadow-[0_24px_80px_-45px_rgba(20,33,61,0.45)] sm:p-8">
            {submitted ? (
              <div
                aria-live="polite"
                className="grid min-h-[390px] place-items-center text-center"
              >
                <div>
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e5f3e9] text-[#3b9860]">
                    <CheckIcon className="h-8 w-8" />
                  </span>

                  <h2 className="mt-5 text-2xl font-black text-[#14213d]">
                    De test is gelukt.
                  </h2>

                  <p className="mx-auto mt-3 max-w-md leading-7 text-[#647089]">
                    Het formulier werkt visueel goed, maar is nog niet gekoppeld
                    aan een backend, CRM of formulierdienst. Regel deze koppeling
                    voordat je de website publiceert.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-black text-[#a47720] transition hover:text-[#8f691f]"
                  >
                    Formulier opnieuw bekijken
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="border-b border-[#14213d]/10 pb-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b98724]">
                    Aanvraagformulier
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-[#14213d]">
                    Plan jouw strategiegesprek
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#6d788d]">
                    Laat je gegevens achter. We nemen persoonlijk contact met je
                    op om jouw situatie en groeikansen te bespreken.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className={labelClassName}>
                    Voornaam
                    <input
                      required
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Voornaam"
                      className={inputClassName}
                    />
                  </label>

                  <label className={labelClassName}>
                    Achternaam
                    <input
                      required
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Achternaam"
                      className={inputClassName}
                    />
                  </label>

                  <label className={labelClassName}>
                    Zakelijk e-mailadres
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="naam@bedrijf.nl"
                      className={inputClassName}
                    />
                  </label>

                  <label className={labelClassName}>
                    Telefoonnummer
                    <input
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+31 6 12345678"
                      className={inputClassName}
                    />
                  </label>
                </div>

                <label className={`mt-4 block ${labelClassName}`}>
                  Bedrijfsnaam
                  <input
                    required
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Naam van jouw bedrijf"
                    className={inputClassName}
                  />
                </label>

                <label className={`mt-4 block ${labelClassName}`}>
                  Waar kunnen we je mee helpen?
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Vertel kort iets over jouw situatie of groeidoelen."
                    className={`${inputClassName} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#14213d] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#26395e]"
                >
                  Plan mijn strategiegesprek
                </button>

                <div className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-center text-[11px] font-bold text-[#8994a5]">
                  <span>Vrijblijvend</span>
                  <span>•</span>
                  <span>Persoonlijk contact</span>
                  <span>•</span>
                  <span>Geen verplichtingen</span>
                </div>

                <p className="mx-auto mt-3 max-w-xl text-center text-[11px] leading-5 text-[#9aa4b2]">
                  Door het formulier te versturen ga je akkoord met de
                  verwerking van je gegevens om contact op te nemen over jouw
                  aanvraag.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}