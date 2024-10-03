import React from 'react';

const Button = ({ text, onClick, className, type }) => {
  return (
    <button type={type}
      className={`w-full py-2 bg-oak-brown text-light-beige rounded tracking-wide font-medium ${className}`} 
      onClick={onClick} 
    >
      {text}
    </button>
  );
};

export default Button;
