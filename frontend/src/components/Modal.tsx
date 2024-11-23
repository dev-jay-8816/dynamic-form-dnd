import { FC, ReactElement } from 'react'

interface IModal {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => Promise<void> | void;
    title: string;
    children: ReactElement;
    confirmButtonText?: string;
    modalSize?: 'modal-xl' | 'modal-lg' | 'modal-sm'
}

const Modal: FC<IModal> = ({
    isOpen,
    onSubmit,
    onClose,
    title,
    children,
    confirmButtonText = 'Save',
    modalSize
}) => {


    if (!isOpen) {
        return <></>
    }

    return (
        <>
            <div className="modal fade show" style={{ display: isOpen ? 'block' : 'none' }}>
                <div className={`modal-dialog modal-dialog-centered ${modalSize ? modalSize : ''}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={onSubmit}>{confirmButtonText}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    )
}

export { Modal }
