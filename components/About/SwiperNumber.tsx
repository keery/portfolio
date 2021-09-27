import React from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import { experiences } from "~experiences";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { y: 40 },
  enter: { y: 0 },
  exit: { y: 40 },
};

interface Props {
  activeIndex: number;
}

const SwiperNumber = ({ activeIndex }: Props) => {
  return (
    <Flex
      pr={4}
      display={{ base: "block", md: "none" }}
      direction="column"
      userSelect="none"
      alignItems="center"
      justifyContent="center"
      fontSize="2.5rem"
      color="yellow.500"
    >
      <AnimatePresence exitBeforeEnter presenceAffectsLayout initial={false}>
        <Box transform="translateY(5px) translateX(1px)" overflow="hidden">
          <motion.div
            key={`nb-${activeIndex}`}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear", duration: 0.3 }}
          >
            {activeIndex + 1}
          </motion.div>
        </Box>
      </AnimatePresence>
      <Divider transform="rotate(-45deg)" width="30px" />
      <Text transform="translateY(-22px) translateX(10px)">
        {experiences.length}
      </Text>
    </Flex>
  );
};

export default SwiperNumber;
