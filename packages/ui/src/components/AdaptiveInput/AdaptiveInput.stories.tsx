import {ComponentMeta, ComponentStory} from "@storybook/react";
import StorybookThemeToggle from "../../utils/StorybookThemeToggle";
import {AdaptiveInput} from "./AdaptiveInput";

const componentMeta: ComponentMeta<typeof AdaptiveInput> = {
  component: AdaptiveInput,
  parameters: {layout: "fullscreen"}
};

const Template: ComponentStory<typeof AdaptiveInput> = args => (
  <StorybookThemeToggle>
    <AdaptiveInput {...args} />
  </StorybookThemeToggle>
);

export const Switch = Template.bind({});
Switch.args = {
  type: "switch",
  size: "md",
  fixedPosition: false
};

export const Touch = Template.bind({});
Touch.args = {
  type: "touch",
  size: "md",
  fixedPosition: false
};

export const Mouse = Template.bind({});
Mouse.args = {
  type: "mouse",
  size: "md",
  fixedPosition: false
};

export const EyeGaze = Template.bind({});
EyeGaze.args = {
  type: "eyeGaze",
  size: "md",
  fixedPosition: false
};

export default componentMeta;
