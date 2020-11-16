import React from 'react';
import store from 'redux';
import action from '../actions/actions1';

function reduccer(state = initialState, action) {
    switch (action.type) {
        case 1:
            return {
                ...state,
                what: action.filter
            }
        default: 
        return state;
    }
}

let store = Redux.createStore(reduccer);