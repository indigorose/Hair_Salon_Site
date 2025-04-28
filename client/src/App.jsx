// import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './pages/Nav';

const App = () => {
	return (
		<div>
			{/* The header will always be rendered, the main will be what ever the user selects using the Outlet. */}
			<header>
				<h1>The Mane Root Hair Salon</h1>
				<Nav />
			</header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	);
};

export default App;
