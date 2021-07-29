import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ text, onChange }) => (
  <>
    <header className="header">
      <span className="coffee-news">☕ Coffee News </span>
      <div className="search-div">
        <label htmlFor="text">🔎 </label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={onChange}
          name="text"
        />
        <button>Search</button>
      </div>
    </header>
  </>
);

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
