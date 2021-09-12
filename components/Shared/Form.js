import React from "react";

const Form = ({ onSubmit, children, ...others }) => {
  function handleSubmit(e) {
    e.preventDefault();

    if (document.activeElement !== document.body) {
      document.activeElement.blur();
    }

    onSubmit(e);
  }

  return (
    <form onSubmit={handleSubmit} {...others}>
      {children}
    </form>
  );
};

export default Form;
