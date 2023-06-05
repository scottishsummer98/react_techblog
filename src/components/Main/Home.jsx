import React, { Component } from 'react'
import ArticleShort from "../sub/ArticleShort";
import ArticleDetailed from "../sub/ArticleDetailed";
import techArticles  from "../../api/TechApi";

export class Home extends Component {
  state = {
      articles: techArticles,
      selectedArticle: null,
  }
  onArticleSelect = (i) => {
      this.setState({
        selectedArticle: techArticles[i]
      })
    }
  render() {
    document.title = "Tech React";
    
    
    const article = this.state.articles.map((article, index) => {
    return (
      <div key={index} onClick={() => this.onArticleSelect(index)}>
        <ArticleShort article={article} />
      </div>
    );
  });
    return (
      <div className="home_container">
      <div className="ArticleShort_container">{article}</div>
      <div>
        {this.state.selectedArticle ? (
          <ArticleDetailed selectedArticle={this.state.selectedArticle} />
        ) : null}
      </div>
    </div>
    )
  }
}

export default Home
