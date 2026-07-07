import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/nav';

const ASUNTOS = [
  'Orientación familiar',
  'Información general',
  'Donaciones y apadrinamiento',
  'Prensa y aliados',
  'Otro',
];

interface FormState {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

const initialState: FormState = { nombre: '', email: '', asunto: ASUNTOS[0], mensaje: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errores, setErrores] = useState<Partial<Record<keyof FormState, string>>>({});
  const [enviado, setEnviado] = useState(false);

  function validar(): boolean {
    const nuevosErrores: Partial<Record<keyof FormState, string>> = {};
    if (!form.nombre.trim()) nuevosErrores.nombre = 'Ingresa tu nombre.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nuevosErrores.email = 'Ingresa un correo válido.';
    if (!form.mensaje.trim()) nuevosErrores.mensaje = 'Cuéntanos brevemente en qué podemos ayudarte.';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validar()) return;

    const asunto = encodeURIComponent(`[Web APADA] ${form.asunto} — ${form.nombre}`);
    const cuerpo = encodeURIComponent(
      `Nombre: ${form.nombre}\nCorreo: ${form.email}\nAsunto: ${form.asunto}\n\n${form.mensaje}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${asunto}&body=${cuerpo}`;
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div role="status" className="rounded-xl border border-brand-green/30 bg-brand-green/10 p-6 text-brand-green">
        <p className="font-semibold">¡Gracias por escribirnos!</p>
        <p className="mt-1 text-sm">
          Se abrió tu cliente de correo con el mensaje listo para enviar. Si prefieres, también puedes
          escribirnos directamente por WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          className="mt-1.5 h-11"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          aria-invalid={!!errores.nombre}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
        />
        {errores.nombre && (
          <p id="error-nombre" className="mt-1 text-sm text-destructive">{errores.nombre}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          className="mt-1.5 h-11"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          aria-invalid={!!errores.email}
          aria-describedby={errores.email ? 'error-email' : undefined}
        />
        {errores.email && (
          <p id="error-email" className="mt-1 text-sm text-destructive">{errores.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="asunto">Asunto</Label>
        <Select value={form.asunto} onValueChange={(v) => setForm({ ...form, asunto: v })}>
          <SelectTrigger id="asunto" className="mt-1.5 h-11 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ASUNTOS.map((a) => (
              <SelectItem key={a} value={a}>{a}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea
          id="mensaje"
          className="mt-1.5"
          rows={5}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          aria-invalid={!!errores.mensaje}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
        />
        {errores.mensaje && (
          <p id="error-mensaje" className="mt-1 text-sm text-destructive">{errores.mensaje}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="h-11 w-full bg-brand-navy text-white hover:bg-brand-navy/90">
        Enviar mensaje
      </Button>
    </form>
  );
}
