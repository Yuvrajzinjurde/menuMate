import { z } from "zod"

export interface menuResponsesI {
    [Key: string]: {
        statusCOde: number,
        message: string
    }
}

const menuItemSchema = z.object({

    name: z.string(),
    description: z.string().optional(),
    price: z.number().positive().int(),
    picture: z.string().optional(),
    recipe: z.string().optional()
});

export interface menuItemSchemaI extends z.infer<typeof menuItemSchema> { }

export default {

}