import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar:MatSnackBar, private http:HttpClient) { }

  showMessage(msg: string, isError:boolean = false){
    this.snackBar.open(msg,'X',{
        duration:3000,
        horizontalPosition:"right",
        verticalPosition:"top",
        panelClass:isError?['msg-error']:['msg-sucess']
    })
 }

  create(produto: Produto):Observable <Produto>{

    return this.http.post<Produto>(this.baseUrl,produto).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );

  }

  searchAll():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl)
  }

  search(id: number):Observable <Produto>{

    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );

  }

  delete(id: number):Observable <Produto>{

    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Produto>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );

  }

  errorHandler(e:any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
