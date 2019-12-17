import { CartActions } from "./action";

export enum CartActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

export let intialState = [];

export function reducer(state=intialState, action:CartActions) {
    switch(action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return [...state,action.payload]
        case CartActionTypes.REMOVE_PRODUCT: 
            let product  = action.payload
            return state.filter((el)=>el.id !== product.id)
        default: 
            return state;
    }
}
