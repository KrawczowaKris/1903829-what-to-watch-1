import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TypeFilm from '../../types/film-type';
import Reviews from '../../types/reviews';
import { Logo, LogoLight } from '../../components/logo/logo';
import FilmCard from '../../components/film-card/film-card';
import TabsComponent from '../../components/tabs-component/tabs-component';

type MoviePageScreenProps = {
  films: TypeFilm[];
  reviews: Reviews;
}

function MoviePage({ films, reviews }: MoviePageScreenProps): JSX.Element {
  const [userCard, setUserCard] = useState(0);
  const [chooseTab, setChooseTab] = useState<string>('Overview');

  const id = Number(useParams().id);
  const film = films.find((x) => x.id === id);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={ film?.backgroundImage } alt={ film?.name } />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a href="#todo" className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{ film?.name }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ film?.genre }</span>
                <span className="film-card__year">{ film?.released }</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <Link to={`/player/${ id }`}><span>Play</span></Link>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link className="btn film-card__button" to={`/films/:${ id }/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={ film?.posterImage } alt={ film?.name } width="218" height="327" />
            </div>

            <TabsComponent
              film={ film }
              reviews={ reviews }
              chooseTab={ chooseTab }
              updateTab={ (tab: string) => { setChooseTab(tab);} }
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            { films.map((movie) => (
              <FilmCard
                key={ movie.id } id={ movie.id } name={movie.name } previewImage={ movie.previewImage } activeCard={ movie.id === userCard }
                srcVideo={ movie.previewVideoLink } onMouseOver={ () => {
                  setUserCard(movie.id);
                } }
              />)
            ) }
          </div>
        </section>

        <footer className="page-footer">
          <LogoLight />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
