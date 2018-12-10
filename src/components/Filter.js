import React from "react";
import FilterLink from "./FilterLink";
import * as types from "../actions/actionTypes";

const Filter = () => (
  <>
    <span>Show: </span>
    <FilterLink filter={types.SHOW_ALL} cssClass="filter-all">
      All
    </FilterLink>
    <FilterLink filter={types.SHOW_AGE_RANGE} cssClass="filter-ageRange">
      Age Range
    </FilterLink>
    <FilterLink filter={types.SHOW_GENDER} cssClass="filter-gender">
      Gender
    </FilterLink>
    <FilterLink filter={types.SHOW_VISITORS} cssClass="filter-visitors">
      Visitors
    </FilterLink>
    {/* <FilterLink filter={types.SHOW_LOCATION} cssClass="filter-location">
      Location
    </FilterLink>
    <FilterLink filter={types.SHOW_DEVICE_TYPE} cssClass="filter-deviceType">
      Device Type
    </FilterLink>
    <FilterLink
      filter={types.SHOW_OPERATING_SYSTEM}
      cssClass="filter-operatingSystem"
    >
      Operating System
    </FilterLink> */}
  </>
);

export default Filter;
