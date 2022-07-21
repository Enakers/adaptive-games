import {DraggableAttributes} from "@dnd-kit/core";
import {SyntheticListenerMap} from "@dnd-kit/core/dist/hooks/utilities";
import {useCallback} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {MdDragIndicator} from "react-icons/md";
import {SortableItem} from "../SortableList.d";

interface Props {
  item: SortableItem;
  setNodeRef?: (element: HTMLElement | null) => void;
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap | null;
  attributes?: DraggableAttributes;
  style?: Record<string, unknown>;
  removeItem?: () => void;
}

const BaseListItem = ({
  item,
  attributes,
  listeners,
  setActivatorNodeRef,
  setNodeRef,
  style,
  removeItem
}: Props) => {
  const SortableListItemOverlay = useCallback((node: HTMLDivElement) => {
    if (!node) return;

    node.classList.replace("shadow-lg", "drop-shadow-2xl");
  }, []);

  return (
    <div
      ref={setNodeRef ?? SortableListItemOverlay}
      className="my-6 p-4 bg-base-200 rounded-lg items-center shadow-lg flex justify-between"
      style={style}
    >
      <span>{item.data}</span>

      <div className="flex">
        <button
          type="button"
          className="btn btn-ghost p-2 text-2xl hover:first:text-error"
          onClick={removeItem}
        >
          <AiOutlineClose />
        </button>

        <button
          type="button"
          {...attributes}
          {...listeners}
          ref={setActivatorNodeRef}
          className="btn btn-ghost p-2 text-2xl"
        >
          <MdDragIndicator />
        </button>
      </div>
    </div>
  );
};

export default BaseListItem;
