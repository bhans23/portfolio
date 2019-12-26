import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <div className='home'>
    <App />
    </div>
  </Router>,
  
  document.getElementById('root')
);
