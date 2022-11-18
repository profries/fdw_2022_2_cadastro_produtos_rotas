import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  mensagem = "";
  produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.mensagem = "";
  }

  cadastrar() {
    this.produtoService.inserir(this.produto);
    this.mensagem = this.produto.nome + " cadastrado com sucesso!";
    this.produto = new Produto();
  }

  cancelar() {
    //Ir para a rota '/tabela'
    this.router.navigate(['/tabela']);
  }

}
