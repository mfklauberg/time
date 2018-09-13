import { HOURS, MINUTES, SECONDS, UNIT_VALUES } from './constants';

const units = [HOURS, MINUTES, SECONDS];

function parse(value, unit) {
  if (value === undefined || value === null) {
    throw new Error('"value" is a mandatory parameter.');
  }

  if (unit === undefined || value === null) {
    throw new Error('"unit" is a mandatory parameter.');
  }

  if (!units.includes(unit)) {
    throw new Error(`The value provided for "unit" is invalid.`);
  }

  if (typeof value === 'number') {
    return parseNumber(value, unit);
  }

  if (typeof value === 'string') {
    return parseString(value, unit);
  }

  throw new Error('Invalid value type');
}

function parseNumber(value = 1, unit = '') {
  return value * getMultiplier(unit);
}

function parseString(value = '', unit = '') {
  const parts = value.split(':');

  if (parts.length > 2) {
    throw new Error('Value is incorrectly formated');
  }

  let totalSeconds = 0;
  totalSeconds += Number(parts[0]) * getMultiplier(unit);

  if (parts[1]) {
    let secondUnit = SECONDS;

    unit === HOURS && (secondUnit = MINUTES);

    totalSeconds += Number(parts[1]) * getMultiplier(secondUnit);
  }

  return totalSeconds;
}

function getMultiplier(unit = SECONDS) {
  return UNIT_VALUES[unit];
}

export default parse;
