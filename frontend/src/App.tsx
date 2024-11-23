import { useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import FormSection from './components/FormSection';
import { Modal } from './components/Modal';
import { AddFormSection } from './components/Forms/AddFormSection';
import { FormikProps } from 'formik';
import { AddFormSectionSchema } from './interfaces/form.interface';
import { useFormHook } from './hooks/useForm.hook';


const SidebarFormLayout = () => {

  // Form Hook
  const {
    formSectionMethods: { addFormSectionHanlder }
  } = useFormHook()

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const formikRef = useRef<FormikProps<AddFormSectionSchema>>(null);

  const toggleModal = (bool: boolean) => {
    setIsOpen(bool);
  }

  const handleAddSections = async () => {
    await formikRef?.current?.submitForm();
    const hasErrors = formikRef?.current?.errors;
    if (hasErrors && Object.keys(hasErrors)?.length > 0) {
      return;
    }
    const values = formikRef?.current?.values
    if (values) {
      addFormSectionHanlder(values);
      toggleModal(false);
    }
  }


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Section */}
        <Sidebar openModal={() => setIsOpen(true)} />

        {/* Form Fields Section */}
        <FormSection />

      </div>

      {/* Add Section Modal */}
      <Modal
        title='Add Section'
        isOpen={isOpen}
        onSubmit={handleAddSections}
        onClose={() => toggleModal(false)}
      >
        <AddFormSection formRef={formikRef} />
      </Modal>
    </div>
  );
};

export default SidebarFormLayout;
