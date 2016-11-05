import React from 'react';

class Textarea extends React.Component {
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
        alert('Textarea value is: ' + this.state.value);
    }

    render() {
        return (
            <div>
        <textarea
            name="description"
            value={this.state.value}
            onChange={this.handleChange}
        />
                <br />
                <button className="button" onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}
export default Textarea