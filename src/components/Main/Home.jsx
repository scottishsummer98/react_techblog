import React, { Component } from "react";
import TechArticleShort from "../sub/TechArticleShort";
import TechArticleDetailed from "../sub/TechArticleDetailed";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    techArticles: state.techArticles,
  };
};

export class Home extends Component {
  state = {
    selectedTechArticle: null,
  };
  onTechArticleSelect = (i) => {
    window.scrollTo(0, 0);
    this.setState({
      selectedTechArticle: this.props.techArticles[i],
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
        <div className="ArticleShort_container">{techarticle}</div>
        <div>
          {this.state.selectedTechArticle ? (
            <TechArticleDetailed
              selectedTechArticle={this.state.selectedTechArticle}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
