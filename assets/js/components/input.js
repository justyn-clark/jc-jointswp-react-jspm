import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //alert('Text field value is: ' + this.state.value);
        console.log('Input is working');
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="edit me"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button className="button" onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}
export default Input