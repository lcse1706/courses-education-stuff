import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
})

export default reducers;

//to specify useSelector type
export type RootState = ReturnType<typeof reducers>;