import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserById } from "../action/users";

class UserName extends Component {
  componentDidMount() {}

  render() {
    const { user } = this.props;
    if (!user) {
      return <div>-</div>;
    }
    return (
      <div>
        <span>{user.name}</span>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find((user) => user.id === props.userId),
  };
};

export default connect(mapStateToProps, { getUserById })(UserName);
