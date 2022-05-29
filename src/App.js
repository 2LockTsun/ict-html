import React, { useEffect } from 'react';
import logo from './test.svg';
import './App.css';

function App() {
	useEffect(() => {
		document.title = 'My favourite ...';
	});
	return (
		<div className='App'>
			<h1>GM</h1>
		</div>
	);
}

export default App;
