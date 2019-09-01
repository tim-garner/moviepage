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

