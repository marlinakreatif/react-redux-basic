import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../action/post";

class ListPosts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    listPosts: state.listPosts,
  };
};

export default connect(mapStateToProps, { getPosts })(ListPosts);
