import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receitas } from '../model/receitas';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  apiUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllReceitas(): Observable<Receitas[]> {
    return this.http.get<Receitas[]>(this.apiUrl + 'receitas');
  }

  getReceitasById(id:number) : Observable<Receitas> {
    return this.http.get<Receitas>(this.apiUrl + 'receitas/' + id)
  }

}
