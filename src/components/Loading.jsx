import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = ({ visible }) => {
  return (
    <div className={visible ? 'loading active' : 'loading'}>
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  );
};

export default Loading;
