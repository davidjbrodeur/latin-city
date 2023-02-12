import { addNumbers } from '../src/index';

describe('addNumbers', () => {
  it('should add two numbers', () => {
    expect(addNumbers(1, 2)).toBe(3);
  });

  it('should add negative numbers', () => {
    expect(addNumbers(-1, -2)).toBe(-3);
  });

  it('should add decimal numbers', () => {
    expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });
});
