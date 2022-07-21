import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdaptiveInput from "./AdaptiveInput";

vi.useFakeTimers();

describe("<AdaptiveInput />", () => {
  describe("Switch", () => {
    it("should render with switch symbol", () => {
      render(<AdaptiveInput type="switch" size="md" fixedPosition onInput={() => {}} />);

      expect(screen.getByAltText("Switch symbol")).toBeInTheDocument();
    });
  });

  describe("Eye gaze", () => {
    it("should call onInput on set timeout", () => {
      const onInput = vi.fn();
      render(<AdaptiveInput type="eyeGaze" size="md" onInput={onInput} />);

      userEvent.hover(screen.getByAltText("Eye symbol"));

      vi.runAllTimers();

      expect(onInput).toHaveBeenCalledTimes(1);
    });

    it("should cancel onInput when hover ends before dwellTime", () => {
      const onInput = vi.fn();
      const clearTimeoutSpy = vi.spyOn(global, "clearTimeout");
      render(<AdaptiveInput type="eyeGaze" size="md" onInput={onInput} />);

      const img = screen.getByAltText("Eye symbol");
      userEvent.hover(img);
      userEvent.unhover(img);

      expect(clearTimeoutSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe("Mouse", () => {
    it("should call onInput onClick", () => {
      const onInput = vi.fn();
      render(<AdaptiveInput type="mouse" size="md" onInput={onInput} />);

      fireEvent.click(screen.getByRole("button"));

      expect(onInput).toHaveBeenCalledTimes(1);
    });
  });

  describe("Touch", () => {
    it("should call onInput onClick", () => {
      const onInput = vi.fn();
      render(<AdaptiveInput type="touch" size="md" onInput={onInput} />);

      fireEvent.click(screen.getByRole("button"));

      expect(onInput).toHaveBeenCalledTimes(1);
    });
  });
});
