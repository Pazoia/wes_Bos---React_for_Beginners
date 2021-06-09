import React from "react";
import { formatPrice } from "../helpers.js";

class Fish extends React.Component {
    render() {
        // eslint-disable-next-line no-unused-vars
        const { image, name, desc, price, status } = this.props.details;
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button type="submit">Add To Cart</button>
            </li>
        );
    }
}

export default Fish;
