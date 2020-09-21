import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostById } from "../action/post";

class DetailPost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPostById(id);
  }

  render() {
    const { post, users } = this.props;
    if (!post) {
      return <span>Loading...</span>;
    }

    if (users.length === 0) {
      return null;
    }
    const user = users.find((user) => {
      return user.id === post.userId;
    });
    return (
      <div className="card">
        <div className="card-header">{post.title}</div>
        <div className="card-body">
          <p className="card-text">{post.body}</p>
        </div>
        <div className="card-footer">
          <div>
            <h5>By : {user.name}</h5>
            <h6>Email : {user.email}</h6>
            <h6>City : {user.address.city}</h6>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    users: state.users,
  };
};

export default connect(mapStateToProps, { getPostById })(DetailPost);
