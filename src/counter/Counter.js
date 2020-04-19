import React from 'react';
import {connect} from 'react-redux';
import { addCount, decCount, getRequest } from './counterActions';

const Counter = props => {
    return (
        <div style={{margin:'100px auto',width:'400px'}}>
            <h2>Count: {props.cnt}</h2>
            <button className="btn btn-danger"
            onClick={()=> props.dec()}>Dec</button>
            <button className="btn btn-success"
            onClick={()=>props.inc()}>Inc</button><br/>
            <button className="btn btn-primary"
            onClick={() => props.req()}>Get request</button>
        </div>
    )
}

const mapSateToProp = state => {
    return {
        cnt: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inc: () => dispatch(addCount()),
        dec: () => dispatch(decCount()),
        req: () => dispatch(getRequest())
    }
}
export default connect(mapSateToProp,mapDispatchToProps)(Counter);