//Import useState to capture customer selections and control form data.
import React, { useState } from 'react';

//Import react-calendar to create a ready-made interactive calendar.
import Calendar from 'react-calendar';

//Import useNavigate to redirect the user back to the Home page after booking.
import { useNavigate } from 'react-router-dom';

//Define variables for dropdown menus. These could be saved in MongoDB instead to make them updatable in a UI element.
const services = [
    'Haircut',
    'Hair Coloring',
    'Deep Conditioning',
    'Bridal Styling',
    'Event Styling'
];

const stylists = [
    'Emily Johnson',
    'Michael Lee',
    'Sarah Brown'
];

const Booking = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState(new Date())
    const [service, setService] = useState('')
    const [stylist, setStylist] = useState('')


//Handle form submission, preventing all default HTML actions.
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, date, service, stylist }),
    });

    //Tell the customer the booking was successful and redirect them back home.
    if (response.ok) {
        alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful. We will send an email to ${email} with available times.`);
        navigate('/');
    } else {
        alert('Booking failed. Please try again.');
    }
    };

    return (
        <div>
            <h2>Book Your Appointment</h2>
            <form onSubmit={handleSubmit}>
                {/* Name input */}
                <label htmlFor="name">Name: </label>
                <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required/>  

                {/* Email input */}
                <label htmlFor="email">Email: </label>
                <input 
                type="text" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required/>

                {/* Calendar */}
                <label htmlFor="date">Date:</label>
                <Calendar
                onChange={setDate}
                value={date}
                required
                />
                <p>Selected Date: {date.toLocaleDateString()}</p>

                {/* Service dropdown */}
                <label htmlFor="services">Services</label>
                <select name="service" id="service"
                value={service}
                onChange={(e) => setService(e.target.value)} required>
                    {/* In the dropdown, the 'select a service is disabled to help the user understand the functionality. We then use a map to dynamically go through the array of services from up top. */}
                    <option value="" disabled>Select a Service</option>
                    {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                    ))}
                </select>

                {/* Stylist dropdown */}
                <label htmlFor="stylist">Stylist</label>
                <select name="stylist" id="stylist"
                value={stylist}
                onChange={(e) => setStylist(e.target.value)}>
                {/* The same functionality as the services. */}
                    <option value="" disabled>Select a Stylist (optional)</option>
                    {stylists.map((stylist, index) => (
                        <option key={index} value={stylist}>{stylist}</option>
                    ))}                
                </select> 
                
                {/* Button */}
                <button type='submit'>Book</button>
            </form>
        </div>
    )
}

export default Booking;
