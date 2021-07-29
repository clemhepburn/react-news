/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import SearchBar from '../components/search/Search';
import ArticleList from '../components/article/ArticleList';
import { fetchNews } from '../components/services/newsApi';
import './News.css';

export default class Header extends Component {

  state= {
    text: '',
    articles: [],
    loading: true
  }

  async componentDidMount() {
    const articles = await fetchNews();
    setTimeout(() => {
      this.setState({ articles, loading: false });
    }, 1000);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { articles, loading, text } = this.state;
    if(loading) return <h1>Loading...</h1>;

    return (
      <>
        <SearchBar
          text={text}
          onChange={this.handleChange}
        />
        <ArticleList className="article-list" articles={articles} />;
      </>
    );
  }
}

