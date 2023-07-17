import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieListItem key={id} id={id} title={title} poster={poster_path} />
        );
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
