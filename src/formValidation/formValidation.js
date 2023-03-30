import { object, string } from "yup";

export const formValidationSchema = object({
    name: string().required(),
    email: string().email().required(),
    profession: string().required(),
    city: string().required(),
    contact: string().required(),
  });