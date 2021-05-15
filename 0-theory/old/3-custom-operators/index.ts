// import '../../assets/css/style.css';
//
// import { interval, Observable, pipe, Subscriber } from "rxjs";
// import { terminalLog } from "../../utils/log-in-terminal";
// import { filter, map, takeUntil } from "rxjs/operators";


// function doNothing<T>(source$: Observable<T>) {
//     return source$;
// }
//
// function toText<T>(source$: Observable<T>) {
//     return new Observable((subscriber: Subscriber<string>) => {
//         subscriber.next('RxJS');
//         subscriber.complete();
//     });
// }
//
// function double(source$: Observable<number>) {
//     return new Observable((subscriber: Subscriber<number>) => {
//
//         source$.subscribe({
//             next: (v) => subscriber.next(v * 2),
//             error: (err) => subscriber.error(err),
//             complete: () => subscriber.complete()
//         })
//         // subscriber.next('RxJS');
//         // subscriber.complete();
//     });
// }
//
// interval(1000)
//     .pipe(
//         doNothing,
//         double
//     )
//     .subscribe((v) => {
//         terminalLog(v);
//     })


// export class UnSubscriber implements OnDestroy {
//     protected unsubscribe$$ = new Subject();
//
//     public ngOnDestroy(): void {
//         this.unsubscribe$$.next(true);
//         this.unsubscribe$$.complete();
//     }
// }
//
// class Component extends UnSubscriber {
//     public users = interval(1000).pipe(
//         takeUntil(this.unsubscribe$$)
//     )
//
//     public users = interval(1000).pipe(
//         takeUntil(this.unsubscribe$$)
//     )
//
//     public users = interval(1000).pipe(
//         takeUntil(this.unsubscribe$$)
//     )
// }


// const o$ = new Observable();
// o$.source = interval(1000)
// o$.operator = {
//     call(subscriber: Subscriber<number>, source: any) {
//         source.subscribe(subscriber)
//     }
// }
//
// o$.subscribe((v) => terminalLog(v as any))


// class DoubleSubscriber extends Subscriber<number> {
//     next(value: number) {
//         super.next(value * 2);
//     }
// }
//
// const double = (source$: Observable<number>) => {
//     return source$.lift({
//         call(subscriber: Subscriber<number>, source: any) {
//             source.subscribe(new DoubleSubscriber(subscriber))
//         }
//     });
// }
//
// interval(1000)
//     .pipe(
//         double
//     )
//     .subscribe((v) => terminalLog(v))


//const pipe = (...fns: Function[]) => (source: Observable<any>) => fns.reduce((acc, fn) => fn(acc), source);


// const filterDouble = pipe(
//     filter((v: any) => v % 3 === 0),
//     double
// )
//
//
// interval(1000)
//     .pipe(filterDouble)
//     .subscribe((v) => terminalLog(v))
