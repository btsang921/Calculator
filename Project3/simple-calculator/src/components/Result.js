import React, {Component} from 'react';

class ResultComponent extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
        );
    }
}


export default ResultComponent;