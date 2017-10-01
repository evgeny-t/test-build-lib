import React from 'react';
import { render } from 'react-dom';
import { renderDupa } from '../dupa/dist/bundle';

let d = document.createElement('div');
d.setAttribute('id', 'x');
document.body.appendChild(d);
renderDupa('x')
// render(<span>Hi!</span>, document.body);
