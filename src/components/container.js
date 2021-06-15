import React from 'react';
import { container } from './layout.module.css';

const Container = ({ children }) => {
  return (
    <div className={container}>
      {children}
    </div>
  );
}

export default Container;
