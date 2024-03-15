import { FormErrors, Validations } from "@/hooks/useForm";

function validate<T>(
  inputs: T,
  validations?: Validations<T>
): Promise<{ status: boolean; errors: FormErrors<T> }> {
  return new Promise((res, rej) => {
    let errors: FormErrors<T> = {};
    if (validations) {
      Object.keys(validations).forEach((validate) => {
        const fieldName = validate as keyof T;
        const value = inputs[fieldName];
        const criteria = validations[fieldName];
        if (criteria) {
          const validationCriteria = criteria(value);

          if (validationCriteria?.required) {
            if (!value) {
              Object.assign(errors, {
                [fieldName]: validationCriteria?.message || "",
              });
            }
          } else if (validationCriteria?.validate) {
            const isValid = validationCriteria.validate();
            if (!isValid) {
              Object.assign(errors, {
                [fieldName]: "",
              });
            }
          } else {
            if (errors[fieldName]) {
              delete errors[fieldName];
            }
          }
        }

        Object.keys(errors).length > 0
          ? rej({ status: false, errors })
          : res({ status: true, errors });
      });
    } else {
      res({ status: true, errors });
    }
  });
}

export default validate;
