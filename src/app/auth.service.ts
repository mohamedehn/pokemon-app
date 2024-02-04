import { Injectable } from "@angular/core";
import { Observable, delay, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public isLoggedIn: boolean = false;
  public redirectUrl: string;

  constructor() {}

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name === "pikachu" && password === "pikachu");
    return of(isLoggedIn).pipe(
      delay(1000),
      tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
    );
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
