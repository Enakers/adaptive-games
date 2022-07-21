import {useState} from "react";

interface ConfirmModalProps {
  onConfirm: () => void | Promise<void>;
  title?: string;
  message?: string;
  btnText?: string;
  btnClass?: string;
}

const ConfirmModal = ({onConfirm, message, title, btnClass, btnText}: ConfirmModalProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleConfirm = async () => {
    await onConfirm();
    handleClose();
  };

  return (
    <>
      <button type="button" className={btnClass ?? "btn btn-error"} onClick={() => setOpen(true)}>
        {btnText ?? "Delete"}
      </button>
      {open && (
        <div className="modal modal-open modal-bottom sm:modal-middle">
          <div className="modal-box">
            <button
              type="button"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={handleClose}
            >
              ✕
            </button>

            <h3 className="text-lg font-bold">{title ?? "Are you sure?"}</h3>
            {message && <p className="py-4">{message}</p>}

            <div className="modal-action">
              <button type="button" className="btn" onClick={handleClose}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmModal;
