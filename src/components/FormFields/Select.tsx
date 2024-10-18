import { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import { OptionsType } from '../../interfaces/form.interface';
import { isLabelValueObjArray } from '../../utils/general.util';



interface Props {
    name: string;
    label: string;
    options?: OptionsType;
}

const Select: FC<Props> = ({
    name,
    label,
    options = []
}) => {
    return (
        <>
            <div className="card-body p-3 shadow-sm bg-light">
                {label && <label htmlFor={name} className="form-label">{label}</label>}
                <Field as="select" name={name} className="form-select">
                    <option value="">Select an option</option>
                    {
                        options?.length > 0 && (
                            isLabelValueObjArray(options)
                                ? options.map((opt) => <option key={opt?.value} value={opt?.value}>{opt?.label}</option>)
                                : options.map((opt) => <option key={opt} value={opt}>{opt}</option>)
                        )
                    }
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

export default Select
