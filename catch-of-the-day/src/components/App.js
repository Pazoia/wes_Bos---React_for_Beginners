import React from "react";
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
import Fish from "./Fish.js";
import sampleFishes from "../sample-fishes.js";

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

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map((key) => (
                            <Fish key={key} details={this.state.fishes[key]} />
                        ))}
                    </ul>
                </div>
                <Order />
                {/* eslint-disable-next-line prettier/prettier */}
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;
