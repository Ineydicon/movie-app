import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.html',
  styleUrls: ['./movie-card.scss']
})
export class MovieCardComponent {
  @Input() movie: any;
  @Input() hideActions: boolean = false;
  
  
  @Output() addToFavorite = new EventEmitter<any>(); 
  @Output() addToWatchList = new EventEmitter<any>();

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.movie.isFavorite = !this.movie.isFavorite;
    this.addToFavorite.emit(this.movie); // Отправляем сигнал родителю
  }

  toggleWatchLater(event: Event) {
    event.stopPropagation();
    this.movie.isWatchLater = !this.movie.isWatchLater;
    this.addToWatchList.emit(this.movie); // Отправляем сигнал родителю
  }

  getAgeClass(ageLimit: string): string {
    if (!ageLimit) return '';
    if (ageLimit.includes('18')) return 'age-18';
    if (ageLimit.includes('16')) return 'age-16';
    if (ageLimit.includes('12')) return 'age-12';
    return 'age-general';
  }
}