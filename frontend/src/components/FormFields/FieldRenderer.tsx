import { FC } from 'react'

import { FieldType, FormField } from '../../interfaces/form.interface'
import Draggable from '../Draggable'

import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'
import Radio from './Radio'
import Slider from './Slider'
import CheckBox from './Checkbox'


interface Props {
  fieldType: FieldType;
  otherProps: FormField
}

const FieldRenderer: FC<Props> = (props) => {
  const { fieldType, otherProps } = props;
  return (
    // <div className='col-md-6 d-flex align-items-center mt-4'>
    <Draggable id={otherProps?.id}>
      {(() => {
        switch (fieldType) {
          case 'text':
          case 'number':
            return <Input {...otherProps} />;
          case 'dropdown':
            return <Select {...otherProps} />;
          case 'textarea':
            return <TextArea {...otherProps} />;
          case 'radio':
            return <Radio {...otherProps} />;
          case 'slider':
            return <Slider {...otherProps} />;
          case 'checkbox':
            return <CheckBox {...otherProps} />
          default:
            return <></>
        }
      })()}
    </Draggable>
    // </div>
  )
}

export default FieldRenderer
