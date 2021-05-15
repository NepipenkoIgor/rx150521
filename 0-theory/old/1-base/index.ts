// import '../../assets/css/style.css';
// import { terminalLog } from "../../utils/log-in-terminal";
// import { fromEvent, interval, Observable, Subscriber, Subscription } from "rxjs";
// import { pluck } from "rxjs/operators";

// const sequence = new Promise<number>((res) => {
//     let count = 1;
//     setInterval(() => {
//         res(count++);
//     }, 1000)
// })
//
// sequence.then((v) => terminalLog(v));
// sequence.then((v) => terminalLog(v));

// const sequence = function* iteratorFn() {
//     let count = 1;
//     while (true) {
//         yield count++;
//     }
// }();
//
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// interval(1000)
//     .subscribe((v) => terminalLog(v));
// let count = 1;
//
// const sequence$ = new Observable((subscriber: Subscriber<number>) => {
//     console.log('Start');
//     const intId = setInterval(() => {
//         // if (count % 5 === 0) {
//         //     subscriber.complete();
//         //     return;
//         // }
//         subscriber.next(count++);
//     }, 1000)
//
//     return () => {
//         clearInterval(intId);
//         terminalLog('CB');
//     }
// });
//
//
// const sub: Subscription = sequence$.subscribe({
//     next: (v) => terminalLog(`Sub 1 ===> ${v}`),
//     complete: () => {
//         terminalLog('complete')
//     }
// });
//
// setTimeout(() => {
//     // sub.unsubscribe();
//     sequence$.subscribe({
//         next: (v) => terminalLog(`Sub 2 ===> ${v}`)
//     });
// }, 3000)


const socket: WebSocket = new WebSocket('wss://echo.websocket.org');

// const source$ = new Observable((subscriber) => {
//     function listener(e: Event) {
//         subscriber.next(e);
//     }
//
//     socket.addEventListener('message', listener);
//
//     return () => {
//         socket.removeEventListener('message', listener)
//     }
// })


// const source$ = fromEvent(socket, 'message')
//
//
// socket.addEventListener('open', main)
//
// function main() {
//     let count = 0;
//     const intervalId = setInterval(() => {
//         socket.send((count++).toString())
//     }, 1000);
//
//
//     const sub = source$
//         .pipe(pluck('data'))
//         .subscribe((message) => {
//             console.log(`Sub1 => `, message);
//         })
//
//     setTimeout(()=>{
//         sub.unsubscribe();
//     }, 5000)
//
//     setTimeout(() => {
//         source$
//             .pipe(pluck('data'))
//             .subscribe((message) => {
//                 console.log(`Sub2 => `, message);
//             })
//     }, 7000)
// }
