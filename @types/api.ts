import { ImageProps } from "@chakra-ui/react";
export interface Project {
  logo: string;
  bg: string;
  title: string;
  description: string;
  role: string;
  context: string;
  stack: string;
  link: string;
}

export interface Experience {
  index?: number;
  title: string;
  when: string;
  website: string;
  websiteDisplay: string;
  role: string;
  description: string;
  environment: string;
  image: string;
  imageProps?: ImageProps;
}
