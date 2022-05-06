import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/index';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
console.log('store')
export type IState = ReturnType<typeof rootReducer>