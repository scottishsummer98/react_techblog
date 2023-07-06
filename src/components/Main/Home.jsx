import React, { Component } from "react";
import TechArticleShort from "../sub/TechArticleShort";
import TechArticleDetailed from "../sub/TechArticleDetailed";
import Loading from "../sub/Loading";
import { connect } from "react-redux";
import {
  addComment,
  fetchTechArticles,
  fetchTechArticlesCommnets,
} from "../../redux/actionCreators";
import { Alert } from "reactstrap";
const mapStateToProps = (state) => {
  return {
    techArticles: state.techArticles,
    techArticlesComments: state.techArticlesComments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (articleId, comment, user) =>
      dispatch(addComment(articleId, comment, user)),
    fetchTechArticles: () => dispatch(fetchTechArticles()),
    fetchTechArticlesComments: () => dispatch(fetchTechArticlesCommnets()),
  };
};

export class Home extends Component {
  state = {
    selectedTechArticle: null,
  };
  onTechArticleSelect = (index) => {
    window.scrollTo(0, 0);
    this.setState({
      selectedTechArticle: this.props.techArticles.techArticles[index],
    });
  };
  componentDidMount() {
    this.props.fetchTechArticles();
    this.props.fetchTechArticlesComments();
  }
  render() {
    document.title = "Tech React";
    if (this.props.techArticles.isLoading) {
      return <Loading />;
    } else if (this.props.techArticles.errmsg != null) {
      return <Alert color="danger">{this.props.techArticles.errmsg}</Alert>;
    } else {
      const techarticle = this.props.techArticles.techArticles.map(
        (techArticle, index) => {
          return (
            <div key={index} onClick={() => this.onTechArticleSelect(index)}>
              <TechArticleShort techArticle={techArticle} />
            </div>
          );
        }
      );
      let techArticleDetail = null;
      if (this.state.selectedTechArticle != null) {
        const techArticleComments =
          this.props.techArticlesComments.techArticlesComments.filter(
            (comment) => {
              return comment.articleId === this.state.selectedTechArticle.id;
            }
          );
        techArticleDetail = (
          <TechArticleDetailed
            selectedTechArticle={this.state.selectedTechArticle}
            selectedTechArticleComments={techArticleComments}
            addComment={this.props.addComment}
            techArticlesCommentsisLoading={
              this.props.techArticlesComments.isLoading
            }
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
