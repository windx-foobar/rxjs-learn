import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

// ------------ Стрим из Subject --------------------
/*document.addEventListener('click', () => {
   const stream$ = new Subject();

   stream$.subscribe(console.log);

   stream$.next('Hi');
   stream$.next('Rx');
   stream$.next('Js');
});*/

// ------------ Стрим из BehaviorSubject ------------
/*document.addEventListener('click', () => {
   // Отличие от Subject в том, что есть начальное значение стрима
   const stream$ = new BehaviorSubject('FirstVal');

   stream$.subscribe(console.log);

   stream$.next('Hi');
   stream$.next('Rx');
   stream$.next('Js');
});*/

// ------------ Стрим из ReplaySubject --------------
/*document.addEventListener('click', () => {
   // Отличие в том, что сохраняются значения и неважно где подписываться
   // Так же можно задавать размер буфера сохранения (с конца до начала)
   // В данном случае выведет только Js (последнее)
   const stream$ = new ReplaySubject(1);

   stream$.next('Hi');
   stream$.next('Rx');
   stream$.next('Js');

   stream$.subscribe(console.log);
});*/
