import { z } from 'zod'

export const createTaskSchema  = z.object({
    title: z.string({
        required_error: 'Title field is a required field',
    }),
    descrp: z.string({
        required_error: 'Description is a required field',
    }),
    tdate: z.string().datetime().optional()
})

export const updateTaskSchema = z.object