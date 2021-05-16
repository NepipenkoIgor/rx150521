// import '../../assets/css/style.css';
// import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";
// import { terminalLog } from "../../utils/log-in-terminal";
// import { Component1 } from "./component-1";
// import { userService } from "./service";
// import { Component2 } from "./component-2";
// import { ajax, AjaxResponse } from "rxjs/ajax";
// import { map } from "rxjs/operators";
// // Subject = Observable + Observer
//
// // const sequence$ = new BehaviorSubject('TS');
// // // sequence$.next('Angular');
// // // sequence$.next('React');
// // sequence$.subscribe((v) => {
// //     terminalLog(`Sub 1===> ${v}`)
// // })
// //
// // sequence$.next('Vue');
// // sequence$.next('Redux');
// //
// //
// // setTimeout(()=>{
// //     console.log(sequence$.value)
// //     sequence$.subscribe((v) => {
// //         terminalLog(`Sub 2===> ${v}`)
// //     })
// // }, 5000)
//
// // const sequence$ = new ReplaySubject(undefined, 1000);
// // sequence$.next('Angular');
// // sequence$.next('React');
// //
// // setTimeout(() => {
// //     sequence$.next('Vue');
// //     sequence$.next('Redux');
// // }, 1500)
// //
// //
// // setTimeout(() => {
// //     sequence$.subscribe((v) => {
// //         terminalLog(`Sub 1===> ${v}`)
// //     })
// //
// // }, 2000)
// //
// // setTimeout(() => {
// //     sequence$.subscribe((v) => {
// //         terminalLog(`Sub 2===> ${v}`)
// //     })
// // }, 5000)
//
//
// // new Component1()
// // userService.setUser('user');
// //
// // setTimeout(() => {
// //     new Component2();
// // })
//
//
// // const sequence$ = new AsyncSubject();
// // sequence$.next('Angular');
// // sequence$.next('React');
// //
// // setTimeout(() => {
// //     sequence$.next('Vue');
// //     sequence$.next('Redux');
// // }, 1500)
// //
// //
// // setTimeout(() => {
// //     sequence$.subscribe((v) => {
// //         terminalLog(`Sub 1===> ${v}`)
// //     })
// //
// // }, 2000)
// //
// // setTimeout(() => {
// //     sequence$.subscribe((v) => {
// //         terminalLog(`Sub 2===> ${v}`)
// //     })
// //
// //     sequence$.complete();
// // }, 5000)
// //
// // setTimeout(() => {
// //     sequence$.subscribe((v) => {
// //         terminalLog(`Sub 3===> ${v}`)
// //     })
// //
// // }, 7000)
//
//
// function getItems<T>(url: string) {
//     let subject: AsyncSubject<T>;
//     return new Observable((subscriber) => {
//         if (!subject) {
//             subject = new AsyncSubject();
//             ajax<T>({
//                 url,
//                 crossDomain: true,
//             })
//                 .pipe(
//                     map((res: AjaxResponse<T>) => res.response)
//                 )
//                 .subscribe(subject)
//         }
//         return subject.subscribe(subscriber)
//     })
// }
//
// const items$ = getItems('http://learn.javascript.ru/courses/groups/api/participants?key=13vhrmy');
// items$.subscribe((items) => {
//     console.log(items);
// })
//
// setTimeout(() => {
//     items$.subscribe((items) => {
//         console.log(items);
//     })
// }, 5000)
