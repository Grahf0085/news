import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ term, onChange, handleSubmit }) => {

  return <form>
    <input
      id="newsSearch"
      placeholder="Search For News"
      type="text"
      name="newsSearch"
      value={term}
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  </form>;

};

Search.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Search;
