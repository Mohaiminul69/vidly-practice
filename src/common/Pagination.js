import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { onPageChange, currentPage, PageSize, itemsCount } = this.props;
    const pageCount = Math.ceil(itemsCount / PageSize);
    const pages = _.range(1, pageCount + 1);
    return (
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <button
              style={{ cursor: "pointer" }}
              onClick={() => onPageChange(page)}
              className="page-link"
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Pagination;
