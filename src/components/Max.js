import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Max extends Component {
    render() {
        return (
            <div>
                <h1>Max: {Math.max(...this.props.counters)}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counters: state.counters
    }
}

export default connect(mapStateToProps)(Max)