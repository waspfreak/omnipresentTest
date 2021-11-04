import React from 'react';
import Form from './components/Form/Form'
import { Header } from './components/Header/Header'

function App() {
	return (
		<main data-testid="app-id">
			<Header label='Omnipresent' />
			<Form />
		</main>
	);
}
export default App;
