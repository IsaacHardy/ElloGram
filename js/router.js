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

  showPictures() {
    this.collection.fetch().then(() => {
      this.render(
        <PictureComponent          
          onDetailsClick={(id) => this.goto('detail/' + id)}
          onAddClick={() => this.goto('add')}
          pictures={() => this.collection.toJSON()}
        />
      );
    });
  },
      

  showDetails(id) {
    let image = this.collection.get(id);

    if (image) {
      this.render(
        <DetailsComponent
          onBackClick={() => this.goto('picture')}
          onEditClick={(id) => this.goto('edit/' + id)}
          details={image.toJSON()}
        />
      );
      
    } else {
      image = this.collection.add({objectId: id});
      image.fetch().then(() => {
        this.render(
          <DetailsComponent
            onBackClick={() => this.goto('picture')}
            onEditClick={(id) => this.goto('edit/' + id)}
            details={image.toJSON()}
          />
        );
      });
    }

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