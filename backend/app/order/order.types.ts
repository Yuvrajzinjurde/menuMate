import { menuResponsesI } from "../menu/menu.types";
import { z } from "zod";
export interface orderResponsesI extends menuResponsesI {}

export const orderSchema = z.object({
  tableNumber: z.number().int().positive(),

  items: z.array(
    z.object({
      itemId: z.string(),
      quantity: z.number().int().positive(),
      price: z.number().positive(),
    })
  ),

  createdAt: z.date().optional(),
  totalPrice: z.number().positive().optional(),
  isPaid: z.boolean(),
});

export interface orderSchemaI extends z.infer<typeof orderSchema> {}
