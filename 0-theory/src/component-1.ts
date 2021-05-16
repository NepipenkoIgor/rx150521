import { userService } from "./service";
import { terminalLog } from "../../utils/log-in-terminal";

export class Component1 {
    constructor() {
        userService.getUser().subscribe((v) => {
            terminalLog('Component 1 => user');
        })

    }

}
