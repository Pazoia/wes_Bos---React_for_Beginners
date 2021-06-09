import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        // 1 - Stop form from submitting
        event.preventDefault();
        // 2 - Get the text from input
        const storeName = this.myInput.current.value;
        // 3 - Change the page to /store/whatever-is-entered
        this.props.history.push(`/store/${storeName}`);
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Name</h2>
                {/* eslint-disable-next-line prettier/prettier */}
                <input 
                    type="text"
                    ref={this.myInput}
                    required placeholder="Store Name"
                    defaultValue={getFunName()}
                />
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
