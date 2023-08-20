import changeTheNumber from "./upDown";
import allProduct from "./allProducts";
import changeValue from "./incdec";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    changeTheNumber,
    allProduct,
    changeValue
})

export default rootReducer;