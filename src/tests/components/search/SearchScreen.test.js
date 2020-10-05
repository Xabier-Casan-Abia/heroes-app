import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';


describe('Tests in <SearchScreen />', () => {

    test('should render the component correctly with default values', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
    })

    test('should show a hero by giving a queryString', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Green%20Lantern']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('Green Lantern');
        expect( wrapper ).toMatchSnapshot();

    })

    test('should show an error message if it does not find a hero', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim() ).toBe('There are no heroes with batman123');
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('should call history.push()', () => {

        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={ history } /> } 
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
            });

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`);

    })
    
})
