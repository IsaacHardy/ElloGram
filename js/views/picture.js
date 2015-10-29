import React from 'react';

export default React.createClass({

  detailsClickHandler() {
    this.props.onDetailsClick();
  },

  addClickHandler() {
    this.props.onAddClick();
  },

  


  render(str) {
    return (
      <div>
        <h2>Pictures</h2>
        <div></div>
        <div className="pictures-container">
          <button onClick={this.detailsClickHandler}>Details</button>
        </div>
        <button onClick={this.addClickHandler}>Add</button>
      </div>
    );
  }

});