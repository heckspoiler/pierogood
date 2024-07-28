import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import styles from './TextBlock.module.css';
/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  switch (slice.variation) {
    case 'default':
      return (
        <div className={styles.TextBlock}>
          <p>{slice.primary.textblock}</p>
        </div>
      );
  }
};

export default TextBlock;
