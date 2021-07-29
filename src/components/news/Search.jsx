import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ term, onChange }) => {

  return <form>
    <input
      id="newsSearch"
      placeholder="Search For News"
      type="text"
      name="newsSearch"
      value={term}
      onChange={onChange}
    />
  </form>;

};

Search.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
