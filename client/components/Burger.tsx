import React from "react";

interface Props {
  onClick: () => void;
}

const Burger = ({ onClick }: Props) => {
  return (
    <div className="burger" title="Open/Close menu" onClick={onClick}>
      <div className="line l1" />
      <div className="line l2" />
      <div className="line l3" />
    </div>
  );
};

export default Burger;
