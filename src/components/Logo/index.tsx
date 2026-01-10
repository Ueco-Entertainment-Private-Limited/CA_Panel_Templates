import { Car, Zap } from "lucide-react";
import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  size = 24,
  color,
  strokeWidth=2,
}) => {
  return (
    <>
      <Zap
        className={className}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      />
      <Car
        className={className}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      />
    </>
  );
};
