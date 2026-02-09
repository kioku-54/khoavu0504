import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

// Disable browser scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Scroll to top on page load
window.scrollTo(0, 0);

render(<App />, document.getElementById('root'));
