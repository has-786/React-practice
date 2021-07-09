import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counterActions';

class Counter extends Component{
    constructor(props){
        super(props);
        this.addHandleClick = this.addHandleClick.bind(this);
        this.removeHandleClick = this.removeHandleClick.bind(this);
    }
    addHandleClick(e){
        e.preventDefault();
        this.props.add();
    }
    removeHandleClick(e){
        e.preventDefault();
        this.props.remove();
    }
    render() {
        return (
            <form>
                <h1>Counter Component</h1>
                <h3>Count: {this.props.count}</h3>
                <button className="btn btn-primary" 
                onClick={this.addHandleClick}>
                    +
                </button>
                <button className="btn btn-primary" 
                onClick={this.removeHandleClick}>
                    -
              </button>
            </form>
        );
    }
}
function mapStateToProps(state, ownProps){
    return {
        count: state.counterReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
    add: data => dispatch(counterActions.addCounter(data)),
    remove: data => dispatch(counterActions.removeCounter(data)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

