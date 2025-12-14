import { unstable_setRequestLocale } from "next-intl/server";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";

interface Props {
  params: { locale: string };
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className={title()}>Conosci il tuo stile di lavoro.</h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          In circa 10 minuti ottieni un profilo Big Five: come collabori, ti
          organizzi e gestisci pressione e cambiamento. Il risultato è un
          supporto al tuo percorso, non un giudizio.
        </h2>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button as={Link} href="/test" color="primary" radius="full" size="lg">
            Inizia il questionario
          </Button>

          <Button
            as={Link}
            href="/privacy"
            variant="bordered"
            radius="full"
            size="lg"
          >
            Privacy e uso dei dati
          </Button>
        </div>

        <p className="mt-3 text-sm text-default-500">
          Tempo stimato: ~10 minuti. Puoi interrompere quando vuoi.
        </p>
      </div>

      <div className="mx-auto mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-divider bg-content1 p-6">
          <p className="text-lg font-semibold">Chiarezza su come lavori</p>
          <p className="mt-2 text-default-500">
            Una fotografia concreta di punti di forza e preferenze operative.
          </p>
        </div>

        <div className="rounded-2xl border border-divider bg-content1 p-6">
          <p className="text-lg font-semibold">Colloquio migliore</p>
          <p className="mt-2 text-default-500">
            Domande più mirate, meno fraintendimenti, confronto più utile per
            entrambe le parti.
          </p>
        </div>

        <div className="rounded-2xl border border-divider bg-content1 p-6">
          <p className="text-lg font-semibold">Spunti utili</p>
          <p className="mt-2 text-default-500">
            Aree di sviluppo e contesti dove puoi rendere al meglio.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 rounded-2xl border border-divider bg-content1 p-6">
        <p className="text-lg font-semibold">Prima di iniziare</p>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-default-500">
          <li>
            Questo questionario non è uno strumento clinico o diagnostico: serve
            a descrivere preferenze e stili.
          </li>
          <li>
            I risultati supportano il percorso e il colloquio: non sono un
            giudizio automatico.
          </li>
          <li>
            Dettagli su dati, finalità e tempi di conservazione sono nella pagina
            “Privacy e uso dei dati”.
          </li>
        </ul>
      </div>
    </section>
  );
}
