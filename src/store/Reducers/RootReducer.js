import { combineReducers } from 'redux';
import shipmentReducer from './ShipmentReducer';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers ({
    shipmentReducer,
    loginReducer
});

export default rootReducer;