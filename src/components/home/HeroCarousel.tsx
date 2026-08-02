import { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown, ArrowUpRight, Heart } from 'lucide-react';

export interface HeroSlide {
  src: string;
  width: number;
  height: number;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  whatsappUrl: string;
}

export default function HeroCarousel({ slides, whatsappUrl }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  useEffect(() => {
    if (reduced || paused || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [reduced, paused, slides.length]);

  const goPrev = () => setIndex((i) => (i <= 0 ? slides.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const slide = slides[index];

  return (
    <div
      className="relative isolate flex min-h-[560px] items-center overflow-hidden sm:min-h-[620px] lg:min-h-[680px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Imágenes destacadas de APADA del Ecuador"
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          width={s.width}
          height={s.height}
          alt={s.alt}
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-brand-blue/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:pl-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/25">
          <Heart className="h-4 w-4" aria-hidden="true" /> {slide.eyebrow}
        </span>

        <h1 className="mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-xl text-base text-white sm:text-lg">{slide.description}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white py-1.5 pr-1.5 pl-6 text-base font-semibold text-brand-navy transition-transform hover:-translate-y-0.5"
          >
            Escríbenos por WhatsApp
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-white">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
          <a
            href="/nosotros"
            className="inline-flex w-fit items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Conoce a APADA
          </a>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute right-5 bottom-5 z-10 flex flex-col gap-2.5 sm:right-8 sm:bottom-8">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Imagen anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-md transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Siguiente imagen"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-md transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            Diapositiva {index + 1} de {slides.length}
          </span>
        </div>
      )}
    </div>
  );
}
