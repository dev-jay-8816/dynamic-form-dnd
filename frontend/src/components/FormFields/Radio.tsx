import { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
import { OptionsType } from '../../interfaces/form.interface';
import { isLabelValueObjArray } from '../../utils/general.util';

interface Props {
    name: string;
    label: string;
    options?: OptionsType
}

const Radio: FC<Props> = ({
    name,
    label,
    options = []
}) => {
    return (
        <>
            <div className="card-body p-3 shadow-sm bg-light">
                {label && <label htmlFor={name} className="form-label">{label}</label>}
                {
                    options?.length > 0 && (
                        isLabelValueObjArray(options)
                            ? options?.map((opt) => {
                                return (
                                    <div key={opt?.value} className="form-check">
                                        <Field className="form-check-input" type="radio" name={name} value={opt?.value} id={opt?.value?.toString()} />
                                        <label className="form-check-label" htmlFor={opt?.value?.toString()}>
                                            {opt?.label}
                                        </label>
                                    </div>
                                )
                            })
                            : options?.map((opt) => {
                                return (
                                    <div key={opt} className="form-check">
                                        <Field className="form-check-input" type="radio" name={name} value={opt} id={opt} />
                                        <label className="form-check-label" htmlFor={opt}>
                                            {opt}
                                        </label>
                                    </div>
                                )
                            })
                    )
                }
                <ErrorMessage
                    name={name}
                    className="text-danger text-xs pt-0.5 font-medium"
                    component="div"
                />

            </div>
        </>
    )
}

export default Radio;
