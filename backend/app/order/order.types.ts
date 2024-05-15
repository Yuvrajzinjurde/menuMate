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
      averageCookingTime: z.number(),
    })
  ),
  averageTimeNeeded: z.number().optional(),
  createdAt: z.date().optional(),
  totalPrice: z.number().positive().optional(),
  isPaid: z.boolean(),
});

export interface MenuItemI {
  price: number;
  quantity: number;
  averageCookingTime: number;
}

export interface OrderI {
  items: MenuItemI[];
  averageCookingTime?: number;
  totalPrice?: number;
}

export interface orderSchemaI extends z.infer<typeof orderSchema> {}
