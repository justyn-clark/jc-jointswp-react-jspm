import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'B'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Select value is: ' + this.state.value);
    }

    render() {
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>
                <button className="button" onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

export default Select