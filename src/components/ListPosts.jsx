import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../action/post";

class ListPosts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderListPosts = () => {
    const { listPosts } = this.props;
    console.log(listPosts);
    return listPosts.map((post) => {
      return (
        <div className="card" key={post.id}>
          <div className="card-header">{post.userId}</div>
          <div className="card-boy" style={{ padding: "10px" }}>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <h4>Daftar Posting</h4>
        </div>
        <div className="col-12">{this.renderListPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listPosts: state.listPosts,
  };
};

export default connect(mapStateToProps, { getPosts })(ListPosts);
