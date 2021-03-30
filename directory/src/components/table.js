import React, { Component } from "react";
import logo from '../logo.svg';
import "../styles/Table.css";
import API from "../utils/API";
import Row from "./Row";
import Search from "./Search";

class Table extends Component {
  state = {
    loading: true,
    employees: [],
    filteredE: [],
    error: "",
    search: "",
    sortDirection: "asc",
  };

  // When the component mounts, API loads
  componentDidMount() {
    API.getEmployees()
      // .then((res) => console.log({ employees: res }))
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredE: res.data.results,
          loading: false,
        })
      )
      .catch((err) => console.log(err));
  }

  filter = (event) => {
    this.setState((prev) => ({
      ...prev,
      search: event.target.value,
      filteredE: prev.employees.filter((e) => {
        return (
          e.name.first
            .toUpperCase()
            .includes(event.target.value.toUpperCase()) ||
          e.name.last.toUpperCase().includes(event.target.value.toUpperCase())
        );
      }),
    }));
    // console.log(event.target.value);
  };

  // sort =  takes in value to sort by
  sort = (property) => {
    //change state of filtered list + look up array.sort
    let sortedList;
    let direction;
    // Sort by last name or first name
    switch (property) {
      case `name`:
        if (this.state.sortDirection === "asc") {
          sortedList = this.state.filteredE.sort((a, b) =>
            a.name.first > b.name.last ? 1 : -1
          );
          direction = "dsc";
        } else {
          sortedList = this.state.filteredE.sort((a, b) =>
            a.name.first < b.name.last ? 1 : -1
          );
          direction = "asc";
        }
        break;
      default:
    }
    this.setState({
      filteredE: sortedList,
      sortDirection: direction,
    });
  };

  render() {
    return (
      <div>
        {this.state.loading || !this.state.employees ? (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Loading...</div>
          </>
        ) : (
          <div>
            <Search
              search={this.state.search}
              handleInputChange={this.filter}
            />
            <table className="highlight centered">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <button className="btn" onClick={() => this.sort("name")}>Name</button>
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                    Phone
                  </th>
                </tr>
              </thead>

              <tbody>
                {this.state.filteredE.map((employee) => {
                  return <Row employee={employee} />;
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  apiEmployee = async () => {
    const apiResponse = await API.getAllEmployees();

    this.setState({
      employees: apiResponse.data.results,
    });
  };
}

export default Table;
