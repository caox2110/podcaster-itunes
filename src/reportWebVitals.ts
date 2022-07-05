/* eslint-disable import/dynamic-import-chunkname */
import type { ReportHandler } from 'web-vitals';

/**
 * Print Web Vitals metrics for the app.
 *
 * @param {ReportHandler} onPerfEntry
 */
const reportWebVitals = (onPerfEntry: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
        return;
      })
      .catch((error) => console.warn(error));
  }
};

export default reportWebVitals;
