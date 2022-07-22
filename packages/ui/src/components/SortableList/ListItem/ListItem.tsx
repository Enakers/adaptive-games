import {UniqueIdentifier} from "@dnd-kit/core";
import {defaultAnimateLayoutChanges, useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {SortableItem} from "../SortableList.types";
import BaseListItem from "./BaseListItem";

interface Props {
  item: SortableItem;
  activeId: UniqueIdentifier | null;
  removeItem?: () => void;
  overlay?: boolean;
}

const ListItem = ({item, overlay, activeId, removeItem}: Props) => {
  if (overlay) return <BaseListItem item={item} />;

  const {transition, transform, ...sortableProps} = useSortable({
    id: item.id,
    animateLayoutChanges: args => defaultAnimateLayoutChanges({...args, wasDragging: true})
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    touchAction: "none",
    opacity: activeId === item.id ? "0.5" : undefined
  };

  return <BaseListItem item={item} style={style} removeItem={removeItem} {...sortableProps} />;
};

export default ListItem;
