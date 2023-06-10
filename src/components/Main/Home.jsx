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
    selectedTechArticleComments: null,
  };
  onTechArticleSelect = (i) => {
    window.scrollTo(0, 0);
    this.setState({
      selectedTechArticle: this.props.techArticles[i],
      selectedTechArticleComments: this.props.techArticlesComments.filter(
        (comment) => comment.articleId === this.props.techArticles[i].id
      ),
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
    return (
      <div className="home_container">
        <div className="techArticleShort_container">{techarticle}</div>
        <div>
          {this.state.selectedTechArticle ? (
            <TechArticleDetailed
              selectedTechArticle={this.state.selectedTechArticle}
              selectedTechArticleComments={
                this.state.selectedTechArticleComments
              }
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
