export interface SliderProps {
  autoplay?: boolean;
  delay?: number;
  currentIndex?: number;
  onAnimateNextPage?: (currentIndex: number, nextIndex: number) => any;
  swipe?: boolean;
  isLooped?: boolean;
}
