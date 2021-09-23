import React from "react";
import SlideLink from "~components/SlideLink";

const CVButton = () => {
  return (
    <div className="dl-cv">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="18"
          viewBox="0 0 512 512"
          enableBackground="new 0 0 512 512"
        >
          <g>
            <path
              d="M448.608,351.791c-18.444,0-33.4,14.952-33.4,33.396v52.055H96.788v-52.055c0-18.443-14.952-33.396-33.396-33.396   s-33.396,14.952-33.396,33.396v85.451c0,18.443,14.952,33.4,33.396,33.4h385.217c18.443,0,33.396-14.957,33.396-33.4v-85.451   C482.005,366.743,467.052,351.791,448.608,351.791z"
              fill="#FFFFFF"
            />
            <path
              d="M245.918,387.325c5.563,5.559,14.6,5.559,20.157,0l117.039-117.038c3.41-3.41,4.423-8.532,2.579-13   c-1.844-4.45-6.18-7.351-11.012-7.351h-54.954V34.024c0-14.402-11.661-26.063-26.06-26.063h-75.323   c-14.398,0-26.06,11.66-26.06,26.063v215.912h-54.973c-4.827,0-9.163,2.9-11.007,7.351c-1.844,4.468-0.83,9.59,2.575,13   L245.918,387.325z"
              fill="#FFFFFF"
            />
          </g>
        </svg>
        <SlideLink
          href="/public/assets/pdf/cv-esnault-guillaume.pdf"
          text="DOWNLOAD CV"
          isExternal
          download
        />
      </div>
    </div>
  );
};

export default CVButton;
