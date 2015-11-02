import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      Title: this.props.record.Title,
      Url: this.props.record.Url,
      About: this.props.record.About
    };
  }, 
  

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.Title, this.state.Url, this.state.About);
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

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  render() {
    return (
      <div className="edit-outer">
        <div className="edit-header">
          <h2>Edit</h2>
        </div>

        <div className="edit-form">
          <form onSubmit={this.submitHandler}>
            <label className="edit-label-title">Title: <input onChange={this.updateTitle} type="text" value={this.state.Title} placeholder="Name your picture!"/></label>
            <label className="edit-label-url">Url: <input onChange={this.updateUrl} type="url" value={this.state.Url} placeholder="example.com/picture.png"/></label>
            <label className="edit-label-about">About: <input onChange={this.updateAbout} type="text" value={this.state.About} placeholder="Tell us about this picture!"/></label>
          </form>
        </div>

        <div className="edit-submit">
          <i className="fa fa-check"></i>
          <button className="edit-submit-btn" onClick={this.submitHandler}>Submit</button>
        </div>
        <div className="edit-cancel">
          <i className="fa fa-ban"></i>
          <button className="edit-cancel-btn" onClick={this.cancelClickHandler}>Cancel</button>
        </div>
      </div>
    );
  }
});