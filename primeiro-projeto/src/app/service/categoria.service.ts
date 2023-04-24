import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Categorias } from '../model/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  apiUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  getAllCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.apiUrl + 'categorias');
  }

  getCategoriasById(id:number) : Observable<Categorias> {
    return this.http.get<Categorias>(this.apiUrl + 'categorias/' + id)
  }
}
