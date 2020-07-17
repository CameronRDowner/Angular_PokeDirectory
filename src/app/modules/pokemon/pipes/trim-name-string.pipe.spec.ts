import { TrimNameStringPipe } from './trim-name-string.pipe';

describe('TrimNameStringPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimNameStringPipe();
    expect(pipe).toBeTruthy();
  });
});
