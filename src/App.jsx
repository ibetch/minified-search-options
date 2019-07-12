import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');

const App = () => {
  return (
    <div>
      <h1 style={{ 'textAlign': 'center'}}>Hello World :) </h1>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(
    <App />, rootEl
  );
}

renderApp();

// Check for local changes and automatically refresh the browser
if (module.hot) {
  module.hot.accept('./components/App.jsx', () => renderApp());
}