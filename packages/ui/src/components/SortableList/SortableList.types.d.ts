export interface SortableItem {
  id: number; // id for dnd-kit. Start from 1 (0 seems to break things)
  index: number;
  data: string;
}
