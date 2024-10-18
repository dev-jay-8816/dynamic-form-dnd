import React, { FC } from "react";
import { UniqueIdentifier } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { rectSortingStrategy } from "@dnd-kit/sortable";

interface IDroppableSection {
  id: string;
  children: React.ReactNode;
  items: UniqueIdentifier[];
}

export const DroppableSection: FC<IDroppableSection> = ({
  children,
  items,
  id,
}) => {
  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      {children}
    </SortableContext>
  );
};
