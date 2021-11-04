import React from 'react';
import { Form } from './components/Form/Form'
import { AppStyle } from './style';


function App() {
	return (
		<div data-testid="app-id">
			<AppStyle>
				<Form />
			</AppStyle>
		</div>
	);
}
export default App;
