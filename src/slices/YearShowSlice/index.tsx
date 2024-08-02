import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `YearShowSlice`.
 */
export type YearShowSliceProps =
  SliceComponentProps<Content.YearShowSliceSlice>;

/**
 * Component for "YearShowSlice" Slices.
 */
const YearShowSlice = ({ slice }: YearShowSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for year_show_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default YearShowSlice;
