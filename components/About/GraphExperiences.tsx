import React, { useMemo, useState, useEffect } from "react";
import GraphSegment from "~components/About/GraphSegment";
import GraphCursor from "~components/About/GraphCursor";
import { experiences } from "~experiences";
import SwiperCore, { Keyboard, EffectFade } from "swiper";
import { useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Keyboard, EffectFade]);

interface Props {
  activeIndex: number;
  prevIndex: number | "start";
  textSwiper: SwiperCore;
}

const GraphExperiences = ({ activeIndex, prevIndex, textSwiper }: Props) => {
  const [swiper, setSwiper] = useState<SwiperCore>(null);
  const display = useBreakpointValue({ base: "none", md: "block" });

  const groupedExperiences = useMemo(
    () =>
      experiences
        .map((experience, index) => ({ ...experience, index }))
        .reduce((total, current, index, array) => {
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
        display,
      }}
      preventInteractionOnTransition
      onBeforeTransitionStart={(swiper) => {
        if (!!swiper.slides[swiper.previousIndex]) {
          swiper.slides[swiper.previousIndex].classList.add("leave");
        }
      }}
      className={`step-${prevIndex}-${activeIndex}`}
      onSwiper={setSwiper}
      allowTouchMove={false}
    >
      <GraphCursor />
      {groupedExperiences.map((group) => (
        <SwiperSlide key={group[0].title} style={{ height: "100%" }}>
          <GraphSegment experiences={group} textSwiper={textSwiper} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GraphExperiences;
