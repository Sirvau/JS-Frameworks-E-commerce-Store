import React from 'react';
import Logo from '../header/logo';
import NavFooter from './nav-footer';
import SomeLinks from './some-links';
import Copyright from './copyright';



function Footer() {
  return (
    <footer className=" py-8 mt-52">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <Logo/>
        <NavFooter/>
        <SomeLinks/>
      </div>
      <hr />
      <Copyright/>
    </footer>
  );
}

export default Footer;
