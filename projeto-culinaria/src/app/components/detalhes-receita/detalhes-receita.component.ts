import { Component, OnInit, OnChanges } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Receitas } from 'src/app/model/receitas';
import { Categorias } from 'src/app/model/categorias';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ReceitasService } from 'src/app/service/receitas.service';
import { Ingredientes } from 'src/app/model/ingredientes';
import { Preparo } from 'src/app/model/preparo';

@Component({
  selector: 'app-detalhes-receita',
  templateUrl: './detalhes-receita.component.html',
  styleUrls: ['./detalhes-receita.component.scss'],
})
export class DetalhesReceitaComponent implements OnInit {
  receitas: Receitas[] = [];

  categorias: Categorias[] = [];

  ingredientes: Ingredientes[] = [];

  modoPreparo: Preparo[] = [];

  aleatorioReceita: Receitas[] = [];


  categoriaSelecionadas: number = 0;
  idDaUrl: string = '';
  idCategoria: number = 0;

  constructor(
    private apiReceita: ReceitasService,
    private apiCategoria: CategoriasService,
    private rotaAtiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idCategoria = this.rotaAtiva.snapshot.params['idCateg'];
    this.mostraReceitas();
    this.mostraCategorias();
    this.ngOnChange();
    ActivatedRoute;
  }

  ngOnChange(): void {
    this.rotaAtiva.params.subscribe((params) => {
      this.idDaUrl = params['id'];
    });
  }

  mostraReceitas(): void {
    this.apiReceita.getAllReceitas().subscribe((data) => {
      this.receitas = data;
      this.sortear(data);
      this.receitas = data;
      //ordem crescente para o modo de preparo//
      let ordemPassos = data.find((data: Receitas) => data.id == this.idDaUrl);
      let ordem = ordemPassos?.modoPreparo.sort((x: Preparo, y: Preparo) => {
        return x.passo - y.passo;
      });
    });
  }

  mostraCategorias(): void {
    this.apiCategoria.getAllCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  //para trazer as receitas aleatórias na pág detalhes//
  sortear(data: Receitas[]): void {
    let filtrarCateg = data.filter(
      (receita: Receitas) => receita.categoria == this.idCategoria
    );
    while (this.aleatorioReceita.length < 3) {
      let randReceita = Math.floor(Math.random() * filtrarCateg.length);
      console.log(randReceita);
      let receitaSelecionada = this.aleatorioReceita.find(
        (receitaDiversa: Receitas) =>
          receitaDiversa == filtrarCateg[randReceita]
      );
      if (
        receitaSelecionada == undefined &&
        filtrarCateg[randReceita].id != this.idDaUrl
      ) {
        this.aleatorioReceita.push(filtrarCateg[randReceita]);
      }
    }
  }

  trocaCategoriaSelecionada(id: number): void {
    this.categoriaSelecionadas = id;
  }
}
