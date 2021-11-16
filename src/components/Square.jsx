import React from 'react';
import './Square.css';
import { useDispatch } from 'react-redux';

export function Square(props) {
    const dispatch = useDispatch();
    
    return (
        <div onClick={() => {
            dispatch({
                type: 'boardClick',
                x: props.x,
                y: props.y,
            })
        }
        } id="square">
            {props.symbol}
        </div>);
}
