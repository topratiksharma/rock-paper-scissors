import React, { useState } from 'react';
const Footer = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <footer className='footer'>
        <div class='attribution'>Coded by Pratik Sharma</div>
        <button className='rules' onClick={toggle}>
          Rules
        </button>
      </footer>
    </>
  );
};

export default Footer;
