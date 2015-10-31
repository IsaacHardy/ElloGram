import React from 'react';

export default React.createClass({

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  submitHandler(data) {
    this.props.onAddClick(data);
  },

  updateMessage(event) {
    let newMessage = event.target.value;

    this.setState({
      Title: newMessage
    });
  },

  render() {
    return (
      <div>
        <h2>Add</h2>
        <form onSubmit={this.submitHandler}>
          <input className="addTitle" placeholder="Title" type="text"/>
          <input className="addUrl" placeholder="Url" type="text"/>
        </form>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.cancelClickHandler}>Cancel</button>
      </div>
    );
  }

});