import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DCScreen = ({ publisher }) => {
    return (
        <div>

            <hr />
            
            <HeroList publisher='DC Comics' />
            
        </div>
    )
}
