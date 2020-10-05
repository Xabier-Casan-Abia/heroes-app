import React from 'react';
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Tests in <HeroScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }
    
    test('should redirect if there is no hero in the URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ history } />
            </MemoryRouter>
        );

        expect(wrapper.find('Redirect').exists()).toBe(true);

    });

    test('should show a hero if finds it and it exists', () => {      

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ HeroScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe(true);
        
    });

    test('should use history.push(./)', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();

    });

    test('should use history.goBack()', () => {      

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-green']}>
                <Route 
                    path="/hero/:heroId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        
        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalled();

    })

    test('should call Redirect if a the hero does not exist', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider-fake']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
        expect( wrapper.text() ).toBe('');
                
    })
    
})
