import React from "react";
// import withContext from "../Context/Context";
import classnames from "classnames";

const Button = ({
  // context,
  type,
  onClick,
  link,
  color,
  size,
  fullWidth,
  outlined,
  btnClassName,
  style,
  textClassName,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classnames(
        link ? "btn-link" : "btn",
        size,
        fullWidth && "full-width",
        `bg-${color} border-${color}`,
        outlined && "outlined",
        btnClassName
      )}
      // disabled={context.loading || disabled}
      style={style}
    >
      <p className={classnames(textClassName)}>{children}</p>
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  link: false,
  size: "small", // small, large
  fullWidth: false, // width 100% if true
  color: "primary",
  outlined: false,
  textClassName: "",
};

// export default withContext(Button);
export default Button;
