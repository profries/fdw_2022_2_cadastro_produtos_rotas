import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';

@Pipe({
  name: 'filtroPesquisa'
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], valor?: string): Produto[] {
    const nome = valor ?valor :"";
    console.log(nome);
    return listaProdutos.filter(
      (produto) => 
        produto.nome.toLocaleLowerCase().includes(nome.toLowerCase())
    );
  }

}
