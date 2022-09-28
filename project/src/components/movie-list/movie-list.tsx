import { TypeFilm } from '../../types/film-type';
import FilmCard from '../film-card/film-card';
import { TypeGenres } from '../../types/genre-type';
import Genre from '../genre/genre';

type MovieListProps = {
  films: TypeFilm[],
  genres: TypeGenres[],
}

function MovieList({ films, genres }: MovieListProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#todo"className="catalog__genres-link">All genres</a>
        </li>
        { genres.map((genre) => <Genre key={ genre.id} nameGenre={ genre.titleGenre }/>) }
      </ul>

      <div className="catalog__films-list">
        { films.map((film) => <FilmCard key={ film.id } name={film.name } previewImage={ film.previewImage }/>) }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default MovieList;
