import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  listaProdutos: Produto[] = [
    {id:1, nome:"Produto 1", preco: 20, marca:"Marca1", validade: new Date()},
    {id:2, nome:"Produto 2", preco: 30, marca:"Marca1", validade: new Date()},
    {id:3, nome:"Produto 3", preco: 40, marca:"Marca2", validade: new Date()},
    {id:4, nome:"Produto 4", preco: 50, marca:"Marca2", validade: new Date()},
  ];

  constructor() { }

  inserir(produto: Produto) {
    this.listaProdutos.push(produto);
  }

  listar() {
    return this.listaProdutos;
  }
}
