import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { InternaComponent } from './components/interna/interna.component'; 
import { DetalhesReceitaComponent } from './components/detalhes-receita/detalhes-receita.component'; 
import { ReceitasService } from './service/receitas.service';


//caminho das paginas, rotas//
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'interna/:id', component: InternaComponent},
  {path: 'interna', component: InternaComponent},
  {path: 'detalhes-receita/:id/:idCateg', component: DetalhesReceitaComponent},
  {path: 'receitas', component: ReceitasService},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

