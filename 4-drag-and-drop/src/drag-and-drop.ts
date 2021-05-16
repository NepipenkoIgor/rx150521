import { fromEvent, Observable } from "rxjs";
import { concatMap, map, switchMap, takeUntil } from "rxjs/operators";

export interface IPosition {
    top: number;
    left: number;
}


export function drag(
    source1$: Observable<MouseEvent>,
    source2$: Observable<MouseEvent>,
    source3$: Observable<MouseEvent>,
): Observable<IPosition> {
    return source1$
        .pipe(
            switchMap((startEvent: MouseEvent) => {
                startEvent.preventDefault();
                console.log('Start');
                return source2$.pipe(
                    map((moveEvent: MouseEvent) => {
                        moveEvent.preventDefault();
                        return {
                            left: moveEvent.clientX - startEvent.offsetX,
                            top: moveEvent.clientY - startEvent.offsetY,
                        }
                    }),
                    takeUntil(source3$)
                )
            })
        )
}
