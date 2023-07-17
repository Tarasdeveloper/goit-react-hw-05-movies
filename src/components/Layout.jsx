import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader';

export default function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>

          <Link to="movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
