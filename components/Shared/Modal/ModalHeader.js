import React from "react";
import closeImg from "../../../public/close.svg";

const ModalHeader = ({ title, close }) => {
  if (!title) return null;

  return (
    <div className="py-4 px-6 pos-relative border-bottom">
      <h5 className="text-uppercase text-center">{title}</h5>
      <div
        className="pos-absolute top-0 right-0 p-3 cursor-pointer"
        onClick={close}
      >
        <img src={closeImg} alt="close button" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default ModalHeader;
