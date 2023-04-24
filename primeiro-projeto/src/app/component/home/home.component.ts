import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from '../../model/noticia';
import { Categorias } from 'src/app/model/categoria';
import { NoticiaService } from 'src/app/service/noticia.service';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noticias: Noticia [] = [];

  categorias: Categorias [] = []
    // {
    //   nome: "Singapura",
    //   id: 1,
    // },

    // {
    //   nome: "Merlion",
    //   id: 2
    // },

    // {
    //   nome: "Garden",
    //   id: 3
    // },

    // {
    //   nome: "Marina Bay",
    //   id: 4
    // },
    // {
    //   nome: "Botanic",
    //   id: 4
    // }
  
    noticia = {
      titulo: '',
      not: '',
      categoria: 0,
      dataPublicacao: '',
      autor: '',
      corpo: '',
      img: '',
      id: 0
    };
  
    categoria = {
      nome: '',
      id: 0
    };


    findCateg(id: number): string {
        for (let categ of this.categorias)
        if(categ.id == id) {
          return categ.nome
        }
        return ''
      }

    categoriaSelecionada: number = 0;

    constructor(private router: Router, 
      private apiNoticia: NoticiaService,
      private apiCategoria: CategoriaService) { }

      ngOnInit(): void {
        this.mostraNoticias();
        this.mostraCategorias()
      }

      mostraNoticias(): void {
        this.apiNoticia.getAllNoticias().subscribe( (data) => { //arrow funcion (=> seta)
          this.noticias = data
        })
      }

    trocaCategoriaSelecionada(id: number): void {
      this.categoriaSelecionada = id
    }




mostraCategorias(): void {
  this.apiCategoria.getAllCategorias().subscribe( (data) => { 
    this.categorias = data
  })
}

trocaCategoriasSelecionada(id: number): void {
this.categoriaSelecionada = id
}


}



  //   IrparaInterna(): void {
  //   this.router.navigate(['interna'])
  // } 
