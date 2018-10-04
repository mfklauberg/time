// TypeScript Version: 3.1.1

type formatOption = {
  [key: string]: string
};

interface TimeCallback {
  add(value: string | number, unit: string): TimeCallback;
  subtract(value: string | number, unit: string): TimeCallback;
  toNumber(value: string | number, unit: string): TimeCallback;
  format(options?: formatOption): void;
}

declare namespace time {
  export const HOURS: string;
  export const MINUTES: string;
  export const SECONDS: string;
}

declare function time(value: string | number, unit?: string): TimeCallback;

export = time;
