import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../../model/noticia';
import { Categorias } from '../../model/categoria';
import { NoticiaService } from 'src/app/service/noticia.service';
import { CategoriaService } from 'src/app/service/categoria.service';


@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss'],
})

// implements OnInit roda qdo for chamado a pagina e precisa do ngOnit()
export class InternaComponent implements OnInit {
  noticia: Noticia = 
   {
      titulo: '',
      not: '',
      categoria:  0,
      dataPublicacao: '',
      autor: '',
      img: '',
      corpo: '',
      id: 0
    }

  
  

  categorias: Categorias = {
      nome: '',
      id: 0
    }

  //   {
  //     nome: 'Merlion',
  //     id: 2,
  //   },

  //   {
  //     nome: 'Garden',
  //     id: 3,
  //   },

  //   {
  //     nome: 'Marina Bay',
  //     id: 3,
  //   },
  

  idDaUrl: number = 0;

  // O router link precisa do constructor e o constructor precisa do import(no inicio da pagina)
  constructor(
    private rotaAtiva: ActivatedRoute, 
    private apiNoticia: NoticiaService,
    private apiCategoria: CategoriaService 
    ) {}

  ngOnInit(): void {
    console.log(this.rotaAtiva.snapshot.params['id']);
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id']);
    this.pegarPeloId()
    this.pegarPeloIdCat()
    
  }

  pegarPeloId(): void {
    this.apiNoticia.getNoticiaById( this.idDaUrl ).subscribe( (data) => 
    this.noticia = data
    )}

    pegarPeloIdCat(): void {
      this.apiCategoria.getCategoriasById( this.idDaUrl).subscribe( (data) => 
      this.categorias = data
      )}
}
