import React from 'react' ;
import {createStore} from 'react';
import {reduccer} from '../../reducers/reducer';

let store = createStore(reduccer);
store.getState()
store.dispatch(action);
const id = store.subscribe(func);
store.unsubscribe(id);





