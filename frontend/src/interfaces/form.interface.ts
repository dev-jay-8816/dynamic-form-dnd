export type FieldType = 'text' | 'textarea' | 'dropdown' | 'radio' | 'number' | 'checkbox' | 'slider' | 'email' | 'password';
export type OptionsType = string[] | Array<{ label: string, value: string | number }>;
export type FormValueType = Record<string, string | number | string[] | boolean>;

export interface FormField {
    id: string;
    label: string
    type: FieldType
    name: string
    placeholder?: string
    required?: boolean
    options?: OptionsType
    min?: number
    max?: number
    step?: number
}


export interface YupField {
    name: string;
    title: string;
    type: FieldType;
}

export interface AddFormSectionSchema {
    title: string;
    order: number;
}

