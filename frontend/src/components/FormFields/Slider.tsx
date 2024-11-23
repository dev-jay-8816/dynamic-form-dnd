import  { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import { FieldType } from '../../interfaces/form.interface';


interface Props {
    name: string;
    label: string;
    type: FieldType;
    step?: number;
    min?: number;
    max?: number;
}

const Slider: FC<Props> = ({
    name,
    label,
    step,
    min,
    max
}) => {
    return (
        <>
            <div className="card-body p-3 shadow-sm bg-light">
                {label && <label htmlFor={name} className="form-label">{label}</label>}
                <Field name={name}>
                    {(fieldData: any) => (
                        <div>
                            <input type='range' className="form-range" step={step} min={min} max={max} {...fieldData.field} />
                        </div>
                    )}
                </Field>

                <ErrorMessage
                    name={name}
                    className="text-danger text-xs pt-0.5 font-medium"
                    component="div"
                />
            </div>
        </>
    )
}

export default Slider
