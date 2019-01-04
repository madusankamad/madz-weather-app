import { createStore, applyMiddleware,compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../_reducers'


export default function configureStore(preloadedState) {
    const middlewares = [thunk, reduxImmutableStateInvariant(),logger];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);


    return store
}

