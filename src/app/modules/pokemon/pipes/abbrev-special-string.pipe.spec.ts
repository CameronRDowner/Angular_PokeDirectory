import { AbbrevSpecialStringPipe } from './abbrev-special-string.pipe';

describe('AbbrevSpecialStringPipe', () => {
  it('create an instance', () => {
    const pipe = new AbbrevSpecialStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should abbreviate special as sp. if special is in string', () => {
    const pipe = new AbbrevSpecialStringPipe();

    const pipeResult = pipe.transform('special-attack');

    expect(pipeResult).toEqual('Sp. attack')
  })

});


