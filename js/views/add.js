import React from 'react';

export default React.createClass({

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  submitHandler(event) {
    event.preventDefault();
    this.props.onAddClick(this.state.Title, this.state.Url, this.state.About);
  },

  updateTitle(event) {
    let newTitle = event.currentTarget.value;

    this.setState({
      Title: newTitle
    });
  },

  updateUrl(event) {
    let newUrl = event.currentTarget.value;

    this.setState({
      Url: newUrl
    });
  },

  updateAbout(event) {
    let newAbout = event.currentTarget.value;

    this.setState({
      About: newAbout
    });
  },

  render() {
    return (
      <div className="add-outer">
        <div className="add-header">
          <h2>Add</h2>
        </div>

        <div className="add-form">
          <form onSubmit={this.submitHandler}>
            <label className="add-label-title">Title: <input onChange={this.updateTitle} className="add-input-title" placeholder="Name your picture!" type="text"/></label>
            <label className="add-label-url">Url: <input onChange={this.updateUrl} className="add-input-url" placeholder="example.com/picture.png" type="url"/></label>
            <label className="add-label-about">About: <textarea onChange={this.updateAbout} className="add-input-about" placeholder="Tell us about this picture!" type="text"/></label>
          </form>
        </div>

        <div className="add-submit">
          <i className="fa fa-check"></i>
            <button className="add-submit-btn" onClick={this.submitHandler}>Submit</button>
        </div>
        <div className="add-cancel">
          <i className="fa fa-ban"></i>
          <button className="add-cancel-btn" onClick={this.cancelClickHandler}>Cancel</button>
        </div>
      </div>
    );
  }

});