export interface SegmentProps {
  disabled?: boolean;
  scrollable?: boolean;
  selectedIndex?: number;
  onChange: (index: number) => any;
}
