import { EMPTY, fromEvent, Observable } from "rxjs";
import {
    bufferCount, catchError,
    concatAll,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    reduce,
    switchMap, tap
} from "rxjs/operators";
import { AjaxResponse } from "rxjs/ajax";

export interface IRepository {
    name: string;
    description: string;
    owner: {
        avatar_url: string;
    }
}

export interface IResult {
    items: IRepository[]
}

export function liveSearch(source$: Observable<InputEvent>, request: (text: string) => Observable<string>, loaderCb: (e: InputEvent) => void) {
    return source$
        .pipe(
            debounceTime(300),
            tap(loaderCb),
            tap(),
            map((event: InputEvent) => {
                return (event.target as HTMLInputElement).value;
            }),
            filter((text: string) => text.length > 2),
            distinctUntilChanged(),
            switchMap(request)
        )
}

export function request(source$: Observable<AjaxResponse<IResult>>): Observable<string> {
    return source$
        .pipe(
            map((res: AjaxResponse<IResult>) => {
                return res.response.items
            }),
            concatAll(),
            map((repo: IRepository) => createCard(repo)),
            map((htmlStr: string) => htmlStr.trim()),
            bufferCount(3),
            reduce((resultStr: string, htmlStrs: string[]) => {
                return resultStr += createRow(htmlStrs)
            }, ''),
            map((htmlStr: string) => htmlStr.trim().replace(/\s+(<)/g, '<')),
            catchError((err, obs) => {
                console.log(err);
                return EMPTY// of('N') //
            })

        )
}


export function createCard({name, description, owner: {avatar_url}}: IRepository) {
    return `
      <div class="col-sm-6 col-md-4">
         <div class="card">
            <img class="card-img-top" src=${avatar_url} alt=${name}>
            <div class="card-body">
               <h5 class="card-title">${name}</h5>
               <p class="card-text">${description}</p>
            </div>
         </div>
      </div>
    `
}

export function createRow(htmlStrs: string[]) {
    return `<div class="row">${htmlStrs.join(' ')}</div>`
}
