import '../../assets/css/style.css';
import './styles.css';
import { fromEvent } from "rxjs";
import { drag, IPosition } from "./drag-and-drop";

export const box = document.querySelector('.draggable') as HTMLDivElement;


const mousedown$ = fromEvent<MouseEvent>(box, 'mousedown');
const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
const mouseup$ = fromEvent<MouseEvent>(box, 'mouseup');


drag(mousedown$, mousemove$, mouseup$)
    .subscribe((pos: IPosition)=>{
        box.style.top = `${pos.top}px`;
        box.style.left = `${pos.left}px`;
    })

class C {
    public x: number = 1;
}
