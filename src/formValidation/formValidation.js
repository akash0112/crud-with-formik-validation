import { object, string } from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const formValidationSchema = object({
    name: string().required(),
    email: string().email().required(),
    profession: string().required(),
    city: string().required(),
    contact: string().required("phone number is required")
  .matches(phoneRegExp, 'phone number is not valid')
  .min(10, "too short")
  .max(10, "too long"),
  });