import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="attribution">
        Coded by{' '}
        <a
          href="https://github.com/topratiksharma/rock-paper-scissors"
          target="_blank"
          rel="noreferrer"
        >
          Pratik Sharma
        </a>{' '}{' '}
        [
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/sharmapratik/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        ]
      </div>
    </footer>
  );
};

export default Footer;
