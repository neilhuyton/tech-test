import React from "react";
import SortLink from "./SortLink";
import * as types from "../actions/actionTypes";

const Sort = () => (
  <div>
    <span>Sort: </span>
    <SortLink sort={types.SORT_ASC} cssClass="sort-asc">
      Asc
    </SortLink>
    <SortLink sort={types.SORT_DESC} cssClass="sort-desc">
      Desc
    </SortLink>
  </div>
);

export default Sort;
