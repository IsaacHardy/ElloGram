import React from 'react';

export default React.createClass({

  backClickHandler() {
    this.props.onBackClick();
  },

  editClickHandler() {
    this.props.onEditClick();
  },

  render() {
    return (
      <div>
        <h2>Details</h2>
        <button onClick={this.backClickHandler}>Back</button>
        <button onClick={this.editClickHandler}>Edit</button>
      </div>
    );
  }

});