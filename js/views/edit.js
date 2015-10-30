import React from 'react';

export default React.createClass({

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  render() {
    return (
      <div>
        <h2>Edit</h2>
        <button onClick={this.cancelClickHandler}>Cancel</button>
      </div>
    );
  }

});