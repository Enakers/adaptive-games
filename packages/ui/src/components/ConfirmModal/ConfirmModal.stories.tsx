import {ComponentMeta, ComponentStory} from "@storybook/react";
import StorybookThemeToggle from "../../utils/StorybookThemeToggle";
import ConfirmModal from "./ConfirmModal";

const componentMeta: ComponentMeta<typeof ConfirmModal> = {
  component: ConfirmModal,
  parameters: {layout: "fullscreen"}
};

export const Primary: ComponentStory<typeof ConfirmModal> = args => (
  <StorybookThemeToggle>
    <ConfirmModal {...args} />
  </StorybookThemeToggle>
);
Primary.args = {
  onConfirm: () => console.log("Confirmed")
};

export default componentMeta;
