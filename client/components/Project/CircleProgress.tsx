import React from "react";

interface Props {
  progress: number;
}

const CircleProgress = ({ progress }: Props) => {
  return (
    <svg id="circle-bar" width="464" height="464" viewBox="0 0 464 464">
      <circle
        className="c1"
        cx="232"
        cy="232"
        r="230"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
      />
      <circle
        strokeDasharray={`${progress} 1570`}
        className="c2"
        cx="232"
        cy="232"
        r="230"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default CircleProgress;
