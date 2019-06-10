import BreakingAlertMessage from './BreakingAlertMessage.jsx';
import CloseButton from './CloseButton.jsx';
import React from 'react';

class BreakingAlert extends React.Component {
  render() {
    return (
      <div className="breaking-alert">
      <BreakingAlertMessage />
      <CloseButton />
      </div>
    );
  }
}

export default BreakingAlert;
