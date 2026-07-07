import { useMemo, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
  PROFESIONALES,
  CIUDADES,
  ESPECIALIDADES,
  MODALIDADES,
} from '@/data/directorio';

const TODAS = 'todas';

export default function DirectorioBuscador() {
  const [busqueda, setBusqueda] = useState('');
  const [ciudad, setCiudad] = useState(TODAS);
  const [especialidad, setEspecialidad] = useState(TODAS);
  const [modalidad, setModalidad] = useState(TODAS);

  const resultados = useMemo(() => {
    return PROFESIONALES.filter((p) => {
      if (ciudad !== TODAS && p.ciudad !== ciudad) return false;
      if (especialidad !== TODAS && p.especialidad !== especialidad) return false;
      if (modalidad !== TODAS && p.modalidad !== modalidad) return false;
      if (busqueda.trim()) {
        const q = busqueda.trim().toLowerCase();
        return (
          p.nombre.toLowerCase().includes(q) ||
          p.especialidad.toLowerCase().includes(q) ||
          p.descripcion.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [busqueda, ciudad, especialidad, modalidad]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" role="search" aria-label="Buscar en la red de apoyo">
        <div className="lg:col-span-1">
          <label htmlFor="busqueda" className="mb-1.5 block text-sm font-medium text-foreground">
            Buscar
          </label>
          <Input
            id="busqueda"
            type="search"
            className="h-11"
            placeholder="Nombre, especialidad..."
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

        <div>
          <label htmlFor="filtro-especialidad" className="mb-1.5 block text-sm font-medium text-foreground">
            Especialidad
          </label>
          <Select value={especialidad} onValueChange={setEspecialidad}>
            <SelectTrigger id="filtro-especialidad" className="h-11 w-full">
              <SelectValue placeholder="Todas las especialidades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TODAS}>Todas las especialidades</SelectItem>
              {ESPECIALIDADES.map((e) => (
                <SelectItem key={e} value={e}>{e}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="filtro-modalidad" className="mb-1.5 block text-sm font-medium text-foreground">
            Modalidad
          </label>
          <Select value={modalidad} onValueChange={setModalidad}>
            <SelectTrigger id="filtro-modalidad" className="h-11 w-full">
              <SelectValue placeholder="Todas las modalidades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TODAS}>Todas las modalidades</SelectItem>
              {MODALIDADES.map((m) => (
                <SelectItem key={m} value={m}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground" role="status" aria-live="polite">
        {resultados.length} {resultados.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resultados.map((p) => (
          <article key={p.id} className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground">{p.nombre}</h3>
            <p className="mt-1 text-sm font-medium text-brand-teal">{p.especialidad}</p>
            <p className="mt-2 text-sm text-muted-foreground">{p.descripcion}</p>
            <dl className="mt-3 space-y-1 text-xs text-muted-foreground">
              <div className="flex gap-1"><dt className="font-medium">Ciudad:</dt><dd>{p.ciudad}</dd></div>
              <div className="flex gap-1"><dt className="font-medium">Modalidad:</dt><dd>{p.modalidad}</dd></div>
              <div className="flex gap-1"><dt className="font-medium">Atiende a:</dt><dd>{p.edadAtendida}</dd></div>
            </dl>
            <a
              href={p.contacto}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Contactar →
            </a>
          </article>
        ))}

        {resultados.length === 0 && (
          <p className="col-span-full py-8 text-center text-muted-foreground">
            No encontramos resultados con esos filtros. Intenta con otra combinación.
          </p>
        )}
      </div>
    </div>
  );
}
