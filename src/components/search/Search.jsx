import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ text, onChange }) => (
  <>
    <header className="header">
      <span className="coffee-news">☕ Coffee News </span>
      <form onSubmit={onSubmit} className="search-div">
        <label htmlFor="text">🔎 </label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={onChange}
          name="text"
        />
        <button>Search</button>
      </form>
    </header>
  </>
);

SearchBar.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchBar;
