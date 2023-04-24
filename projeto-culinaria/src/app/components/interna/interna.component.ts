import { Component, OnInit } from '@angular/core';
import { Receitas } from 'src/app/model/receitas';
import { ReceitasService } from 'src/app/service/receitas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/categorias';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss'],
})
export class InternaComponent implements OnInit {
  receitas: Receitas[] = [];
  categorias: Categorias[] = [];


//declarando as classes do CSS//
  green = ['verde']
  yellow = ['amarelo']
  red = ['vermelho']

//tipando as lets que criei abaixo//
  idDificuldade: number = 0;
  idDaUrl: number = 0;

  //chama api que vem do serice//
  constructor(
    private apiReceita: ReceitasService,
    private rotaAtiva: ActivatedRoute,
    private apiCategoria: CategoriasService,
  ){}

  ngOnInit(): void {
    this.idDaUrl = this.rotaAtiva.snapshot.params['id'];
    console.log(this.idDaUrl);
    this.mostraReceitas();
    this.mostraCategorias();
  }

  mostraReceitas(): void {
    this.apiReceita.getAllReceitas().subscribe((data) => {
      this.receitas = data;
      console.log(data);
      let dataSort = data.sort((a,b) => {
        return a.titulo.toLowerCase() > b.titulo.toLowerCase() ? 1: -1 //if inline ? (se) : (senão)//
      })
      this.receitas = (dataSort)
    });
  }

  mostraCategorias(): void {
    this.apiCategoria.getAllCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  trocaDificuldade(valor: number): void {
    this.idDificuldade = valor;
  }
}


  //trazer as categorias por id//
  // findReceita(id: number): string {
  //   for (let categ of this.categorias)
  //     if (categ.id == id) {
  //       return categ.categoria;
  //     }
  //   return '';
  // }
