import React, { useState, useCallback } from "react";
import Burger from "~components/Burger";
import SlideLink from "~components/SlideLink";
import Link from "~components/Link";
import { ROUTE_ABOUT, ROUTE_PROJECTS, EMAIL } from "~constants";
import { useRouter } from "next/router";

const Nav = () => {
  const date = new Date();
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen, setOpen]);

  return (
    <div className={isOpen ? "open" : "close"}>
      <Burger onClick={toggle} />
      <div id="menu">
        <div className="wrapper">
          <span className="label-menu">MENU</span>
          <ul>
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={router.route === "/" && "active"}
              >
                <span>
                  <div className="text-link">Home</div>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTE_PROJECTS}
                onClick={() => setOpen(false)}
                className={router.route === ROUTE_PROJECTS && "active"}
              >
                <span>
                  <div className="text-link">Projects</div>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTE_ABOUT}
                onClick={() => setOpen(false)}
                className={router.route === ROUTE_ABOUT && "active"}
              >
                <span>
                  <div className="text-link">About</div>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu-contact">
          <div className="menu-email">
            <div className="menu-email-label">Email me at</div>
            <SlideLink href={`mailto:${EMAIL}`} text={EMAIL} />
          </div>
          <div className="menu-sub-infos">
            <span>© {date.getFullYear()} - Guillaume Esnault</span>
            <ul className="menu-social">
              <li>
                <a
                  href="https://github.com/keery"
                  target="_blank"
                  className="ico-github"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/guillaume-esnault-9387a2139/"
                  target="_blank"
                  className="ico-linkedin"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/esnault_guillaume/"
                  target="_blank"
                  className="ico-instagram"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
