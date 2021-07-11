// import { of, from, Observable, fromEvent } from 'rxjs';
import { range, timer, interval } from 'rxjs';
import { scan, map } from 'rxjs/operators';

// ------------ Поток из набора аргументов -------
/*const stream$ = of('One', 'Two', 'Three');

stream$.subscribe(console.log);*/

// ------ Поток из массива ------------
/*const arr$ = from([1, 2, 3, 4])
   .pipe(
      scan((acc, val) => [...acc, val], [])
   );

arr$.subscribe(console.log);*/

// --------- Собственный поток ----------------
/*const stream$ = new Observable(obs => {
   obs.next('First value');
   setTimeout(() => obs.next('After 1000ms'), 1000);
   setTimeout(() => obs.next('After 3000ms'), 3000);
   setTimeout(() => obs.error('Some error'), 2000);
   setTimeout(() => obs.complete(), 1500);
});*/

/*stream$.subscribe(
   console.log,
   console.log,
   () => console.log('Stream is end')
);*/

/*stream$.subscribe({
   next(v) {
      console.log(v);
   },
   error(err) {
      console.log(err);
   },
   complete() {
      console.log('Stream is Done');
   }
});*/

// ------------ Подписка на event ------------------------
/*fromEvent(document.querySelector('#creation canvas'), 'mousemove')
   .pipe(
      map(evt => ({
         x: evt.offsetX,
         y: evt.offsetY,
         ctx: evt.target.getContext('2d')
      }))
   )
   .subscribe(pos => {
      pos.ctx.fillRect(pos.x, pos.y, 2, 2)
   });

const clear$ = fromEvent(document.querySelector('#creation #clear'), 'click');

clear$.subscribe(() => {
   const canvas = document.querySelector('#creation canvas');
   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
});*/

// ------------ Подписка по интервалу --------------------
/*const subInterval = interval(500).subscribe(console.log);

setTimeout(() => subInterval.unsubscribe(), 4000);*/

// ------------ Подписка по таймеру ----------------------
// timer(2500).subscribe(console.log);

// ------------ Подписка из среза ------------------------
// range(15, 11).subscribe(console.log);