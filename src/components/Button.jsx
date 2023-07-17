import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Button({ location }) {
  return (
    <>
      <NavLink to={location}> Back to</NavLink>
    </>
  );
}

Button.propTypes = {
  location: PropTypes.any.isRequired,
};
