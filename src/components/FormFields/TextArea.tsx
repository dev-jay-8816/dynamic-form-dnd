import { FC } from 'react'
import { Field, ErrorMessage } from 'formik'


interface Props {
    name: string;
    label: string;
    placeholder?: string;
    row?: string;
}

const TextArea: FC<Props> = ({
    name,
    label,
    placeholder = '',
    row = '3'
}) => {
    return (
        <>
            <div className="card-body p-3 shadow-sm bg-light">
                {label && <label htmlFor={name} className="form-label">{label}</label>}
                <Field as='textarea' name={name} placeholder={placeholder} className="form-control" rows={row} />
                <ErrorMessage
                    name={name}
                    className="text-danger text-xs pt-0.5 font-medium"
                    component="div"
                />
            </div>
        </>
    )
}

export default TextArea;
