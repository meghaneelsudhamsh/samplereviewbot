import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './HomePage.css'; // Import CSS file for styles

const HomePage = () => {
    return (
        <div className="container">
            <h1 id='abc'>Welcome to Review Bot</h1>
            {/* <h1></h1> */}
            <br/>
            <br/>
            <br/>
            <br/>
            
            <Link to="/chatbot" className="button">Explore Our Review bot</Link>
        </div>
    );
}

export default HomePage;
