import { createStore, compose, applyMiddleware } from 'redux';
import rootRecuer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};
const middleWare = [thunk];

const store = createStore(
    rootRecuer,
    initialState,
    compose(
        applyMiddleware(...middleWare)
    )
)
export default store;
