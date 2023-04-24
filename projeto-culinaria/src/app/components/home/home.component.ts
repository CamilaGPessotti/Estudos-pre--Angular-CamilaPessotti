import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receitas } from 'src/app/model/receitas';
import { Categorias } from 'src/app/model/categorias';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ReceitasService } from 'src/app/service/receitas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //declarando os arrays que vou usar//

  receitas: Receitas[] = [];

  categorias: Categorias[] = [];

  categoriaSelecionadas: number = 0;

  //no constructor coloco o que estou ultilizando como rota e apis//
  constructor(
    private router: Router,
    private apiReceita: ReceitasService,
    private apiCategoria: CategoriasService
  ) {}


  //coloco tudo que precisa abrir no inicio, funcões que criei abaixo//
  ngOnInit(): void {
    this.mostraReceitas();
    this.mostraCategorias();
  }

  //trazendo as receitas da api//
  //subscribe é uma inscrição//
  mostraReceitas(): void {
    this.apiReceita.getAllReceitas().subscribe((data) => {
      this.receitas = data;
      console.log(data);
      //transformando as primeitas letras em maiusculas para colocar em ordem alfabética//
      this.receitas = data.sort((a, b) => {
        return a.titulo.toLowerCase() > b.titulo.toLowerCase() ? 1 : -1;
      });
    });
  }

  //trazendo as categorias da api//
  mostraCategorias(): void {
    this.apiCategoria.getAllCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

}
