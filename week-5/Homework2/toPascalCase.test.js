import toPascalCase from './toPascalCase.js';

describe('toPascalCase()', () => {
  it('should make uppercase first letter of all words', () => {
    expect(toPascalCase("deneme yazısı bu")).toEqual("Deneme Yazısı Bu");
  });

  it('should be empty when title is empty', () => {
    expect(toPascalCase("")).toEqual("");
  });
});