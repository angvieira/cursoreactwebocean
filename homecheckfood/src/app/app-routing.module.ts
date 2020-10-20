import { ProdutoUpdateComponent } from './checkfood/components/produto/produto-update/produto-update.component';
import { ProdutoListComponent } from './checkfood/components/produto/produto-list/produto-list.component';
import { ProdutoCreateComponent } from './checkfood/components/produto/produto-create/produto-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './checkfood/views/home/home.component';
import { ProdutoDeleteComponent } from './checkfood/components/produto/produto-delete/produto-delete.component';
import { ProdutoCrudComponent } from './checkfood/views/produto-crud/produto-crud.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"produtos",
    component:ProdutoCrudComponent
  },
  {
    path:"produtos/create",
    component: ProdutoCreateComponent
  },
  {
    path:"produtos/list",
    component: ProdutoListComponent
  },
  {
    path:"produtos/update",
    component: ProdutoUpdateComponent
  },
  {
    path:"produtos/delete",
    component: ProdutoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
