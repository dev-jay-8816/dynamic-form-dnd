export interface FormStructure {
    form: Form
  }
  
  export interface Form {
    title: string
    description: string
    groups: Group[]
  }
  
  export interface Group {
    title: string
    fields: Field[]
  }
  
  export interface Field {
    label: string
    type: string
    name: string
    placeholder?: string
    required?: boolean
    options?: any[]
    min?: number
    max?: number
    step?: number
  }
  