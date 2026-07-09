import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonio {
  quote: string;
  name: string;
  role: string;
}

interface Props {
  testimonios: Testimonio[];
}

const AVATAR_COLORS = [
  'bg-brand-teal',
  'bg-brand-purple',
  'bg-brand-orange',
  'bg-brand-green',
  'bg-brand-blue',
  'bg-brand-navy',
];

export default function TestimoniosSlider({ testimonios }: Props) {
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Cuántas tarjetas se ven según el ancho (mobile-first)
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  // Respeta prefers-reduced-motion (clave para público con TEA)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const maxIndex = Math.max(0, testimonios.length - perView);

  // Reajusta el índice si cambia el número de tarjetas visibles
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Auto-play (pausado en hover/focus y desactivado con reduce-motion)
  useEffect(() => {
    if (reduced || paused || maxIndex === 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 6000);
    return () => window.clearInterval(id);
  }, [reduced, paused, maxIndex]);

  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const initial = (name: string) => name.trim().charAt(0).toUpperCase();

  const arrowClass =
    'flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-md transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy';

  return (
    <div
      role="group"
      aria-roledescription="carrusel"
      aria-label="Testimonios de familias"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative">
        {/* Flechas laterales (desktop) */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Testimonios anteriores"
          className={`absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 lg:flex ${arrowClass}`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Testimonios siguientes"
          className={`absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 lg:flex ${arrowClass}`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="overflow-hidden lg:mx-16">
          <div
            className={`flex ${reduced ? '' : 'transition-transform duration-500 ease-out'}`}
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {testimonios.map((t, i) => (
              <div
                key={i}
                className="shrink-0 px-3"
                style={{ flexBasis: `${100 / perView}%`, maxWidth: `${100 / perView}%` }}
                aria-hidden={i < index || i >= index + perView}
              >
                <figure className="flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="flex gap-1 text-brand-orange-light" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <hr className="my-5 border-white/15" />
                  <figcaption className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                      aria-hidden="true"
                    >
                      {initial(t.name)}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-white">{t.name}</span>
                      <span className="block text-sm text-white/60">{t.role}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-auto font-serif text-5xl leading-none text-brand-orange-light/70"
                    >
                      &rdquo;
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controles: flechas (mobile) + puntos de posición */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Testimonios anteriores"
          className={`lg:hidden ${arrowClass}`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Seleccionar testimonio">
          {Array.from({ length: maxIndex + 1 }).map((_, d) => (
            <button
              key={d}
              type="button"
              onClick={() => setIndex(d)}
              aria-label={`Ir al grupo ${d + 1} de ${maxIndex + 1}`}
              aria-current={d === index}
              className="flex h-11 items-center justify-center px-1"
            >
              <span
                className={`block h-2.5 rounded-full transition-all ${
                  d === index ? 'w-6 bg-brand-orange-light' : 'w-2.5 bg-white/30'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Testimonios siguientes"
          className={`lg:hidden ${arrowClass}`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
