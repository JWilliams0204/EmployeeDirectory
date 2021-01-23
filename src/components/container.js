import React, { Component } from "react";
import Col from "./col";
import Card from "./card";
import Wrapper from "./wrapper";
import Api from "../utils/Api";

class Container extends Component {

    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.firstEmployee()
    }

    
firstEmployee = () => {
    Api.getUsers()
    .then(res => 
        this.setState({result: res.data.results}))
        .catch(err => console.log(err));
};

handleInputChange = event => {

    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    });
};

handleformSubmit = event => {
    event.preventDefault();
    const filteredResults = this.state.result.filter(person => person.name.first.includes(this.state.search))
    console.log(this.state.search);
    this.setState({result: filteredResults});

}

clearSearch = event => {
    event.preventDefault();
    const clear = this.firstEmployee();
    return clear;
}

searchEmployee = (query) => {
    console.log(query)
    Api.getUsers(query)
    .then(res => this.setState({result: res.data.results}))
    .catch(err => console.log(err))
}

render() {
    return (
        <Wrapper>
        <div className = "container">

            <div className = "row">
                <col>
                <h2>Employee Directory</h2>

                </col>
            </div>
        </div> 
        <div className = "row">
           <col>
           <table className = "table">
               <thead>
                   <tr>
                       <th>Photo</th>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Phone</th>
                       <th>Email</th>
                   </tr>
               </thead>
               <tbody>{[...this.state.result].map((item) => (
                   <Card
                   picture = {item.picture.medium}
                   firstName = {item.name.first}
                   lastName = {item.name.last}
                   email = {item.email}
                   phone = {item.phone}
                   key = {item.key}
                   />
               ))}
                   </tbody>
           </table>
           </col>

        </div>
        </Wrapper>
    )
}

}

export default Container;