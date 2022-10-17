import { TypeFilm } from '../types/film-type';

export function ChooseRatingLevel(rating?: number): string {
  if (rating !== undefined) {
    if (rating >= 0 && rating < 3) {
      return 'Bad';
    } if (rating >= 3 && rating < 5) {
      return 'Normal';
    } if (rating >= 5 && rating < 8) {
      return 'Good';
    } if (rating >= 8 && rating < 10) {
      return 'Very good';
    } if (rating === 10) {
      return 'Awesome';
    } return 'None';
  }
  return '';
}

export function sortGenreFilm(filmsList: TypeFilm[], genre: string): TypeFilm[] {
  if (genre === 'All genres') { return filmsList; }
  return filmsList.filter((film) => film.genre === genre);
}
