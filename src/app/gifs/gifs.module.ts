import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchGifsComponent } from './search-gifs/search-gifs.component';
import { ResultGifsComponent } from './result-gifs/result-gifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchGifsComponent,
    ResultGifsComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
