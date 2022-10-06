import * as Yup from "yup";

export const userFormValidation = Yup.object().shape({
   firstName: Yup.string()
      .required("this field can not be empty")
      .min(5, "min 5 character is required"),

   lastName: Yup.string().required("this field can not be empty"),
   birthDate: Yup.string().required("this field can not be empty"),
   email: Yup.string().required("this field can not be empty"),
});
