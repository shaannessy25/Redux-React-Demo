import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Min extends Component {
    render() {
        return (
            <div>
                <h1>Min: {Math.min(...this.props.counters)}</h1>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        counters: state.counters
    }
}

export default connect(MapStateToProps)(Min)
