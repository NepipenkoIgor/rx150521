import { ReplaySubject, Subject } from "rxjs";

class UserService {
    private user$ = new ReplaySubject()

    getUser() {
        return this.user$.asObservable() //.asObservable();
    }

    setUser(user: any) {
        this.user$.next(user);
    }
}

export const userService = new UserService()
