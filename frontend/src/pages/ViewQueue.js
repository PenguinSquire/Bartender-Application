import QueueTile from "../components/Tiles/queueTile";
import { useState, useEffect } from "react";

function ViewQueue() {

    const [queueList, setQueueList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/queue/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((res) => {
                setQueueList(res)
            })
            .catch(err => {
                console.error(`Error: `, err);
            });
    }, []);
    console.log(queueList)
    return (
        <div className="column">
                {queueList.map(order => (
                    <QueueTile
                        key={order.queueID}
                        queueId={order.queueID}
                        drinkId={order.drinkID}
                        name={order.drinkName}
                        cost={order.drinkCost}
                    />
                ))}
        </div>
    );;
}
export default ViewQueue;