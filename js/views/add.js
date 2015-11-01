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
      <div>
        <h2>Add</h2>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.updateTitle} className="addTitle" placeholder="Title" type="text"/>
          <input onChange={this.updateUrl} className="addUrl" placeholder="Url" type="text"/>
          <input onChange={this.updateAbout} className="addAbout" placeholder="Tell us about this picture!" type="text"/>
        </form>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.cancelClickHandler}>Cancel</button>
      </div>
    );
  }

});