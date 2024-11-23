import { OptionsType } from "../interfaces/form.interface";

export const isStringArray = (options: OptionsType): options is string[] => {
  return typeof options[0] === 'string';
};

export const isLabelValueObjArray = (
  options: OptionsType
): options is Array<{ label: string, value: string | number }> => {
  return typeof options[0] === 'object' && 'label' in options[0] && 'value' in options[0];
};

export const generateUUID = (): string => crypto.randomUUID();
