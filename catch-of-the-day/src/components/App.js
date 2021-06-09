import React from "react";
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

    addFish = (fish) => {
        /* Updating state steps */
        // 1 - Take a copy of the existing state
        const fishes = { ...this.state.fishes };
        // 2 - Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3 - Set the new fishes object to state
        this.setState({ fishes });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;
