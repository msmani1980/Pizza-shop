import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import {cartReducer} from "./reducers/cartReducer";
import {authReducer} from "./reducers/authReducer";

export type RootState = ReturnType<typeof reducers>;

interface RootState1 {
    cart: {
        items: [
            {
                id: number,
                title:string,
                price: number,
                description: string,
                image: string,
                count: number
            }
        ],
        totalPrice: number
    },
    auth : {
        token: string | null,
        userId: string | null,
        isAuth : boolean
    }
}

let reducers = combineReducers({
    cart: cartReducer,
    auth: authReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;