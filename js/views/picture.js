import React from 'react';
import ReactDom from 'react-dom';

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
        <div>{this.props.pictures().map(this.processPictures)}</div>  
        <div>     
          <button onClick={this.detailsClickHandler}></button>
          <button onClick={this.addClickHandler}>Add</button>
        </div>
      </div>
    );
  }

});