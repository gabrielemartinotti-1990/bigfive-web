"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Checkbox } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export function ConsentGate({ children }: { children: React.ReactNode }) {
  const STORAGE_KEY = "assessmenthub_consent_v1";

  const [loaded, setLoaded] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedUse, setAcceptedUse] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    try {
      const v = sessionStorage.getItem(STORAGE_KEY);
      if (v === "1") {
        setAcceptedPrivacy(true);
        setAcceptedUse(true);
        setStarted(true);
      }
    } finally {
      setLoaded(true);
    }
  }, []);

  const canStart = useMemo(
    () => acceptedPrivacy && acceptedUse,
    [acceptedPrivacy, acceptedUse]
  );

  const onStart = () => {
    sessionStorage.setItem(STORAGE_KEY, "1"); // solo un flag, niente dati personali
    setStarted(true);
  };

  if (!loaded) return null;

  if (started) return <>{children}</>;

  return (
    <section className="mx-auto max-w-3xl px-6 py-8">
      <div className="rounded-2xl border border-divider bg-content1 p-6">
        <h1 className="text-2xl font-semibold">Prima di iniziare</h1>

        <p className="mt-2 text-default-500">
          Questo questionario descrive tendenze (Big Five) e restituisce un
          report utile per il percorso e il colloquio. Non è uno strumento
          clinico/diagnostico e non produce giudizi automatici.
        </p>

        <div className="mt-5 space-y-4">
          <Checkbox
            isSelected={acceptedPrivacy}
            onValueChange={setAcceptedPrivacy}
          >
            Ho letto e compreso l’informativa{" "}
            <Link href="/privacy" className="underline">
              Privacy e uso dei dati
            </Link>
            .
          </Checkbox>

          <Checkbox isSelected={acceptedUse} onValueChange={setAcceptedUse}>
            Capisco che posso interrompere in qualsiasi momento e che il report è
            descrittivo (non “giusto/sbagliato”).
          </Checkbox>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button color="primary" radius="full" isDisabled={!canStart} onPress={onStart}>
            Inizia il questionario
          </Button>

          <Button as={Link} href="/" variant="bordered" radius="full">
            Torna alla landing
          </Button>
        </div>

        <p className="mt-3 text-xs text-default-500">
          Nota: salviamo solo un flag di consenso nella sessione del browser (niente risposte).
        </p>
      </div>
    </section>
  );
}
