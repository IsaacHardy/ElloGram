import React from 'react';

export default React.createClass({

  detailsClickHandler() {
    this.props.onDetailsClick();
  },

  addClickHandler() {
    this.props.onAddClick();
  },

  processPictures(data) {
    return (
      <div key={data.objectId}>
        <img src={data.Url} className="main-pictures"/>
      </div>
    );
  },

  render() {
    return (
      <div>
        <h2>Pictures</h2>        
        <button onClick={this.detailsClickHandler}>{this.props.pictures.map(this.processPictures)}</button>
        <button onClick={this.addClickHandler}>Add</button>
      </div>
    );
  }

});