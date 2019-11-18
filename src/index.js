import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import 'normalize.css';
import AppTechPresentation from './app-tech-presentation';
import './stylesheet.css';




const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <AppTechPresentation />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./app-tech-presentation', () => {
    const NextPresentation = require('./app-tech-presentation').default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
