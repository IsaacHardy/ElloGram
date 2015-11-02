import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  detailsClickHandler(id) {
    this.props.onDetailsClick(id);
  },

  addClickHandler() {
    this.props.onAddClick();
  },

  processPictures(data) {
    return (
      <div key={data.objectId} className="pic-container" onClick={() => this.detailsClickHandler(data.objectId)}>
        <img src={data.Url} className="main-pictures"/>
      </div>
    ); 
  }, 

  render() {
    return (
      <div className="outer">
        <div className="picture-header">
          <h2>Ellowyn Noel Hardy</h2>
          <div className="picture-button">
            <i className="fa fa-plus-circle"></i>
            <button className="picture-add" onClick={this.addClickHandler}>Add Picture</button>
          </div>          
        </div>

        <div className="primary">
          {this.props.pictures().map(this.processPictures)}          
        </div>

        
      </div>
    );
  }

});