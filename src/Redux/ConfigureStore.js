import { createStore, combineReducers } from 'redux';
import weatherReducer from './Reducers';

const rootReducer = combineReducers(
{ weather: weatherReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;