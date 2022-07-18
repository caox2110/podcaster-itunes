import { pxToRem, responsiveFontSizes } from './cssFunctions.util';

describe('CSS functions Tests', () => {
  describe('Function pxToRem', () => {
    describe('When value is not valid or zero', () => {
      it('Should return a zero value', () => {
        expect(pxToRem(0)).toBe('0rem');
        expect(pxToRem(Number.NaN)).toBe('0rem');
      });
    });
    describe('When value is valid', () => {
      it('Should return a rem value', () => {
        expect(pxToRem(1)).toBe('0.0625rem');
        expect(pxToRem(52)).toBe('3.25rem');
        expect(pxToRem(58)).toBe('3.625rem');
        expect(pxToRem(64)).toBe('4rem');
        expect(pxToRem(40)).toBe('2.5rem');
        expect(pxToRem(Number('5'))).toBe('0.3125rem');
      });
    });
  });
  describe('Function responsiveFontSizes', () => {
    describe('When value is not valid or zero', () => {
      it('Should return a zero value', () => {
        expect(responsiveFontSizes({ sm: 0, md: 0, lg: 0 })).toStrictEqual({
          '@media (min-width:600px)': {
            fontSize: '0rem',
          },
          '@media (min-width:900px)': {
            fontSize: '0rem',
          },
          '@media (min-width:1200px)': {
            fontSize: '0rem',
          },
        });
        expect(
          responsiveFontSizes({ sm: Number.NaN, md: Number.NaN, lg: Number.NaN }),
        ).toStrictEqual({
          '@media (min-width:600px)': {
            fontSize: '0rem',
          },
          '@media (min-width:900px)': {
            fontSize: '0rem',
          },
          '@media (min-width:1200px)': {
            fontSize: '0rem',
          },
        });
      });
    });
    describe('When value is valid', () => {
      it('Should return a valid responsive value', () => {
        expect(responsiveFontSizes({ sm: 52, md: 58, lg: 64 })).toStrictEqual({
          '@media (min-width:600px)': {
            fontSize: '3.25rem',
          },
          '@media (min-width:900px)': {
            fontSize: '3.625rem',
          },
          '@media (min-width:1200px)': {
            fontSize: '4rem',
          },
        });
        expect(responsiveFontSizes({ sm: 40, md: 44, lg: 48 })).toStrictEqual({
          '@media (min-width:600px)': { fontSize: '2.5rem' },
          '@media (min-width:900px)': { fontSize: '2.75rem' },
          '@media (min-width:1200px)': { fontSize: '3rem' },
        });
        expect(responsiveFontSizes({ sm: 26, md: 30, lg: 32 })).toStrictEqual({
          '@media (min-width:600px)': { fontSize: '1.625rem' },
          '@media (min-width:900px)': { fontSize: '1.875rem' },
          '@media (min-width:1200px)': { fontSize: '2rem' },
        });
        expect(responsiveFontSizes({ sm: 20, md: 24, lg: 24 })).toStrictEqual({
          '@media (min-width:600px)': { fontSize: '1.25rem' },
          '@media (min-width:900px)': { fontSize: '1.5rem' },
          '@media (min-width:1200px)': { fontSize: '1.5rem' },
        });
        expect(responsiveFontSizes({ sm: 19, md: 20, lg: 20 })).toStrictEqual({
          '@media (min-width:600px)': { fontSize: '1.1875rem' },
          '@media (min-width:900px)': { fontSize: '1.25rem' },
          '@media (min-width:1200px)': { fontSize: '1.25rem' },
        });
        expect(responsiveFontSizes({ sm: 18, md: 18, lg: 18 })).toStrictEqual({
          '@media (min-width:600px)': { fontSize: '1.125rem' },
          '@media (min-width:900px)': { fontSize: '1.125rem' },
          '@media (min-width:1200px)': { fontSize: '1.125rem' },
        });
      });
    });
  });
});
