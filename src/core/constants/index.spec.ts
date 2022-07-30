import { constants as AllAppConstants } from '.';
import { appConstant } from './app.constant';
import { themeConstant } from './theme.constant';
import { urlConstant } from './url.constant';
import { queryClientConstant } from './queryClient.constant';

const logSpy = jest.spyOn(console, 'warn');

const {
  app: { IS_DEV, MODE },
} = AllAppConstants;

beforeEach(() => {
  logSpy.mockImplementation(() => {});
});

afterEach(() => {
  logSpy.mockRestore();
});

describe('All app constant vars', () => {
  it('Should be getted all the vars for the app', () => {
    const constants = {
      app: appConstant,
      theme: themeConstant,
      url: urlConstant,
      queryClient: queryClientConstant,
    };

    expect(AllAppConstants).toStrictEqual(constants);
    expect(AllAppConstants).toMatchSnapshot();
  });
  it('Should be printed "Constants are {AllAppConstants}"', () => {
    if (IS_DEV) {
      console.warn(`Constants are ${JSON.stringify(AllAppConstants)}`);
    }
    expect(logSpy).toHaveBeenCalledTimes(0);
    // TODO: Improve the test for printed warn
    // expect(logSpy).toHaveBeenCalledWith(
    //   expect.stringContaining(`Constants are ${JSON.stringify(AllAppConstants)}`),
    // );
  });
  it('Should be printed "ENV is dev"', () => {
    if (IS_DEV) {
      console.warn(`ENV is ${JSON.stringify(MODE)}`);
    }
    expect(logSpy).not.toHaveBeenCalled();
  });
});
