import React from "react";
import Link, { Props as LinkProps } from "~components/Link";

interface Props extends LinkProps {
  href: string;
  text: string;
}

const SlideLink = ({ href, text, ...rest }: Props) => {
  return (
    <Link href={href} className="slide-link" {...rest}>
      <div className="default">{text}</div>
      <div>{text}</div>
    </Link>
  );
};

export default SlideLink;
