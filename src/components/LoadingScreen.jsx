import React, { Fragment } from 'react';
import loaderIcon from '../assets/loading.gif';

const LoadingScreen = () => (
  <Fragment>
    <img src={loaderIcon} alt="loading" className={`loading-icon`} />
  </Fragment>
);

export default LoadingScreen;