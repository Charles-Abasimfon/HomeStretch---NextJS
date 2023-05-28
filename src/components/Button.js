import React from 'react';
// import '../styles/globals.css';

const Button = ({ onClick, value, className}) => {

  return (
    <button onClick={onClick} className={className}>
      {value}
    </button>
  );
};

export default Button;