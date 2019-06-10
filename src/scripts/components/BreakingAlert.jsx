import BreakingAlertMessage from './BreakingAlertMessage.jsx';
import CloseButton from './CloseButton.jsx';
import React from 'react';

export default class BreakingAlert extends React.Component {
  render() {
    return (
      <div className="breaking-alert">
        <BreakingAlertMessage />
        <CloseButton />
      </div>
    );
  }
}
