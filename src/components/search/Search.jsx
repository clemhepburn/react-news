import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ text, onChange }) => (
  <>
    <header className="header">
      <label htmlFor="text">News</label>
      <input
        id="text"
        type="text"
        value={text}
        onChange={onChange}
        name="text"
      />
      <button>Search</button>
    </header>
  </>
);

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
