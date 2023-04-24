import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Noticia } from '../model/noticia'; //
import { Categorias } from '../model/categoria';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private http: HttpClient) {}
  apiUrl: string = 'http://localhost:3000/';

  //esse observable abaixo é a promese do array no caso Noticia
  getAllNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl + 'noticias');
  }

  getNoticiaById(id:number) : Observable<Noticia> {
    return this.http.get<Noticia>(this.apiUrl + 'noticias/' + id)
  }

}
