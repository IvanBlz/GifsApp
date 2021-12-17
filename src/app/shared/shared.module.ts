import { NgModule } from '@angular/core';
import { sharedComponet } from './shared.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    sharedComponet
  ],
  exports: [
    sharedComponet
  ],
  imports: [
        BrowserModule
  ]
})

export class sharedModule{

}
