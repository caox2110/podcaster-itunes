import { appConstant } from './app.constant';

const constants = {
  APP_NAME: 'Podcaster',
  IS_DEV: false,
  IS_PROD: false,
  MODE: 'test',
  DEFAULT_IMAGE: '/static/icons/undraw_images_re_0kll.svg',
};

describe('App constant vars', () => {
  it('Should be a constant and get the vars from environment', () => {
    expect(appConstant).toStrictEqual(constants);
    expect(appConstant).toMatchSnapshot({
      APP_NAME: expect.any(String),
      MODE: expect.stringMatching(/test|dev|prod/),
      DEFAULT_IMAGE: expect.any(String),
    });
  });
});
