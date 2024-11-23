import { Formik, Form, FormikProps } from "formik"
import React, { FC, useState } from "react"
import { AddFormSectionSchema } from "../../interfaces/form.interface"
import { useFormData } from "../../contexts/form.context"
import { addFormSectionValidationSchema } from "../../schemas/form.schema"
import Input from "../FormFields/Input"
import Select from "../FormFields/Select"

interface IProps {
    formRef: React.RefObject<FormikProps<AddFormSectionSchema>>
}

export const AddFormSection: FC<IProps> = ({
    formRef
}) => {

    //Form Data
    const { formSectionTitleAndId } = useFormData();

    const [initialValues] = useState<AddFormSectionSchema>({
        title: '',
        order: formSectionTitleAndId?.length ? formSectionTitleAndId?.length : 0
    });
    const [currentSchema] = useState(addFormSectionValidationSchema);

    const sectionOrderOptions = formSectionTitleAndId.map((_, i) => {
        return {
            label: (i + 1)?.toString(),
            value: (i + 1)?.toString()
        }
    });

    const handleSubmit = () => { }

    return (
        <Formik
            innerRef={formRef}
            initialValues={initialValues}
            validationSchema={currentSchema}
            onSubmit={handleSubmit}
        >
            {() => {
                return (
                    <Form>
                        <Input name="title" placeholder="Enter section title" label="title" type="text" />
                        <Select name="order" label="Section Order" options={sectionOrderOptions} />
                    </Form>
                )
            }}
        </Formik>
    )
}

