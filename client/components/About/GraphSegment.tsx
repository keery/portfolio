import React, { useCallback } from "react";
import { Experience } from "~@types/api";
import { Image, Box, Flex } from "@chakra-ui/react";
import SwiperCore from "swiper";

interface Props {
  experiences: [Experience, Experience] | [Experience];
  textSwiper: SwiperCore;
}

const GraphSegment = ({ experiences, textSwiper }: Props) => {
  const onClickCircle = useCallback(
    (nbCircle: number) => {
      if (nbCircle % 2 !== textSwiper.activeIndex % 2) {
        textSwiper.slideTo(experiences[nbCircle].index);
      }
    },
    [textSwiper, experiences]
  );

  return (
    <Box h="100%" pos="relative" w="fit-content" className="graph-segment">
      <Flex
        pos="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        px="15%"
      >
        {experiences.map(({ image, imageProps, title }, index) => (
          <Flex
            key={`segment-${title}`}
            justifyContent="center"
            w="100%"
            height="14.7%"
            mt={index === 0 && "80.5%"}
            mb={index === 1 && "80.5%"}
            onClick={() => console.log("jfkdls")}
          >
            <Image
              src={`/assets/${image}`}
              {...imageProps}
              alignSelf="center"
            />
          </Flex>
        ))}
      </Flex>
      <svg
        className="svg-segment"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 238.87 900"
        height="100%"
      >
        <line
          className="line line1 cls-1"
          x1="119.5"
          y1="79"
          x2="119.5"
          pathLength="1"
        />
        <g className="groupArc groupArc1">
          <path
            className="arc arc1 cls-1"
            d="M238.27,102.34a119.13,119.13,0,0,1,141.65,0"
            transform="translate(-189.78)"
            pathLength="1"
          />
          <path
            className="arc arc2 cls-1"
            d="M379.68,293.82a119.11,119.11,0,0,1-141.64,0"
            transform="translate(-189.78)"
            pathLength="1"
          />
        </g>
        <circle
          className="circle circle1 cls-1"
          cx="119.79"
          cy="198.08"
          r="95.74"
          pathLength="1"
          onClick={() => onClickCircle(0)}
        />
        <circle
          className="cls-2"
          cx="119.08"
          cy="198.08"
          r="119.08"
          pathLength="1"
        />
        <line
          className="line line2 cls-1"
          x1="119.08"
          y1="317.16"
          x2="119.79"
          y2="582.84"
          pathLength="1"
        />
        <g className="groupArc groupArc2">
          <path
            className="arc arc3 cls-1"
            d="M238.75,606.18a119.11,119.11,0,0,1,141.64,0"
            transform="translate(-189.78)"
            pathLength="1"
          />
          <path
            className="arc arc4 cls-1"
            d="M380.15,797.66a119.13,119.13,0,0,1-141.65,0"
            transform="translate(-189.78)"
            pathLength="1"
          />
        </g>
        <circle
          className="circle circle2 cls-1"
          cx="119.08"
          cy="701.92"
          r="95.74"
          pathLength="1"
          onClick={() => onClickCircle(1)}
        />
        <circle
          className="cls-2"
          cx="119.79"
          cy="701.92"
          r="119.08"
          pathLength="1"
        />
        <line
          className="line line3 cls-1"
          x1="119.37"
          y1="821"
          x2="119.37"
          y2="900"
          pathLength="1"
        />
      </svg>
      {/* <Segment height="100%" /> */}
    </Box>
  );
};

export default GraphSegment;
