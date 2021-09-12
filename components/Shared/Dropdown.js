import React, { useState, useEffect } from "react";
import classnames from "classnames";

const Dropdown = ({
  id,
  title,
  children,
  className,
  classNameTitle,
  classNameChildren,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", clickEvent);
    return () => document.removeEventListener("click", clickEvent);
    // eslint-disable-next-line
  }, [id]);

  function clickEvent(e) {
    const target = e.target;
    const parentTarget = target.parentNode;
    const targetId = target.id;
    const parentTargetId = parentTarget.id;

    if (
      !targetId.includes(`dropdown-title-${id}`) &&
      !parentTargetId.includes(`dropdown-title-${id}`)
    ) {
      setOpen(false);
    }
  }

  return (
    <div className={classnames("pos-relative pe-none", className)}>
      <div
        id={`dropdown-title-${id}`}
        className={classnames("pe-auto", classNameTitle)}
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      <div
        className={classnames(
          `pe-auto pos-absolute right-0 border z-1000 bg-white f-col py-2 px-3 shadow ${classNameChildren} ${
            open ? "d-flex" : "d-none"
          }`
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
