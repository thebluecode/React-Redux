import expect from 'expect';
import { authorsFormatedForDropDown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormatedForDropDown', () => {
        it('should return athor data formatted for use in a dropdown', () => {
            const authors = [
                { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
                { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' }
            ];

            const expected = [
                { value: 'cory-house', text: 'Cory House' },
                { value: 'scott-allen', text: 'Scott Allen' }
            ];

            expect(authorsFormatedForDropDown(authors)).toEqual(expected);
        });
    });
});