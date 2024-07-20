import React from 'react'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* The header will always be rendered, the main will be what ever the user selects using the Outlet. */}
      <header>
        <h1>The Mane Root Hair Salon</h1>
        <nav>
          <a href="/">Home</a> | <a href="/staff">Staff</a> | <a href="/services">Services</a> | <a href="/booking">Booking</a> | <a href="/admin">Admin</a>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </div>
  )
}

export default App