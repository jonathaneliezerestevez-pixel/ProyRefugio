import { z } from 'zod';

export const animalSchema = z.object({
  nombre: z.string().trim().min(1, 'El nombre es obligatorio'),
  raza: z.string().trim().min(1, 'La raza es obligatoria'),
  edad: z.coerce.number({ invalid_type_error: 'La edad debe ser numérica' }).int('Usa una edad entera').nonnegative('La edad no puede ser negativa'),
  sexo: z.enum(['Hembra', 'Macho'], { errorMap: () => ({ message: 'Selecciona un sexo válido' }) }),
  tipoAnimal: z.enum(['Perro', 'Gato'], { errorMap: () => ({ message: 'Selecciona un tipo válido' }) }),
});

export const animalUpdateSchema = animalSchema.partial();
