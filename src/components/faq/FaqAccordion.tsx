import { useMemo, useState } from 'react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FaqCategory, FaqItem } from '@/data/faq';

interface FaqListProps {
  items: FaqItem[];
  defaultOpenId?: string;
}

function FaqList({ items, defaultOpenId }: FaqListProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue={defaultOpenId ?? items[0]?.id}
      className="flex flex-col gap-3"
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 transition-colors data-[state=open]:bg-brand-blue data-[state=open]:ring-0"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5">
              <span className="text-base font-semibold text-foreground group-data-[state=open]:text-white sm:text-lg">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white transition-colors group-data-[state=open]:bg-white group-data-[state=open]:text-brand-blue"
              >
                <ChevronDown className="h-4 w-4 group-data-[state=open]:hidden" />
                <ChevronUp className="hidden h-4 w-4 group-data-[state=open]:block" />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="px-5 pb-5 text-sm leading-relaxed text-white/90 sm:px-6 sm:text-base">{item.answer}</p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

interface FaqAccordionProps {
  items: FaqItem[];
  categories?: FaqCategory[];
  defaultOpenId?: string;
}

const TODAS = 'todas';

export default function FaqAccordion({ items, categories, defaultOpenId }: FaqAccordionProps) {
  const [active, setActive] = useState(TODAS);

  const groups = useMemo(() => {
    if (!categories) return [{ category: null as FaqCategory | null, items }];
    const visible = categories.filter((c) => active === TODAS || active === c.id);
    return visible
      .map((c) => ({ category: c, items: items.filter((i) => i.category === c.id) }))
      .filter((g) => g.items.length > 0);
  }, [items, categories, active]);

  return (
    <div>
      {categories && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar preguntas por categoría">
          <button
            type="button"
            onClick={() => setActive(TODAS)}
            aria-pressed={active === TODAS}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === TODAS ? 'bg-brand-navy text-white' : 'bg-brand-cream-dark text-brand-navy hover:bg-brand-sky-light'
            }`}
          >
            Todas
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-pressed={active === c.id}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === c.id ? 'bg-brand-navy text-white' : 'bg-brand-cream-dark text-brand-navy hover:bg-brand-sky-light'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      <div className={categories ? 'mt-8 flex flex-col gap-10' : ''}>
        {groups.map(({ category, items: groupItems }) => (
          <div key={category?.id ?? 'all'}>
            {category && (
              <h3 className="mb-4 text-lg font-bold text-foreground">{category.label}</h3>
            )}
            <FaqList items={groupItems} defaultOpenId={category ? undefined : defaultOpenId} />
          </div>
        ))}
      </div>
    </div>
  );
}
