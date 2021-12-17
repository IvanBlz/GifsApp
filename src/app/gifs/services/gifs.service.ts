import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // declaramos variables a usar
  private _historial    :string[] = [];
  private _ApiKey       :string   = "rBErSzjx5Hu7U3b9M7hCqXHmPfXUoxdH";
  private _ServicioGifs :string   = "https://api.giphy.com/v1/gifs";
  public  resultado      :Gif  [] = [];

  constructor(private http: HttpClient){
    // sacamos de localstorage lo almacenado
  this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('resultado')!) || [];
  }
// mostramos el historial
get historial() {

 return [...this._historial];
}
// metodo para buscar realizando el consumo de la api
public searchGifs(search:string) {

  // convertimos el string en minusculas
  search = search.trim().toLowerCase();

  // validamos que no exista ya el string en _historial
  if (!this._historial.includes(search.trim())) {
    // insertamos en el primer array el string
    this._historial.unshift(search);
    // limitamos el arra _historial a 10
    this._historial = this._historial.splice(0,10);
    // almacenamos en localstorage
    localStorage.setItem('historial',JSON.stringify(this._historial));
  }
      //establecemos los parametros a enviar para el conumo de la api
      const params = new HttpParams()
                      .set('api_key', this._ApiKey)
                      .set('limit'  , "10")
                      .set('q'      , search);

      // realizamos el consumo de la api por medio del endpoint establecido como _ServicioGifs y pasamos los parametros que solicitan
      this.http.get<SearchGifsResponse>(`${this._ServicioGifs}/search`, {params})
      .subscribe((resp)=>{
        // almacenamos los resultados de la api en resultados
        this.resultado = resp.data;
        // almacenamos los resultados de la api en localstorage
        localStorage.setItem('resultado',JSON.stringify(this.resultado));
      });



}

}
