import { ProdutoService } from './../../produto.service';
import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto={
    nome:'',
    marca:''
}

  constructor(private produtoService: ProdutoService,
    private router:Router) { }

  ngOnInit(): void {
  }


  createProduto():void{

    this.produtoService.create(this.produto).subscribe(()=>{
        this.produtoService.showMessage("Produto criado!")
        this.router.navigate(['/produtos'])
    });
  }
  cancel(){
    this.router.navigate(['/produtos'])
  }

}
