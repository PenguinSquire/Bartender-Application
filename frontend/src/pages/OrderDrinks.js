import DrinkTile from "../components/Tiles/drinkTile";
import { useState, useEffect } from "react";

function OrderDrink() {

    const [drinkList, setDrinkList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/drinks/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((res) => {
                setDrinkList(res)
            })
            .catch(err => {
                console.error(`Error: `, err);
            });
    }, []);
    let columnLength = drinkList.length / 3
    let columnOne = drinkList.slice(0, columnLength)
    let columnTwo = drinkList.slice(columnLength, columnLength*2)
    let columnThree = drinkList.slice(columnLength*2)
    console.log(drinkList)
    return (
        <div className="row">
            <div className="col-md-4">
                {columnOne.map(drink => (
                <DrinkTile
                    key={drink.drinkId}
                    id={drink.drinkId}
                    name={drink.drinkName}
                    cost={drink.drinkCost}
                    description={drink.drinkDescription}
                />
            ))}
            </div>
            <div className="col-md-4">
                {columnTwo.map(drink => (
                <DrinkTile
                    key={drink.drinkId}
                    id={drink.drinkId}
                    name={drink.drinkName}
                    cost={drink.drinkCost}
                    description={drink.drinkDescription}
                />
            ))}
            </div>
            <div className="col-md-4">
                {columnThree.map(drink => (
                <DrinkTile
                    key={drink.drinkId}
                    id={drink.drinkId}
                    name={drink.drinkName}
                    cost={drink.drinkCost}
                    description={drink.drinkDescription}
                />
            ))}
            </div>
            
        </div>
    );;
}
export default OrderDrink;