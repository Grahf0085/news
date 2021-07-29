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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  async componentDidMount() {
    const articles = await newsApi();
    this.setState({ articles: articles.articles, loading: false });
  }

  render() {
    const { articles, loading, search } = this.state;

    if(loading) return <h1>Loading...</h1>;

    return (

      <>

        <Search search={search}  onChange={this.handleChange}/>

        <ArticleList articles={articles} />

      </>
    );
  }
}
