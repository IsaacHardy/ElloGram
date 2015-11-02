import React from 'react';

export default React.createClass({

  backClickHandler() {
    this.props.onBackClick();
  },

  editClickHandler(id) {
    this.props.onEditClick(id);
  },

  render() {
    return (
      <div className="detail-outer">
        <div className="detail-header">
          <h2>{this.props.details.Title}</h2> 
        </div>

        <div className="detail-img">
          <img src={this.props.details.Url}/>  
        </div>   

        <div className="detail-about">
          <h2>About This Picture</h2>
          <p>{this.props.details.About}</p>
        </div>

        <div className="detail-edit"> 
          <i className="fa fa-pencil"></i>
          <button className="detail-edit-btn" key={this.props.details.objectId} onClick={() => this.editClickHandler(this.props.details.objectId)}>
            Edit Picture
          </button>
        </div>

        <div className="detail-back">
          <i className="fa fa-arrow-left"></i>
          <button className="detail-back-btn" onClick={this.backClickHandler}>Go Back</button>
        </div>
      </div>
    );
  }

});