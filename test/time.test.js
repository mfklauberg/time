import time from '../src/time';
import { HOURS, MINUTES, SECONDS } from '../src/constants';

test('should add 42 minutes and 30 seconds to 17 minutes and 30 seconds', () => {
  const initial = time('17:30', MINUTES);
  const result = initial.add('42:30', MINUTES);

  expect(result.toNumber(SECONDS)).toBe(3600);
});

test('should add 1 hour to 30 minutes', () => {
  const initial = time(30, MINUTES);
  const result = initial.add(1, HOURS);

  expect(result.toNumber(MINUTES)).toBe(90);
});

test('should subtract 15 minutes from 1 hour', () => {
  const initial = time(3600, SECONDS);
  const result = initial.subtract(0.25, HOURS);

  expect(result.toNumber(HOURS)).toBe(0.75);
});

test('should add 30 seconds to 1 hour', () => {
  const initial = time(1, HOURS);
  const result = initial.add(30, SECONDS);

  expect(result.toNumber(SECONDS)).toBe(3630);
});

test('should return 3600 seconds when starting with 1 hour', () => {
  const initial = time(1, HOURS);

  expect(initial.toNumber()).toBe(3600);
});

test('should format 2h 45s using default options', () => {
  const initial = time(2, HOURS).add(45, SECONDS);

  expect(initial.format()).toBe('2 hours 45 seconds');
});

test('should format 1h 30min using default options', () => {
  const initial = time(1, HOURS).add(30, MINUTES);

  expect(initial.format()).toBe('1 hour 30 minutes');
});

test('should format 1h 45min using custom options', () => {
  const initial = time(1, HOURS).add(45, MINUTES);

  const options = {
    hour: 'hora',
    minutes: 'minutos'
  };

  expect(initial.format(options)).toBe('1 hora 45 minutos');
});
