import React from 'react';
import ReactDOM from 'react-dom';

export const Dupa = props => {
  return <div>Dupa!</div>;
};

export const renderDupa = id => {
  ReactDOM.render(<Dupa />, document.getElementById(id));
};

