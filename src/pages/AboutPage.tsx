import CtaSection from "../components/CtaSection";
import {
  ChartIcon,
  CheckIcon,
  LayersIcon,
  SparkIcon,
  TargetIcon,
  UsersIcon,
} from "../components/Icons";
import SectionHeading from "../components/SectionHeading";

const principles = [
  {
    title: "Structuur boven ruis",
    text: "Geen verzameling losse marketingacties, maar één heldere commerciële infrastructuur.",
    icon: LayersIcon,
  },
  {
    title: "Kwaliteit boven volume",
    text: "Niet zoveel mogelijk leads, maar gesprekken met prospects die werkelijk bij jouw bedrijf passen.",
    icon: TargetIcon,
  },
  {
    title: "Inzicht boven aannames",
    text: "Duidelijke data laat zien waar kansen ontstaan en waar verbetering mogelijk is.",
    icon: ChartIcon,
  },
];

const strengths = [
  "Gericht op structurele groei",
  "Menselijke opvolging waar het telt",
  "Volledig inzicht in jouw commerciële proces",
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#f7f5f0] px-5 py-20 sm:px-8 sm:py-28">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#f0c86a]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d9b45d]/30 bg-[#fcf4df] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#946b19] sm:text-[11px]">
              <SparkIcon className="h-4 w-4" />
              Over GoldStone
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight text-[#14213d] sm:text-6xl">
              Commerciële rust voor bedrijven die willen groeien.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#647089] sm:text-lg">
              GoldStone bouwt commerciële ecosystemen waarin leadinstroom,
              opvolging, kwalificatie en inzicht logisch op elkaar aansluiten.
              Zo wordt groei overzichtelijker, schaalbaarder en beter stuurbaar.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#14213d] p-8 text-white shadow-[0_25px_80px_-35px_rgba(20,33,61,0.65)] sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f0c86a]">
              Onze overtuiging
            </p>
            <p className="mt-5 text-2xl font-black leading-snug sm:text-3xl">
              Groei ontstaat niet door harder achter leads aan te rennen, maar
              door een systeem te bouwen dat geen kans laat liggen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="De kern"
            title="Van losse commerciële acties naar één schaalbare machine."
          />

          <div className="space-y-5 text-base leading-8 text-[#647089] sm:text-lg">
            <p>
              Veel bedrijven hebben voldoende potentie, maar missen de structuur
              om iedere kans goed te benutten. Aanvragen blijven te lang liggen,
              opvolging verschilt per medewerker en resultaten zijn lastig te meten.
            </p>
            <p>
              GoldStone brengt daar verandering in. We combineren een converterende
              funnel, pre-kwalificatie, CRM-inzicht en persoonlijke appointment
              setting in één duidelijke werkwijze.
            </p>
            <p>
              Daardoor ontstaat rust. Je weet waar leads vandaan komen, wat ermee
              gebeurt en welke gesprekken daadwerkelijk in jouw agenda belanden.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Onze principes"
            title="Gebouwd voor duurzame commerciële groei."
            description="De juiste commerciële basis zorgt niet alleen voor meer aanvragen, maar ook voor meer controle en betere beslissingen."
            center
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {principles.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.7rem] border border-[#14213d]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_-35px_rgba(20,33,61,0.4)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fcf1d4] text-[#a47720]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-7 text-xl font-black text-[#14213d]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6d788d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4">
            {[
              ["2000+", "bedrijven geholpen"],
              ["6+", "jaar ervaring"],
              ["360°", "commerciële aanpak"],
              ["30", "dagen tot livegang"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-[1.5rem] border border-[#14213d]/10 bg-white p-6 shadow-[0_14px_50px_-35px_rgba(20,33,61,0.35)]"
              >
                <p className="text-3xl font-black text-[#14213d]">{number}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.13em] text-[#8490a2]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 text-[#b98724]">
              <UsersIcon className="h-6 w-6" />
              <p className="text-xs font-black uppercase tracking-[0.28em]">
                Trackrecord
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight text-[#14213d] sm:text-5xl">
              Ervaring vertaald naar een duidelijke commerciële methode.
            </h2>

            <div className="mt-7 space-y-4">
              {strengths.map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold text-[#647089]"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e5f3e9] text-[#3b9860]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
