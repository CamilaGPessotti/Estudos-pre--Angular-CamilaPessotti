import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Preparo } from '../model/preparo';

@Injectable({
  providedIn: 'root'
})
export class PreparoService {

  apiUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllCategorias(): Observable<Preparo[]> {
    return this.http.get<Preparo[]>(this.apiUrl + 'categorias');
  }

  getCategoriasById(id:number) : Observable<Preparo> {
    return this.http.get<Preparo>(this.apiUrl + 'categorias/' + id)
  }
}
