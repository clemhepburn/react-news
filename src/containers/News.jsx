/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import SearchBar from '../components/search/Search';
import ArticleList from '../components/article/ArticleList';
import { fetchNews, articleSearch } from '../components/services/newsApi';
import './News.css';

export default class Header extends Component {

  state = {
    searchInput: '',
    articles: [],
    loading: true
  }

  async componentDidMount() {
    const articles = await fetchNews();
    setTimeout(() => {
      this.setState({ articles, loading: false });
    }, 1000);
  }

  handleChange = (target) => {
    this.setState({ searchInput: target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ articles, loading: true });
    const articles = await articleSearch(this.state.search);
    this.setState({
      articles,
      loading: false
    });
  };

  render() {
    const { articles, loading, searchInput } = this.state;
    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <SearchBar
          search={searchInput}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList className="article-list" search={searchInput} articles={articles} />;
      </>
    );
  }
}

