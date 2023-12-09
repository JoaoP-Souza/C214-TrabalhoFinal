import { Component, OnInit } from '@angular/core';
import { Filme } from '../interfaces/filmes';

@Component({
  selector: 'lista',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  constructor() { }

  filmes: Filme[] = [];

  newFilme: Filme = {
    nome: '',
    genero: '',
    ano: '',
    nota: ''
  };

  

  ngOnInit() {
  }

  onAddMovieClick(  title?: string, genre?: string, year?: string, rating?: string, teste?: boolean) {
    if(teste == true){
        if (title && genre && year && rating) {
          this.newFilme.nome = title;
          this.newFilme.genero = genre;
          this.newFilme.ano = year;
          this.newFilme.nota = rating;

        this.filmes.push(this.newFilme);
        this.newFilme = {
          nome: '',
          genero: '',
          ano: '',
          nota: ''
        };
<<<<<<< HEAD

          return 'Filme adicionado com sucesso!';
      
        } else {
=======
          return 'Filme adicionado com sucesso!';

        } else {
          
>>>>>>> 94065975a743af9da63cc5bff85195be0ef1c8d8
          return 'Por favor, preencha todos os campos obrigatórios.';
        }

  }else{

<<<<<<< HEAD



=======
>>>>>>> 94065975a743af9da63cc5bff85195be0ef1c8d8
    const titleInput = (document.querySelector('#title') as HTMLInputElement);
    const genreInput = (document.querySelector('#genre') as HTMLInputElement);
    const yearInput = (document.querySelector('#year') as HTMLInputElement);
    const ratingInput = (document.querySelector('#rating') as HTMLInputElement);

    if (titleInput && genreInput && yearInput && ratingInput) {
      this.newFilme.nome = titleInput.value.toString();
      this.newFilme.genero = genreInput.value;
      this.newFilme.ano = yearInput.value;
      this.newFilme.nota = ratingInput.value;

      // Verificar se os campos obrigatórios não estão vazios
      if (this.newFilme.nome && this.newFilme.genero && this.newFilme.ano && this.newFilme.nota) {
        this.filmes.push(this.newFilme);
        this.newFilme = {
          nome: '',
          genero: '',
          ano: '',
          nota: ''
        };

        // Limpar os campos após a adição
        titleInput.value = '';
        genreInput.value = '';
        yearInput.value = '';
        ratingInput.value = '';

        return 'Filme adicionado com sucesso!';
      } else {
        return 'Por favor, preencha todos os campos obrigatórios.';
      }
    } else {
      return 'Erro ao acessar os campos de entrada.';
    }}
  }

  deleteFilme(filme: Filme) {
    const index = this.filmes.indexOf(filme);
    if (index !== -1 && index < this.filmes.length) {
      this.filmes.splice(index, 1);
      return 'Filme excluído com sucesso!';
    } else {
      return 'Erro ao excluir o filme. Filme não encontrado na lista ou índice inválido.';
    }
  }
}