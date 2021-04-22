import clsx from "clsx";
import React from "react";
import "../css/Button.css";

export default function Button(props) {
  const { children, outline, className, ...rest } = props;
  console.log(rest);
  const classNames = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}
