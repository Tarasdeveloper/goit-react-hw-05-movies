import PropTypes from 'prop-types';

export default function Credits({ credits }) {
  return (
    <div>
      <ul>
        {credits.map(({ id, name, profilePath }) => {
          return (
            <li key={id}>
              <div>
                <img
                  src={
                    profilePath
                      ? `https://image.tmdb.org/t/p/w500${profilePath}`
                      : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg`
                  }
                  alt={name}
                />
              </div>
              <h2>{name ? name : 'Without  name'}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Credits.propTypes = {
  credits: PropTypes.array.isRequired,
};
