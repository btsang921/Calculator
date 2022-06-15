import React, { Component } from 'react';
import './Calculator.css';
import Result from './Result';
import KeyPad from "./KeyPad";

let evaluated = false;

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: ""
        }
    }
    onClick = (button) => {
        if (button === "=") {
            if (this.state.result.includes('//')) {
                this.setState({result: "error"})
            } if (this.state.result.includes('**')) {
                this.setState({result: "error"})
            } if (this.state.result.includes('++')) {
                this.setState({result: "error"})
            } else if (this.state.result.includes('--')){
                let answer = this.state.result.replace('--', '+')
                try {
                    this.setState({result: eval(answer)})
                } catch(error) {
                    this.setState({result: "error"})
                } finally {
                    evaluated = true
                }
            } else {
                try {
                    this.setState({result: eval(this.state.result)})
                } catch(error) {
                    this.setState({result: "error"})
                } finally {
                    evaluated = true
                }
            }
        }
        else if (button === "C") {
            this.setState({result: ""})
        }
        else if (button === "CE") {
            if (this.state.result != "") {
                this.setState({result: this.state.result.substring(0, this.state.result.length - 1)})
            }
        }
        else {
            if (evaluated) {
                this.setState({result: button})
                evaluated = false;
            } else {
                this.setState({result: this.state.result + button})
            }
        }
    }


    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Basic Calculator</h1>
                    <Result result = {this.state.result}/>
                    <KeyPad onClick = {this.onClick}/>
                </div>
            </div>
        );
    }
}

export default Calculator;