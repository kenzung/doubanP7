import React from 'react';
import {Link} from 'react-router-dom';
import './hotflow.less';

let HotFlowCell = (props) => {
    const borderStyle = {borderColor:props.color};
    const textStyle = {color:props.color};
    let normalCell = <li className="hot-flow-item" style={borderStyle}>
                        <Link to="/" style={textStyle} >{props.text}</Link>
                    </li>;
    let lineCell = <li className="line"></li>
    return props.text === '' ? lineCell : normalCell;
};

let HotFlow = (props) => {
    const tabarr = props.hotFLows;
    return (
        <section className="hot-flow">
            <h3 className="hot-flow-title">{props.title}</h3>
            <ul className="hot-flow-body">
                {tabarr.map((tabItem,index) =>(
                    <HotFlowCell color={tabItem.color} text={tabItem.text} key={tabItem.text + index}/>
                ))}
            </ul>
        </section>
    )
}

export default HotFlow;