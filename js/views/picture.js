import React from 'react';

export default React.createClass({

  detailsClickHandler() {
    this.props.onDetailsClick();
  },

  addClickHandler() {
    this.props.onAddClick();
  },

  render() {
    return (
      <div>
        <h2>Pictures</h2>
        <button onClick={this.detailsClickHandler}>Details</button>
        <button onClick={this.addClickHandler}>Add</button>
      </div>
    );
  }

});