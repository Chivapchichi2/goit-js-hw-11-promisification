// Задание 1

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.

// Значением исполнившегося промиса должно быть то кол - во миллисекунд которое передали во время вызова функции delay.

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms), ms)
  })
};

const logger = time => console.log(`Resolved after ${time}ms`);

export {delay, logger};