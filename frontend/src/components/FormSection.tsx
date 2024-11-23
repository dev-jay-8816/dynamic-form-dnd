import { FC, useRef, useState, useEffect } from 'react'
import { Formik, Form, FormikProps, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import FieldRenderer from './FormFields/FieldRenderer'
import { useFormData } from '../contexts/form.context'
import { generateYupFormValidationSchema } from '../schemas/form.schema'
import { FormValueType, YupField } from '../interfaces/form.interface'
import { getInitialFormValues, getFormAttributeFromStorage, saveFormAttributeInStorage, removeFormAttributeFromStorage } from '../utils/form.util'
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { DroppableSection } from './Droppable'
import { toast } from 'react-toastify'
import { Modal } from './Modal'
import { AddFormField } from './Forms/AddFormField'


const FORM_FIELD_DROPPABLE_ID = 'form-field-droppable-id'
const FormSection: FC = () => {

    // Form Hook
    const { formFields: fields, activeSection, formStructure, setFormStructure, resetFormStructure, getActiveSectionTitle } = useFormData()

    // Component Logic
    const [initialValues] = useState(getInitialFormValues(formStructure?.form?.groups));
    const [formValues, setFormValues] = useState<FormValueType | null>(null);
    const [currentSchema, setCurrentSchema] = useState<Yup.ObjectSchema<{
        [x: string]: string | number | any[];
    }, Yup.AnyObject, {
        [x: string]: undefined;
    }, ""> | undefined>(undefined);
    const formikRef = useRef<FormikProps<any>>(null);
    const [, setActiveDragId] = useState<string | null>(null);
    const [addFieldModal, setAddFieldModal] = useState<boolean>(false);


    //Change the current-schema
    useEffect(() => {
        const validationFields: YupField[] = [...fields].filter(el => el.required).map((field) => {
            return {
                name: field.name,
                title: field.label,
                type: field.type
            }
        });
        setCurrentSchema(generateYupFormValidationSchema(validationFields))

    }, [fields]);

    useEffect(() => {
        const formData = getFormAttributeFromStorage('formValues');
        if (formData) {
            setFormValues(formData);
        }
    }, [])

    const handleFormSubmit = (values: FormValueType, actions: FormikHelpers<FormValueType>) => {
        saveFormAttributeInStorage('formValues', values);
        setTimeout(() => actions?.setSubmitting(false), 800)
        toast('Form data saved successfully!')
    }

    const handleReset = () => {
        formikRef?.current?.resetForm();
        removeFormAttributeFromStorage('formValues')
        setFormValues(null)
        resetFormStructure();
        toast('Reset form data successfully!')
    }

    const handleDragEnd = (e: DragEndEvent) => {
        const sourceId = e?.active?.id;
        const destinationId = e?.over?.id;
        const sourceIndex = e?.active?.data?.current?.sortable?.index;
        const destinationIndex = e?.over?.data?.current?.sortable?.index;


        /**
        * Do not Drag
        */
        if (!sourceId || !destinationId) {
            return;
        }

        if (sourceId === destinationId && sourceIndex === destinationIndex) {
            return;
        }
        /**
         * Do not Drag
         */

        const activeSectionFields = [...formStructure?.form?.groups?.find(el => el?.id === activeSection)?.fields ?? []];


        if (activeSectionFields?.length > 0) {
            //Remove the field from the sourceIndex.
            const [removedField] = activeSectionFields.splice(sourceIndex, 1);

            //Add the field at the destinationIndex.
            activeSectionFields.splice(destinationIndex, 0, removedField)


            const updatedFormStructure = {
                ...formStructure,
            }

            for (let i = 0; i < updatedFormStructure.form.groups.length; i++) {
                const group = updatedFormStructure.form.groups[i];
                if (group.id === activeSection) {
                    updatedFormStructure.form.groups[i].fields = activeSectionFields;
                }

            }
            setFormStructure(updatedFormStructure);
            toast('Form structure saved successfully!')
        }

        setActiveDragId(null);
    }
    const handleDragStart = (e: DragStartEvent) => {
        if (e?.active?.id) setActiveDragId(e?.active?.id as string);
    }

    const handleAddField = async () => {

    }

    return (
        <>
            <div className="col-md-9 p-4">
                <h2 className="mb-4 border-bottom pb-2">Form Fields</h2>

                <div className="card mb-4 p-3 shadow">
                    <h4 className="card-title">{getActiveSectionTitle()}</h4>

                    {
                        fields?.length === 0 ? (
                            <div className='text-center'>
                                <button
                                    className=' align-self-end'
                                    style={{
                                        border: "1px solid #007bff",
                                        borderRadius: "5px",
                                        backgroundColor: '#314f6c',
                                        color: '#fff',
                                        width: '280px',
                                        padding: '5px'
                                    }}
                                    onClick={() => setAddFieldModal(true)}
                                >
                                    Add Field
                                </button>
                            </div>
                        ) : (
                            <Formik
                                innerRef={formikRef}
                                initialValues={formValues || initialValues}
                                validationSchema={currentSchema}
                                onSubmit={handleFormSubmit}
                                enableReinitialize
                            >
                                {({
                                    isSubmitting
                                }) => {
                                    return (
                                        <Form>
                                            <DndContext
                                                onDragEnd={handleDragEnd}
                                                onDragStart={handleDragStart}
                                            >
                                                <DroppableSection
                                                    id={FORM_FIELD_DROPPABLE_ID}
                                                    items={fields?.map(el => el?.id)}
                                                >
                                                    <div className="row mb-3">
                                                        {fields?.length > 0 && fields.map((field) => {
                                                            return (
                                                                <FieldRenderer key={field?.name} fieldType={field.type} otherProps={{ ...field }} />
                                                            )
                                                        })}
                                                    </div>
                                                </DroppableSection>

                                            </DndContext>


                                            {/* Submit and Reset Buttons */}
                                            <div className="row mt-4">
                                                <div className="col-md-12 text-end">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary me-3"
                                                        onClick={handleReset}
                                                    >
                                                        Reset
                                                    </button>
                                                    <button
                                                        disabled={isSubmitting}
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        {isSubmitting ? 'Loading...' : 'Submit'}
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        )
                    }
                </div>
            </div>

            {/* Add Field Modal */}
            <Modal
                isOpen={addFieldModal}
                title='Add Field'
                onClose={() => setAddFieldModal(false)}
                onSubmit={handleAddField}
                confirmButtonText='Add'
                modalSize='modal-lg'
            >
                <AddFormField />
            </Modal>
        </>
    )
}

export default FormSection
