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
      duration: '169 хв',
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
      duration: '176 хв',
      ageLimit: '16+',
      description: 'Коли серійний вбивця націлюється на еліту Готема, Бетмен змушений розслідувати приховану корупцію в місті.'
    },
    {
      id: 3,
      title: 'F1',
      year: 2025,
      poster: 'img/F1.jpg', // Крутой спорткар на темном фоне
      rating: 7.6,
      genre: 'Спорт, Драма, Экшен',
      director: 'Джозеф Косінскі',
      duration: '155 хв',
      ageLimit: '13+',
      description: 'Ветеран автоспорта Сонни Хейс (Брэд Питт) возвращается в большие гонки спустя годы после тяжелой аварии. Ему предстоит стать наставником молодого феномена в вымышленной команде APXGP и дать свой последний бой на треке.'
    }
  ];

  favorites: any[] = [];
  watchList: any[] = [];

addMovieToFavorites(movie: any) {
    if (movie.isFavorite) {
      // Если лайкнули и фильма еще нет в списке — добавляем по id
      if (!this.favorites.some(m => m.id === movie.id)) {
        this.favorites.push(movie);
      }
    } else {
      // Если лайк убрали — удаляем из массива favorites
      this.favorites = this.favorites.filter(m => m.id !== movie.id);
    }
  }

  // Метод для обработки клика на часики
  addMovieToWatchList(movie: any) {
    if (movie.isWatchLater) {
      // Если нажали "посмотреть" — добавляем в список
      if (!this.watchList.some(m => m.id === movie.id)) {
        this.watchList.push(movie);
      }
    } else {
      // Если отжали — удаляем из watchList
      this.watchList = this.watchList.filter(m => m.id !== movie.id);
    }
  }
}