import '../../assets/css/style.css';
import { fromEvent, interval, of } from "rxjs";
import { concatAll, concatMap, exhaustMap, map, mergeAll, mergeMap, switchAll, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const sequence$ = fromEvent(document.querySelector('input') as HTMLInputElement, 'input')
    .pipe(
        concatMap((e: Event) => {
            const value = (e.target as HTMLInputElement).value;
            return ajax({
                url: `http://learn.javascript.ru/courses/groups/api/participants?key=13vhrmy&text=${value}`,
                crossDomain: true
            })
        }),
        // switchAll(),
        // mergeMap = map + mergeAll
        // switchMap = map + switchAll
        // concatMap = map + concatAll
        // exhaustMap = map + exhaustAll
    )

sequence$.subscribe((v) => {
    console.log(v);
})

