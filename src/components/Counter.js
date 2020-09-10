import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions/index'




class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <p>
                    <button onClick={() => this.props.incrementCount()}>+</button>
                    <button onClick={() => this.props.decrementCount()}>-</button>
                </p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispathToProps = () => {
    return {
        incrementCount, //You can also change the key by type incrementCount: Count
        decrementCount
    }
}

export default connect(mapStateToProps, mapDispathToProps())(Counter)
