import { LucideIcon } from "lucide-react";

export interface AchievementCardProps {
  // This allows the Icon to be passed as a component: <Icon />
  Icon: LucideIcon;
  value: string | number;
  label: string;
  className?: string; // Optional: for custom positioning
}

export interface ServiceData {
  id: number;
  icon: LucideIcon; // Uses the type we discussed earlier
  heading: string;
  paragraph: string;
}