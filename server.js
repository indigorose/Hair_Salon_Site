const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
	.connect(`${process.env.MONGO_URI}`)
	.then(() => {
		console.log('Connection Successful');
	})
	.catch((error) => {
		console.error('Error', error);
	});

// Schemas and Models
const BookingSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	date: { type: Date, required: true },
	service: { type: String, required: true },
	stylist: { type: String, required: false },
});

const Booking = mongoose.model('Booking', BookingSchema);

// Routes

// Fetching data
app.get('/api/bookings', async (req, res) => {
	try {
		const bookings = await Booking.find().sort({ date: 1 });
		res.json(bookings);
	} catch (error) {
		console.error('Error fetching bookings:', error);
		res.status(500).json({ message: 'Error fetching bookings' });
	}
});

// Posting data
app.post('/api/bookings', async (req, res) => {
	try {
		const { name, email, date, service, stylist } = req.body;
		const newBooking = new Booking({ name, email, date, service, stylist });
		await newBooking.save();
		res.json(newBooking);
	} catch (error) {
		console.error('Error saving booking:', error);
		res.status(500).json({ message: 'Error saving booking' });
	}
});

app.listen(PORT, () =>
	console.log(`Server started on port ${PORT}, may the server be with you :)`)
);
