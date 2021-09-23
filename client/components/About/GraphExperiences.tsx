import React, { useMemo, useState, useEffect } from "react";
import GraphSegment from "~components/About/GraphSegment";
import GraphCursor from "~components/About/GraphCursor";
import { experiences } from "~experiences";
import SwiperCore, { Keyboard, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Keyboard, EffectFade]);

interface Props {
  activeIndex: number;
  prevIndex: number | "start";
}

const GraphExperiences = ({ activeIndex, prevIndex }: Props) => {
  const [swiper, setSwiper] = useState<SwiperCore>(null);

  const groupedExperiences = useMemo(
    () =>
      experiences.reduce((total, current, index, array) => {
        if (index % 2 === 0) {
          const val = [current];

          if (index + 1 in array) {
            val.push(array[index + 1]);
          }
          total.push(val);
        }

        return total;
      }, []),
    []
  );

  useEffect(() => {
    if (activeIndex % 2 === 0 && activeIndex > 0 && prevIndex < activeIndex) {
      setTimeout(() => {
        swiper.slideNext();
      }, 1000);
    } else if (
      prevIndex > activeIndex &&
      prevIndex !== "start" &&
      prevIndex % 2 === 0
    ) {
      setTimeout(() => {
        swiper.slidePrev();
      }, 1000);
    }
  }, [prevIndex, activeIndex, swiper]);

  return (
    <Swiper
      id="graph-experiences"
      direction="vertical"
      speed={1000}
      style={{
        height: "100%",
        padding: "0 5%",
      }}
      preventInteractionOnTransition
      onBeforeTransitionStart={(swiper) => {
        if (!!swiper.slides[swiper.previousIndex]) {
          swiper.slides[swiper.previousIndex].classList.add("leave");
        }
      }}
      className={`step-${prevIndex}-${activeIndex}`}
      onSwiper={setSwiper}
    >
      <GraphCursor />
      {groupedExperiences.map((group) => (
        <SwiperSlide key={group[0].title} style={{ height: "100%" }}>
          <GraphSegment experiences={group} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GraphExperiences;
