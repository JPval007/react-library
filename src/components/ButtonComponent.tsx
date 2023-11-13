// import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "info" | "dark" | "warning";
  onClick: () => void;
}

function ButtonComponent({ children, onClick, color }: Props) {
  return (
    <button onClick={onClick} type="button" className={"btn btn-" + color}>
      {children}
    </button>
  );
}

export default ButtonComponent;
