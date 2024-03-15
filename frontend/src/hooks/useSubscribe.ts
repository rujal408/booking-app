"use client";
import { useEffect, useRef } from "react";

const useSubscribe = (
  formData: any,
  setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const formInputs: any = {};
    if (ref.current) {
      Array.from(ref.current.elements).forEach((element) => {
        switch (element.nodeName) {
          case "INPUT": {
            const el = element as HTMLInputElement;
            if (!formData[el?.name]) {
              formInputs[el?.name] = undefined;
            }
          }
          default:
            return;
        }
      });
    }
    setFormData((th: any) => ({ ...th, ...formInputs }));
  }, []);

  return ref;
};

export default useSubscribe;
