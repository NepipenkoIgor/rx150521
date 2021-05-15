import '../../assets/css/style.css';

import { defer, from, generate, iif, interval, of, range, timer } from "rxjs";
import { terminalLog } from "../../utils/log-in-terminal";
import { filter, map, skip, take, tap } from "rxjs/operators";

// of(1, 2, 3, 4)
//     .subscribe((v) => terminalLog(`Of => ${v}`));
//
//
// from([
//     1, 2, 3, 4
// ])
//     .subscribe((v) => terminalLog(`from => ${v}`));


// timer(5000, 1000)
//     .subscribe((v) => terminalLog(`timer => ${v}`));


// const random = Math.round(Math.random() * 10);
//
// console.log(random);

// iif(() => {
//     return random > 5;
// }, of('First sequence'), of('Second sequence'))
//     .subscribe((v) => terminalLog(`iif => ${v}`));

// defer(() => {
//     return random > 5
//         ? random >= 8
//             ? of('First sequence')
//             : of('Second sequence')
//
//         : of('Third sequence')
// })
//     .subscribe((v) => terminalLog(`defer => ${v}`));

// range(2, 5)
//     .subscribe((v) => terminalLog(`range => ${v}`));

// generate({
//     initialState: 1,
//     condition: (v) => v < 4,
//     iterate: (v) => v + 0.5
// })
//     .subscribe((v) => terminalLog(`generate => ${v}`));


const sequence1$ = interval(1000);


/*
sequence1$: ---0---1---2---3---4---5---6---7---8---9---10--
     tap((v) => {
        console.log(v)
        return 1;
     }),
            ---0---1---2---3---4---5---6---7---8-------10--
     filter((v)=>x%2 === 0)
            ---0-------2-------4-------6-------8-------10--
     map((x)=>v*2)
            ---0-------4-------8-------12-------16-------20--
     skip(2)
            -------------------8-------12-------16-------20--
     take(3)
sequence2$: -------------------8-------12-------16|
 */

const sequence2$ = sequence1$.pipe(
    tap((v) => {
        console.log(v)
        return 1;
    }),
    filter((v) => v % 2 === 0),
    map((x) => x * 2),
    skip(2),
    take(3)
)
    .subscribe((v) => {
        terminalLog(v)
    })
