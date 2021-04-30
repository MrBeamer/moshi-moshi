import React from "react";
import clsx from "clsx";
import "../css/Input.css";

export default function Input(props) {
  const { placeholder, type = "text", required, className, ...rest } = props;
  const classNames = clsx({ input: true }, className);

  return (
    <label className="label">
      {placeholder}
      {required && <span className="input-required">*</span>}
      <div>
        <input
          className={classNames}
          placeholder={placeholder}
          type={type}
          required={required}
          {...rest}
        />
      </div>
    </label>
  );
}
