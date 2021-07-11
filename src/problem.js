import { interval } from 'rxjs';
import { filter, map, take, scan } from 'rxjs/operators';

const btns = {
   interval: document.getElementById('interval'),
   rxjs: document.getElementById('rxjs')
};
const container = document.querySelector('#problem .result');

const users = [
   { name: 'Arthur', age: 54 },
   { name: 'Artyom', age: 29 },
   { name: 'Andrey', age: 68 },
   { name: 'Alex', age: 43 },
   { name: 'Anna', age: 13 },
   { name: 'Alyona', age: 47 },
   { name: 'Angy', age: 9 },
];

btns.interval.addEventListener('click', function () {
   /** @var {HTMLButtonElement} */
   const btn = this;
   btn.disabled = true;

   let i = 0;
   const canDrinkingUsers = [];

   const intervalId = setInterval(() => {
      if (users[i]) {
         if (users[i].age >= 18) {
            canDrinkingUsers.push(users[i].name);
         }

         container.textContent = canDrinkingUsers.join('||');
         i++;
      } else {
         clearInterval(intervalId);
         btn.disabled = false;
      }
   }, 1000);
});

btns.rxjs.addEventListener('click', function () {
   /** @var {HTMLButtonElement} */
   const btn = this;
   btn.disabled = true;

   interval(1000)
      .pipe(
         take(users.length),
         filter(idx => users[idx].age >= 18),
         map(idx => users[idx].name),
         scan((acc, value) => acc.concat(value), [])
      )
      .subscribe(res => {
         container.textContent = res.join('||');
      }, null, () => btn.disabled = false);
});