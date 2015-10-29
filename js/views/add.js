import React from 'react';

export default React.createClass({

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  render() {
    return (
      <div>
        <h2>Add</h2>
        <button onClick={this.cancelClickHandler}>Back</button>
      </div>
    );
  }

});