import _ from "lodash";

export function paginate(items, currentPage, PageSize) {
  const startIndex = (currentPage - 1) * PageSize;
  return _(items).slice(startIndex).take(PageSize).value();
}
