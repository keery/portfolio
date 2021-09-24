import React, { useEffect, useRef } from "react";

const Loader = ({ setShow }) => {
  const animateValue = (id, start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
        setShow(false);
      }
    }, stepTime);
  };

  useEffect(() => {
    animateValue("value", 0, 100, 3000);
  }, []);

  return (
    <div className="loader-container">
      <div className="loading">
        <div className="logo-loader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.02 14.88">
            <line className="u-line" y1="13.93" x2="11.02" y2="13.93" />
            <polyline
              className="g-line"
              points="11 0.95 0.96 0.95 0.96 10.68 10.06 10.68 10.06 4.17 4.21 4.18 4.21 7.44 7.78 7.44"
            />
          </svg>
        </div>
        <div className="bar">
          <div className="percent" />
          <div className="number">
            <span id="value">0</span>%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
