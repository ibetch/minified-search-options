import React from 'react';
import ReactDOM from 'react-dom';
import SearchVariants from './components/SearchVariants';
import './scss/global';

const rootEl = document.getElementById('root');

const App = () => {
  return (
    <div>
      <SearchVariants />
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