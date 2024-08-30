import React from "react";

import './Tiles.css';

let orderNumber = 0;

const DrinkTile = ({ id, name, description, cost }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-content-center">
            <button className="btn btn-primary" onClick={() => addOrder(id, name, cost)}>
                <span className="drinkName">{name}</span>
                <span className="drinkCost"> - ${cost}</span>
                <br />
                <p className="drinkDescription">{description}</p>
            </button>
        </div>
    );
};

function addOrder(id, name, cost) {
    //console.log(id)
    //console.log(cost)
    fetch('http://localhost:3001/queue/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            drinkId: id,
            drinkName: name,
            totalCost: cost,
            customerName: "ME"
        })
    })
        .then((response) => response.json())
        .then((res) => {
            console.log(res)
            alert(res.message);
        })
        .catch(err => {
            console.error(`Error: `, err);
            alert("Something went wrong. Please try again")
        });
}
export default DrinkTile;