import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {  tap} from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Configuration } from "./configuration.interface";




@Injectable({ providedIn: 'root' })
export class EnvConfigurationService {
  private readonly apiUrl = 'http://127.0.0.1:3000';
  public configuration$:  BehaviorSubject<Configuration> = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  /**
   *
   * call from APP_INITIALIZER
   *
   */
  public load(): Observable<Configuration> {
      return this.http
        .get<Configuration>(`${this.apiUrl}/${environment.configFileName}`)
        .pipe(
          tap( data => this.configuration$.next(data))
        )

  }
}
