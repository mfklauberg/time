import { UNIT_VALUES, FORMAT_OPTIONS, HOURS, MINUTES } from './constants';

function format(baseValue) {
  return function format(options = {}) {
    const opt = { ...FORMAT_OPTIONS, ...options };

    let value = baseValue;

    const hours = Math.floor(value / UNIT_VALUES[HOURS]);

    if (hours > 0) {
      value -= hours * UNIT_VALUES[HOURS];
    }

    const minutes = Math.floor(value / UNIT_VALUES[MINUTES]);

    if (minutes > 0) {
      value -= minutes * UNIT_VALUES[MINUTES];
    }

    const seconds = value;

    let formattedValue = '';

    if (hours > 0) {
      formattedValue = `${formattedValue} ${formatHours(
        Math.floor(hours),
        opt
      )}`;
    }

    if (minutes > 0) {
      formattedValue = `${formattedValue} ${formatMinutes(
        Math.floor(minutes),
        opt
      )}`;
    }

    return `${formattedValue} ${formatSeconds(
      Math.floor(seconds),
      opt
    )}`.trim();
  };
}

function formatHours(hours, options) {
  if (hours < 1) {
    return '';
  }

  const value = hours === 1 ? options.hour : options.hours;
  return `${hours} ${value}`;
}

function formatMinutes(minutes, options) {
  if (minutes < 1) {
    return '';
  }

  const value = minutes === 1 ? options.minute : options.minutes;
  return `${minutes} ${value}`;
}

function formatSeconds(seconds, options) {
  if (seconds < 1) {
    return '';
  }

  const value = seconds === 1 ? options.second : options.seconds;
  return `${seconds} ${value}`;
}

export default format;
