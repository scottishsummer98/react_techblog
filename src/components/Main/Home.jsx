import React, { Component } from "react";
import TechArticleShort from "../sub/TechArticleShort";
import TechArticleDetailed from "../sub/TechArticleDetailed";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    techArticles: state.techArticles,
    techArticlesComments: state.techArticlesComments,
  };
};

export class Home extends Component {
  state = {
    selectedTechArticle: null,
  };
  onTechArticleSelect = (index) => {
    window.scrollTo(0, 0);
    this.setState({
      selectedTechArticle: this.props.techArticles[index],
    });
  };
  render() {
    document.title = "Tech React";
    const techarticle = this.props.techArticles.map((techArticle, index) => {
      return (
        <div key={index} onClick={() => this.onTechArticleSelect(index)}>
          <TechArticleShort techArticle={techArticle} />
        </div>
      );
    });
    let techArticleDetail = null;
    if (this.state.selectedTechArticle != null) {
      const techArticleComments = this.props.techArticlesComments.filter(
        (comment) => {
          return comment.articleId === this.state.selectedTechArticle.id;
        }
      );
      techArticleDetail = (
        <TechArticleDetailed
          selectedTechArticle={this.state.selectedTechArticle}
          selectedTechArticleComments={techArticleComments}
        />
      );
    }
    return (
      <div className="home_container">
        <div className="techArticleShort_container">{techarticle}</div>
        <div>{techArticleDetail}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
