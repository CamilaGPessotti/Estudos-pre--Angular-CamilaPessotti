import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorias } from '../model/categorias';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getAllCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.apiUrl + 'categorias');
  }

  getCategoriasById(id:number) : Observable<Categorias> {
    return this.http.get<Categorias>(this.apiUrl + 'categorias/' + id)
  }
}


