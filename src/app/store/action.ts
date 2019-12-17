import {Action} from '@ngrx/store';
import {CartActionTypes} from './reducer';


export class AddProduct implements Action {
    readonly type = CartActionTypes.ADD_PRODUCT
    constructor(public payload: any){}
}


export class RemoveProduct implements Action {
    readonly type = CartActionTypes.REMOVE_PRODUCT
    constructor(public payload: any){}
}

export type CartActions = AddProduct | RemoveProduct