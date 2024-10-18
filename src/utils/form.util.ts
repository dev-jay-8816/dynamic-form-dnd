import { FormValueType } from "../interfaces/form.interface";
import { Group } from "../interfaces/formStructure.interface";

// const FORM_VALUE_VAR = 'formValues';

export const getInitialFormValues = (data: Group[]) => {
  const initValues: Record<string, any> = {};
  data?.forEach(el => {
    return el?.fields?.forEach(el => {
      initValues[el.name] = '';
    })
  });
  return initValues;
}


export const saveFormAttributeInStorage = (
  key: 'formValues' | 'formStructure',
  values: FormValueType
) => {
  const strigyfyValues = JSON.stringify(values);
  localStorage.setItem(key, strigyfyValues);
}

export const getFormAttributeFromStorage = (key: 'formValues' | 'formStructure',): FormValueType | null => {
  const formValuesStr = localStorage.getItem(key)
  if (formValuesStr) {
    return JSON.parse(formValuesStr);
  }
  return null;
}

export const removeFormAttributeFromStorage = (key: 'formValues' | 'formStructure',) =>  localStorage.removeItem(key);

export const getFormSectionKey = (section: string) => section?.toLowerCase().replaceAll(' ', '_');