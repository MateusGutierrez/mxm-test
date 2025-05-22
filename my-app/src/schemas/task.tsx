import { z } from 'zod';

export const TaskSchema = z.object({
  task: z.string().min(1, 'O título é obrigatório'),
  status: z.enum(['a_fazer', 'fazendo', 'concluido']),
  description: z.string().min(1, 'A descrição é obrigatória'),
});

export type TTaskFormValue = z.infer<typeof TaskSchema>;
