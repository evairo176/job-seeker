import * as z from "zod";

export const formFilterSchema = z.object({
  categories: z.array(z.string()),
  type_employe: z.array(z.string()),
  salary: z.array(z.string()),
  // .refine((val) => val.some((item) => item)),
});

export const formFilterCompaniesSchema = z.object({
  industry: z.array(z.string()),
});

export const formApplySchema = z.object({
  resume: z.any().refine((file: any) => file?.name, "Please upload resume"),
  fullname: z
    .string({ required_error: "Full name is required" })
    .min(5, { message: "Full name have min 5 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email not valid" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(6, { message: "Phone have min 6 characters" }),
  previousJobTitle: z.string(),
  linkedIn: z.string(),
  portofolio: z.string(),
  coverLatter: z.string(),
});
