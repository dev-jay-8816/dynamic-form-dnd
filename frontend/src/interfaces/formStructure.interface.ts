import { FieldType } from "./form.interface";

export interface FormStructure {
    form: Form
  }
  
  export interface Form {
    title: string
    description: string
    groups: Group[]
  }
  
  export interface Group {
    id: string;
    title: string
    fields: Field[]
  }
  
  export interface Field {
    id: string;
    label: string
    type: FieldType;
    name: string
    placeholder?: string
    required?: boolean
    options?: any[]
    min?: number
    max?: number
    step?: number
  }
  