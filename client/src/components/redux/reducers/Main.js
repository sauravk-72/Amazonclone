import {getProductsreducer} from "./Productsreducer";
import {combineReducers} from "redux";
//created a common object root reducer from where we will combine all reducers..we can store here all reducers
const rootreducers = combineReducers({
    getproductsdata:getProductsreducer
});


export default rootreducers;