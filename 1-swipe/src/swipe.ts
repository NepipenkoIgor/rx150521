import { from, fromEvent, Observable, zip, merge } from "rxjs";
import { filter, map } from "rxjs/operators";

const touchStart$ = getX(
    merge(
        fromEvent<MouseEvent>(document, 'mousedown'),
        fromEvent<TouchEvent>(document, 'touchstart'),
    )
);
const touchEnd$ = getX(
    merge(
        fromEvent<MouseEvent>(document, 'mouseup'),
        fromEvent<TouchEvent>(document, 'touchend'),
    )
);

export const swipe$ = swipe(zip(touchStart$, touchEnd$));

export function getX(source$: Observable<MouseEvent | TouchEvent>): Observable<number> {
    return source$
        .pipe(
            map((event: MouseEvent | TouchEvent) => {
                if (event instanceof TouchEvent) {
                    return event.changedTouches[0].clientX
                }
                return event.clientX;
            })
        )
}


export function swipe(source$: Observable<[number, number]>): Observable<number> {
    return source$
        .pipe(
            map(([startX, endX]) => startX - endX),
            filter((v) => v !== 0)
        )
}
