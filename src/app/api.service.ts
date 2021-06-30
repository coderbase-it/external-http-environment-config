import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from './configuration.interface';
import { EnvConfigurationService } from './env-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  config: Configuration;

  constructor(
    private envConfigurationService: EnvConfigurationService,
    private http: HttpClient
    ) {
      this.config =  this.envConfigurationService.configuration$.value
   }

   getUsers(){
     console.log(this.config.apiUrl)
     return this.http.get(`${this.config.apiUrl}/users`)
   }
}
