import React from "react";

import './Tiles.css';


const QueueTile = ({ queueId, drinkId, name, cost }) => {
    return (
        <div className="d-flex flex-column queue">
            <button className="btn btn-primary" onClick={() => removeOrder(queueId)}>
            <span className="queueId">{queueId} - </span>
                <span className="queueName">{name}</span>
                <span className="drinkCost"> - {drinkId}</span>
            </button>
            <br />
        </div>
    );
};

function removeOrder(id) {
    fetch(`http://localhost:3001/queue/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((res) => {
            console.log(res)
            alert(res.message);
            window.location.reload();
        })
        .catch(err => {
            console.error(`Error: `, err);
            alert("Something went wrong. Please try again")
        });
}
export default QueueTile;