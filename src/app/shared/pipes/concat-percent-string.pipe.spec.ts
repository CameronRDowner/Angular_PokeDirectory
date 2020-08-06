import { ConcatPercentStringPipe } from './concat-percent-string.pipe';

describe('ConcatPercentStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatPercentStringPipe();
    expect(pipe).toBeTruthy();
  });
});
