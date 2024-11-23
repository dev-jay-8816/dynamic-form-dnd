import * as Yup from 'yup'

import { YupField } from '../interfaces/form.interface'

type FormYupSchema = Yup.StringSchema<string, Yup.AnyObject, undefined, ""> | Yup.ArraySchema<any[], Yup.AnyObject, undefined, ""> | Yup.NumberSchema<number, Yup.AnyObject, undefined, "">;

export const generateYupFormValidationSchema = (yupFields: YupField[] = []) => {

    const shape: Record<string, FormYupSchema> = {}

    yupFields.forEach((field) => {
        switch (field.type) {
            case 'text':
            case 'radio':
            case 'textarea':
            case 'dropdown':
                shape[field.name] = Yup.string().required(`${field.title} is required.`)
                break;
            case 'checkbox':
                shape[field.name] = Yup.array().min(1, 'Please select atleast one').required(`${field.title} is required.`)
                break;
            case 'slider':
                shape[field.name] = Yup.number().required(`${field.title} is required.`)
                break;
            default:
                break;
        }
    });

    return Yup.object().shape(shape);
}


export const addFormSectionValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is Required.'),
    order: Yup.number().required('Select the Order')
})