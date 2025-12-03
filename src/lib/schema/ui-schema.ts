import { z } from "zod";

export type UISchemaType = {
  type:
    | "Page"
    | "Section"
    | "Grid"
    | "Card"
    | "Text"
    | "Button"
    | "Input"
    | "Image"
    | "Table";
  props?: Record<string, any>;
  children?: UISchemaType[]; // recursion here
};


export const UISchema: z.ZodType<UISchemaType> = z.lazy(() =>
  z.object({
    type: z.enum([
      "Page",
      "Section",
      "Grid",
      "Card",
      "Text",
      "Button",
      "Input",
      "Image",
      "Table",
    ]),
    props: z.record(z.string(), z.any()).optional(),
    children: z.array(UISchema).optional(),
  })
);

