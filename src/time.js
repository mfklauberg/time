import parse from './parser';
import format from './format';
import { UNIT_VALUES, SECONDS } from './constants';

function time(value, unit = SECONDS) {
  return innerTimer(value, unit, true);
}

function toNumber(baseValue) {
  return function (unit = SECONDS) {
    const value = UNIT_VALUES[unit];

    return baseValue / value;
  };
}

function add(baseValue) {
  return function (value, unit) {
    const parsedValue = parse(value, unit);

    return innerTimer(baseValue + parsedValue, unit, false);
  };
}

function subtract(baseValue) {
  return function (value, unit) {
    const parsedValue = parse(value, unit);

    return innerTimer(baseValue - parsedValue, unit, false);
  };
}

function innerTimer(value, unit, parseValue) {
  let parsedValue = value;

  if (parseValue) {
    parsedValue = parse(value, unit);
  }

  return {
    add: add(parsedValue),
    subtract: subtract(parsedValue),
    toNumber: toNumber(parsedValue),
    format: format(parsedValue)
  };
}

export default time;
