import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Tests in authReducer', () => {
    
    test('should return state by default', () => {
        
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });

    })

    test('should authenticate a new user name and set logged to true', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Hernando'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({ 
            logged: true,
            name: 'Hernando'
        });

    })

    test('should delete current user and set logged to false', () => {
        
        const action = {
            type: types.logout
        }

        const state = authReducer({ logged: true, name: 'Pedro' }, action);
        expect( state ).toEqual({ logged: false });

    })
    

})
