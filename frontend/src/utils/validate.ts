import { FormErrors, Validations } from "@/hooks/useForm";

function validate<T>(inputs: T, validations?: Validations<T>) {
  return new Promise((res, rej) => {
    if (validations) {
      let errors: FormErrors = {};
      Object.keys(validations).forEach((validate) => {
        const fieldName = validate as keyof T;
        const value = inputs[fieldName];
        const validationCriteria = validations[fieldName](value);
        if (validationCriteria?.required) {
          if (!value) {
            errors[fieldName as string] = validationCriteria?.message || "";
          }
        }

        if (validationCriteria?.validate) {
          const isValid = validationCriteria.validate();
          if (!isValid) {
            errors[fieldName as string] = "";
          }
        }

        Object.keys(errors).length > 0 ? rej(errors) : res(true);
      });
    } else {
      res(true);
    }
  });
}

export default validate;
