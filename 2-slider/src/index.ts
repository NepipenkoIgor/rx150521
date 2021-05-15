import 'bootstrap';
import 'bootstrap-slider';
import '../../assets/css/style.css';
import './styles.css';
import { actual$, quality$, rating$, sliderResult$, sliderSequence$ } from "./slider";
import { fromEvent } from "rxjs";

const buttonEl = document.querySelector('#send-result') as HTMLButtonElement;
const submit$ = fromEvent<MouseEvent>(buttonEl, 'click');
sliderResult$(submit$, sliderSequence$(quality$, rating$, actual$))
    .subscribe((v) => {
        console.log(v);
    });

