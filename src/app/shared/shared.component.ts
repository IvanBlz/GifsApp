import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';


@Component({
selector: "app-shared",
templateUrl: "./shared.componet.html",
})

export class sharedComponet{


  get historial() {
    return this.ServiciosGifs.historial;
  }
  constructor(private ServiciosGifs:GifsService){}

  search( termino: string){
    this.ServiciosGifs.searchGifs(termino);

  }



}
