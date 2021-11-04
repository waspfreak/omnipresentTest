import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {InputField} from './Input';

describe('Button', () => {
	it('should render Button', () => {
		render(<InputField />);
		const element = screen.getByTestId('input-id');
	});
});
