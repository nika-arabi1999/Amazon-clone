declare module "react-range-slider-input" {
    import * as React from "react";
  
    interface RangeSliderProps {
      min?: number;
      max?: number;
      step?: number;
      value?: number | number[];
      onChange?: (value: number | number[]) => void;
      onInput?: (value: number | number[]) => void;
      defaultValue? : number | number[];

      // Add any other props that you need to support
    }
  
    const RangeSlider: React.FC<RangeSliderProps>;
  
    export default RangeSlider;
  }