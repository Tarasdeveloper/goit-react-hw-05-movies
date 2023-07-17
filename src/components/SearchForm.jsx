import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ formSubmit, errorMessage }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      errorMessage();
      return;
    }

    formSubmit(query);
    setQuery('');
  };

  const handleInput = e => {
    setQuery(e.target.value.toLowerCase().trim());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoFocus
          value={query}
          onChange={handleInput}
          autoComplete="off"
          placeholder="find a movie"
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.func.isRequired,
};
