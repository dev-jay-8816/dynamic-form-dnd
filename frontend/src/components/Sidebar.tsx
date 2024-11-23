import { FC, useState } from 'react'
import { useFormData } from '../contexts/form.context'
import { BsTrash } from 'react-icons/bs'
import { Modal } from './Modal'
import { useFormHook } from '../hooks/useForm.hook';


interface ISidebar {
    openModal: () => void;
}

const Sidebar: FC<ISidebar> = ({
    openModal
}) => {

    // Form Data
    const { formSectionTitleAndId: sectionTitleAndIdList, toggleActiveSection, activeSection } = useFormData();

    // Form Hook
    const {
        formSectionMethods: { deleteFormSectionHandler }
    } = useFormHook()

    const [deleteSectionId, setDeleteSectionId] = useState<string | null>(null);

    const handleDeleteSection = () => {
        if (deleteSectionId) {
            deleteFormSectionHandler(deleteSectionId);
            setDeleteSectionId(null);
        }
    }

    return (
        <>
            <div
                className="col-md-3 bg-light p-3 border-end"
                style={{ minHeight: "100vh", borderRight: "2px solid #ddd" }}
            >
                <h4 className="mb-3 border-bottom pb-2">Form Sections</h4>
                <ul className="nav flex-column">
                    {
                        sectionTitleAndIdList?.length > 0 && sectionTitleAndIdList?.map(({ title, id }) => {
                            return (
                                <li key={id} className="list-group-item d-flex justify-content-between align-items-center mb-2">
                                    <button
                                        className={`nav-link ${activeSection === id ? 'active' : ''}`}
                                        style={{
                                            border: "1px solid #007bff",
                                            borderRadius: "5px",
                                            backgroundColor: activeSection === id ? '#007bff' : '',
                                            color: activeSection === id ? '#fff' : '',
                                            width: '280px'
                                        }}
                                        onClick={() => toggleActiveSection(id)}
                                    >
                                        {title}
                                    </button>
                                    <BsTrash
                                        className="text-danger ms-2"
                                        style={{ cursor: 'pointer' }}
                                        title="Delete Section"
                                        onClick={() => setDeleteSectionId(id)}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
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
                    onClick={openModal}
                >
                    Add Section
                </button>
            </div>
            <Modal
                isOpen={!!deleteSectionId}
                title='Delete Form Section'
                confirmButtonText='Delete'
                onClose={() => setDeleteSectionId(null)}
                onSubmit={handleDeleteSection}
                modalSize='modal-sm'
            >
                <h5 className='text-center p-3'>Are you sure?</h5>
            </Modal>
        </>
    )
}

export default Sidebar
