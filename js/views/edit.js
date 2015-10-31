import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      Title: this.props.record.Title   
    };
  }, 

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.Title);
  },

  updateMessage(event) {
    let newMessage = event.target.value;

    this.setState({
      Title: newMessage
    });
  },

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  render() {
    return (
      <div>
        <h2>Edit</h2>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.updateMessage} type="text" value={this.state.Title}/>
        </form>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.cancelClickHandler}>Cancel</button>
      </div>
    );
  }
});