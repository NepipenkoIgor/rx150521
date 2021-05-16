import '../../assets/css/style.css';
import { connectable, ConnectableObservable, interval, Subject } from "rxjs";
import { terminalLog } from "../../utils/log-in-terminal";
import { multicast, publish, refCount, share } from "rxjs/operators";

// const subject = new Subject();
// const sequence$ = interval(1000)
//     .pipe(
//         share()
//     )
//
// // sequence$.connect();
// const sub = sequence$.subscribe((v) => {
//     terminalLog(`Sub 1 ===> ${v}`)
// })
// setTimeout(() => {
//     sub.unsubscribe();
// }, 3000)
//
//
// setTimeout(() => {
//     sequence$.subscribe((v) => {
//         terminalLog(`Sub 2 ===> ${v}`)
//     })
// }, 5000)


// const sequence$ = connectable(
//     interval(1000),
//     {
//         connector: () => new Subject()
//     }
// )
// sequence$.connect();

const sequence$ = interval(1000)
    .pipe(
        share({
            connector: () => new Subject(),
            resetOnRefCountZero: true
        })
    )

const sub = sequence$.subscribe((v) => {
    terminalLog(`Sub 1 ===> ${v}`)
})
setTimeout(() => {
    sub.unsubscribe();
}, 3000)


setTimeout(() => {
    sequence$.subscribe((v) => {
        terminalLog(`Sub 2 ===> ${v}`)
    })
}, 5000)

