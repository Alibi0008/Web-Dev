import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpacexLaunchesComponent } from './spacex-launches/spacex-launches.component';
import { LaunchFilterComponent } from './launch-filter/launch-filter.component';
import {RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SpacexLaunchesComponent,
    LaunchFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
