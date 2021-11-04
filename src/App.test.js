import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('should have a Form', () => {
		render(<App />);
		const element = screen.getByTestId('app-id');
	});
	
});
