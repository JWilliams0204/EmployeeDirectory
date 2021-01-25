import React from "react";
import "../app.css";

function SearchForm(props) {
    return (

        <div className = "form">
            <form>

                <div className = "input-group">
                    <input
                    onChange = {props.handleChange}
                    value = {props.search}
                    type = "text"
                    className = "form-control rounded"
                    placeholder = "Search for employee"
                    aria-label = "Search"
                    name = "Search"
                    />

                    <button type = "button" className = "btn-primary" id = "button">Search</button>
                    <input type = "reset" className = "btn-primary" id = "reset"></input>
                </div>
            </form>

        </div>
    )
}

export default SearchForm;