import { FC } from 'react'
import { useFormData } from '../contexts/form.context'

// interface ISidebarProps {
//     activeSection: string;
//     toggleActiveSection: (section: string) => void;
//     sectionTitleList: string[]
// }

const Sidebar: FC = () => {
    const { formSectionTitle: sectionTitleList, toggleActiveSection, activeSection } = useFormData()
    return (
        <>
            <div
                className="col-md-3 bg-light p-3 border-end"
                style={{ minHeight: "100vh", borderRight: "2px solid #ddd" }}
            >
                <h4 className="mb-3 border-bottom pb-2">Form Sections</h4>
                <ul className="nav flex-column">
                    {
                        sectionTitleList?.length > 0 && sectionTitleList?.map((sectionTitle) => {
                            return (
                                <li key={sectionTitle} className="nav-item mb-2">
                                    <button
                                        className={`nav-link ${activeSection === sectionTitle ? 'active' : ''}`}
                                        style={{
                                            border: "1px solid #007bff",
                                            borderRadius: "5px",
                                            backgroundColor: activeSection === sectionTitle ? '#007bff' : '',
                                            color: activeSection === sectionTitle ? '#fff' : '',
                                            width: '280px'
                                        }}
                                        onClick={() => toggleActiveSection(sectionTitle)}
                                    >
                                        {sectionTitle}
                                    </button>
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
        </>
    )
}

export default Sidebar
