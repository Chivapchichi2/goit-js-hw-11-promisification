import { delay, logger } from './js/task_1.js';
import { users, toggleUserState, logger as log } from './js/task_2.js';
import { makeTransaction, logSuccess, logError } from './js/task_3.js';

// Вызовы функции для проверки task_1
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms


// Вызовы функции для проверки task_2

toggleUserState(users, 'Mango').then(log);
toggleUserState(users, 'Lux').then(log);

// Вызовы функции для проверки task_3

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
