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

  render() {
      return (
          <Container>
              <Row>
                  <Column size="md-4">
                      <Card 
                      heading={this.state.result.Title || "Browse Movies"} >
                          {this.State.result.Title ? (
                              <MovieInformation
                              title={this.state.result.Title}
                              src={this.state.result.Poster}
                              director={this.state.result.Director}
                              genre={this.state.result.Genre}
                              released={this.state.result.Released}
                        />
                          ) : (
                              <h2>No Results</h2>
                          )}
                      </Card>
                  </Column>
                  <Column size="md-6">
                      <Card heading="Search">
                          <SearchBox
                           value={this.state.search}
                           handleInputChange={this.handleInputChange}
                           handleFormSubmit={this.handleFormSubmit}
                         />

                      </Card>
                  </Column>
              </Row>
          </Container>
      )
  }

  export default ImdbContainer;