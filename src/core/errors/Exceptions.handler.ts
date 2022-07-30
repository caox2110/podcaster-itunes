export default class ExceptionHandler {
  static execute(callback: any) {
    try {
      const response = callback();
      return [response, null];
    } catch (error: any) {
      // TODO: Log error messages to an error reporting service here. Use Winston for Logging.
      // Remove commented code
      // console.error(new Error(error.message ?? error));
      return [null, new Error(error.message ?? error)];
    }
  }

  static async executeAsync(callback: any, ...parameters: any[]) {
    try {
      const response = await callback(...parameters);
      return [response, null];
    } catch (error: any) {
      // TODO: Log error messages to an error reporting service here. Use Winston for Logging
      // Remove commented code
      // console.error(new Error(error.message ?? error));
      return [null, error];
    }
  }
}
