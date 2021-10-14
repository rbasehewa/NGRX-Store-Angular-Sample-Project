import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { registerAction } from "./actions";

const initialState: AuthStateInterface = {
    isSubmiting: false
}

const authReducer = createReducer(
    initialState, 
    on(
        registerAction,
        (state): AuthStateInterface =>({
        ...state,
        isSubmiting: true
        })
    )
)

export function reducers(state: AuthStateInterface, action: Action){
    return authReducer(state, action)
}