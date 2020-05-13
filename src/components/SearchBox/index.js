import React from "react";
import PropTypes from "prop-types";
import { withAutomcomplete } from "../../lib";

const SearchBox = ({
  htmlId,
  name,
  type = "text",
  onChange,
  placeholder,
  value,
  error,
  children,
  classList,
  forwardedRef,
  ...props
}) => {
  return (
    <>
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${classList.join(" ")} ${
          error ? "searchBox__input--error" : ""
        }`}
        ref={forwardedRef}
        {...props}
      />
      {children}
      {error && <div className="searchBox__error">{error}</div>}
    </>
  );
};

SearchBox.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string,

  /** Input type */
  type: PropTypes.oneOf(["text", "number", "password"]),

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node,
};

export default withAutomcomplete(SearchBox);
