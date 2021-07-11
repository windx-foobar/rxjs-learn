import { interval, fromEvent } from 'rxjs';
import {
   map,
   filter,
   tap,
   take,
   takeLast,
   takeWhile,
   scan,
   reduce,
   switchMap
} from 'rxjs/operators';

// -------- Рабор операторов с помощью interval -----
/*const stream$ = interval(1000);

stream$
   .pipe(
      // Промежуточный коллбэк который вызывается в каждом next
      tap(v => console.log('Tap:', v)),
      take(5)
      // --Колбэк маппинг который рефакторит значения
      // map(v => v * 2),
      // --Колбэк фильтр, который фильтрует и отправляет в next только нужные
      // filter(v => v % 3 === 0),
      // --Ограничение на колечество next
      // take(5)
      // --Передача в next последние 5 значений
      // take(10),
      // takeLast(5),
      // --Программная фильтрация конца стрима
      // takeWhile(v => v < 7)
      // --Array reduce схожий метод, но на протяжении всего потока
      // scan((acc, v) => acc + v, 0)
      // --Array reduce схожий метод, но на только для next
      // take(10),
      // reduce((acc, v) => acc + v, 0)
   )
   .subscribe({
      next: v => console.log('Next:', v),
      complete: () => console.log('Complete')
   });*/

fromEvent(document, 'click')
   .pipe(
      switchMap(event => {
         return interval(1000).pipe(
            tap(v => console.log('Tap:', v)),
            take(5),
            reduce((acc, v) => acc + v, 0)
         )
      })
   )
   .subscribe({
      next: v => console.log('Next:', v),
      complete: () => console.log('Complete')
   });