import { combineLatest, fromEvent, Observable } from "rxjs";
import { terminalLog } from "../../utils/log-in-terminal";
import { concatAll, map, pluck, reduce, scan, startWith, tap, withLatestFrom } from "rxjs/operators";

export interface ISliderEvent {
    element: HTMLElement;
    value: number;
}


const startValue = 3;


const qualitySlider = $('#quality').slider({value: startValue});
const ratingSlider = $('#rating').slider({value: startValue});
const actualSlider = $('#actual').slider({value: startValue});

export const quality$ = getValue(fromEvent(qualitySlider, 'change'), {
    element: qualitySlider.parent().children(':first-child')[0],
    value: startValue * 10
}, redrawSlider);

export const rating$ = getValue(fromEvent(ratingSlider, 'change'), {
    element: ratingSlider.parent().children(':first-child')[0],
    value: startValue * 10
}, redrawSlider);

export const actual$ = getValue(fromEvent(actualSlider, 'change'), {
    element: actualSlider.parent().children(':first-child')[0],
    value: startValue * 10
}, redrawSlider);


export function sliderResult$(source1$: Observable<MouseEvent>, source2$: Observable<number>): Observable<number> {
    return source1$
        .pipe(
            withLatestFrom(source2$),
            // pluck(1)
            map(([, value]) => {
                return value;
            })
        )
}

export function sliderSequence$(...sources: Observable<number>[]): Observable<number> {
    return combineLatest(sources)
        .pipe(
            // concatAll(),
            map((values: number[]) => {
                const sum = values.reduce((acc, value) => {
                    return acc + value
                }, 0);
                return Math.round(sum / values.length)
            })
        );
}


export function getValue(source$: Observable<any>, initialValue: ISliderEvent, cb: (event: ISliderEvent) => void) {
    return source$
        .pipe(
            map(({delegateTarget: {previousElementSibling}, value: {newValue}}) => {
                return {
                    value: newValue * 10,
                    element: previousElementSibling
                } as ISliderEvent
            }),
            startWith(initialValue),
            tap(cb),
            pluck('value')
        )
}

export function redrawSlider({element, value}: ISliderEvent) {
    const sliderTrack = element.querySelector('.slider-track') as HTMLElement;
    sliderTrack.classList.remove('bad', 'good', 'warn');
    if (value < 40) {
        sliderTrack.classList.add('bad');
        return;
    }
    if (value >= 40 && value <= 70) {
        sliderTrack.classList.add('warn');
        return;
    }
    sliderTrack.classList.add('good');
}
