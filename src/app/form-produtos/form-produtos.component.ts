import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {

  produto = new Produto();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.produtoService.inserir(this.produto);
    this.produto = new Produto();
  }

}
