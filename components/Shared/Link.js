import Link from "next/link";
import classnames from "classnames";

const CustomLink = ({
  href,
  as,
  className,
  isButton,
  size,
  fullWidth,
  color,
  outlined,
  textClassName,
  children,
  ...props
}) => {
  return (
    <Link href={href} as={as}>
      {!isButton ? (
        <a
          className={classnames(
            !isButton
              ? "link"
              : `btn ${size} ${
                  fullWidth ? "full-width" : ""
                } text-${color} bg-${color} border-${color} ${
                  outlined ? "outlined" : ""
                }`,
            className
          )}
          {...props}
        >
          {children}
        </a>
      ) : (
        <p className={textClassName}>{children}</p>
      )}
    </Link>
  );
};

CustomLink.defaultProps = {
  isButton: false,
  size: "small", // small, large
  fullWidth: false, // width 100% if true
  color: "primary",
  outlined: false,
  textClassName: "",
};

export default CustomLink;
