import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, onChange, onSubmit }) => (
  <>
    <header className="header">
      <span className="coffee-news">☕ <a href="/">Coffee News</a></span>
      <form onSubmit={onSubmit} className="search-div">
        <label htmlFor="search">🔎 </label>
        <input
          id="search"
          type="search"
          name="search"
          placeholder="Search for an article..."
          value={search}
          onChange={onChange}
        />
        <button>Search</button>
      </form>
    </header>
  </>
);

SearchBar.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchBar;
