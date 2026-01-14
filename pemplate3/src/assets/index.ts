import Landing_page from "../assets/Image/landingImage.jpg"

export const IMAGES = {
  Landing_page,
} as const;

// 3. (Optional) Export a type for use in component props
export type ImageKey = keyof typeof IMAGES;
