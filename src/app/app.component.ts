import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Configuration } from './configuration.interface';
import { EnvConfigurationService } from './env-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'external-http-environment-config';
  configuration: Configuration;
  users!: any;
  constructor(
    private envConfigurationService: EnvConfigurationService,
    private apiService: ApiService
    ){
    this.configuration  = this.envConfigurationService.configuration$.value;
    this.apiService.getUsers().subscribe(
      data => this.users = data
    )
  }


}
