import React, { Component } from 'react';

class Body extends Component {
    render () {
        return (
            <form>
                <label>Input Label
                    <input type="text" placeholder=".small-12.columns" aria-describedby="exampleHelpText" />
                </label>
                <p className="help-text" id="exampleHelpText">Here's how you use this input field!</p>
                <label>
                    How many puppies?
                    <input type="number" defaultValue={100} />
                </label>
                <label>
                    What books did you read over summer break?
                </label>
            </form>
        )
    }
}
export default Body

