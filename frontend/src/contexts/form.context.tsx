import { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { defaultFormStructure } from "../contents/formStructure";
import { FormField, FormValueType } from "../interfaces/form.interface";
import { FormStructure } from "../interfaces/formStructure.interface";
import { getFormAttributeFromStorage, removeFormAttributeFromStorage, saveFormAttributeInStorage } from "../utils/form.util";


interface IFormContext {
  formStructure: FormStructure;
  setFormStructure: React.Dispatch<React.SetStateAction<FormStructure>>;
  formSectionTitleAndId: { title: string; id: string }[];
  formFields: FormField[];
  activeSection: string;
  toggleActiveSection: (section: string) => void;
  resetFormStructure: () => void;
  getActiveSectionTitle: () => string | undefined;
}

interface IFormProvider {
  children: ReactNode;
}

const FormContext = createContext<IFormContext | undefined>(undefined)


const FormProvider: FC<IFormProvider> = ({
  children
}) => {

  const [formStructure, setFormStructure] = useState<FormStructure>(
    () => getFormAttributeFromStorage('formStructure')
      ? getFormAttributeFromStorage('formStructure') as unknown as FormStructure
      : defaultFormStructure
  ); //Static


  const formSectionTitleAndId = useMemo(() => {
    const sectionTitleAndId = formStructure?.form?.groups?.map(el => {
      return {
        title: el?.title,
        id: el?.id
      }
    });
    return sectionTitleAndId;
  }, [formStructure])

  // Save the form-structure.
  useEffect(() => {
    const currFormStructure = { ...formStructure } as unknown as FormValueType;
    saveFormAttributeInStorage('formStructure', currFormStructure);
  }, [formStructure])

  const [activeSection, setActiveSection] = useState(formSectionTitleAndId?.[0]?.id);

  const formFields = useMemo(() => {
    const fields = formStructure?.form?.groups?.find(el => el?.id === activeSection)?.fields ?? [];
    return fields as FormField[];
  }, [formStructure, activeSection])


  const toggleActiveSection = (section: string) => {
    if (section && (section !== activeSection)) {
      setActiveSection(section)
    }
  }

  const resetFormStructure = () => {
    removeFormAttributeFromStorage('formStructure')
    setFormStructure(defaultFormStructure);
  }

  const getActiveSectionTitle = () => {
    return formSectionTitleAndId?.find(el => el?.id === activeSection)?.title;
  }

  const value = {
    formStructure,
    setFormStructure,
    formSectionTitleAndId,
    formFields,
    toggleActiveSection,
    activeSection,
    resetFormStructure,
    getActiveSectionTitle
  }

  return (
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  )
}

function useFormData() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error('useFormData hook used within FormProvider component.')
  }

  return context;
}


export {
  useFormData,
  FormProvider
}
