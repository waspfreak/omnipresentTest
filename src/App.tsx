import React from 'react';
import Form from './components/Form/Form'
import { Header } from './components/Header/Header'
import { AppStyle } from './style';



function App() {
	return (
		<div data-testid="app-id">
			<AppStyle>
				<Header label='Omnipresent' />
				<Form />
			</AppStyle>
		</div>
	);
}
export default App;
