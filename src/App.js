import React from 'react';
import './App.css';
import {TextField} from '@material-ui/core'

class App extends React.Component {

    calculate = (value) => {
        let output = value;
        return output;
    };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        this.setState({
            value: this.calculate(event.target.value)
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">Hackathon App</header>
                <TextField id="input" variant="filled" type="number" label="Input" onChange={this.onChange}/>
                <TextField id="output" variant="outlined" readOnly={true} value={this.state.value}/>
            </div>
        )
    };
}

export default App;
