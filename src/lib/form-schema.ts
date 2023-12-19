import * as z from "zod";

export const formFilterSchema = z.object({
  categories: z.array(z.string()),
  // .refine((val) => val.some((item) => item)),
});

export const formFilterCompaniesSchema = z.object({
  industry: z.array(z.string()),
});
