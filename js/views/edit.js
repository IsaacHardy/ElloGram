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
    console.log(newTitle);
    this.setState({
      Title: newTitle
    });
  },

  updateUrl(event) {
    let newUrl = event.currentTarget.value;
    console.log(newUrl);
    this.setState({
      Url: newUrl
    });
  },

  updateAbout(event) {
    let newAbout = event.currentTarget.value;
    console.log(newAbout);

    this.setState({
      About: newAbout
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
          <input onChange={this.updateTitle} type="text" value={this.state.Title} placeholder="Title"/>
          <input onChange={this.updateUrl} type="text" value={this.state.Url} placeholder="Url"/>
          <input onChange={this.updateAbout} type="text" value={this.state.About} placeholder="About"/>
        </form>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.cancelClickHandler}>Cancel</button>
      </div>
    );
  }
});