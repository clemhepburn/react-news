/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';
import SearchBar from '../components/search/Search';
import './News.css';

export default class Header extends Component {

  state= {
    text: '',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text } = this.state;

    return (
      <>
        <SearchBar
          text={text}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

