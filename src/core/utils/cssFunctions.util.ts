import { isNumber, isEmpty } from '../validators';

/**
 * Parameters values type for responsiveFontSizes function.
 *
 * @interface ResponsiveFontSizesParameters
 * @typedef {ResponsiveFontSizesParameters}
 */
interface ResponsiveFontSizesParameters {
  /**
   * Sizes for sm
   *
   * @type {number}
   */
  sm: number;
  /**
   * Sizes for md
   *
   * @type {number}
   */
  md: number;
  /**
   * Sizes for lg
   *
   * @type {number}
   */
  lg: number;
}

/**
 * Returned values type for responsiveFontSizes function.
 *
 * @interface ResponsiveFontSizes
 * @typedef {ResponsiveFontSizes}
 */
interface ResponsiveFontSizes {
  /**
   * Media-query defined for sm devices
   *
   * @type {{
      fontSize: string;
    }}
   */
  '@media (min-width:600px)': {
    fontSize: string;
  };
  /**
   * Media-query defined for md devices
   *
   * @type {{
      fontSize: string;
    }}
   */
  '@media (min-width:900px)': {
    fontSize: string;
  };
  /**
   * Media-query defined for lg devices
   *
   * @type {{
      fontSize: string;
    }}
   */
  '@media (min-width:1200px)': {
    fontSize: string;
  };
}

/**
 * Function to transform pixels to rem.
 *
 * @param {number} value
 * @returns {string}
 */
function pxToRem(value: number): string {
  return !isEmpty(value) && isNumber(value) ? `${value / 16}rem` : '0rem';
}

/**
 * Function to set the sizes for fonts.
 *
 * @param {ResponsiveFontSizesParameters} { sm, md, lg }
 * @returns {ResponsiveFontSizes}
 */
function responsiveFontSizes({ sm, md, lg }: ResponsiveFontSizesParameters): ResponsiveFontSizes {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

export { pxToRem, responsiveFontSizes };
