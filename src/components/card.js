import React from "react";

function Card(props) {

    return(

        <tr>
            <th>
                <img alt={props.firstName} src = {props.picture} />
            </th>

            <td>{props.firstName} {props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.city}</td>
            <td>{props.phone}</td>
        </tr>
    );
}

export default Card;