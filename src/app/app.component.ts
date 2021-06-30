import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  version: string;
  constructor(
    private envConfigurationService: EnvConfigurationService,
    private apiService: ApiService
    ){
    this.configuration  = this.envConfigurationService.configuration$.value;
    this.apiService.getUsers().subscribe(
      data => this.users = data
    )
    this.version = environment.appVersion;
  }


}
