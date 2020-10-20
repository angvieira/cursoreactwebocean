import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './checkfood/components/template/header/header.component';
import { FooterComponent } from './checkfood/components/template/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './checkfood/views/home/home.component';
import { ProdutoCreateComponent } from './checkfood/components/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './checkfood/components/produto/produto-update/produto-update.component';
import { ProdutoListComponent } from './checkfood/components/produto/produto-list/produto-list.component';
import { ProdutoDeleteComponent } from './checkfood/components/produto/produto-delete/produto-delete.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProdutoCrudComponent } from './checkfood/views/produto-crud/produto-crud.component';
import { ListaCrudComponent } from './checkfood/views/lista-crud/lista-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoListComponent,
    ProdutoDeleteComponent,
    ProdutoCrudComponent,
    ListaCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
