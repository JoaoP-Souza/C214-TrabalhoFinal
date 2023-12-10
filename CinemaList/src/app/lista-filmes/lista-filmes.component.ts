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
  mediaNotas: number = 0; // Propriedade para armazenar a média

  newFilme: Filme = {
    nome: '',
    genero: '',
    ano: '',
    nota: ''
  };

  

  ngOnInit() {
  }

  onAddMovieClick(title?: string, genre?: string, year?: string, rating?: string, teste?: boolean) {
    if (teste == true) {
      if (title && genre && year && rating) {
        const numericRating = parseFloat(rating);
  
        if (!isNaN(numericRating) && numericRating >= 0 && numericRating <= 10) {
          this.newFilme.nome = title;
          this.newFilme.genero = genre;
          this.newFilme.ano = year;
          this.newFilme.nota = numericRating.toString();
  
          this.filmes.push(this.newFilme);
          this.newFilme = {
            nome: '',
            genero: '',
            ano: '',
            nota: ''
          };
  
          return 'Filme adicionado com sucesso!';
        } else {
          return 'A nota deve ser um número entre 0 e 10.';
        }
      } else {
        return 'Por favor, preencha todos os campos obrigatórios.';
      }
    } else {
      // Your existing code for handling form inputs manually
      const titleInput = (document.querySelector('#title') as HTMLInputElement);
      const genreInput = (document.querySelector('#genre') as HTMLInputElement);
      const yearInput = (document.querySelector('#year') as HTMLInputElement);
      const ratingInput = (document.querySelector('#rating') as HTMLInputElement);
  
      if (titleInput && genreInput && yearInput && ratingInput) {
        this.newFilme.nome = titleInput.value.toString();
        this.newFilme.genero = genreInput.value;
        this.newFilme.ano = yearInput.value;
  
        // Ensure the rating is within the valid range
        const numericRating = parseFloat(ratingInput.value);
        if (!isNaN(numericRating) && numericRating >= 0 && numericRating <= 10) {
          this.newFilme.nota = numericRating.toString();
  
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
  
            this.calcularMedia();
            return 'Filme adicionado com sucesso!';
          } else {
            return 'Por favor, preencha todos os campos obrigatórios.';
          }
        } else {
          return 'A nota deve ser um número entre 0 e 10.';
        }
      } else {
        return 'Erro ao acessar os campos de entrada.';
      }
    }
  }

  deleteFilme(filme: Filme) {
    const index = this.filmes.indexOf(filme);
    if (index !== -1 && index < this.filmes.length) {
      this.filmes.splice(index, 1);
      this.calcularMedia();
      return 'Filme excluído com sucesso!';
    } else {
      return 'Erro ao excluir o filme. Filme não encontrado na lista ou índice inválido.';
    }
  }

  calcularMedia() {
    const totalFilmes = this.filmes.length;
    if (totalFilmes === 0) {
      this.mediaNotas = 0; // Defina a média como 0 se não houver filmes
      return;
    }

    const somaNotas = this.filmes.reduce((acc, filme) => acc + parseFloat(filme.nota || '0'), 0);
    this.mediaNotas = somaNotas / totalFilmes; // Atualize a propriedade mediaNotas
  }

}