import { useState } from 'react';

interface Tab {
  label: string;
  paragraphs: string[];
}

interface Props {
  tabs: Tab[];
}

export default function MisionVisionTabs({ tabs }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Misión, visión e historia"
        className="flex flex-wrap gap-x-6 gap-y-1 border-b border-border"
      >
        {tabs.map((t, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls={`panel-${i}`}
            onClick={() => setActive(i)}
            className={`-mb-px min-h-11 border-b-2 px-1 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy ${
              active === i
                ? 'border-brand-teal text-brand-teal'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tabs.map((t, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`panel-${i}`}
          aria-labelledby={`tab-${i}`}
          hidden={active !== i}
          className="mt-5 space-y-3 text-foreground/90"
        >
          {t.paragraphs.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
