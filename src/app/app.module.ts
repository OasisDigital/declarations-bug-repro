import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a';
import { ComponentBComponent } from './component-b';
import { ComponentCComponent } from './component-c';


@NgModule({
  declarations: [AppComponent, ComponentAComponent, ComponentBComponent, ComponentCComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class MyAppModule {}
