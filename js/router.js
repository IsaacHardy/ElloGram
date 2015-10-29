import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import {PictureCollection, PictureModel} from './resources';

import PictureComponent from './views/picture';
import DetailsComponent from './views/detail';
import AddComponent from './views/add';
import EditComponent from './views/edit';

export default Backbone.Router.extend({
  routes: {

    // Routes for Router
    ""         : "redirectToPictures",
    "picture" : "showPictures",
    "detail/:id"   : "showDetails",
    "add"  : "showAddPictures",
    "edit/:id" : "showEditPictures"
  },

  initialize(appElement) {
    this.el = appElement;
    this.collection = new PictureCollection();
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  showPictures(id) {
    let pic = this.collection.get(id);

    this.collection.fetch().then(() => {
      let x = this.collection.toJSON();
      console.log(x);
    }); 

    this.render(
      <PictureComponent          
        onDetailsClick={() => this.goto('detail/:id')}
        onAddClick={() => this.goto('add')}
      />
    );
  },
      

  showDetails() {
    this.render(
      <DetailsComponent
        onBackClick={() => this.goto('picture')}
        onEditClick={() => this.goto('edit/:id')}
      />
    );
  },

  showAddPictures() {
    this.render(
      <AddComponent
        onCancelClick={() => this.goto('picture')}
      />
    );
  },

  showEditPictures() {
    this.render(
      <EditComponent
        onCancelClick={() => this.goto('detail/:id')}
      />
    );
  },

  redirectToPictures() {
    this.navigate('picture', {
      replace: true,
      trigger: true
    });


  },

  showSpinner() {
    this.render(<SpinnerComponent/>);
  },

  start() {
    Backbone.history.start();
    return this;
  }

  // createPictures(data) {
  //   this.showSpinner();
  //   let newPicture = this.collection.add(data);
  //   newPicture.save().then(() => {
  //     this.navigate('pictures', {trigger: true});
  //   })
  // }


});