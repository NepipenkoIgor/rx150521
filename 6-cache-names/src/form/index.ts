import './styles.css';
import { fromEvent, Observable, combineLatest, EMPTY, of } from "rxjs";
import { userService } from "./user.service";
import { debounceTime, map, switchMap, withLatestFrom } from "rxjs/operators";


export class FormComponent {

    public valueSequence$!: Observable<string>;
    private input!: HTMLInputElement;
    private saveButton!: HTMLButtonElement;

    public constructor(
        public formContainer: HTMLFormElement
    ) {
        this.input = formContainer.querySelector('input') as HTMLInputElement;
        this.saveButton = formContainer.querySelector('button') as HTMLButtonElement;
        this.valueSequence$ = combineLatest([
            fromEvent<InputEvent>(this.input, 'input')
                .pipe(map((e: InputEvent) => {
                    return (e.target as HTMLInputElement).value
                })),
            userService.uniqueNames$
        ])
            .pipe(
                debounceTime(300),
                switchMap(([value, names]: [string, string[]]) => {
                    const isNotValid = names.includes(value);
                    if (isNotValid) {
                        this.input.classList.add('error');
                        this.saveButton.disabled = true;
                        return EMPTY;
                    }
                    this.input.classList.remove('error');
                    this.saveButton.disabled = false;
                    return of(value)
                })
            )


        fromEvent(this.saveButton, 'click')
            .pipe(
                withLatestFrom(this.valueSequence$),
                map(([, v]) => {
                    return v;
                })
            )
            .subscribe((v) => {
                console.log('Can save', v);
            })
    }
}
