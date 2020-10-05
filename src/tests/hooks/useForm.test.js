import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Tests in useForm', () => {

    const initialForm = {
        name: 'Xabi'
    };

    test('should return a form by default', () => {
        
        const { result } = renderHook(()=> useForm(initialForm));
        const [ values, handleInputChange, reset ] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    })

    test('should change the form values', () => {
        
        const { result } = renderHook(()=> useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'James'
                }
            });
        });

        const [ values ] = result.current;
        expect(values).toEqual({
            ...initialForm, 
            name: 'James'
        });

    })

    test('should reset the form', () => {
        
        const { result } = renderHook(()=> useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;

        act(()=> {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'James'
                }
            });
            reset();
        });

        const [ values ] = result.current;
        expect(values).toEqual(initialForm);

    })

})