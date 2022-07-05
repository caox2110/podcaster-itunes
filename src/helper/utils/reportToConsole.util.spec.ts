import { reportToConsole } from '.';

describe('console util', () => {
  it('reportToConsole', () => {
    expect(reportToConsole).toBe(console.log);
  });
});
