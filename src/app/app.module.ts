import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { EnvConfigurationService } from './env-configuration.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (envConfigService: EnvConfigurationService) => () => envConfigService.load().toPromise(),
    deps: [EnvConfigurationService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
