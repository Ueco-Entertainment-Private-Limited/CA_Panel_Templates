import * as React from "react";

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  plugins?: any[];
};

export const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export const CarouselContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export const CarouselItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export const CarouselNext: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children ?? ">"}
    </button>
  );
};

export const CarouselPrevious: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children ?? "<"}
    </button>
  );
};

export default Carousel;
