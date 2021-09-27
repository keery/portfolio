import React, { useState } from "react";
import ExperienceCard from "~components/About/ExperienceCard";
import SwiperNumber from "~components/About/SwiperNumber";
import { experiences } from "~experiences";
import SwiperCore, { Keyboard, EffectFade, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Keyboard, EffectFade, Mousewheel]);

interface Props {
  setIndex: (indexes: [number | "start", number]) => void;
  setSwiper: (swiper: SwiperCore) => void;
}

const Experiences = ({ setIndex, setSwiper }: Props) => {
  const [isEnabled, setEnabled] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        allowSlidePrev={isEnabled}
        allowSlideNext={isEnabled}
        id="experiences"
        direction="vertical"
        effect="fade"
        keyboard
        mousewheel
        speed={1000}
        onSwiper={setSwiper}
        preventInteractionOnTransition
        className="swiper-project"
        onBeforeTransitionStart={(swiper) => {
          const active = swiper.activeIndex;
          const prev = swiper.previousIndex;
          if (!!swiper.slides[prev]) {
            setEnabled(false);
            setTimeout(() => {
              setEnabled(true);
            }, 2000);
            if (active > prev && active >= 2 && active % 2 === 0) {
              setIndex([1, 2]);
            } else if (active < prev && prev >= 2 && prev % 2 === 0) {
              setIndex([2, 1]);
            } else {
              setIndex([swiper.previousIndex % 2, swiper.activeIndex % 2]);
            }
            swiper.slides[swiper.previousIndex].classList.add("leave");
          }
          setActiveIndex(active);
        }}
      >
        {experiences.map((experience) => (
          <SwiperSlide key={experience.title}>
            <ExperienceCard experience={experience} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperNumber activeIndex={activeIndex} />
    </>
  );
};

export default Experiences;
