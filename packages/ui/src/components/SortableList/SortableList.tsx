import {
  closestCenter,
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverlay,
  MeasuringStrategy,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {useState} from "react";
import ListItem from "./ListItem/ListItem";
import {SortableItem} from "./SortableList.types";

export interface SortableListProps {
  list: SortableItem[];
  setList: (list: SortableItem[]) => void;
  className?: string;
}

const mapIndex = (list: SortableItem[]) =>
  list.map((item, index) => {
    // eslint-disable-next-line no-param-reassign
    item.index = index;
    return item;
  });

const SortableList = ({list, setList, className}: SortableListProps) => {
  const sensors = useSensors(useSensor(PointerSensor));
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const handleDragEnd = (e: DragEndEvent) => {
    setActiveId(null);

    const {active, over} = e;
    if (!over || over.id === active.id) return;

    const oldIndex = list.findIndex(item => item.id === active.id);
    const newIndex = list.findIndex(item => item.id === over.id);
    const newList = arrayMove(list, oldIndex, newIndex);

    setList(mapIndex(newList));
  };

  const removeItem = (id: number) => () => {
    const newList = list.filter(item => item.id !== id);
    setList(mapIndex(newList));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      measuring={{droppable: {strategy: MeasuringStrategy.Always}}}
      onDragStart={({active}) => setActiveId(active.id)}
      onDragCancel={() => setActiveId(null)}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={list} strategy={verticalListSortingStrategy}>
        <div className={className}>
          {list.map(item => (
            <ListItem
              item={item}
              key={item.id}
              removeItem={removeItem(item.id)}
              activeId={activeId}
            />
          ))}
        </div>
      </SortableContext>

      <DragOverlay
        dropAnimation={{
          sideEffects: defaultDropAnimationSideEffects({styles: {active: {opacity: "0.5"}}})
        }}
      >
        {activeId && <ListItem item={list.find(item => item.id === activeId)!} activeId={null} />}
      </DragOverlay>
    </DndContext>
  );
};

export default SortableList;
