import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please Enter a Name</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store →</button>
            </form>
        );
    }
}

export default StorePicker;

/*
    In order to add sibling elements to be rendered
    in a render function, add a set of empty angle brackets
    and put all the elements inside them.

    Example:
    return (
        <>
            <p>This is to show how to add multiple sibling</p>
            <p>elements to a render method</p>
            <h2 className="name">My name is Paulo</h2>
            <form className="store">
                <h2>Please Enter a Name</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store →</button>
            </form>
        </>
        );
*/
