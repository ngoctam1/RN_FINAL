import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasksData: taskReducer,
});

export default rootReducer;
