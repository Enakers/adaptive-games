import {ComponentMeta} from "@storybook/react";
import {useState} from "react";
import StorybookThemeToggle from "../../utils/StorybookThemeToggle";
import SortableList from "./SortableList";

const componentMeta: ComponentMeta<typeof SortableList> = {
  component: SortableList,
  parameters: {layout: "fullscreen"}
};

const baseList = [
  {id: 1, index: 0, data: "1"},
  {id: 2, index: 1, data: "2"},
  {id: 3, index: 2, data: "3"},
  {id: 4, index: 3, data: "4"},
  {id: 5, index: 4, data: "5"}
];

export const Primary = () => {
  const [list, setList] = useState(baseList);

  return (
    <StorybookThemeToggle>
      <SortableList list={list} setList={setList} className="max-w-lg mx-auto" />
    </StorybookThemeToggle>
  );
};

export default componentMeta;
