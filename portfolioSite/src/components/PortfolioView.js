import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioView = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <h1>A thing I've done</h1>
      <p>This is item {id}</p>
    </div>
  );
};

export default PortfolioView;
