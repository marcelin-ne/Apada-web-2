import { useMemo, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ORGANIZACIONES, CIUDADES } from '@/data/directorio';

const TODAS = 'todas';

export default function DirectorioBuscador() {
  const [busqueda, setBusqueda] = useState('');
  const [ciudad, setCiudad] = useState(TODAS);

  const resultados = useMemo(() => {
    return ORGANIZACIONES.filter((o) => {
      if (ciudad !== TODAS && o.ciudad !== ciudad) return false;
      if (busqueda.trim()) {
        const q = busqueda.trim().toLowerCase();
        return (
          o.nombre.toLowerCase().includes(q) ||
          o.ciudad.toLowerCase().includes(q) ||
          o.descripcion.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [busqueda, ciudad]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3" role="search" aria-label="Buscar en la red de apoyo">
        <div className="sm:col-span-2">
          <label htmlFor="busqueda" className="mb-1.5 block text-sm font-medium text-foreground">
            Buscar
          </label>
          <Input
            id="busqueda"
            type="search"
            className="h-11"
            placeholder="Nombre de la organización o ciudad..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="filtro-ciudad" className="mb-1.5 block text-sm font-medium text-foreground">
            Ciudad
          </label>
          <Select value={ciudad} onValueChange={setCiudad}>
            <SelectTrigger id="filtro-ciudad" className="h-11 w-full">
              <SelectValue placeholder="Todas las ciudades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TODAS}>Todas las ciudades</SelectItem>
              {CIUDADES.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground" role="status" aria-live="polite">
        {resultados.length} {resultados.length === 1 ? 'organización encontrada' : 'organizaciones encontradas'}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resultados.map((o) => (
          <article key={o.id} className="flex flex-col rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground">{o.nombre}</h3>
            {o.ciudad && (
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue">
                <MapPin className="h-4 w-4" /> {o.ciudad}
              </p>
            )}
            {o.descripcion && (
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{o.descripcion}</p>
            )}

            <dl className="mt-3 space-y-1.5 text-xs text-muted-foreground">
              {o.direccion && o.direccion !== o.ciudad && (
                <div className="flex gap-1.5">
                  <dt className="sr-only">Dirección</dt>
                  <dd>{o.direccion}</dd>
                </div>
              )}
            </dl>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
              {o.telHref && (
                <a
                  href={`tel:${o.telHref}`}
                  className="inline-flex items-center gap-1.5 text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" /> Llamar
                </a>
              )}
              {o.correo && (
                <a
                  href={`mailto:${o.correo}`}
                  className="inline-flex items-center gap-1.5 text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" /> Escribir
                </a>
              )}
            </div>
          </article>
        ))}

        {resultados.length === 0 && (
          <p className="col-span-full py-8 text-center text-muted-foreground">
            No encontramos organizaciones con esos filtros. Intenta con otra búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}
