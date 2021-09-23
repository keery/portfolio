import React from "react";
import Header from "~components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter presenceAffectsLayout initial={false}>
        <motion.div
          key={router.pathname}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", duration: 0.5 }}
          className=""
          style={{
            backgroundColor: "#12121c",
            height: "100%",
            width: "100%",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
