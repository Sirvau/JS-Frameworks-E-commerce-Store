import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`w-full py-2 bg-oak-brown text-light-beige rounded tracking-wide font-medium ${className}`} 
      onClick={onClick} 
    >
      {text}
    </button>
  );
};

export default Button;
