import 'bootstrap';
import '../../assets/css/style.css';
import './styles.css';
import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { IResult, liveSearch, request } from "./live-search";
import { tap } from "rxjs/operators";

const inputEl = document.querySelector('#search') as HTMLInputElement;
const container = document.querySelector('.container') as HTMLDivElement;


liveSearch(
    fromEvent<InputEvent>(inputEl, 'input'),
    (text: string) => request(ajax<IResult>({
        url: `https://api.github.com/search/repositories?q=${text}`
    })),
    (e: InputEvent) => {
        console.log('show loader')
    }
).pipe(
    tap(() => {
        console.log('hide loader')
    })
)
    .subscribe((htmlStr: string) => {
        container.innerHTML = htmlStr;
    })
