import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.css']
})
export class SearchGifsComponent {
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement> ;



  constructor( private gifsService:GifsService ){}

  search(){

    const searching = this.txtSearch.nativeElement.value;

    if (searching.trim().length === 0) {
      return;
    }

    this.gifsService.searchGifs(searching);

    this.txtSearch.nativeElement.value = "";

  }

}
