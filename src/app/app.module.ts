import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StageModule } from './fetures/stage/stage.module';
import { LeftPanelModule } from './fetures/left-panel/left-panel.module';
import { HeaderModule } from './fetures/header/header.module';

@NgModule({
  imports: [
    BrowserModule,
    StageModule,
    LeftPanelModule,
    HeaderModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
