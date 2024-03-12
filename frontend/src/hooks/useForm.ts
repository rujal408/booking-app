"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import validate from "./validate";

interface FormErrors {
    [key: string]: string;
  }

type ValidationFunction<T> = (value: T) => string | undefined;

interface UseFormProps<T> {
  defaultValue?: T;
  validations?: {
    [key in keyof T]: ValidationFunction<T[key]>;
  };
}

const useForm = <T>(props?: UseFormProps<T>) => {
  const [formData, setFormData] = useState<any>(props?.defaultValue || {});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (onSubmit: (data: T) => void) => {
    return async (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitted(true);
      try {
        let res = await validate<T>(formData);
        if (res) {
          onSubmit(formData);
        }
      } catch (e) {
        // Error
        console.log(e);
      }
    };
  };

  return {
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
