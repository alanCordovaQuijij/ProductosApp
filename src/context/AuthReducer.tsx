import { Usuario } from "../interfaces/appInterfaces";

export interface AuthState {
    status: 'checking' | 'autenticated' | 'not-autenticated';
    token: string | null; 
    errorMessage: string;
    user: Usuario | null;

}

type AuthAction = 
| {type: 'signUp', payload: {token: string, user: Usuario}}
| {type: 'addError', payload: string}
| {type: 'removeError'}
| {type: 'notAuthenticated'}
| {type: 'logout'}


export const authReducer = (state: AuthState, action: AuthAction) : AuthState => {

    switch (action.type){
        case 'addError':
            return{
                ...state,
                user: null,
                status: 'not-autenticated',
                token: null,
                errorMessage: action.payload
            }

        case 'removeError':
            return{
                ...state,
                errorMessage: ''
            }
        
        case 'signUp':
            return{
                ...state,
                errorMessage: '',
                status: 'autenticated',
                token: action.payload.token,
                user: action.payload.user
            }

        case 'logout':
        case 'notAuthenticated':
            return{
                ...state,
                status: 'not-autenticated',
                token: null,
                user: null,
            }

        default:
            return state;
    }
}