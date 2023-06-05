import React, { Component } from 'react'
import ArticleShort from "../sub/ArticleShort";
import ArticleDetailed from "../sub/ArticleDetailed";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export class Home extends Component {
  state = {
      selectedArticle: null,
  }
  onArticleSelect = (i) => {
      this.setState({
        selectedArticle: this.props.articles[i]
      })
    }
  render() {
    document.title = "Tech React";
    
    
    const article = this.props.articles.map((article, index) => {
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

export default connect(mapStateToProps)(Home)
