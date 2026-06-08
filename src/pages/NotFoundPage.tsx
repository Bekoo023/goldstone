import { useState } from "react";
import type { FormEvent } from "react";
import { CalendarIcon, CheckIcon, ClockIcon, MailIcon, PhoneIcon } from "../components/Icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="bg-[#f7f5f0] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98724]">Contact</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#14213d] sm:text-6xl">
            Zet de eerste stap naar voorspelbare commerciële groei.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#647089] sm:text-lg">
            Plan een vrijblijvend strategiegesprek. We bekijken jouw situatie, commerciële kansen
            en welke infrastructuur nodig is om structureel meer kwalitatieve afspraken te genereren.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98724]">Gratis strategiegesprek</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[#14213d] sm:text-4xl">
              Ontdek waar jouw groeikansen liggen.
            </h2>
            <p className="mt-5 leading-7 text-[#647089]">
              Tijdens het gesprek brengen we jouw huidige commerciële proces in kaart en bespreken
              we waar de grootste kansen voor verbetering liggen.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: ClockIcon, text: "Vrijblijvend gesprek van 30 minuten" },
                { icon: CalendarIcon, text: "Kies een moment dat jou uitkomt" },
                { icon: CheckIcon, text: "Concrete inzichten voor jouw situatie" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fcf1d4] text-[#a47720]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-bold text-[#647089]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-[#14213d] p-6 text-white">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f0c86a]">Contactgegevens</p>
              <div className="mt-5 space-y-4 text-sm text-[#d5deea]">
                <p className="flex items-center gap-3">
                  <MailIcon className="h-4 w-4 text-[#f0c86a]" />
                  Voeg hier het e-mailadres toe
                </p>
                <p className="flex items-center gap-3">
                  <PhoneIcon className="h-4 w-4 text-[#f0c86a]" />
                  Voeg hier het telefoonnummer toe
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#14213d]/8 bg-white p-6 shadow-[0_24px_80px_-45px_rgba(20,33,61,0.45)] sm:p-9">
            {submitted ? (
              <div className="grid min-h-[420px] place-items-center text-center">
                <div>
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e5f3e9] text-[#3b9860]">
                    <CheckIcon className="h-8 w-8" />
                  </span>
                  <h2 className="mt-6 text-2xl font-black text-[#14213d]">Bedankt voor je aanvraag.</h2>
                  <p className="mx-auto mt-3 max-w-md leading-7 text-[#647089]">
                    Dit is momenteel een demonstratieformulier. Koppel het formulier vóór
                    publicatie aan jouw CRM, backend of formulierdienst.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-black text-[#a47720]"
                  >
                    Formulier opnieuw bekijken
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <h2 className="text-2xl font-black text-[#14213d]">Plan een strategiegesprek</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6d788d]">
                    Laat je gegevens achter. Voeg later jouw eigen CRM- of formulierkoppeling toe.
                  </p>
                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-black text-[#526078]">
                    Voornaam
                    <input
                      required
                      name="firstName"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-[#14213d]/10 bg-[#fbfaf7] px-4 py-3 text-sm font-medium text-[#14213d] outline-none transition focus:border-[#b98724]"
                    />
                  </label>
                  <label className="text-sm font-black text-[#526078]">
                    Achternaam
                    <input
                      required
                      name="lastName"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-[#14213d]/10 bg-[#fbfaf7] px-4 py-3 text-sm font-medium text-[#14213d] outline-none transition focus:border-[#b98724]"
                    />
                  </label>
                  <label className="text-sm font-black text-[#526078]">
                    Zakelijk e-mailadres
                    <input
                      required
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-xl border border-[#14213d]/10 bg-[#fbfaf7] px-4 py-3 text-sm font-medium text-[#14213d] outline-none transition focus:border-[#b98724]"
                    />
                  </label>
                  <label className="text-sm font-black text-[#526078]">
                    Telefoonnummer
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-xl border border-[#14213d]/10 bg-[#fbfaf7] px-4 py-3 text-sm font-medium text-[#14213d] outline-none transition focus:border-[#b98724]"
                    />
                  </label>
                </div>

                <label className="mt-5 block text-sm font-black text-[#526078]">
                  Bedrijfsnaam
                  <input
                    required
                    name="company"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-[#14213d]/10 bg-[#fbfaf7] px-4 py-3 text-sm font-medium text-[#14213d] outline-none transition focus:border-[#b98724]"
                  />
                </label>

                <label className="mt-5 block text-sm font-black text-[#526078]">
                  Waar kunnen we je mee helpen?
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-[#14213d]/10 bg-[#fbfaf7] px-4 py-3 text-sm font-medium text-[#14213d] outline-none transition focus:border-[#b98724]"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-[#14213d] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#26395e]"
                >
                  Verstuur aanvraag
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
