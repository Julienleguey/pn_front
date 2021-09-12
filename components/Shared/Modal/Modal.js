import React, { useEffect } from "react";
import classnames from "classnames";
import ModalHeader from "./ModalHeader";

const Modal = ({
  open,
  close,
  title,
  children,
  maxWidth,
  noHeader,
  noPadding,
  fullHeight
}) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  return (
    <div
      id="modal-container"
      className={classnames(open ? "d-flex" : "d-none")}
    >
      <div id="modal-bg" onClick={close} />
      <div
        id="modal-box"
        className={classnames(
          maxWidth && `max-width-${maxWidth}`,
          fullHeight && "full-height"
        )}
      >
        {!noHeader && <ModalHeader title={title} close={close} />}
        <div
          id="modal-content"
          className={classnames(!noPadding && "pt-5 pb-6 px-3 px-sm-5")}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
