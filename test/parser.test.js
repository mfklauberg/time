import parse from '../src/parser';
import { HOURS, MINUTES, SECONDS } from '../src/constants';

test('should parse 2 hours as number', () => {
  const result = parse(2, HOURS);
  expect(result).toBe(7200);
});

test('should parse 30 minutes as number', () => {
  const result = parse(30, MINUTES);
  expect(result).toBe(1800);
});

test('should parse 32 seconds as number', () => {
  const result = parse(32, SECONDS);
  expect(result).toBe(32);
});

test('should parse 2 hours and 30 minutes as string', () => {
  const result = parse('2:30', HOURS);
  expect(result).toBe(9000);
});

test('should parse 2 hours as string', () => {
  const result = parse('2', HOURS);
  expect(result).toBe(7200);
});

test('should parse 30 minutes and 17 seconds as string', () => {
  const result = parse('30:17', MINUTES);
  expect(result).toBe(1817);
});

test('should parse 45 minutes as string', () => {
  const result = parse('45', MINUTES);
  expect(result).toBe(2700);
});

test('should parse 42 seconds as string', () => {
  const result = parse('30', SECONDS);
  expect(result).toBe(30);
});

test('shoud throw an error if no "value" is provided', () => {
  expect(() => {
    parse();
  }).toThrowError('"value" is a mandatory parameter');
});

test('should throw an error if no "unit" is provided', () => {
  expect(() => {
    parse(30);
  }).toThrowError('"unit" is a mandatory parameter');
});

test('should throw an error if invalid value is provided for "unit"', () => {
  expect(() => {
    parse(30, 'biscuit');
  }).toThrowError('The value provided for "unit" is invalid.');
});
