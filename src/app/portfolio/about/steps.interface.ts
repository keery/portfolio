export interface Step {
  idSlide: number;
  delay: number;
  titre: string;
  subInfo: { [key: string]: string };
  description: string;
}