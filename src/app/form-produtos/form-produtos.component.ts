import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  id!: number;
  mensagem = "";
  produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.mensagem = "";
    if(this.id) {      
      const produto = this.produtoService.buscarPorId(this.id);
      alert("Edicao do produto "+produto.nome);
    }
    else {
      alert("Cadastrar novo produto...");
    }
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
