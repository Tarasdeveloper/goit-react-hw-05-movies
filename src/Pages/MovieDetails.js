import { useEffect, useState, useRef } from 'react';
import { getMovieDetails } from 'Services/Api';
import { useParams } from 'react-router-dom';
import { Navigate, useLocation } from 'react-router-dom';
import MovieDetailPage from 'components/MovieDetailPage';
import Loader from 'components/Loader';
import Button from 'components/Button';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetailPage, setMovieDetailPage] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const location = useLocation();
  const backLink = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const detailInfo = async () => {
      setStatus(STATUS.PENDING);

      try {
        const data = await getMovieDetails(movieId);
        setMovieDetailPage(data);
        setStatus(STATUS.RESOLVED);
        setError('');
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error.message);
      }
    };
    detailInfo();
  }, [movieId, setMovieDetailPage]);

  return (
    <section>
      <div>
        <Button location={backLink.current} />
        {error && <Navigate to="/" replace />}
        {status === STATUS.PENDING && <Loader />}
        {movieDetailPage && <MovieDetailPage data={movieDetailPage} />}
      </div>
    </section>
  );
};

export default MovieDetails;
