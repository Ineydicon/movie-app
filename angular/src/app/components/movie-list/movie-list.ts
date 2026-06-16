import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.scss']
})
export class MovieListComponent {
  movies: any[] = [
    {
      id: 1,
      title: 'Інтерстеллар',
      year: 2014,
      poster: 'img/Interstellar.jpg',
      rating: 8.7,
      genre: 'Фантастика, Драма',
      director: 'Крістофер Нолан',
      durationInMins:169,
      ageLimit: '12+',
      description: 'Подорож дослідників, які використовують нещодавно виявлену космічную діру, щоб обійти обмеження на людські польоти.'
    },
    {
      id: 2,
      title: 'Бетмен',
      year: 2022,
      poster: 'img/The_Batman.jpg',
      rating: 7.3,
      genre: 'Екшн, Кримінал, Драма',
      director: 'Метт Рівз',
      durationInMins:176,
      ageLimit: '16+',
      description: 'Коли серійний вбивця націлюється на еліту Готема, Бетмен змушений розслідувати приховану корупцію в місті.'
    },
    {
      id: 3,
      title: 'F1',
      year: 2025,
      poster: 'img/F1.jpg', 
      rating: 7.6,
      genre: 'Спорт, Драма, Экшен',
      director: 'Джозеф Косінскі',
      ageLimit: '13+',
      durationInMins:155,
      description: 'Ветеран автоспорта Сонни Хейс (Брэд Питт) возвращается в большие гонки спустя годы после тяжелой аварии. Ему предстоит стать наставником молодого феномена в вымышленной команде APXGP и дать свой последний бой на треке.'
    }
  ];

  favorites: any[] = [];
  watchList: any[] = [];

addMovieToFavorites(movie: any) {
    if (movie.isFavorite) {
      
      if (!this.favorites.some(m => m.id === movie.id)) {
        this.favorites.push(movie);
      }
    } else {

      this.favorites = this.favorites.filter(m => m.id !== movie.id);
    }
  }

  
  addMovieToWatchList(movie: any) {
    if (movie.isWatchLater) {
      
      if (!this.watchList.some(m => m.id === movie.id)) {
        this.watchList.push(movie);
      }
    } else {
      
      this.watchList = this.watchList.filter(m => m.id !== movie.id);
    }
  }
}