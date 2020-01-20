export interface AccordionProps {
  expanded?: boolean;
  easing?: string;
  animationDuration?: number;
  header?: any;
  content?: any;
  onOpen?: () => any;
  onClose?: () => any;
}
