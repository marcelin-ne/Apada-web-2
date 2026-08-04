import { useEffect, useState } from 'react';

// Lista fija de categorías: nunca se acepta texto libre, solo estos valores predefinidos.
const FILTERS = [
  { value: 'todos', label: 'Todos' },
  { value: 'articulo', label: 'Marco Legal' },
  { value: 'guia', label: 'Guías Didácticas' },
  { value: 'video', label: 'Videos' },
  { value: 'podcast', label: 'Podcasts' },
] as const;

type FilterValue = (typeof FILTERS)[number]['value'];

interface Props {
  /** Selector de los bloques a mostrar/ocultar; cada uno debe tener data-resource-type. */
  targetSelector?: string;
}

export default function ResourceFilters({ targetSelector = '#explorador [data-resource-type]' }: Props) {
  const [active, setActive] = useState<FilterValue>('todos');

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(targetSelector);
    items.forEach((item) => {
      const type = item.dataset.resourceType;
      item.hidden = active !== 'todos' && type !== active;
    });
  }, [active, targetSelector]);

  return (
    <div role="group" aria-label="Filtrar recursos por categoría" className="flex flex-wrap gap-2">
      {FILTERS.map((filter) => {
        const isActive = active === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActive(filter.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-brand-navy text-white'
                : 'bg-brand-cream-dark text-brand-navy hover:bg-brand-cream-dark/70'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
