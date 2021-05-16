import 'bootstrap';
import '../../assets/css/style.css';
import { FormComponent } from "./form";

const f1 = document.querySelector('.first-form') as HTMLFormElement;
const f2 = document.querySelector('.second-form') as HTMLFormElement;

f2.hidden = true;

new FormComponent(f1);

setTimeout(() => {
    f2.hidden = false;
    new FormComponent(f2);
}, 5000)
