declare module '@splidejs/react-splide' {
  import { RefObject, ReactNode, HTMLAttributes } from 'react';

  interface SplideOptions {
    // Add any additional options you need
    type?: string;
    autoplay?: boolean;
    perPage?: number;
    perMove?: number;
    gap?: string;
    pagination?: boolean;
    speed?: number;
    rewind?: boolean;
    drag?: boolean;
    isNavigation?: boolean;
    arrows?: boolean;
    interval?: number;
  }

  export interface Splide {
    go: (index: number) => void;
    // Add any other methods used in your component
  }

  interface SplideSlideProps extends HTMLAttributes<HTMLDivElement> {
    // Define any properties used in your SplideSlide component
    children: ReactNode;
    key?: number;
  }

  export const SplideSlide: React.FC<SplideSlideProps>;

  interface SplideProps {
    options?: SplideOptions;
    ref?: RefObject<Splide>;
    children?: ReactNode;
  }

  export const Splide: React.FC<SplideProps>;
}
