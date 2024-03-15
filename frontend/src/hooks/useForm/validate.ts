import { FormErrors, Validations } from "@/hooks/useForm/useForm";

function validate<T>(
  inputs: T,
  validations?: Validations<T>
): Promise<{ status: boolean; errors: FormErrors }> {
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
        } else if (validationCriteria?.validate) {
          const isValid = validationCriteria.validate();
          if (!isValid) {
            errors[fieldName as string] = "";
          }
        } else {
          if (errors[fieldName as string]) {
            delete errors[fieldName as string];
          }
        }

        Object.keys(errors).length > 0
          ? rej({ status: false, errors })
          : res({ status: true, errors });
      });
    } else {
      res({ status: true, errors: {} });
    }
  });
}

export default validate;
