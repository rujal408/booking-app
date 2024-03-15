"use client";

import validate from "@/utils/validate";
import { ChangeEvent, FormEvent, useState } from "react";
import useSubscribe from "./useSubscribe";

export interface FormErrors {
  [key: string]: string;
}

type ValidationFunction<T> = (value: T) => {
  required?: boolean;
  message?: string;
  validate?: () => boolean;
};

export type Validations<T> = {
  [key in keyof T]: ValidationFunction<T[key]>;
};

interface UseFormProps<T> {
  defaultValue?: T;
  validations?: Validations<T>;
}

const useForm = <T>(props?: UseFormProps<T>) => {
  const [formData, setFormData] = useState<any>(props?.defaultValue || {});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const ref = useSubscribe(props?.defaultValue || {}, setFormData);

  const handleValidate = (data: any, call?: CallableFunction) =>
    validate<T>(data, props?.validations)
      .then(() => {
        if (call) {
          call();
        }
      })
      .catch((e) => {
        setErrors(e as FormErrors);
      });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    if (isSubmitted) {
      handleValidate(newData);
    }
    setFormData(newData);
  };

  const handleSubmit = (onSubmit: (data: T) => void) => {
    return async (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitted(true);
      handleValidate(formData, () => {
        onSubmit(formData);
      });
    };
  };

  return {
    ref,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
