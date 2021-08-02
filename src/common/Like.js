import React, { Component } from "react";

class Like extends Component {
  render() {
    const { liked, onLike } = this.props;
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";
    return (
      <i style={{ cursor: "pointer" }} onClick={onLike} className={classes}></i>
    );
  }
}

export default Like;
