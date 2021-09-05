import React, { useState } from 'react';
const Footer = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <footer className='footer'>
        <div className='attribution'>Coded by Pratik Sharma</div>
      </footer>
    </>
  );
};

export default Footer;
