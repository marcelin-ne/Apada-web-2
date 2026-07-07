import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const autismo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/autismo' }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'que-es',
      'senales-tempranas',
      'diagnostico',
      'despues-del-diagnostico',
      'terapias-y-apoyos',
      'autismo-en-mujeres',
      'derechos-e-inclusion',
      'mitos-y-verdades',
      'preguntas-frecuentes',
    ]),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

const recursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recursos' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['guia', 'articulo', 'video', 'podcast']),
    description: z.string(),
    audience: z.enum(['familias', 'docentes', 'profesionales', 'general']).default('general'),
    downloadUrl: z.string().optional(),
    externalUrl: z.string().optional(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const eventos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventos' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['proximo', 'pasado']),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string(),
    ctaLabel: z.string().default('Inscribirme'),
    ctaUrl: z.string().default('https://wa.me/593996062600'),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { autismo, recursos, eventos };
