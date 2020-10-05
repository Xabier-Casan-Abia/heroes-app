import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
    
    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId])

    if(!hero) return <Redirect to="/" />

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        superhero,
        publisher,
        alter_ego,
        characters,
        first_appearance
    } = hero;

        return (
            <div className="row mt-5">

                <div className="col-4">

                    <img 
                        src={ `../assets/heroes/${ heroId }.jpg` }
                        alt={ superhero }
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />

                </div>
    
                <div className="col-8 animate__animated animate__fadeIn">

                    <h3 className='p-3 mb-2 bg-dark text-white'> { superhero } </h3>
                    <ul className="list-group list-group-flush">

                        <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                        <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                        <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                        <li className="list-group-item">
                            <h5> Character names: </h5>
                            <p> { characters } </p>
            
                            <button 
                                className="btn btn-outline-info"
                                onClick={ handleReturn }>
                                Return
                            </button>
                            </li>
                            
                    </ul>

                </div>

            </div>
    )
}
