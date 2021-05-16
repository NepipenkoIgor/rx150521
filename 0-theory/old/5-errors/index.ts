// import '../../assets/css/style.css';
// import { EMPTY, interval, of, zip } from "rxjs";
// import { catchError, delay, map, retry, retryWhen, switchMap, zipWith } from "rxjs/operators";
// import { terminalLog } from "../../utils/log-in-terminal";
//
//
// const sequence1$ = interval(1000);
// const sequence2$ = of('1', '2', '3', 4, '5', '6', '7');
// // const sequence$ = sequence1$.pipe(zipWith(sequence2$))
// const sequence$ = zip(sequence1$, sequence2$)
// sequence$.pipe(
//     switchMap(([, y]) => {
//         return of(y)
//             .pipe(
//                 map((v) => {
//                     return (v as any).toUpperCase();
//                 }),
//                 catchError((err, obs) => {
//                     console.log(err);
//                     return EMPTY// of('N') //
//                 })
//             )
//     }),
//     // map(([, y]) => {
//     //     // try {
//     //     //     return (y as any).toUpperCase();
//     //     // } catch (e) {
//     //     //    return   'N'
//     //     // }
//     //     return (y as any).toUpperCase();
//     //
//     // }),
//     //retryWhen((errObs) => errObs.pipe(delay(3000)))
//     // retry(3),
//
// )
//     .subscribe({
//         next: (v) => terminalLog(v),
//         error: (err) => {
//             console.log(err)
//         },
//         complete: () => {
//             terminalLog('completed')
//         }
//     })
