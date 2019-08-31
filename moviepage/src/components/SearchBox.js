import React from "react";

function SearchBox(props) {
    return (
        <form>
            <div className="forms">
                <label htmlFor="search">Search Movies</label>
                <input 
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="forms"
                placeholder="Browse for Movies"
                id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchBox;