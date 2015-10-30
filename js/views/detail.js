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
      <div>
        <h2>Details</h2> 
        <img src={this.props.details.Url}/>       
        <button key={this.props.details.objectId} className="edit-btn" onClick={() => this.editClickHandler(data.objectId)}>
          Edit
        </button>
        <button onClick={this.backClickHandler}>Back</button>
      </div>
    );
  }

});