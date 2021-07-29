import React, { Component } from 'react';
import { newsApi } from '../services/newsAPI';
import ArticleList from '../components/news/ArticleList';

export default class NewsSearch extends Component {
  
  state = {
    loading: true,
    articles: {}
  };

  async componentDidMount() {
    const articles = await newsApi();
    this.setState({ articles: articles.articles, loading: false });
  }

  render() {
    const { articles, loading } = this.state;

    if(loading) return <h1>Loading...</h1>;

    return <ArticleList articles={articles} />;
  }
}
