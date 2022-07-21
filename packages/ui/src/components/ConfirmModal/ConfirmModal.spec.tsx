import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfirmModal from "./ConfirmModal";

describe("<ConfirmModal />", () => {
  it("should open modal onClick", async () => {
    const onConfirm = vi.fn();
    render(<ConfirmModal onConfirm={onConfirm} />);

    expect(screen.queryByRole("button", {name: "Confirm"})).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", {name: "Delete"}));
    expect(screen.getByRole("button", {name: "Confirm"})).toBeInTheDocument();
  });

  it("should call onConfirm on Confirm btn click", async () => {
    const onConfirm = vi.fn();
    render(<ConfirmModal onConfirm={onConfirm} />);

    await userEvent.click(screen.getByRole("button", {name: "Delete"}));
    await userEvent.click(screen.getByRole("button", {name: "Confirm"}));

    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("button", {name: "Confirm"})).not.toBeInTheDocument();
  });

  it("should close on close btn click without calling onConfirm", async () => {
    const onConfirm = vi.fn();
    render(<ConfirmModal onConfirm={onConfirm} message="For coverage" />);

    await userEvent.click(screen.getByRole("button", {name: "Delete"}));
    await userEvent.click(screen.getByRole("button", {name: "✕"}));

    expect(onConfirm).not.toHaveBeenCalled();
    expect(screen.queryByRole("button", {name: "Confirm"})).not.toBeInTheDocument();
  });
});
