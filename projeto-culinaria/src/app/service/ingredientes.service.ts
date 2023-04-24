import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredientes } from '../model/ingredientes';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  apiUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllCategorias(): Observable<Ingredientes[]> {
    return this.http.get<Ingredientes[]>(this.apiUrl + 'categorias');
  }

  getCategoriasById(id:number) : Observable<Ingredientes> {
    return this.http.get<Ingredientes>(this.apiUrl + 'categorias/' + id)
  }
}
