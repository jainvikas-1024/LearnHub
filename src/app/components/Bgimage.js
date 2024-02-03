// components/BackgroundImage.js
import React from 'react';

const Bgimage = ({ children }) => {
  return (
    <div className="background-image">
      {children}
      <style jsx>{`
        .background-image {
          background-image: url('/purplebackgroundai.jpg'); /* Adjust the path based on your image location */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: Arial, sans-serif;
          color: #fff; /* Text color on top of the background */
        }
      `}</style>
    </div>
  );
};

export default Bgimage;