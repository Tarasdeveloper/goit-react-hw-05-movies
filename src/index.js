import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Tarasdeveloper/goit-react-hw-05-movies/actions">
    <App />
  </BrowserRouter>
);
