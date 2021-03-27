import React, { Component } from "react";
import "../styles/Search.css";

// Searching using props.search
function Search(props) {
  return (
    <form>
      <div className="inner-form mb-2">
        <div className="input-field">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            type="text"
            className="form-control text-truncate"
            placeholder="Search Name"
            id="search"
          />
        </div>
      </div>
    </form>
  );
}

export default Search;
