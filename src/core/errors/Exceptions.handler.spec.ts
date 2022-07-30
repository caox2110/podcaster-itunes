import { ExceptionHandler } from '.';

const message = 'Worked';
const messageError = 'Not Worked';
const messageToExecute = jest.fn();
const messageToExecuteWithThrow = () => {
  throw new Error(messageError);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('ExceptionHandler', () => {
  describe('Execute', () => {
    it(`Should return a valid ${message} message`, () => {
      messageToExecute.mockImplementationOnce(() => message);
      const [response, error] = ExceptionHandler.execute(messageToExecute);
      expect(error).toBeNull();
      expect(response).toEqual(message);
    });

    it(`Should return a not valid ${messageError} message`, () => {
      messageToExecute.mockImplementationOnce(() => {
        throw new Error(messageError);
      });
      const [response, error] = ExceptionHandler.execute(messageToExecute);
      expect(response).toBeNull();
      expect(error).toStrictEqual(new Error(messageError));
    });
  });
  describe('ExecuteAsync', () => {
    it(`Should return a valid ${message} message`, async () => {
      messageToExecute.mockImplementationOnce(() => Promise.resolve(message));
      const [response, error] = await ExceptionHandler.executeAsync(messageToExecute);
      expect(error).toBeNull();
      expect(response).toEqual(message);
    });

    it(`Should return a not valid ${messageError} message`, async () => {
      messageToExecute.mockImplementationOnce(() => Promise.reject(messageToExecuteWithThrow()));
      const [response, error] = await ExceptionHandler.executeAsync(messageToExecute);
      expect(response).toBeNull();
      expect(error).toStrictEqual(new Error(messageError));
    });
  });
});
