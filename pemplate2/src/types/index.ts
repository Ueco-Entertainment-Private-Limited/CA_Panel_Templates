import { IMAGES } from "@/assets/Images";

export interface SlideData {
  key: keyof typeof IMAGES;
  title: string;
  subtitle: string;
}
