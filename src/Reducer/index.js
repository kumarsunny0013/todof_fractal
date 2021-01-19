import reduceReducers from 'reduce-reducers';

import InitialState from './InitialState';
import TodoReducer from './TodoReducer';


const AppReducer = reduceReducers(InitialState, TodoReducer);

export default AppReducer;
