import '../../assets/css/style.css';
import { fromEvent, interval } from "rxjs";
import { skipLimit } from "./skip-limit";
import { terminalLog } from "../../utils/log-in-terminal";

// interval(1000)
fromEvent<MouseEvent>(document, 'click')
    .pipe(skipLimit(4, 3))
    .subscribe((v: MouseEvent) => {
        terminalLog(v.clientX);
    })
