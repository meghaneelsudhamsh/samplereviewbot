import React from 'react';
import Aboutusgif from './Aboutusgif'; // Assuming this is a component for displaying a GIF

const About = () => {
  return (
    <div>
      <img src="./images/aboutbg.jpg" alt="Background" className="background-img" />
      <div style={containerStyle}>
        <div style={boxStyle}>
          <div>
            <p>
              Welcome to <strong>ReviewBot</strong>, a cutting-edge hybrid application designed to assist users in analyzing and understanding product reviews with ease. 
              Leveraging the latest advancements in <strong>Generative AI</strong>, ReviewBot offers deep insights by interpreting user queries related to products and delivering comprehensive feedback.
            </p>
            <p>
              Powered by a robust <strong>product review dataset</strong>, our chatbot provides detailed, interactive, and valuable insights, enabling users to make informed decisions about their purchases. Whether you're researching a new gadget or comparing similar products, ReviewBot delivers clear, real-time information to enhance your experience.
            </p>
            <p>
              The core technologies behind ReviewBot include <strong>MERN stack</strong> for efficient full-stack web development and the integration of <strong>Generative AI</strong> to improve understanding and generate detailed responses based on product review analysis. This ensures that the chatbot continues to evolve and offer personalized feedback as more reviews are processed.
            </p>
            <p>
              Our goal is to create a user-friendly platform that transforms how users explore product reviews, making it simpler and more intuitive. With <strong>ReviewBot</strong>, understanding the pros and cons of any product has never been easier.
            </p>
          </div>
        </div>
        <Aboutusgif /> {/* Assuming this component displays a relevant GIF */}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  backgroundImage: 'url("Aboutsash.png")', // Adjust the background image path
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const boxStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the background color and transparency
  padding: '20px',
  maxWidth: '950px', // Adjust the maximum width of the box
  textAlign: 'center',
  borderRadius: '10px', // Add rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
};

const scrollableBoxStyle = {
  maxHeight: '250px', // Adjust the maximum height of the box
  overflowY: 'scroll',
};

export default About;
