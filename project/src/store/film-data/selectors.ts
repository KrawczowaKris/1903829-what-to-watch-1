import TypeFilm from '../../types/film-type';
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import Reviews from '../../types/reviews';

const getFilm = (state: State): TypeFilm | null => state[NameSpace.FilmScreen].film;
const getReviews = (state: State): Reviews => state[NameSpace.FilmScreen].comments;
const getChooseTab = (state: State): string => state[NameSpace.FilmScreen].filmTab;
const getIsLoaded = (state: State): boolean => state[NameSpace.WelcomeScreen].isDataLoaded;
const getIsFounded = (state: State): boolean | null => state[NameSpace.FilmScreen].isFounded;
const getFilmListMore = (state: State): TypeFilm[] => state[NameSpace.FilmScreen].moreFilm;

export { getFilm, getReviews, getChooseTab, getIsLoaded, getIsFounded, getFilmListMore };