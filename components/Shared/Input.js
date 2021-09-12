import React from "react";
import classnames from "classnames";

const Input = ({
  value,
  onChange,
  name,
  placeholder,
  type,
  error,
  className,
  label,
  checked,
  onClick,
  labelClassName,
  ...others
}) => {
  if (type === "checkbox") {
    return (
      <label className={classnames("checkbox-component", className)}>
        <input
          type={type}
          name={name}
          checked={checked}
          onClick={() => onClick()}
          readOnly
          {...others}
        />
        <div className="checkmark" />
        <span className={classnames("ml-2", labelClassName)}>{label}</span>
      </label>
    );
  } else {
    return (
      <div className="w-100 d-flex f-col">
        <input
          className={classnames(
            "p-2 mb-2",
            error && "border-danger",
            className
          )}
          value={value}
          onChange={(e) => onChange(e)}
          type={type}
          name={name}
          placeholder={placeholder || name}
          {...others}
        />
        {error && (
          <div>
            <p className="text-danger font-size-sm italic">{error}</p>
          </div>
        )}
      </div>
    );
  }
};

Input.defaultProps = {
  type: "text",
};

export default Input;
