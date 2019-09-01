import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import Card from "./Card";
import SearchBox from "./SearchBox";
import MovieInformation from "./MovieInformation";
import API from "../utils/API";

class ImdbContainer extends Component {
    state = {
        result: {},
        search: ""
    }
};

componentDidMount() {
    this.searchMovies("Tommy Boy");
}

searchMovies = query => {
    API.search(query)
    .then(res => this.setState({ result: res.data}))
    .catch(err => console.log(err));
};

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.SetState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  