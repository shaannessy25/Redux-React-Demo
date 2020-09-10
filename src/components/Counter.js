import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions/index'




class Counters extends Component {
    renderCounters(){
        return this.props.counters.map((value, i) => {
            return (
                <div>
                    <h1>{value}</h1>
                    <p>
                        <button onClick={() => this.props.incrementCount(i)}>+</button>
                        <button onClick={() => this.props.decrementCount(i)}>-</button>
                    </p>
                </div>                
            )
        })
    }


    render() {
        return (
            <div>
                {this.renderCounters()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        counters: state.counters
    }
}

const mapDispathToProps = () => {
    return {
        incrementCount, //You can also change the key by type incrementCount: Count
        decrementCount
    }
}

export default connect(mapStateToProps, mapDispathToProps())(Counters)
