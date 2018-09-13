# time

> Easy and immutable time manipulation in JavaScript

## Install

```
$ npm install @mfklauberg/time
```

## Usage

```js
import time, { HOURS, MINUTES, SECONDS } from '@mfklauberg/time';

// the unit will default to SECONDS
time(3600);

time(10, HOURS);

time(5, MINUTES);

time(42, SECONDS);

time('12:30', HOURS);

time('9:45', MINUTES);
```

`time` can be converted into a number.

```js
import time, { HOURS, MINUTES, SECONDS } from '@mfklauberg/time';

const x = time(1, HOURS);

const y = time('10:30', HOURS);

const z = time('15:43', MINUTES);

// the unit will default to SECONDS
console.log(x.toNumber()); // 3600

console.log(x.toNumber(SECONDS)); // 3600

console.log(x.toNumber(MINUTES)); // 60

console.log(x.toNumber(HOURS)); // 1

console.log(y.toNumber(MINUTES)); // 630

console.log(z.toNumber(SECONDS)); // 943
```

From a instance of `time`, you can do `add` and `subtract` on it, which will result in a new `time`.

```js
import time, { HOURS, MINUTES, SECONDS } from '@mfklauberg/time';

const x = time(10, HOURS);
const y = x.add(30, MINUTES);

console.log(x.toNumber(MINUTES)); // 600
console.log(y.toNumber(MINUTES)); // 630

const z = x.subtract('5:30', HOURS);

console.log(z.toNumber(MINUTES)); // 270
```

There's also the possibility to format a `time`.

```js
import time, { HOURS, MINUTES, SECONDS } from '@mfklauberg/time';

const x = time(15, HOURS).add(30, MINUTES).add(45, SECONDS);

console.log(x.format()) // 15 hours 30 minutes 45 seconds
```

And also with custom labels, for both singular and plural words.

```js
import time, { HOURS, MINUTES, SECONDS } from '@mfklauberg/time';

const x = time(15, HOURS).add(30, MINUTES).add(45, SECONDS);

const y = time(1, HOURS).add(1, MINUTES).add(1, SECONDS);

const options = {
  hour: 'hora',
  hours: 'horas',
  minute: 'minute',
  minutes: 'minutes',
  second: 'segundo',
  seconds: 'segundos'
};

console.log(x.format(options)); // 15 horas 30 minutos 45 segundos

console.log(y.format(options)); // 1 hora 1 minuto 1 segundo
```

## License

[MIT](./LICENSE.md)