import { useFormData } from "../contexts/form.context"
import { AddFormSectionSchema } from "../interfaces/form.interface"
import { FormStructure, Group } from "../interfaces/formStructure.interface"
import { generateUUID } from "../utils/general.util"



export const useFormHook = () => {

    // Form Data
    const { formStructure, setFormStructure, activeSection } = useFormData()


    /**
     * Form Section Methods
     */
    const addFormSectionHanlder = (values: AddFormSectionSchema) => {
        const formSectionsClone = [...formStructure?.form?.groups ?? []];
        const destinateOrder = values?.order > 0 ? values?.order : 0

        const newFormSection: Group = {
            id: generateUUID(),
            title: values?.title,
            fields: []
        }

        // Add the new form section at desired index.
        formSectionsClone?.splice(Number(destinateOrder), 0, newFormSection);

        const updatedFormStructure: FormStructure = {
            ...formStructure,
            form: {
                ...formStructure?.form,
                groups: [...formSectionsClone]
            }
        }

        setFormStructure(updatedFormStructure);
    }

    const deleteFormSectionHandler = (id: string) => {
        const filterFormSections = [...formStructure.form.groups]?.filter((el) => el?.id !== id);

        const updatedFormStructure: FormStructure = {
            ...formStructure,
            form: {
                ...formStructure.form,
                groups: [...filterFormSections]
            }
        }
        setFormStructure(updatedFormStructure);
    }

    const formSectionMethods = {
        addFormSectionHanlder,
        deleteFormSectionHandler
    }

    return {
        formSectionMethods
    }

}