// import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Admin from './pages/Admin.jsx';
import Booking from './pages/Booking.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Staff from './pages/Staff.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Router>
		<Routes>
			{/* The first Route will use the App component to hold the constants, Nav, Footer etc. Then we encapsulate the individual paths, Admin, Booking, Home, Services, Staff */}
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="staff" element={<Staff />} />
				<Route path="services" element={<Services />} />
				<Route path="booking" element={<Booking />} />
				<Route path="admin" element={<Admin />} />
			</Route>
		</Routes>
	</Router>
);
