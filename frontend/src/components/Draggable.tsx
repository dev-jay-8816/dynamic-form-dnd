import React, { CSSProperties, FC } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FaGripVertical } from 'react-icons/fa';


interface IDraggable {
    id: string;
    children: React.ReactElement;
}

const Draggable: FC<IDraggable> = (
    {
        id,
        children
    }
) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id,
    });

    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    if (isDragging) {
        style.opacity = 0.5;
    }


    return (
        <div ref={setNodeRef} style={style} className='col-md-6 d-flex align-items-center mt-4'>
            <FaGripVertical {...attributes} {...listeners} className="me-2" />
            {children}
        </div>
    )
}

export default Draggable
