import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result-gifs',
  templateUrl: './result-gifs.component.html',
  styleUrls: ['./result-gifs.component.css']
})
export class ResultGifsComponent {


  get respuesta() {
    return this.resultado.resultado;
  }


  constructor( private resultado: GifsService ) { }


}
