import {render, screen, fireEvent} from '@testing-library/react';

import Form from './Form';

const handleSubmit = jest.fn();

describe('Form', () => {
	it('should have a Form', () => {
		render(<Form />);
		const element = screen.getByTestId('form-id');
	});

	it('should have input name-id', () => {
		render(<Form />);
		const element = screen.getByTestId('name-id');
		expect(element.value).toBe(''); // empty before
		fireEvent.change(element, {target: {value: 'test'}});
		expect(element.value).toBe('test');
	});

	it('should have input lastName-id', () => {
		render(<Form />);
		const element = screen.getByTestId('lastName-id');
		expect(element.value).toBe(''); // empty before
		fireEvent.change(element, {target: {value: 'last name'}});
		expect(element.value).toBe('last name');
	});

	it('should have input data-id', () => {
		render(<Form />);
		const element = screen.getByTestId('data-id');
		expect(element.value).toBe(''); // empty before
		fireEvent.change(element, {target: {value: '00/00/0000'}});
		expect(element.value).toBe('00/00/0000');
	});

	it('should have input holiday-id', () => {
		render(<Form />);
		const element = screen.getByTestId('holiday-id');
		expect(element.value).toBe(''); // empty before
		fireEvent.change(element, {target: {value: '23'}});
		expect(element.value).toBe('23');
	});
});
