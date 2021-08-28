import divide from './divide.js';

describe('divide()', () => {
  it('should divide two number', () => {
    expect(divide(2, 5)).toBe(0.4);
  });

  it('should throw error when dividend are not a number', () => {
    expect(() => divide(NaN, 5)).toThrow("Invalid parameter");
  });

  it('should throw error when divisor are not a number', () => {
    expect(() => divide(10, NaN)).toThrow("Invalid parameter");
  });

  it('should throw error when divisor is zero', () => {
    expect(() => divide(5, 0)).toThrow("Divide by zero");
  });
});