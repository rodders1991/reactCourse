import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = (props) => {
  const items = ['Port1', 'Port2']; 
  return (
    <div>
      <h2>My portfolio items</h2>
      { items.map(item => ( <Link key={item} to={`/portfolio/${item}`}>{item}</Link> )) }
    </div>
  );
};

export default Portfolio;
