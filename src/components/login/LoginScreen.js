import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => setInputValue(e.target.value);

    const { dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        
        const lastPath = localStorage.getItem('lastPath') || '/';
        
        dispatch({
            type: types.login,
            payload: {
                name: inputValue
            }
        });

        history.replace(lastPath);
    };

    return (
        <div className='login card w-50 text-center ms-5 animate__animated animate__fadeIn text-white bg-dark'> 

            <div className='card-body'>

                <form className="container mt-3" onSubmit={ handleClick }>

                    <div className="input-group mb-3">

                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Your name" 
                            name="name"
                            onChange={ handleInputChange }
                            autoComplete="off"
                            autoFocus
                            required
                        />

                        <div className="input-group-append">
                            
                            <button 
                                className="btn btn-primary" 
                                type="submit">
                                    Login!
                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </div>
    )
}
