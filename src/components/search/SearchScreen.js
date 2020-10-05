import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    const [ formValues, handleInputChange ] = useForm({ searchText: q });
    const { searchText } = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>

            <div className='card text-center ms-3 animate__animated animate__fadeIn text-white bg-dark mb-3'>

                <div className='card-body'>

                    <form className="container mt-3" onSubmit={ handleSearch }>

                         <div className="input-group mb-3">

                            <input 
                                type="text"
                                placeholder="Hero name"
                                className="form-control"
                                name="searchText"
                                autoComplete="off"
                                value={ searchText }
                                onChange={ handleInputChange }
                            />

                            <div className="input-group-append">

                                <button 
                                    className="btn btn-primary" 
                                    type="submit">
                                        Search!
                                </button>

                            </div>

                        </div>

                    </form>     
                    
                </div>

            </div>

            { 
                (q !=='' && heroesFiltered.length === 0 ) 
                    && 
                    <div className="alert alert-danger">
                        There are no heroes with { q }
                    </div>
            }

            <div className='card-columns'>
                
                {
                    heroesFiltered.map( hero => (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />
                    ))
                }

            </div>
                
        </div>
    )
}
