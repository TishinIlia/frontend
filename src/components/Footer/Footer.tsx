import React, { FC } from 'react';

const Footer: FC = () => (
  <footer className="flex-grow-0 flex h-16 items-center bg-black">
    <div className="container  py-2">
      <span className="text-lg  text-white">
        Created by&nbsp;
        <a
          href="https://www.linkedin.com/in/tishin/"
          target="_blank"
          className="text-secondary text-xl font-medium"
          rel="noreferrer"
        >
          Ilya Tishin
        </a>
        &nbsp;special for&nbsp;
        <a href="https://rzero.com/" className="text-primary text-xl font-medium">
          RZero
        </a>
        .
      </span>
    </div>
  </footer>
);

export default Footer;
