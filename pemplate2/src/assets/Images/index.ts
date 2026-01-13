import working_1 from "../Images/hero/working-1.jpg"
import working_2 from "../Images/hero/working-2.jpg"
import working_3 from "../Images/hero/working-3.jpg"
import working_4 from "../Images/hero/working-4.jpg"
import working_5 from "../Images/hero/working-5.jpg"

export const IMAGES = {
  working_1,
  working_2,
  working_3,
  working_4,
  working_5,
} as const;

// 3. (Optional) Export a type for use in component props
export type ImageKey = keyof typeof IMAGES;