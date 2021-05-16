import { Observable, ReplaySubject, timer } from "rxjs";
import { concatAll, pluck, share, shareReplay, switchMap, toArray } from "rxjs/operators";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { time } from "jasmine-marbles";

export interface IUser {
    profileName: string;
    firstName: string;
    surname: string;
    photo: string;
    country: string;
}

class UserService {
    // public uniqueNames$: Observable<string[]> = ajax<IUser[]>({
    //     url: `http://learn.javascript.ru/courses/groups/api/participants?key=13vhrmy`,
    //     crossDomain: true
    // })
    //     .pipe(
    //         pluck<AjaxResponse<IUser[]>, 'response'>('response'),
    //         concatAll(),
    //         pluck<IUser, 'profileName'>('profileName'),
    //         toArray(),
    //         // shareReplay()
    //         share({
    //             connector: () => new ReplaySubject(),
    //             resetOnRefCountZero: false,
    //             resetOnComplete: false,
    //             resetOnError: false
    //         })
    //     )

    public uniqueNames$: Observable<string[]> = timer(0, 16000)
        .pipe(
            switchMap(() => {
                return ajax<IUser[]>({
                    url: `http://learn.javascript.ru/courses/groups/api/participants?key=13vhrmy`,
                    crossDomain: true
                })
                    .pipe(
                        pluck<AjaxResponse<IUser[]>, 'response'>('response'),
                        concatAll(),
                        pluck<IUser, 'profileName'>('profileName'),
                        toArray(),
                    )
            }),
            // shareReplay()
            share({
                connector: () => new ReplaySubject(),
                resetOnRefCountZero: false,
                resetOnComplete: false,
                resetOnError: false
            })
        )
}


export const userService = new UserService();
