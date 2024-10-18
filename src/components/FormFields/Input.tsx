import  { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import { FieldType } from '../../interfaces/form.interface';


interface Props {
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    min?: number;
    max?: number;
}

const Input: FC<Props> = ({
    name,
    label,
    type,
    placeholder = '',
    min,
    max
}) => {
    return (
        <>
            <div className="card-body p-3 shadow-sm bg-light">
                {label && <label htmlFor={name} className="form-label">{label}</label>}
                <Field name={name} type={type} placeholder={placeholder} className="form-control" min={min} max={max} />
                <ErrorMessage
                    name={name}
                    className="text-danger text-xs pt-0.5 font-medium"
                    component="div"
                />
            </div>
        </>
    )
}

export default Input
