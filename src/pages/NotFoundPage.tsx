import { Link } from "react-router";
import { ArrowRightIcon } from "../components/Icons";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-[#f7f5f0] px-5 py-20 text-center">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.4em] text-[#b98724]">
          404
        </p>
        <h1 className="mt-5 text-4xl font-black text-[#14213d] sm:text-6xl">
          Deze pagina bestaat niet.
        </h1>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-[#647089]">
          De pagina die je probeert te openen is mogelijk verplaatst of verwijderd.
          Via de homepage vind je snel de juiste informatie terug.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#14213d] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#26395e]"
        >
          Terug naar home
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
