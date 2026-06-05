import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent], // Підключаємо наш список замість RouterOutlet
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App { // Тут обов'язково має бути App, а не AppComponent!
  title = 'movie-app';
}
