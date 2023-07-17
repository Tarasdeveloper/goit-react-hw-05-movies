import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

export default function MovieDetailPage({ data }) {
  const {
    original_title,
    title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = data;

  // Prepear data for render
  const rating = Math.round(vote_average * 10);
  const date = release_date.slice(0, 4);
  const genresArray = genres.map(gen => gen.name).join(', ');
  const location = useLocation();

  return (
    <div>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg`
          }
          alt={title}
        />
        <div>
          <h1>
            {original_title ? original_title : 'There should have been a title'}
          </h1>
          <p>
            <span>Rating: </span> {rating ? rating : 'Absent'}
          </p>
          <p>
            <span>Release date: </span> {date ? date : 'Absent'}
          </p>
          <p>
            <span>Genre: </span> {genresArray ? genresArray : 'Repeated'}
          </p>
          <p>
            <span>Description: </span>
            {overview
              ? overview
              : 'There should have been a description here, but it is better to see once than to read a hundred times.'}
          </p>
        </div>
      </div>
      <div>
        <span>Additional information</span>
      </div>
      <div>
        <div>
          <div>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </div>
          <div>|</div>
          <div>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

MovieDetailPage.propTypes = {
  data: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
