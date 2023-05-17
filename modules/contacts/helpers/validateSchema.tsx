import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  phone: yup
    .string()
    .trim()
    .required("Phone is required")
    .matches(/^\+\d{3}\d{9,}$/, "Phone format: +38066XXXXXXX"),
  email: yup.string().trim().email().required("Email is required"),
  policyCheck: yup.boolean().oneOf([true], "Please check here").required("Checkbox is required"),
});
