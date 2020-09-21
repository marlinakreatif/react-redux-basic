import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPostsWithUser } from "../action";
import UserName from "./UserName";

class ListPosts extends Component {
  componentDidMount() {
    this.props.getPostsWithUser();
  }

  renderListPosts = () => {
    const { listPosts } = this.props;
    return listPosts.map((post) => {
      return (
        <div className="card" key={post.id}>
          <div className="card-header">
            <UserName userId={post.userId} />
          </div>
          <div className="card-boy" style={{ padding: "10px" }}>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
          <div className="card-footer">
            <Link to={`/detail-post/${post.id}`}>
              <button className="btn btn-primary">Detail Post</button>
            </Link>
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

export default connect(mapStateToProps, { getPostsWithUser })(ListPosts);
