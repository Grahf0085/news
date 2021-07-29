import React, { Component } from 'react';
import { newsApi } from '../services/newsAPI';
import ArticleList from '../components/news/ArticleList';
import Search from '../components/news/Search';

export default class NewsSearch extends Component {
  
  state = {
    loading: true,
    articles: {},
    search: 'bitcoin',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { search } = this.state;
    const articles = await newsApi(search);
    this.setState({ articles: articles.articles, loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  async componentDidMount() {
    const { search } = this.state;
    const articles = await newsApi(search);
    this.setState({ articles: articles.articles, loading: false });
  }

  async componentDidUpdate() {
    const { search } = this.state;
    const articles = await newsApi(search);
    this.setState({ articles: articles.articles, loading: false });
  }

  render() {
    const { articles, loading, search } = this.state;

    if(loading) return <h1>Loading...</h1>;

    return (

      <>

        <Search search={search}  onChange={this.handleChange} 
          handleSubmit={this.handleSubmit} />

        <ArticleList articles={articles} />

      </>
    );
  }
}
