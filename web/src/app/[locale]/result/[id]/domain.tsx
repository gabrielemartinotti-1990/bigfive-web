'use client';

import { subtitle, heading } from '@/components/primitives';
import Link from 'next/link';
import { Facet, Domain } from '@bigfive-org/results';
import { BarChart } from '@/components/bar-chart';
import ReadMore from '@/components/read-more';
import { reportCopy } from './report-copy';

interface DomainProps {
  domain: Domain;
  scoreText: string;
  showExpanded?: boolean;
}

export const DomainPage = ({ domain, scoreText, showExpanded }: DomainProps) => {
  return (
    <>
      <div className="mt-5">
        <Link href={`#${domain.title}`}>
          <h2 className={heading()} id={domain.title}>
            {domain.title}
          </h2>
        </Link>

        <p className="mt-2 text-default-500">{domain.shortDescription}</p>

        <div className="mt-4 rounded-2xl border border-divider bg-content1 p-4">
          <div className="text-sm text-default-500">Sintesi</div>

          {(() => {
            const max = 120; // coerente con BarChart max={120} dei domini
            const s = (domain as any).score as number | undefined;

            if (typeof s !== 'number') {
              return (
                <>
                  <div className="mt-1 font-semibold">Livello: —</div>
                  <p className="mt-2 text-default-500">
                    Punteggio non disponibile per questo dominio.
                  </p>
                </>
              );
            }

            const pct = Math.round((s / max) * 100);
            const band: 'low' | 'mid' | 'high' =
              pct < 40 ? 'low' : pct > 60 ? 'high' : 'mid';

            const level =
              band === 'low'
                ? 'Tendenza più bassa'
                : band === 'high'
                ? 'Tendenza più alta'
                : 'Tendenza intermedia';

            const d = (domain as any).domain as 'O' | 'C' | 'E' | 'A' | 'N';

            const narrative =
              reportCopy[d]?.[band] ?? 'Sintesi non disponibile per questo dominio.';

            return (
              <>
                <div className="mt-1 font-semibold">Livello: {level}</div>
                <div className="mt-1 text-sm text-default-500">
                  Punteggio: {s}/{max} ({pct}%)
                </div>
                <p className="mt-2 text-default-500">{narrative}</p>
              </>
            );
          })()}
        </div>

        <ReadMore showExpanded={showExpanded}>
          <p dangerouslySetInnerHTML={{ __html: domain.description }} />
        </ReadMore>

        <br />
        <br />

        <p>{domain.text}</p>

        <BarChart max={20} results={domain.facets} />

        <div>
          {domain.facets.map((facet: Facet, index: number) => (
            <div key={index} className="mt-5">
              <Link href={`#${facet.title}`}>
                <h3 className={subtitle()} id={facet.title}>
                  {facet.title}
                </h3>
              </Link>

              <div className="font-semibold text-gray-500">
                {scoreText}: {facet.score} ({facet.scoreText})
              </div>

              <p className="mt-3">{facet.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
