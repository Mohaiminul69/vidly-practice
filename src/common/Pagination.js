import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link">1</button>
        </li>
      </ul>
    );
  }
}

export default Pagination;
