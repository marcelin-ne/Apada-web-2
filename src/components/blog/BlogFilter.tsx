import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface BlogCardData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  author: string;
  dateLabel: string;
  coverSrc: string;
  coverWidth: number;
  coverHeight: number;
}

interface BlogFilterProps {
  posts: BlogCardData[];
  categories: { value: string; label: string }[];
}

const TODAS = 'todas';

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [active, setActive] = useState(TODAS);

  const filtered = useMemo(
    () => (active === TODAS ? posts : posts.filter((p) => p.category === active)),
    [posts, active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar artículos por categoría">
        <button
          type="button"
          onClick={() => setActive(TODAS)}
          aria-pressed={active === TODAS}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === TODAS
              ? 'bg-brand-navy text-white'
              : 'bg-brand-cream-dark text-brand-navy hover:bg-brand-sky-light'
          }`}
        >
          Todas
        </button>
        {categories.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => setActive(c.value)}
            aria-pressed={active === c.value}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === c.value
                ? 'bg-brand-navy text-white'
                : 'bg-brand-cream-dark text-brand-navy hover:bg-brand-sky-light'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-foreground" role="status" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'artículo' : 'artículos'}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={post.coverSrc}
                width={post.coverWidth}
                height={post.coverHeight}
                alt=""
                className="h-48 w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-brand-navy shadow-sm">
                {post.categoryLabel}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-medium text-muted-foreground">
                {post.dateLabel} · {post.author}
              </p>
              <h3 className="mt-2 text-lg font-bold text-foreground">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Leer más
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-muted-foreground">
            No hay artículos en esta categoría todavía.
          </p>
        )}
      </div>
    </div>
  );
}
