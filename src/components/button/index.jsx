import React from 'react';

const Button = ({ text, onClick, className, type }) => {
  return (
    <button type={type}
      className={`w-full py-2 bg-dark-brown text-light-beige rounded tracking-wide font-medium hover:bg-button-hover duration-700 ${className}`} 
      onClick={onClick} 
    >
      {text}
    </button>
  );
};

export default Button;
