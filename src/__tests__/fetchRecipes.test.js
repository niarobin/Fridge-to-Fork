// src/__tests__/fetchRecipes.test.js

import { fetchRecipes } from '../utils/fetchRecipes';
import fetchMock from 'jest-fetch-mock';

// Enable fetch mocking
fetchMock.enableMocks();

describe('fetchRecipes function', () => {
    beforeEach(() => {
        fetchMock.resetMocks(); // Reset mocks before each test
    });

    it('returns a list of recipes', async () => {
        // Mock the response of fetch('/full_format_recipes.json')
        fetchMock.mockResponse(JSON.stringify([
            { id: 1, title: 'Mock Recipe 1', ingredients: ['Ingredient A', 'Ingredient B'] },
            { id: 2, title: 'Mock Recipe 2', ingredients: ['Ingredient C', 'Ingredient D'] },
            // Add more mock recipes as needed
        ]));

        const recipes = await fetchRecipes();
        expect(recipes).toBeDefined(); // Example assertion
    });
});
